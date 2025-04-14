import api from "./index";

export const fetchCategories = async () => {
    try {
        const response = await api.get("courses/category");
        return response; // or response.data if needed
    } catch (error) {
        console.error("Error fetching course categories:", error);
        throw error;
    }
};
