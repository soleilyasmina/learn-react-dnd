import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import Column from './components/Column';
import initialData from './assets/data';

function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {

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
