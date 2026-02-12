import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchQuizList } from "../service/quiz.service";
import CategoryGrid from "../components/dashboard/CategoryGrid";
import QuizOptionModal from "../components/dashboard/QuizOptionModal";
import { useQuizStore } from "../stores/quiz/quiz.store";
import TopNavbar from "../components/dashboard/TopNavbar";
import HeroBanner from "../components/dashboard/HeroBanner";
import RecentActivity from "../components/dashboard/RecentActivity";
import Leaderboard from "../components/dashboard/Leaderboard";
import MobileBottomNav from "../components/dashboard/MobileBottomNav";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();
    const {
        setQuestions,
        startQuiz,
        questions,
        answers,
        timeLeft,
        currentIndex,
        status,
    } = useQuizStore();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [difficulty, setDifficulty] = useState("easy");
    const [type, setType] = useState("multiple");
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSelect = (cat) => {
        setSelectedCategory(cat);
        setOpen(true);
    };

    const handleNext = async () => {
        setIsLoading(true);
        const data = await fetchQuizList({
            amount: 10,
            category: selectedCategory.id,
            difficulty,
            type,
        });
        setIsLoading(false);

        setQuestions(data);
        startQuiz();

        setOpen(false);
        navigate("/quiz");
    };

    useEffect(() => {
        console.log(isAuthenticated);
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <TopNavbar user={user} />
            <main className="max-w-360 mx-auto w-full flex flex-col lg:flex-row gap-8 p-6">
                <div className="flex-1 flex flex-col gap-8">
                    <HeroBanner />
                    <CategoryGrid onSelect={handleSelect} />
                </div>

                <aside className="w-full lg:w-90 flex flex-col gap-8">
                    <RecentActivity
                        questions={questions}
                        answers={answers}
                        timeLeft={timeLeft}
                        currentIndex={currentIndex}
                        status={status}
                    />
                    <Leaderboard />
                </aside>
            </main>

            <MobileBottomNav />
            <QuizOptionModal
                open={open}
                category={selectedCategory}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                type={type}
                setType={setType}
                onCancel={() => setOpen(false)}
                onNext={handleNext}
                isLoading={isLoading}
            />
        </div>
    );
};

export default Dashboard;
