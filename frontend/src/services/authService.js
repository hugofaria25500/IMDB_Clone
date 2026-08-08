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
    },

    async getCurrentUser() {

        const accessToken = localStorage.getItem("accessToken");

        console.log("ACCESS TOKEN:", accessToken);

        const response = await api.get("/users/me",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
             );

        return response.data;
    },

    async updateCurrentUser(icon) {
        const accessToken = localStorage.getItem("accessToken");

        const response = await api.patch(
            "/users/me",
            {
                icon: icon
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return response.data;
    }
   
};

export default authService;