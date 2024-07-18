import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"

export default function Todo() {
    let [todos, setTodo] = useState([{todo: "do something", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState([""])
    let addTask = () =>{
        setTodo([...todos,{todo: newTodo, id: uuidv4()}])
        setNewTodo("") 
    }
    let handleInputChange = (event) =>{
        setNewTodo(event.target.value)
    }
    let dltTask = (id) =>{
        setTodo(todos.filter((task) => task.id !== id))
    }
    let markDone = (id) =>{
        setTodo((prevTodo) =>
        prevTodo.map((task =>{
            if (task.id === id){
                return{...todos,
                    todo: task.todo.toUpperCase()
                }
            }else{
                return task
            }
        })))
    }
   
   
    return(
        <div>
            <div className="container">
                <img className="b-img" src="https://images.unsplash.com/photo-1631995390084-cb82295cd2c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h1 className="heading">Welcome todo</h1>

                <div className="todo-input">
                <input type="text" value={newTodo} onChange={handleInputChange}  className="input" placeholder="Enter todo" /> <br />
                <button onClick={addTask} className="btn">Add</button>
                </div>
                <div className="content">
                <div className="todo-list">
                <ul>
                        {todos.map((todo) =>
                            <li key={todos.id}>
                                <span >{todo.todo} </span>
                                <button  onClick={() =>dltTask(todo.id)} className="dlt-btn">Dlt</button>
                            </li>
                        )}
                    </ul>

                </div>
                    

                </div>
                   
                
                
            </div>



            <h1>Welcome todo</h1>
            <input type="text" value={newTodo} onChange={handleInputChange} placeholder="enter todo..." />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {todos.map((todo) =>
                    <li key={todos.id}>
                        <span>{todo.todo}</span>
                        <button onClick={() =>dltTask(todo.id)}>Delete</button>
                        <button onClick={() =>markDone(todo.id)}>Mark Done</button>
                    </li>
                )}
            </ul>
        </div>
    )
}