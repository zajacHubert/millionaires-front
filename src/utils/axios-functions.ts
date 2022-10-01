import axios from "axios";
import { Question, QuestionToAdd } from "../types/question";
const baseUrl = 'http://localhost:3001/questions';

export const getAllQuestions = async () => {
    const res = await axios.get(baseUrl);
    return res;
}

export const deleteQuestion = async (id: string) => {
    await axios.delete(`${baseUrl}/${id}`);
}



