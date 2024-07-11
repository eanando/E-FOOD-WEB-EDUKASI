const quizData = [
    {
        level: 1,
        question: "Mengapa penting untuk mengonsumsi makanan yang beragam?",
        a: "Karena hanya ada satu jenis makanan yang lengkap kandungan gizinya.",
        b: "Karena tubuh memerlukan lebih dari 45 jenis zat gizi untuk hidup sehat, aktif, dan produktif.",
        c: "Karena satu jenis makanan bisa mencukupi semua kebutuhan gizi.",
        d: "Karena tubuh hanya memerlukan karbohidrat dan protein.",
        correct: "b"
    },
    {
       level: 1,
        question: "Apa yang dimaksud dengan pangan bergizi seimbang?",
        a: "Makanan yang hanya mengandung karbohidrat dan lemak.",
        b: "Makanan yang mengandung zat gizi dalam jumlah sesuai kebutuhan berdasarkan umur, jenis kelamin, berat badan, dan aktivitas fisik.",
        c: "Makanan yang mengandung banyak gula dan garam.",
        d: "Makanan yang hanya berasal dari satu kelompok makanan.",
        correct: "b"
    },
    {
        level: 1,
        question: "Apa yang termasuk dalam cemaran kimia yang harus dihindari dalam pangan aman?",
        a: "Kuku dan rambut",
        b: "Bahan pangan kadaluarsa",
        c: "Racun, residu pestisida, bahan makanan yang tidak diperbolehkan (boraks, formalin, pewarna tekstil)",
        d: "Batu dan kerikil",
        correct: "c"
    },
    {
        level: 1,
        question: "Apa yang dimaksud dengan konsep 1/3 makanan pokok, 1/3 sayuran, 1/6 buah-buahan, dan 1/6 lauk pauk?",
        a: "Proporsi ideal dalam satu piring makanan sehari-hari untuk mendapatkan gizi seimbang.",
        b: "Proporsi makanan yang hanya cocok untuk anak-anak.",
        c: "Proporsi makanan untuk orang yang sedang diet.",
        d: "Proporsi makanan yang hanya terdiri dari karbohidrat dan protein.",
        correct: "a"
    },
    {
        level: 1,
        question: "Apa yang termasuk dalam cemaran biologis yang harus dihindari dalam pangan aman?",
        a: "Bahan pangan kadaluarsa, berjamur/kapang, atau tercemar E. coli",
        b: "Residu pestisida",
        c: "Pewarna tekstil",
        d: "Pecahan beling",
        correct: "a"
    },
    {
       level: 1,
        question: "Mengapa kita harus menghindari pangan yang terkontaminasi cemaran fisik?",
        a: "Karena bisa mengurangi rasa makanan.",
        b: "Karena bisa menyebabkan cedera atau bahaya kesehatan.",
        c: "Karena bisa mengubah warna makanan.",
        d: "Karena bisa menambah nilai gizi makanan.",
        correct: "b"
    },
    {
        level: 1,
        question: "Manakah contoh makanan yang merupakan sumber protein?",
        a: "Padi-padian",
        b: "Umbi-umbian",
        c: "Tahu, tempe, ayam, ikan",
        d: "Sayur dan buah",
        correct: "c"
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
            quiz.innerHTML = '<h2>Selamat! Anda telah menyelesaikan semua pertanyaan pada level 1!</h2>';
            submitBtn.style.display = 'none';
        }
    } else {
        result.innerHTML = '<span style="color:red">Jawaban salah. Coba lagi!</span>';
    }
});

