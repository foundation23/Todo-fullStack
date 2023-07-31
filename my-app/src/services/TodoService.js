import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        fetchAllTodos: builder.query({
            query: () => ({
                url: `/todo`
            }),
            providesTags: ['Todo']
        }),
        createTodo: builder.mutation({
            query: (todo) => ({
                url: `/todo`,
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todo'],
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todo/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todo'],
        }),
        deleteTodo: builder.mutation({
            query: (todo) => ({
                url: `/todo/${todo.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todo'],
        }),
    })
})

export const {
    useFetchAllTodosQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todoAPI