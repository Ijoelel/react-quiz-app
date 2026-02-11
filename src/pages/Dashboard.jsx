import { useState } from "react";
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

const Dashboard = () => {
    const navigate = useNavigate();
    const { setQuestions, startQuiz } = useQuizStore();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [difficulty, setDifficulty] = useState("easy");
    const [type, setType] = useState("multiple");
    const [open, setOpen] = useState(false);

    const handleSelect = (cat) => {
        setSelectedCategory(cat);
        setOpen(true);
    };

    const handleNext = async () => {
        const data = await fetchQuizList({
            amount: 10,
            category: selectedCategory.id,
            difficulty,
            type,
        });

        setQuestions(data);
        startQuiz();

        setOpen(false);
        navigate("/quiz");
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <TopNavbar />

            <main className="max-w-360 mx-auto w-full flex flex-col lg:flex-row gap-8 p-6">
                <div className="flex-1 flex flex-col gap-8">
                    <HeroBanner />
                    <CategoryGrid onSelect={handleSelect} />
                </div>

                <aside className="w-full lg:w-90 flex flex-col gap-8">
                    <RecentActivity />
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
            />
        </div>
    );
};

export default Dashboard;
