import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "career-guide-be-production.up.railway.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
