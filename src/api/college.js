import api from "./index";

export const fetchColleges = async () => {
    const res = await api.get("/collegecourse");
    return res.data;
};