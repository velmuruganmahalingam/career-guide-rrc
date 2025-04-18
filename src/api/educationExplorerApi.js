import api from "./index";

export const fetchEducationCategories = async () => {
    try {
        const response = await api.get("courses/education-level");
        return response;
    } catch (error) {
        console.error("Error fetching course categories:", error);
        throw error;
    }
};
