import * as quizRepository from "@/repository/quiz.repository";

/**
 * @options {amount, category, difficulty, type}
 */

export async function fetchQuizList(options = {}) {
    const { amount = 10, category, difficulty, type = "multiple" } = options;

    if (typeof amount !== "number" || amount <= 0) {
        throw new Error("amount harus berupa angka > 0");
    }
    const params = {
        amount,
        type,
    };

    if (category) params.category = category;
    if (difficulty) params.difficulty = difficulty;

    const raw = await quizRepository.getQuizzes(params);
    if (raw.response_code !== 0) {
        throw new Error("OpenTDB tidak mengembalikan data valid");
    }

    return raw.results.map((q, index) => ({
        id: `${q.category}-${index}`,
        category: q.category,
        question: decodeHtml(q.question),
        correctAnswer: decodeHtml(q.correct_answer),
        choices: shuffle(
            [q.correct_answer, ...q.incorrect_answers].map(decodeHtml),
        ),
        difficulty: q.difficulty,
    }));
}

/* ===== helpers (PRIVATE to service) ===== */

function decodeHtml(text) {
    const el = document.createElement("textarea");
    el.innerHTML = text;
    return el.value;
}

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}
