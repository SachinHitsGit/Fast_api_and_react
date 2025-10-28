import axios from 'axios';

//creating an instance of axios for the python backend
const api = axios.create({
    baseURL: "http://localhost:8000" // url of python backend
});

// export the axios instance
export default api;