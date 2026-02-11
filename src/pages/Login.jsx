// src/pages/Login.jsx
import { ArrowRight, Eye, EyeClosed, School, XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "@/hooks/useAuth";

export default function Login() {
    const navigate = useNavigate();
    const user = useAuth();
    // const user = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    function handleLogin(e) {
        e?.preventDefault();
        if (!email.trim()) return alert("Masukkan email terlebih dahulu");
        // simpan user sederhana ke localStorage (sesuai flow sebelumnya)

        try {
            user.login({ email, password });
        } catch (e) {
            setErrorMsg(e.message);
            return;
        }
    }

    useEffect(() => {
        if (user.isAuthenticated) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main h-screen flex flex-col overflow-hidden">
            {/* Top Navigation */}
            <header className="flex items-center justify-between px-10 py-4 absolute top-0 left-0 w-full z-10">
                <div className="flex items-center gap-3 text-primary dark:text-white">
                    <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                        <School />
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-text-main dark:text-white">
                        QuizMaster
                    </h2>
                </div>
                <div className="hidden md:flex gap-4">
                    <span className="text-text-muted text-sm font-medium">
                        Don't have an account?
                    </span>
                    <a
                        className="text-primary font-bold text-sm hover:underline"
                        href="#"
                    >
                        Sign up now
                    </a>
                </div>
            </header>

            <div className="flex flex-1 h-full w-full">
                {/* Left - Illustration */}
                <div className="hidden lg:flex flex-1 relative bg-indigo-50 dark:bg-slate-900 items-center justify-center p-12 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                        <div
                            className="w-full aspect-square bg-center bg-contain bg-no-repeat mb-8"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPlfXUv-owC3CCkGHE20mCZqIpD0zVrsv15BDhR8bWzTfzFH3-L1cugC4FN2H5AwQVeDHaFGmjiJhtRKEsfmgZppT_qkHu7d7OWjy2s-1bdakkyIWtcHY-fnYpTWsilowOAkccOhfwSsta2c181hGAdNuD3gGjjTsG9TtIiaB9JTZHk8SkM_vEXtajFVAgjiWt9H1Sw1ZlUT8xdtLXm41svZHCv-TXTPbQwTp3GZQZL2MUak-glrz0K-UQB-QfE5wMVTvAfGGFGIvd")',
                            }}
                            data-alt="Illustration of a person having a bright idea with books and lightbulbs"
                        />
                        <h1 className="text-3xl font-black text-text-main dark:text-white mb-4 leading-tight">
                            Ignite Your Curiosity
                        </h1>
                        <p className="text-text-muted dark:text-gray-400 text-lg">
                            Join a community of lifelong learners and challenge
                            yourself with quizzes on thousands of topics.
                        </p>
                    </div>
                </div>

                {/* Right - Form */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 bg-background-light dark:bg-background-dark relative">
                    <div className="w-full max-w-md flex flex-col gap-6">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold text-text-main dark:text-white mb-2">
                                Welcome Back!
                            </h1>
                            <p className="text-text-muted dark:text-gray-400">
                                Please enter your details to sign in.
                            </p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button
                                type="button"
                                onClick={() =>
                                    alert("Social login (Google) — stub")
                                }
                                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg border border-border-color bg-white dark:bg-slate-800 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <img
                                    alt="Google"
                                    className="w-5 h-5"
                                    src="src/assets/google.svg"
                                />
                                <span className="text-sm font-medium text-text-main dark:text-white">
                                    Google
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    alert("Social login (Apple) — stub")
                                }
                                className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg border border-border-color bg-white dark:bg-slate-800 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <img
                                    alt="Apple"
                                    className="w-5 h-5 dark:invert"
                                    src="src/assets/apple.svg"
                                />
                                <span className="text-sm font-medium text-text-main dark:text-white">
                                    Apple
                                </span>
                            </button>
                        </div>

                        <div className="relative flex items-center gap-2 my-2">
                            <div className="h-px bg-slate-400 dark:bg-slate-700 flex-1"></div>
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-200 tracking-wide">
                                Or with email
                            </span>
                            <div className="h-px bg-slate-400 dark:bg-slate-700 flex-1"></div>
                        </div>

                        <div
                            hidden={!errorMsg}
                            className="w-full flex justify-between items-center px-4 py-2 bg-red-200 border border-red-500 text-red-500 text-sm rounded-lg animate-pulse duration-100"
                        >
                            {errorMsg}
                            <XIcon
                                onClick={() => setErrorMsg("")}
                                className="size-4 text-gray-800 cursor-pointer"
                            />
                        </div>

                        {/* Login Form */}
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleLogin}
                        >
                            {/* Email */}
                            <label className="flex flex-col gap-1.5">
                                <span className="text-sm font-medium text-text-main dark:text-gray-200">
                                    Email Address
                                </span>
                                <input
                                    className="form-input w-full h-12 rounded-lg border border-border-color bg-white dark:bg-slate-800 dark:border-slate-700 text-text-main dark:text-white placeholder:text-text-muted px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="student@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            {/* Password */}
                            <label className="flex flex-col gap-1.5">
                                <span className="text-sm font-medium text-text-main dark:text-gray-200">
                                    Password
                                </span>
                                <div className="relative">
                                    <input
                                        className="form-input w-full h-12 rounded-lg border border-border-color bg-white dark:bg-slate-800 dark:border-slate-700 text-text-main dark:text-white placeholder:text-text-muted px-4 pr-12 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        placeholder="Enter your password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <button
                                        className="absolute right-0 top-0 h-full px-4 text-text-muted hover:text-text-main dark:hover:text-white flex items-center justify-center"
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((s) => !s)
                                        }
                                        aria-label="toggle password visibility"
                                    >
                                        <span className="cursor-pointer text-[20px]">
                                            {showPassword ? (
                                                <Eye className="cursor-pointer h-5" />
                                            ) : (
                                                <EyeClosed className="cursor-pointer h-5" />
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </label>

                            <div className="flex justify-end">
                                <a
                                    className="text-sm font-medium text-primary hover:text-primary-hover hover:underline"
                                    href="#"
                                >
                                    Forgot Password ?
                                </a>
                            </div>

                            <button
                                className="mt-2 w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
                                type="submit"
                            >
                                <span>Log In</span>
                                <ArrowRight className="h-4" />
                            </button>
                        </form>

                        <div className="md:hidden text-center mt-4">
                            <span className="text-slate-300 text-sm font-medium">
                                Don't have an account?
                            </span>
                            <a
                                className="text-primary font-bold text-sm ml-1 hover:underline"
                                href="#"
                            >
                                Sign up now
                            </a>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-xs text-slate-500">
                                By continuing, you agree to our{" "}
                                <a
                                    className="underline hover:text-text-main dark:hover:text-white"
                                    href="#"
                                >
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    className="underline hover:text-text-main dark:hover:text-white"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
