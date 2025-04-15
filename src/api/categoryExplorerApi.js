import api from "./index";

export const fetchCategories = async () => {
    try {
        const response = await api.get("courses/category");
        return response;
    } catch (error) {
        console.error("Error fetching course categories:", error);
        throw error;
    }
};
