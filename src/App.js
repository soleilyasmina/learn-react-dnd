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

    if (destination.droppableId === source.droppableI &&
      destination.index === source.index) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = { ...column, taskIds: newTaskIds };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
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
