import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "@/hooks/useAuth";
import { useQuizStore } from "../stores/quiz/quiz.store";
import QuizSubHeader from "../components/quiz/QuizSubHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import AnswerGrid from "../components/quiz/AnswerGrid";
import QuestionMap from "../components/quiz/QuestionMap";
import QuizFooter from "../components/quiz/QuizFooter";
import TopNavbar from "../components/dashboard/TopNavbar";

const Quiz = () => {
    const user = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isAuthenticated) {
            navigate("/login");
        }
    });

    const {
        questions,
        currentIndex,
        answers,
        timeLeft,
        answerQuestion,
        finishQuiz,
        setIndex,
    } = useQuizStore();

    useEffect(() => {
        if (!questions.length) {
            navigate("/");
        }
    }, [questions, navigate]);

    const currentQuestion = questions[currentIndex];
    const total = questions.length;

    if (!currentQuestion) return null;

    const handleAnswer = (choice) => {
        answerQuestion({
            questionIndex: currentIndex,
            selected: choice,
            correct: currentQuestion.correctAnswer,
        });

        // AUTO NEXT
        if (currentIndex + 1 < total) {
            setIndex(currentIndex + 1);
        }
    };

    const handleQuestionSelect = (index) => {
        if (index === currentIndex) return;

        setIndex(index);
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            <TopNavbar />

            <QuizSubHeader
                category={currentQuestion.category}
                current={currentIndex}
                total={total}
                timeLeft={timeLeft}
            />

            <main className="grow max-w-360 mx-auto px-4 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <QuestionCard
                        question={currentQuestion.question}
                        current={currentIndex}
                        total={total}
                        type={currentQuestion.type}
                    />

                    <AnswerGrid
                        choices={currentQuestion.choices}
                        selected={answers[currentIndex]?.selected}
                        onSelect={handleAnswer}
                    />
                </div>

                <QuestionMap
                    questions={questions}
                    currentIndex={currentIndex}
                    answers={answers}
                    onSelect={handleQuestionSelect}
                />
            </main>

            <QuizFooter
                currentIndex={currentIndex}
                total={total}
                onFinish={() => {
                    finishQuiz();
                    navigate("/result");
                }}
            />
        </div>
    );
};
export default Quiz;

/**
 * Ubah agar ketika jawaban dipilih tidak langsung ganti soal
 * lalu pastikan agar ketika nomor soal dipencet di sebelah kanan akan berubah ke soal yang dipilih
 * ketika soal sudah selesai di isi semua di soal terakhir tambahkan tombol "Selesai" menggantikan tombol "next"
 */
