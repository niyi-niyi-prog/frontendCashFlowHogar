import axios from "axios";


const API_URL = "http://localhost:3000/api/transaction";
const API_URL_CREATE = "http://localhost:3000/api/transaction/newTransaction";

export const getTransacciones = async (user: {
    user: 'nfonqui'
}) => {
    const response = await axios.post(API_URL, user);
    console.log(response.data)
    return response.data;
}

export const createTransaccion = async (data: {
    user: string;
    valur: number;
    category: string;
}) => {
    const response = await axios.post(API_URL_CREATE, data);
    return response.data;
}
