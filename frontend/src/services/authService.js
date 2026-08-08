/*API */
import api from "./api";

const authService = {
    async register(username, email, password) {

        try {
            const response = await api.post("/users", {
                name,
                email,
                password
            });

            return response.data;

        } catch (error) {
            throw new Error(
                error.response?.data?.message ||
                "Something went wrong while creating your account."
            );
        }
    }
};

export default authService;