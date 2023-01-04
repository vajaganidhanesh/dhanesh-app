import React,{useState} from 'react'
import Todo from './Todo'
import { Button } from 'react-bootstrap';

function Example2() {
    const [showTodo,setShowTodo] = useState(true)

    return (
        <div >
            {showTodo && <Todo/>}
            <Button onClick={()=>{setShowTodo(!showTodo)}}>Toggle</Button>
        
        </div>
    )
}

export default Example2
