import api from "./api";

const authService = {

    async login(email, password) {

        const response = await api.post("/auth/login", {
            email,
            password
        });

        return response.data;
    },

    async register(username, email, password) {

        const response = await api.post("/auth/register", {
            username,
            email,
            password
        });

        return response.data;
    },

    async refresh(refreshToken) {

        const response = await api.post("/auth/refresh", {
            refreshToken
        });

        return response.data;
    },

    async logout(refreshToken) {

        await api.post("/auth/logout", {
            refreshToken
        });
    }
};

export default authService;