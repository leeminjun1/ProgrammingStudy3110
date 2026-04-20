import Checkbox from "./Checkbox"
import Button from "./Button"

export default function TodoItem() {
    return (
        <li className='todo__item todo__item--complete'>
            <Checkbox id={Todo.id}>{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>🥄</Button>
            <Button className='todo__button todo__button--delete'>🤣</Button>
        </li>
    )
}