
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
   const changeStatus = (id)=>{
    const updateTodo = todos.map(todo =>{
     return todo.id === id ? {...todo,status:!todo.status}:todo
    })
    addTodos(updateTodo)

   }
   const removeToDo = (id)=>{
    const remove = todos.filter(todo=> todo.id !== id)
    addTodos(remove)
   }
   const editToDo = (id)=>{
    const updateToDo = todos.filter(todo => todo.id!=id)
    addTodos(updateToDo)
    setTodos(todo)
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
          <h3>Pending Tasks</h3>
        </div>
        <div className='completedTodo' onClick={getCompletedTodo}>
          <h3>Completed Tasks</h3>
        </div>
</div>
   <div className='allTodos'>
     {showPendings ?(
      todos.slice().reverse().map((todo,index) =>{
        if(!todo.status){
          return (
            <div className='todoList'>
              <p>{index+1}.{todo.todo}</p>
              <i class="bi bi-pen-fill" onClick={()=> editToDo(todo.id)}></i>
              <i class="bi bi-trash3" id='DeleteIcon' onClick={()=> removeToDo(todo.id)}></i>
              <i class="bi bi-check-circle-fill" id='tick' onClick={()=> changeStatus(todo.id)}></i>
            </div>
          )
        }
      })
     ) : (
      todos.slice().reverse().map((todo,index)=>{
        if(todo.status){
          return (
            <div className='todoLists'>
             <p>{index+1}.{todo.todo}</p>
             <i class="bi bi-trash3" id='remove' onClick={()=> removeToDo(todo.id)}></i>
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
