function submitQuiz() {
    const form = document.getElementById('quizForm');
    const username = form.username.value.trim(); // 名前の前後の空白を削除
    let score = 0;

    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];

    questions.forEach(question => {
        const answer = form[question].value;
        score += parseInt(answer);
    });

    alert(`Hello, ${username}! Your score is ${score}`);
}
