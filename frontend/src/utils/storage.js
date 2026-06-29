// TOKEN
export function saveToken(token) {
    localStorage.setItem("token", token);
}

export function getToken() {
    return localStorage.getItem("token");
}

export function removeToken() {
    localStorage.removeItem("token");
}

// USER
export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
}

export function removeUser() {
    localStorage.removeItem("user");
}

// CLEAR EVERYTHING
export function clearStorage() {
    removeToken();
    removeUser();
}