const BASE_URL = "https://opentdb.com/api.php";

export async function getQuizzes(params) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${BASE_URL}?${query}`);
    return res.json();
}
