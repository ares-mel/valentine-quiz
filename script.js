// Quiz Data
const quizData = [
    {
        id: 1,
        question: "An appropriate title for this text would be",
        options: [
            { key: "a", text: "The History of Roman Gods and Goddesses" },
            { key: "b", text: "How Valentine's Day Began and Evolved" },
            { key: "c", text: "The Story of a Christian Doctor" },
            { key: "d", text: "Ancient Roman Festival Traditions" }
        ],
        answer: "b",
        explanation: "The text covers both the origins of Valentine's Day from the Roman festival of Lupercalia and the story of St. Valentine, making 'How Valentine's Day Began and Evolved' the most comprehensive title."
    },
    {
        id: 2,
        question: "The word <em>roots</em>, in line 5 is synonymous to",
        options: [
            { key: "a", text: "copies" },
            { key: "b", text: "sources" },
            { key: "c", text: "reasons" },
            { key: "d", text: "ideas" }
        ],
        answer: "b",
        explanation: "In this context, 'roots' refers to the origins or sources from which Valentine's Day traditions developed."
    },
    {
        id: 3,
        question: "Lupercalia was a Roman festival which was devoted to",
        options: [
            { key: "a", text: "god Lupercus" },
            { key: "b", text: "dancing men" },
            { key: "c", text: "unmarried females" },
            { key: "d", text: "different gods" }
        ],
        answer: "a",
        explanation: "According to lines 7-8, 'At first, the festival honoured the Roman god Lupercus, keeper of the crops and farm animals.'"
    },
    {
        id: 4,
        question: "Juno was a Roman goddess who was",
        options: [
            { key: "a", text: "the keeper of crops and farm animals" },
            { key: "b", text: "the guardian of women and marriage" },
            { key: "c", text: "the keeper of unmarried men" },
            { key: "d", text: "the queen of Roman females" }
        ],
        answer: "b",
        explanation: "Lines 10-11 state that Juno was 'queen of the Roman gods and guardian of women and marriage.'"
    },
    {
        id: 5,
        question: "According to the text, unmarried people at Lupercalia",
        options: [
            { key: "a", text: "honoured the god Lupercus together" },
            { key: "b", text: "played a special game to find dancing partners" },
            { key: "c", text: "celebrated on February 14 each year" },
            { key: "d", text: "exchanged candy and greeting cards" }
        ],
        answer: "b",
        explanation: "Lines 12-15 describe how unmarried people played a special game where females wrote their names on paper, and males drew names to find dancing partners."
    },
    {
        id: 6,
        question: "The pronoun <em>them</em> in line 13 refers to",
        options: [
            { key: "a", text: "unmarried people" },
            { key: "b", text: "pieces of paper" },
            { key: "c", text: "the females' names" },
            { key: "d", text: "all the males" }
        ],
        answer: "c",
        explanation: "The sentence reads 'All the females wrote their names on pieces of paper and dropped them into a big jar.' The pronoun 'them' refers to 'their names.'"
    },
    {
        id: 7,
        question: "Valentine was sentenced to death because he",
        options: [
            { key: "a", text: "loved the sick and the blind" },
            { key: "b", text: "had Christian beliefs" },
            { key: "c", text: "was a doctor for the Romans" },
            { key: "d", text: "wrote a love letter" }
        ],
        answer: "b",
        explanation: "Lines 19-22 explain that Emperor Claudius 'did not like Valentine's Christian beliefs' and sentenced him to death."
    },
    {
        id: 8,
        question: "The word <em>cure</em> in line 19 is closest in meaning to",
        options: [
            { key: "a", text: "heal" },
            { key: "b", text: "prevent" },
            { key: "c", text: "examine" },
            { key: "d", text: "discover" }
        ],
        answer: "a",
        explanation: "'Cure' means to restore health or heal someone from a disease or illness."
    },
    {
        id: 9,
        question: "It can be inferred from the text that Christian leaders",
        options: [
            { key: "a", text: "wanted to completely end all Roman festivals" },
            { key: "b", text: "believed St. Valentine was a Roman god" },
            { key: "c", text: "used St. Valentine to replace pagan traditions" },
            { key: "d", text: "celebrated Lupercalia on February 15" }
        ],
        answer: "c",
        explanation: "Lines 28-33 indicate that Christian leaders encouraged people to celebrate St. Valentine at the festival, effectively replacing the pagan traditions."
    },
    {
        id: 10,
        question: "Today Valentine's Day is a celebration of",
        options: [
            { key: "a", text: "unmarried girls who want to get married" },
            { key: "b", text: "crops and farm animals after the harvest" },
            { key: "c", text: "Roman gods who protected people's health" },
            { key: "d", text: "love and friendship among people" }
        ],
        answer: "d",
        explanation: "Lines 34-35 clearly state that Valentine's Day 'is still seen as a special time to honour the celebration of love and friendship.'"
    }
];

// State
let answers = {};
let submitted = false;

// DOM Elements
const passageSection = document.getElementById('passageSection');
const quizSection = document.getElementById('quizSection');
const questionsGrid = document.getElementById('questionsGrid');
const quizForm = document.getElementById('quizForm');
const submitBtn = document.getElementById('submitBtn');
const submitWrapper = document.getElementById('submitWrapper');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const results = document.getElementById('results');
const scoreValue = document.getElementById('scoreValue');
const scorePercent = document.getElementById('scorePercent');
const resultsText = document.getElementById('resultsText');
const retryBtn = document.getElementById('retryBtn');
const answeredCount = document.getElementById('answeredCount');

// Initialize
function init() {
    renderQuestions();
    setupTabs();
    setupListeners();

    // Set initial active section
    passageSection.classList.add('active');
}

// Render questions
function renderQuestions() {
    questionsGrid.innerHTML = quizData.map((q, i) => `
        <div class="question-card" id="q${i}">
            <div class="q-header">
                <span class="q-num">${i + 1}</span>
                <p class="q-text">${q.question}</p>
            </div>
            <div class="q-options">
                ${q.options.map(opt => `
                    <div class="q-option" id="opt-${i}-${opt.key}">
                        <input type="radio" name="q${i}" id="q${i}${opt.key}" value="${opt.key}">
                        <label for="q${i}${opt.key}">
                            <span class="opt-key">${opt.key.toUpperCase()}</span>
                            <span>${opt.text}</span>
                        </label>
                    </div>
                `).join('')}
            </div>
            <div class="q-feedback" id="fb-${i}"></div>
        </div>
    `).join('');
}

// Setup mobile tabs
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update sections
            passageSection.classList.remove('active');
            quizSection.classList.remove('active');

            if (tab === 'passage') {
                passageSection.classList.add('active');
            } else {
                quizSection.classList.add('active');
            }
        });
    });
}

// Setup event listeners
function setupListeners() {
    // Answer selection
    questionsGrid.addEventListener('change', (e) => {
        if (e.target.type === 'radio' && !submitted) {
            const name = e.target.name;
            const index = parseInt(name.replace('q', ''));
            answers[index] = e.target.value;
            updateProgress();
        }
    });

    // Form submit
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!submitted) {
            submitQuiz();
        }
    });

    // Retry
    retryBtn.addEventListener('click', resetQuiz);
}

// Update progress
function updateProgress() {
    const count = Object.keys(answers).length;
    const percent = (count / quizData.length) * 100;

    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${count} of ${quizData.length} answered`;
    answeredCount.textContent = `${count}/${quizData.length}`;
}

// Submit quiz
function submitQuiz() {
    submitted = true;
    let score = 0;

    quizData.forEach((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.answer;
        const feedback = document.getElementById(`fb-${i}`);

        if (isCorrect) score++;

        // Mark options
        q.options.forEach(opt => {
            const optEl = document.getElementById(`opt-${i}-${opt.key}`);
            optEl.classList.add('disabled');

            if (opt.key === q.answer) {
                optEl.classList.add('correct');
            } else if (opt.key === userAnswer && !isCorrect) {
                optEl.classList.add('wrong');
            }
        });

        // Disable inputs
        document.querySelectorAll(`input[name="q${i}"]`).forEach(input => {
            input.disabled = true;
        });

        // Show feedback
        feedback.classList.add('show', isCorrect ? 'correct' : 'wrong');
        feedback.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong> ${q.explanation}`;
    });

    // Show results
    showResults(score);
}

// Show results
function showResults(score) {
    const percent = Math.round((score / quizData.length) * 100);

    submitWrapper.style.display = 'none';
    results.classList.add('show');

    scoreValue.textContent = score;
    scorePercent.textContent = `${percent}%`;

    if (percent >= 90) {
        resultsText.textContent = "Outstanding! You truly understand Valentine's Day! 💖";
    } else if (percent >= 70) {
        resultsText.textContent = "Great job! You have a good grasp of the material! 💝";
    } else if (percent >= 50) {
        resultsText.textContent = "Good effort! Review the passage for a higher score! 💗";
    } else {
        resultsText.textContent = "Keep practicing! Try reading the passage again. 💕";
    }

    // Scroll to results
    setTimeout(() => {
        results.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Reset quiz
function resetQuiz() {
    submitted = false;
    answers = {};

    // Reset UI
    document.querySelectorAll('.q-option').forEach(opt => {
        opt.classList.remove('correct', 'wrong', 'disabled');
    });

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = false;
        input.checked = false;
    });

    document.querySelectorAll('.q-feedback').forEach(fb => {
        fb.classList.remove('show', 'correct', 'wrong');
        fb.innerHTML = '';
    });

    results.classList.remove('show');
    submitWrapper.style.display = 'block';

    updateProgress();

    // Scroll to top on mobile or first question on desktop
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Start
document.addEventListener('DOMContentLoaded', init);
