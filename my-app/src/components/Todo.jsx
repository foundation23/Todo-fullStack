import React from 'react';
import "../styles/todo.css"

const Todo = ({todo, update, remove}) => {

    const handleRemove = (event) => {
        event.stopPropagation()
        remove(todo)
    }

    const updateTodo = () => {
        const title = prompt() || ""
        update({...todo, title})
    }

    const handleUpdateCompleted = (todo) => {
        const created = !todo.created
        update({...todo, created})
    }

    return (
        <div className="item-todo">
            <div className="container_content">
                <form className="item-todo__check">
                    <input className="input-check"
                           onChange={() => {
                               handleUpdateCompleted(todo)
                           }}
                           id="checkbox"
                           type="checkbox"
                           checked={todo.created}>
                    </input>
                </form>
                <label className={`task-item ${todo.created ? "completed" : ""}`}>
                    {todo.title}
                </label>
            </div>
            <div className="container_change">
                <label className="item-change"
                       onClick={handleRemove}>
                    ✖
                </label>
                <label className="item-change"
                       onClick={updateTodo}>
                    ✒
                </label>
            </div>
        </div>
    );
};

export default Todo;