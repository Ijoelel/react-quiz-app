import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index Component={Dashboard} />
                <Route path="login" Component={Login} />
                <Route path="quiz" Component={Quiz} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
