import "../styles/todo-list.css"
import Todo from "./Todo";
import {AddTodo} from "./AddTodo";
import {
    useDeleteTodoMutation,
    useFetchAllTodosQuery, useUpdateTodoMutation,
} from "../services/TodoService";
import {useParams} from 'react-router-dom'
import React, {useMemo, useState} from "react";
import {useFetchAllListsQuery} from "../services/ListService";

const List = () => {
    let {data: todos = [], error, isLoading, refetch} = useFetchAllTodosQuery('')
    const [updateTodo] = useUpdateTodoMutation()
    const [deleteTodo] = useDeleteTodoMutation()
    const {data: lists = []} = useFetchAllListsQuery('')

    const {id} = useParams()
    const list = lists.find(d => d.id === Number(id))
    let filterTodos = todos.filter(d => d.listId === (id ? Number(id) : 1))

    const sortedTodos = useMemo(() => {
            todos = filterTodos? filterTodos: todos;
            let sortedTodos = todos.slice()
            sortedTodos.sort((a, b) => b.creation.localeCompare(a.creation))
            return sortedTodos
    }, [todos, list])

    const handleRemove = (todo) => {
        deleteTodo(todo);
        refetch()
    }
    const handleUpdate = (todo) => {
        updateTodo(todo)
        refetch()
    }

    return (
        <div>
            <h2>{list ? list.title : "Список дел"}</h2>
            <AddTodo/>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Сервер не отвечает</h1>}
            <div className="table">
                {sortedTodos && sortedTodos.map(todo =>
                    <Todo key={todo.id} todo={todo} update={handleUpdate} remove={handleRemove}/>
                )}
            </div>
        </div>
    );
};

export default List;