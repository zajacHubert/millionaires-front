import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Question, QuestionToAdd } from "../types/question";



const baseUrlForApp = 'http://localhost:3001';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlForApp,
    }),
    tagTypes: ['Question'],
    endpoints(builder) {
        return {
            fetchQuestions: builder.query<Question[], number | void>({
                query: () => '/questions',
                providesTags: ['Question'],
            }),
            addQuestion: builder.mutation<{}, QuestionToAdd>({
                query: (place) => ({
                    url: '/questions',
                    method: 'POST',
                    body: place,
                })
            }),
            deleteQuestion: builder.mutation({
                query: ({ id }) => ({
                    url: `/questions/${id}`,
                    method: 'DELETE',
                    body: id,
                }),
                invalidatesTags: ['Question'],
            }),
        }
    }
})

export const { useFetchQuestionsQuery, useAddQuestionMutation, useDeleteQuestionMutation } = apiSlice;