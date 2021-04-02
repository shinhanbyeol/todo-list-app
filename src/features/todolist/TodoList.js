import React from 'react'

const TodoList = ({
  todoList,
  addEndDo,
  removeDo,
}) => {
  const rendedList = ( todoList.length > 0 ) 
  ? todoList.map( (todo,index) => { 
    return (
      <li>
        {todo}
        <button onClick={()=> addEndDo(index)}>Done!!</button>
        <button onClick={()=>removeDo(index)}>x</button>
      </li>
    );  
  })
  : null ; 
  
  return (
    <ul>
        {rendedList}
    </ul>
  );
}

export default TodoList;