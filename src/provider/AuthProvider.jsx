import { useEffect, useState } from "react";
import * as authService from "../service/auth.service";
import { useCallback } from "react";
import AuthContext from "../context/auth.context";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setAuth(authService.getAuth());
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
};

export default AuthProvider;
