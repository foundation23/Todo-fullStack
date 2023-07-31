import '../styles/navbar.css'
import {Link} from "react-router-dom";
import {TODO_ROUTE} from "../utils/consts";
import {useDeleteListMutation, useFetchAllListsQuery, useCreateListMutation} from "../services/ListService";
import React, {useMemo, useState} from "react";
import LinkGroup from "./LinkGroup";

const Navbar = () => {
    const {data: lists = [], error, isLoading, refetch} = useFetchAllListsQuery('')
    const [deleteList] = useDeleteListMutation()
    const [createList] = useCreateListMutation()

    const sortedLists = useMemo(() => {
        const sortedLists = lists.slice()
        sortedLists.sort((a, b) => (b.createdAt.localeCompare(String(a.createdAt)))).pop()
        return sortedLists
    }, [lists])

    const [title, setTitle] = useState('');

    const handleRemove = (list) => {
        deleteList(list);
        refetch()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createList({title});
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
        <nav className="nav-bar">
            <div className="panel">Панель управления</div>

            <div className="group-btn">
                <Link className="btn" to={TODO_ROUTE}>Список дел</Link>
                <p className="panel">Группы задач</p>
                <form onSubmit={handleSubmit}>
                    <input
                        value={title}
                        onChange={handleInput}
                        onKeyDown={handleKeyPress}
                        className="input__group"
                        type="text"
                        placeholder="Добавить группу"/>
                </form>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Сервер не отвечает</h1>}
                <div className="table">
                    {sortedLists && sortedLists.map(list =>
                       <LinkGroup list={list} remove={handleRemove} key={list.id}/>
                    )}
                </div>


            </div>
        </nav>
    );
};

export default Navbar;