import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => (
  <Draggable draggableId={props.task.id} index={props.index}>
    {({ draggableProps, dragHandleProps, innerRef }) => (
      <div 
        {...draggableProps}
        {...dragHandleProps}
        ref={innerRef}
        className="task-container">
        {props.task.content}
      </div>
    )}
  </Draggable>
)

export default Task;
