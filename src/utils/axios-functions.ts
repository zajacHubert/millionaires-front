import axios from "axios";

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? 'http://localhost:3001/questions' : 'https://millionaires-hubert.herokuapp.com/questions';

export const getAllQuestions = async () => {
    const res = await axios.get(baseUrl);
    return res;
}





