import Checkbox from "./Checkbox"
import Button from "./Button"
import { useState }  from "react"

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo}) {

    const [editText, setEditText] = useState(todo.text)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditText = () => {
        if (!isEditing) {
            setEditText(todo.text)
            setIsEditing(true)
        } else {
            const trimmedText = editText.trim()
            if (trimmedText !== "" && trimmedText !== todo.text) editTodo(todo.id, editText) //반칸 아니고 현재 값 아니면 수정값 변경하자
                
            setIsEditing(false)
        }
    }

    return (
        <li className={`todo__item${todo.isCompleted?" todo__item--complete":""}`}>

            {!isEditing && <Checkbox id={todo.id} checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}>{todo.text }</Checkbox>}

            {isEditing && <input type="text" className="todo__input--edit" value={editText} autoFocus onKeyDown={(e) => (e.key === 'enter') && handleEditText()} onChange={(event) => setEditText(event.target.value)} />}
            
            <Button className='todo__button todo__button--edit' onClick={handleEditText}>{isEditing ? "저장" : "수정 "}</Button>
            <Button className='todo__button todo__button--delete' onClick={() => deleteTodo(todo.id)}>❌</Button>
        </li>
    )
}