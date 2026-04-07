import './todolist.css'

export default function TodoListApp() {
    return (
        <>
            <div className='todo'>
                <h1 className='todo__title'>ToDoList</h1>
                <div>
                    <form action="" className='todo__form'>
                        <input type="text" placeholder="할 일을 입력하세요" className='todo__input'/>
                        <button type="submit" className='todo__button todo__button--add'>Add</button>
                    </form>
                    <ul className='todo__list'>
                        <li className='todo__item todo__item--complete'>
                            <input type="checkbox" name="" id="" className='todo__check'/>
                            <label htmlFor="chk-1" className='todo__label'>놀기</label>
                            <button className='todo__button todo__button--edit'>🥄</button>
                            <button className='todo__button todo__button--delete'>🤣</button>
                        </li>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="chk-2">놀기</label>
                            <button>🥄</button>
                            <button>🤣</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}