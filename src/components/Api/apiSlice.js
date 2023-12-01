import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://quebec-quoi.ca/php-restAPI/index.php'}),
    endpoints: builder=>({
        getConversationCover: builder.query({
            query: () => '/conversation'
        }),
        getListByCategory: builder.query({
            query: ({id, language}) => `category?categoryId=${id}&language=${language}`
        }),
        getDictionaryList: builder.query({
            query: () => '/dictionary'
        }),
        getConversationPiece: builder.query({
            query: ({id, language}) => `conversation?conversationId=${id}&language=${language}`
        }),
        getWordById: builder.query({
            query: ({id, language}) => `/dictionary?wordId=${id}&language=${language}`
        })
    })
})

export const { useGetConversationCoverQuery, useGetListByCategoryQuery, useGetDictionaryListQuery, useGetConversationPieceQuery, useGetWordByIdQuery } = apiSlice;