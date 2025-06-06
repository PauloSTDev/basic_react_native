import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-type': 'Application/json',
    },
    data: undefined,
});

export default api;