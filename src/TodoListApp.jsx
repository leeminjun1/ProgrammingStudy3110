export default function TodoListApp() {
    return (
        <>
            <div>
                <h1>ToDoList</h1>
                <div>
                    <form action="">
                        <input type="text" placeholder="할 일을 입력하세요"/>
                        <button>Add</button>
                    </form>
                    <ul>
                        <li>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="chk-1">놀기</label>
                            <button>🥄</button>
                            <button>🤣</button>
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