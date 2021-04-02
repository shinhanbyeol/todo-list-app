import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [todoItem, setTodoItme] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  const createTodoItme = e =>{
    const value = e.target.value;
    setTodoItme(value);
  }
  
  const addTodoList = () => {
    let _todoList = [...todoList, todoItem];
    setTodoList(_todoList);
  }

  return (
    <>
      <div>todo list</div>
      <input type="text" onChange={(e)=>createTodoItme(e)}></input>
      <button onClick={addTodoList}>할일 추가</button>
      <br />
      <ul>
        <TodoList todoList={todoList} />
      </ul>                        
    </>
  );
}

export default App;
