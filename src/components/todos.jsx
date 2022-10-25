import { useState } from "react";

function Todos({ todos, handleRemoveTodo }) {
    const [isEditable, setIsEditable] = useState(false)

    function handleDblClick(){
        console.log("modifier");
        setIsEditable(true);
    }

    function handleBlur(){
        setIsEditable(false)
    }


    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return <li contentEditable={isEditable} onBlur={handleBlur}  onDoubleClick={handleDblClick} key={index}>{todo.description} <button className="form__btn" onClick={() => handleRemoveTodo(index)}></button></li>
                })
            }
        </ul>
    )
}

export default Todos;