import React from 'react';
import {LIST_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import "../styles/link-group.css"

const LinkGroup = ({list, remove}) => {

    const handleRemove = (event) => {
        event.stopPropagation()
        remove(list)
    }
    return (
        <div className="link_group">
            <Link
                className="link"
                key={list.id}
                to={LIST_ROUTE + '/' + list.id}
            >
                {list.title}
            </Link>
            <label className="delete"
                   onClick={handleRemove}>
                ✖
            </label>
        </div>
    );
};

export default LinkGroup;