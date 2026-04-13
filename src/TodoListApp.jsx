import './todolist.css'
import Button from './components/Button'
import TodoItemEmpty from './components/TodoItemEmpty'
import TodoHeader from './components/TodoHeader'
import Checkbox from './components/Checkbox'

export default function TodoListApp() {
    return (
        <>
            <div className='todo'>
                <TodoHeader />
                <div>
                    <form action="" className='todo__form'>
                        <input type="text" placeholder="할 일을 입력하세요" className='todo__input'/>
                        <Button type="submit" className='todo__button todo__button--add'>Add</Button>
                    </form>
                    <ul className='todo__list'>
                        <TodoItemEmpty />
                        
                        <li className='todo__item todo__item--complete'>
                            <Checkbox id="1">할 일1</Checkbox>
                            <Button className='todo__button todo__button--edit'>🥄</Button>
                            <Button className='todo__button todo__button--delete'>🤣</Button>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="chk-2">놀기</label>
                            <Button>🥄</Button>
                            <Button>🤣</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}