import * as authMock from "../js/auth";

export async function login(email, password) {
    return authMock.login(email, password);
}

export async function register(name, email, password) {
    return authMock.register(name, email, password);
}

export async function logout() {
    return authMock.logout();
}

/*
export async function login(email, password) {
    const response = await apiClient.post("/auth/login", {
        email,
        password
    });

    return response.data;
}
*/