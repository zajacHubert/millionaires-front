import axios from "axios";
import { Question, QuestionToAdd } from "../types/question";
const baseUrl = 'http://localhost:3001/questions';

export const getAllQuestions = async () => {
    const res = await axios.get(baseUrl);
    return res;
}

export const addQuestion = async (question: QuestionToAdd) => {
    const res = await axios.post(baseUrl, question);
    return res;
}

export const getOneQuestion = async (id: string) => {
    const res = await axios.get(`${baseUrl}/${id}`);
    return res;
}

export const deleteQuestion = async (id: string) => {
    await axios.delete(`${baseUrl}/${id}`);
}

export const editQuestion = async (id: string, question: Partial<Question>) => {
    await axios.patch(`${baseUrl}/${id}`, question);
}