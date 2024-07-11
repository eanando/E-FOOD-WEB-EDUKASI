const quizData = [
    {
        level: 3,
        question: "Mengapa penting untuk menekan pemborosan pangan?",
        a: "Karena pangan tidak begitu mahal.",
        b: "Karena kita memiliki pangan yang cukup.",
        c: "Karena pangan tidak mudah rusak.",
        d: "Karena dapat mengurangi kerugian ekonomi dan memberi makan lebih banyak orang.",
        correct: "d"
    },
    {
        level: 3,
        question: "Salah satu perilaku konsumsi yang menyebabkan pemborosan pangan adalah?",
        a: "Belanja berlebihan.",
        b: "Membeli makanan yang segar.",
        c: "Memasak sesuai porsi.",
        d: "Makan bersama keluarga.",
        correct: "a"
    },
    {
        level: 3,
        question: "Berapa persen makanan kita yang terbuang menurut kajian pakar pangan?",
        a: "10%",
        b: "20%",
        c: "30%",
        d: "40%",
        correct: "c"
    },
    {
        level: 3,
        question: "Salah satu strategi untuk menekan kebutuhan pangan adalah?",
        a: "Mengurangi produksi pangan.",
        b: "Mengurangi pemborosan pangan.",
        c: "Meningkatkan harga pangan.",
        d: "Mengimpor lebih banyak pangan.",
        correct: "b"
    },
    {
        level: 3,
        question: "Mengurangi pemborosan pangan dapat berdampak pada?",
        a: "Meningkatkan biaya produksi.",
        b: "Mengurangi jumlah makanan yang tersedia.",
        c: "Menurunkan kualitas makanan.",
        d: "Mengurangi kerugian ekonomi dan memberi makan lebih banyak orang.",
        correct: "d"
    }
];


let currentQuizIndex = 0;

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuizIndex];

    quiz.innerHTML = `
        <h2>Level ${currentQuizData.level}</h2>
        <p>${currentQuizData.question}</p>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer && answer.value === quizData[currentQuizIndex].correct) {
        currentQuizIndex++;
        result.innerHTML = '<span style="color:green">Jawaban benar!</span>';
        if (currentQuizIndex < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '<h2>Selamat! Anda telah menyelesaikan semua pertanyaan pada level 3!</h2>';
            submitBtn.style.display = 'none';
        }
    } else {
        result.innerHTML = '<span style="color:red">Jawaban salah. Coba lagi!</span>';
    }
});
