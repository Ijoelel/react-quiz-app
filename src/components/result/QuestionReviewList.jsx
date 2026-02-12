import QuestionReviewItem from "./QuestionReviewItem";

const QuestionReviewList = ({ questions, answers }) => {
    return (
        <div className="space-y-4 mb-12">
            <h2 className="text-xl font-bold px-1">Question Review</h2>

            {questions.map((q, index) => (
                <QuestionReviewItem
                    key={index}
                    index={index}
                    question={q}
                    answer={answers[index]}
                />
            ))}
        </div>
    );
};
export default QuestionReviewList;
