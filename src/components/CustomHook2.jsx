import useLocalStorage from '../hooks/useLocalStorage';

function CustomHook2() {

  const [task,setTask] = useLocalStorage('task','')
  const [tasks,setTasks] = useLocalStorage('tasks',[])

  const Onsubmit = (e) =>{
    e.preventDefault()

    const taskObj = {
      task,
      completed:false,
      date:new Date().toLocaleDateString(),
    }
    setTasks([...tasks,taskObj])
  }

  return (
    <form onSubmit={Onsubmit} className="w-100 body">
      <div className="mb-3">
        <label htmlFor="" className="form-label">Task</label>
        <input
          className='form-control'
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
        <button type="submit" className='btn btn-primary'>submit</button>
    </form>
  );
}

export default CustomHook2
