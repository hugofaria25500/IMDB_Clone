import { createContext, useState } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

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
        
        localStorage.setItem(
            "accessToken",
            response.accessToken
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