import React from 'react';
import Task from './Task';

const Column = (props) => {
  return (
    <div className="container">
      <h3 className="title">{props.column.title}</h3>
      <div className="tasklist">{props.tasks.map(task => {
        return <Task key={task.id} task={task} />
      })}</div>
    </div>
  )
}

export default Column;
