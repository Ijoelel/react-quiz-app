import { useNavigate } from "react-router";
import { getAuth } from "../auth/auth.service";
import { useEffect } from "react";

const Dashboard = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    });

    return <div>Dashboard</div>;
};
export default Dashboard;
