import { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        async function restoreSession() {

            const accessToken =
                localStorage.getItem("accessToken");

            if (!accessToken) {
                return;
            }

            try {

                const currentUser = await authService.getCurrentUser();

                setUser(currentUser);

            } catch (error) {

                console.error(
                    "Failed to restore session:",
                    error
                );

                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                setUser(null);
            }
        }

        restoreSession();

    }, []);

    async function register(username, email, password) {

        const createdUser = await authService.register(
            username,
            email,
            password
        );

        setUser(createdUser);

        return createdUser;
    }

    async function login(email, password) {

        const response = await authService.login(
            email,
            password
        );

        console.log(response)

        localStorage.setItem(
            "accessToken",
            response.token
        );

        localStorage.setItem(
            "refreshToken",
            response.refreshToken
        );

        setUser(response.userResponse);

        return response.userResponse;
    }

    async function logout() {

        const refreshToken =
            localStorage.getItem("refreshToken");

        try {

            if (refreshToken) {
                await authService.logout(refreshToken);
            }

        } finally {

            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            setUser(null);
        }
    }

    const isAuthenticated = user !== null;

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                register,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;