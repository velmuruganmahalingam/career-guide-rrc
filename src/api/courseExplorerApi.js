import api from "./index";

export const fetchCourseCategories = async () => {
    try {
        const response = await api.get("courses/course");
        return response; // or response.data if needed
    } catch (error) {
        console.error("Error fetching course categories:", error);
        throw error;
    }
};
