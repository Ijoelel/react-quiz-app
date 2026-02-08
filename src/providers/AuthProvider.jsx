import { useEffect, useState, useCallback } from "react";
import * as authService from "../auth/auth.service";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const saved = authService.getAuth();
        setAuth(saved);
        setLoading(false);
    }, []);

    const login = useCallback((credentials) => {
        const data = authService.login(credentials);
        setAuth(data);
        return data;
    }, []);

    const logout = useCallback(() => {
        authService.logout();
        setAuth(null);
    }, []);

    const value = {
        auth,
        user: auth?.user ?? null,
        isAuthenticated: auth?.isAuthenticated ?? false,
        login,
        logout,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
