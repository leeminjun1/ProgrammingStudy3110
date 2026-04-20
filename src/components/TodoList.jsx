import Button from "./Button"
import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"

export default function TodoList({ todos, ...rest }) {

    return (
        // <li>
        //                             <input type="checkbox" name="" id="" />
        //                             <label htmlFor="chk-2">놀기</label>
        //                             <Button>🥄</Button>
        //                             <Button>🤣</Button>
        //                         </li>
        <ul className="todo__list">
            {todos.length === 0 && <TodoItemEmpty/>}
            {todos.length > 0 && todos.map((todo) => 
                <TodoItem key={todo.id} todo={todo} {...rest} />
            )}
            
        </ul>
    )
}