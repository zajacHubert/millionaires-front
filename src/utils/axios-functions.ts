import axios from "axios";
const baseUrl = 'http://localhost:3001/questions';

export const getAllQuestions = async () => {
    const res = await axios.get(baseUrl);
    return res;
}





