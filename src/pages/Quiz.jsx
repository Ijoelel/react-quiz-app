import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Quiz = () => {
    const { getAuth } = useAuth();
    const navigate = useNavigate();
    const user = getAuth;
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    });
    return <div>Quiz</div>;
};
export default Quiz;
