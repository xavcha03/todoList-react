function Todos({ todos, handleRemoveTodo }) {
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return <li key={index}>{todo.description} <button className="form__btn" onClick={() => handleRemoveTodo(index)}></button></li>
                })
            }
        </ul>
    )
}

export default Todos;