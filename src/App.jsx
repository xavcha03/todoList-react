import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import Todos from './components/todos';

function App() {


  const todoList = [
    { description: "First todo" },
    { description: "Second todo" },
  ];

  const [todos, setTodos] = useState(todoList);

  useEffect(() => {
    //Get localStorage
    //let localTodos = localStorage.getItem("todos");
    //console.log(JSON.parse(localTodos));
    setTodos(todoList);

  }, [])



  let handleAddTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      description: e.target.todo.value
    };

    setTodos([...todos, newTodo])
    //updateLocalStorage
    //localStorage.removeItem('todos');
    //localStorage.setItem('todos', JSON.stringify(todos));
  }

  let handleRemoveTodo = (index) => {
    console.log("remove :" + index);
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }

  return (
    <section className="container">
      <h1>ToDo App</h1>
      <Form handleAddTodo={handleAddTodo} />
      <Todos todos={todos} handleRemoveTodo={handleRemoveTodo} />

    </section>
  )
}

export default App;