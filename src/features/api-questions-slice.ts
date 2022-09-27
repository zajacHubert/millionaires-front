import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Question } from '../types/question';

const url = 'http://localhost:3001';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: url,
    }),
    tagTypes: ['Question'],
    endpoints(builder) {
        return {
            fetchQuestions: builder.query<Question[], number | void>({
                query: () => '/questions',
                providesTags: ['Question'],
            })
        }
    }
})

export const { useFetchQuestionsQuery } = apiSlice;