import {
    TODO_ROUTE,
    LIST_ROUTE,
} from "./utils/consts";
import TodoList from "./components/TodoList";
import Group from "./components/Group";


export const Routers = [
    {
        path: TODO_ROUTE,
        Component: TodoList
    },
    {
        path: LIST_ROUTE + '/:id',
        Component: Group
    }
]