import React from 'react'

const TodoList = ({
  todoList
}) => {
  const rendedList = ( todoList.length > 0 ) 
  ? todoList.map( todo => { return <li>{todo}</li>})
  : null ; 
  
  return (
    <ul>
        {rendedList}
    </ul>
  );
}

export default TodoList;