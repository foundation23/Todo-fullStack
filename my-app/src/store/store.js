import { configureStore} from '@reduxjs/toolkit';
import {todoAPI} from "../services/TodoService";
import {listAPI} from "../services/ListService";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [todoAPI.reducerPath]: todoAPI.reducer,
        [listAPI.reducerPath]: listAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoAPI.middleware, listAPI.middleware),
})

setupListeners(store.dispatch)