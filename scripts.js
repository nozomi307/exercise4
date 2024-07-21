document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", submitQuiz);
});

function submitQuiz() {
    const form = document.getElementById('quizForm');
    const username = form.username.value.trim(); // ユーザー名の前後の空白を削除
    let score = 0;

    // 各質問の選択肢の値を取り出す
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];

    questions.forEach(question => {
        // 現在選択されているラジオボタンの値を取得
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            score += parseInt(selectedOption.value); // 選択されたラジオボタンの値をスコアに加算
        }
    });

    alert(`Hello, ${username}! Your score is ${score}`);
}

