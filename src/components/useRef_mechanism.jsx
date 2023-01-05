import React,{useState,useRef,useEffect} from 'react';
import {Button} from 'react-bootstrap'

function UseMechanism() {
    const [name,setName] = useState('')
    const renders = useRef(1);
    const previous = useRef('');
  
    useEffect(()=>{
      renders.current = renders.current + 1;
      previous.current = name;
    },[name])
  
    return (
      <div className="App btn-primary">
       <h1>renders : {renders.current}</h1>
       <h2>Prev state : {previous.current}</h2>
       <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <Button>hello</Button>
      </div>
    );
}

export default UseMechanism;
