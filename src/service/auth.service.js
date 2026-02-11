import { DUMMY_USER } from "@/config/auth.config";

const AUTH_KEY = "quiz_auth";

export function login({ email, password }) {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
        const auth = {
            isAuthenticated: true,
            user: {
                email: DUMMY_USER.email,
                name: DUMMY_USER.name,
            },
        };

        localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
        return auth;
    }

    throw new Error("Email atau password salah");
}

export function logout() {
    localStorage.removeItem(AUTH_KEY);
}

export function getAuth() {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
}
