const users = [
    {
        id: 1,
        name: "Hugo Faria",
        email: "hugo@test.com",
        password: "123456",
        role: "USER",
        avatar_id: 2
    },
    {
        id: 2,
        name: "Admin",
        email: "admin@test.com",
        password: "admin123",
        role: "ADMIN",
        avatar_id: 5
    }
];

export async function login(email, password) {

    console.log("Attempting login with email:", email, "and password:", password);

    const user = users.find(
        user =>
            user.email === email &&
            user.password === password
    );

    console.log("User found:", user);

    if (!user) {
        throw new Error("Invalid email or password.");
    }

    return {
        accessToken: "mock-access-token",
        refreshToken: "mock-refresh-token",
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar_id: user.avatar_id
        }
    };
}

export async function register(name, email, password) {

    const existingUser = users.find(
        user => user.email === email
    );

    if (existingUser) {
        throw new Error("Email already exists.");
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        role: "USER",
        avatar_id: 1
    };

    users.push(newUser);

    return {
        message: "User created successfully."
    };
}

export async function logout() {
    return true;
}