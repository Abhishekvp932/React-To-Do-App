
import './App.css'
import React,{useState} from 'react'
const App = ()=>{

  const [todos,addTodos] = useState([])
  const [todo,setTodos] = useState('')
  const [showPendings,showTodos] = useState(true);
  const makeTodo = (e)=>{
    setTodos(e.target.value) 
  }
   const AddToDO = ()=>{
    if(todo.trim()=='') return 
    addTodos([...todos,{id:Date.now(),todo:todo,status:false}])
    setTodos('')
   }
   const getPendingTodos = ()=>{
    showTodos(true)
   }
   const getCompletedTodo = ()=>{
    showTodos(false)
   }
  return (
    <div className='container'>
      <div className='toDOHeading'>
       <h1>TO-DO-LIST</h1>
      </div>
      <div className='todoAdd'>
       <input type="text" value={todo} onChange={makeTodo} placeholder='Enter your Task' />
       <i class="bi bi-plus-circle" onClick={AddToDO}></i>
      </div>
      <div className='mainTodos'>
        <div className='pendingTodo' onClick={getPendingTodos}>
          <h2>Pending Tasks</h2>
        </div>
        <div className='completedTodo' onClick={getCompletedTodo}>
          <h2>Completed Tasks</h2>
        </div>
</div>
   <div className='allTodos'>
     {showPendings ?(
      todos.slice().reverse().map((todo,index) =>{
        if(!todo.status){
          return (
            <div className='todoList'>
              <p>{index+1}.{todo.todo}</p>
            </div>
          )
        }
      })
     ) : (
      todos.slice().reverse().map((todo,index)=>{
        if(todo.status){
          return (
            <div className='todoList'>
             <p>{index+1}.{todo.todo}</p>
            </div>
          )
        }
      })
      )}
   </div>
    </div>
  )
}

export default App
