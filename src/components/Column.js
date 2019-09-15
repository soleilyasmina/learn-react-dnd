import React from 'react';

const Column = (props) => {
  return (
    <div className="container">
      <h3 className="title">{props.column.title}</h3>
      <div className="tasklist">Tasks go here.</div>
    </div>
  )
}

export default Column;
