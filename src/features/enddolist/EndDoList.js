import React from 'react'

const EnddoList = ({
  endDoList,
  endTimeList,
}) => {  
  const rendedList = ( endDoList.length > 0 ) 
  ? endDoList.map( (end,index) => {
     return (
      <li>
        <sapn style={{color: '#fff', backgroundColor: 'green' }}>
          {end}
        </sapn>
        &nbsp;
        <sapn>
          end time: {endTimeList[index]}
        </sapn>
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

export default EnddoList;