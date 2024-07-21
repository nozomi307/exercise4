document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", submitQuiz);
});

function submitQuiz() {
    const form = document.getElementById('quizForm');
    const username = form.username.value.trim(); 
    let score = 0;

    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];

    questions.forEach(question => {
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            score += parseInt(selectedOption.value); 
        }
    });

    alert(`Hello, ${username}! Your score is ${score}`);
}

