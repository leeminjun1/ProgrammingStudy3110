import './todolist.css'
import { useEffect, useState } from 'react'
// import Button from './components/Button'
// import TodoItemEmpty from './components/TodoItemEmpty'
import TodoHeader from './components/TodoHeader'
// import Checkbox from './components/Checkbox'
import TodoAdder from './components/TodoAdder.jsx'
// import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.isCompleted = false;
    }
}

const TODOS_STORAGE_KEY = "todos"

export default function TodoListApp() {

    const initTodos = () => {
        const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY)
        return savedTodos ? JSON.parse(savedTodos) : []
    }

    const [todos, setTodos] = useState(initTodos) 

    useEffect(() => {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => setTodos((todos) => [
        ...todos,
        new Todo(text)

    ])

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo)
        )
        
    }

    const deleteTodo = (id) => {
        // id가 같지 않은 todo만 복사하자 filter()
        setTodos(
            (todos) => todos.filter((todo) => todo.id !== id)
        )
    }

    const editTodo = (id, newText) => {
        // todos에서 하나씩  todo 꺼내고 id가 같은 todo 찾아서, text만 바꾼다.
        setTodos(
            (todos) => todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo)
        )
    }
 
    //const addTodo = (text) => setTodos((todos) => [...todos, new Todo(text)])
    
    return (
        <>
            <div className='todo'>
                <TodoHeader />
                <TodoAdder addTodo={addTodo} />                 
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
            </div>
        </>
    )
}