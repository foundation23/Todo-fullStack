import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const listAPI = createApi({
    reducerPath: 'listAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        fetchAllLists: builder.query({
            query: () => ({
                url: `/list`
            }),
            providesTags: ['List']
        }),
        createList: builder.mutation({
            query: (list) => ({
                url: `/list`,
                method: 'POST',
                body: list
            }),
            invalidatesTags: ['List'],
        }),
        updateList: builder.mutation({
            query: (todo) => ({
                url: `/list/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['List'],
        }),
        deleteList: builder.mutation({
            query: (todo) => ({
                url: `/list/${todo.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['List'],
        }),
    })
})

export const {
    useFetchAllListsQuery,
    useCreateListMutation,
    useDeleteListMutation
} = listAPI