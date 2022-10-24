function Todos({ todos, handleRemoveTodo }) {
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return <li key={index}>{todo.description} <button onClick={()=>handleRemoveTodo(index)}>X</button></li>
                })
            }
        </ul>
    )
}

export default Todos;