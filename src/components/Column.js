import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
  return (
    <div className="container">
      <h3 className="title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {({ droppableProps, innerRef, placeholder }) =>
          <div
            {...droppableProps}
            ref={innerRef}
            className="tasklist"
            >
            {props.tasks.map((task, index) => (
            <Task 
              key={task.id}
              index={index}
              task={task} />
            ))}
          {placeholder}
          </div>
        }
      </Droppable>
    </div>
  )
}

export default Column;
