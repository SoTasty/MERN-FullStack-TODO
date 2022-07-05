import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001"

function TodoComponent() {
    const [todos, setTodos] = useState([])
    const [popupActive, setPopupActive] = useState(false)
    const [newTodo, setNewTodo] = useState("")

    useEffect(() => {
        GetTodos()

        console.log(todos)
    }, [])

    const GetTodos = () => {
        fetch(API_BASE + "/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error("Error: ", err))
    }

    const completeTodo = async (id) => {
        const data = await fetch(API_BASE + "/todo/complete/" + id)
            .then(res => res.json())
        
        setTodos(todos => todos.map(todo => {
            if (todo._id === data._id) {
                todo.complete = data.complete
            }

            return todo
        }))
    }

    const deleteTodo = async (id) => {
        const data = await fetch(API_BASE + "/todo/delete/" + id, {
            method: "DELETE"
        }).then(res => res.json())

        setTodos(todos => todos.filter(todo => todo._id !== data._id))
    }

    const popupClicked = () => {
        popupActive ? (setPopupActive(false)) : (setPopupActive(true))
    }

    const createTodo = async () => {
        const data =    await fetch(API_BASE + "/todo/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: newTodo
            })
        }).then(res => res.json())
            
        setTodos([...todos, data])
        setPopupActive(false)
        setNewTodo("")
    }


	return (
		<div className="App">
            <h1>Welcome!</h1>
            <h4>Here's your tasks.</h4>

            <div className="todos">
                {todos.map(todo => (
                    <div className={
                        "todo " + (todo.complete ? "is-complete" : "")
                        } key={todo._id}
                        
                        >
                      <div
                       onClick={() => completeTodo(todo._id)}
                       className="checkbox">
                        
                      </div>
                      <div className="text">
                      {todo.text}
                       </div>
                      <div 
                       onClick={() => deleteTodo(todo._id)}
                       className="delete-todo">
                        X
                      </div>
                    </div>
                ))}   
            </div>

            <div className="addPopup" onClick={() => popupClicked()}>
                +
            </div>

            {popupActive ? (
                <div className="popup">
                    <div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
                    <div className="content">
                        <h3>Add Task</h3>
                        <input type="text" className="add-todo-input"
                            onChange={e => setNewTodo(e.target.value)}
                            value={newTodo}
                        />
                        <div onClick={createTodo} className="button">Create Task</div>
                    </div>
                </div>
            ) : ''}
		</div>
	)
}

export default TodoComponent;
