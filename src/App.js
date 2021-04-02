import React, { useState } from 'react';
import TodoList from './features/todolist/TodoList';
import EnddoList from './features/enddolist/EndDoList';
import './css/app.css';

function App() {

  const [todoItem, setTodoItme] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [endDoList, setEnddoList] =useState([]);
  const [endTimeList, setEndTtimeList] = useState([]);
  
  const createTodoItme = e =>{
    const value = e.target.value;
    setTodoItme(value);
  }
  
  const addTodoList = () => {
    let _todoList = [...todoList, todoItem];
    setTodoList(_todoList);
  }

  const removeDo = (idx) => {
    let _todoList = [...todoList];
    _todoList.splice(idx,1);
    setTodoList(_todoList);
  }

  const addEndDo = (idx) => {
    const now = new Date();
    const endTimeTxt = now.getFullYear()+'/'+now.getMonth()+'/'+now.getDay()+' '+now.getHours()+':'+now.getMinutes()
    let _todoList = [...todoList];
    let _endDoList = [...endDoList,_todoList.splice(idx,1)];
    setEndTtimeList([...endTimeList,endTimeTxt]);
    setEnddoList(_endDoList);
    setTodoList(_todoList);
  }

  return (
    <>
      <div>
        <input type="text" onChange={(e)=>createTodoItme(e)} style={{width:'88%', height: '30px'}}/>
        <button onClick={addTodoList} style={{height: '33px', margin: '0', width:'10%'}}>add job</button>
        <br /><br />
      </div>
      <div style={{display: 'flex', height: '100%' }}>      
        <div style={{borderRight: 'solid 1px #000', borderLeft: 'solid 1px #000', width: '50%', padding: '10px'}}>
          <div>todo list</div>
          <div style={{height: '20px'}}/>
          <hr />
          <ul style={{padding: '0px'}}>
            <TodoList key='todolist' todoList={todoList} addEndDo={addEndDo} removeDo={removeDo} />
          </ul>
        </div>
        <div style={{borderRight: 'solid 1px #000', width: '50%', padding: '10px'}}>
          <div>end do list</div>
          <div style={{height: '20px'}}/>
          <hr />
          <ul style={{padding: '0px'}}>
            <EnddoList endDoList={endDoList} endTimeList={endTimeList}/>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
