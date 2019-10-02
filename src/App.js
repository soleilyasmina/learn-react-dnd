import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import Column from './components/Column';
import initialData from './assets/data';

function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const destinationColumn = data.columns[destination.droppableId];
    const sourceTaskIds = Array.from(sourceColumn.taskIds);
    const destinationTaskIds = Array.from(destinationColumn.taskIds);
    sourceTaskIds.splice(source.index, 1);
    destinationTaskIds.splice(destination.index, 0, draggableId);
    
    const oldColumn = { ...sourceColumn, taskIds: sourceTaskIds }
    const newColumn = { ...destinationColumn, taskIds: destinationTaskIds };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
        [oldColumn.id]: oldColumn 
      }
    }

    setData(newState);
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      { data.columnOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => {
          return data.tasks[taskId];
        });
        return <Column key={column.id} column={column} tasks={tasks} />;
      }) }
      </DragDropContext>
    </div>
  );
}

export default App;
