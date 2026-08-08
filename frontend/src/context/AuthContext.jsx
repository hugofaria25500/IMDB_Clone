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

    return (
        <AuthContext.Provider
            value={{
                user,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;