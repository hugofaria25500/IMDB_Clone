import { createContext, useEffect, useState } from "react";

import {
    saveToken,
    getToken,
    removeToken,
    saveUser,
    getUser,
    removeUser
} from "../utils/storage";

import * as authService from "../services/authService";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const savedToken = getToken();
        const savedUser = getUser();

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(savedUser);
        }

        setLoading(false);

    }, []);

    async function login(email, password) {
        const response = await authService.login(email, password);

        saveToken(response.accessToken);
        saveUser(response.user);

        setToken(response.accessToken);
        setUser(response.user);
    }

    async function register(name, email, password) {
        await authService.register(name, email, password);
        await login(email, password);
    }

    async function logout() {
        await authService.logout();

        removeToken();
        removeUser();

        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated: !!token,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;