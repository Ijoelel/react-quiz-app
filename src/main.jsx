import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import QuizProvider from "./provider/QuizProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <QuizProvider>
                <App />
            </QuizProvider>
        </AuthProvider>
    </StrictMode>,
);
