import { useState } from "react"
import Button from "./Button"
export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('') //inputTodo: 사용자가 입력한 text 
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!inputTodo) return 
        addTodo(inputTodo)
        setInputTodo('') //input 빈칸 만들자
    }
    return (
        <form action="" className='todo__form' onSubmit={handleSubmit}>
            <input type="text" placeholder="할 일을 입력하세요" className='todo__input' onChange={(event) => setInputTodo(event.target.value)}/>
            <Button type="submit" className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}