import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { Button } from 'react-bootstrap';

function UseCallBackExample() {
  const [test,setTest] = useState([]);

  const addTask =useCallback(()=>{
    setTest((previous)=>
      [...previous,'Some Tasks']
    )
  },[setTest])

  return (
    <div className='body'>
     <ButtonEvent addTask={addTask}/>
     {test.map((task,index)=>{
         return <p key={index}>
          {task}
        </p>
     })}
    </div>
  )
}

const ButtonEvent = React.memo(({addTask})=>{
  console.log('hello');
  return <>
  <Button onClick={addTask}>Add</Button>
  </>
})

export default UseCallBackExample
