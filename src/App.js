import React, { useState } from 'react';
import './App.css';
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
        return column.title;
      }) }
    </div>
  );
}

export default App;
