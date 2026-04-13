import './todolist.css'
import Button from './components/Button'
import TodoItemEmpty from './components/TodoItemEmpty'
import TodoHeader from './components/TodoHeader'
import Checkbox from './components/Checkbox'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

export default function TodoListApp() {
    return (
        <>
            <div className='todo'>
                <TodoHeader />
                <TodoAdder />
            
                        
                        
                <TodoList />
                
                
            </div>
        </>
    )
}