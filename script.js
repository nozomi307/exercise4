function submitQuiz() {
    const form = document.getElementById('quizForm');
    const username = form.username.value;
    let score = 0;

    const q1 = form.q1.value;
    score += parseInt(q1);

    // Repeat for other questions

    alert(`${username}, your final score is ${score}`);
}
