import React, { useState } from 'react';
import './App.css';
import Column from './components/Column';
import initialData from './assets/data';

function App() {
  const [data, setData] = useState(initialData);

  return (
    <div className="App">
      { data.columnOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => {
          return data.tasks[taskId];
        });
        return <Column key={column.id} column={column} tasks={tasks} />;
      }) }
    </div>
  );
}

export default App;
