function Form({ handleAddTodo }) {
    return (
        <form className='form' onSubmit={handleAddTodo}>
            <label htmlFor="todo">New Todos
                <input name="todo" type="text" placeholder='todo' />
            </label>
            <button type="submit">Add Todo</button>

        </form>
    )
}

export default Form;