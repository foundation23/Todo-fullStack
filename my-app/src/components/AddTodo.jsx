import { useState } from "react";
import '../styles/addTodo.css';
import {useCreateTodoMutation} from "../services/TodoService";
import {useParams} from "react-router-dom";

export const AddTodo = () => {
    const ending = new Date()
    const creation = new Date()
    const created = false
    const {id} = useParams()
    const listId = id ? id : 1

    const [createTodo] = useCreateTodoMutation()
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(listId)
        await createTodo({title, ending, creation, created, listId});
        setTitle('');
    }

    const handleInput = e => {
        setTitle(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className="form"
              onSubmit={handleSubmit}>
            <input className="input"
                   value={title}
                   type="text"
                   onChange={handleInput}
                   onKeyDown={handleKeyPress}
                   placeholder="What needs to be done?"/>
        </form>
    )
}