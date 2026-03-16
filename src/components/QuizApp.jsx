import React, { useState as useQuizState, useEffect as useQuizEffect } from 'react';

export default function QuizApp({ questions }) {
  const [qIndex,    setQIndex]    = useQuizState(0);
  const [score,     setScore]     = useQuizState(0);
  const [selected,  setSelected]  = useQuizState(null);   // index of chosen option
  const [answered,  setAnswered]  = useQuizState(false);
  const [finished,  setFinished]  = useQuizState(false);
  const [wrongCount,setWrongCount]= useQuizState(0);

  const current    = questions[qIndex];
  const totalQ     = questions.length;
  const progressPct = finished ? 100 : (qIndex / totalQ) * 100;

  /* ── Select an answer ── */
  function handleSelect(optionIdx) {
    if (answered) return;
    const correct = optionIdx === current.answer;
    setSelected(optionIdx);
    setAnswered(true);
    if (correct) {
      setScore(s => s + 1);
    } else {
      setWrongCount(w => w + 1);
    }
  }

  /* ── Next question ── */
  function handleNext() {
    if (qIndex + 1 >= totalQ) {
      setFinished(true);
    } else {
      setQIndex(i => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

  /* ── Restart quiz ── */
  function handleRestart() {
    setQIndex(0);
    setScore(0);
    setWrongCount(0);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
  }

  /* ── Result grade ── */
  function getResult() {
    const pct = (score / totalQ) * 100;
    if (pct === 100) return { icon: '🏆', title: 'Perfect Score! Extraordinary!',       desc: 'You have mastered Vanaspati Vidya. A true Vaidya (Ayurvedic physician) in the making!' };
    if (pct >= 80)  return { icon: '🌿', title: 'Excellent Work!',                      desc: 'Outstanding knowledge of Indian medicinal plants and Ayurveda. Just a few more details to perfect!' };
    if (pct >= 60)  return { icon: '🌱', title: 'Good Understanding!',                  desc: 'Solid foundation in plant knowledge. Review the plant cards above to strengthen any weak areas.' };
    return                { icon: '📚', title: 'Keep Learning — You Can Do It!',        desc: 'Explore the plant profiles and Ayurveda section above, then try again!' };
  }

  /* ── Option class helper ── */
  function optionClass(i) {
    if (!answered) return 'quiz-option';
    if (i === current.answer) return 'quiz-option correct';
    if (i === selected)       return 'quiz-option wrong';
    return 'quiz-option';
  }

  /* ─────────────── RESULT SCREEN ─────────────── */
  if (finished) {
    const result = getResult();
    return (
      <div className="quiz-container">
        {/* Progress — 100% */}
        <div className="quiz-progress">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '100%' }} />
          </div>
          <span className="progress-text">Quiz Complete!</span>
        </div>

        <div className="quiz-result">
          <div className="result-emoji">{result.icon}</div>
          <h3 className="result-title">{result.title}</h3>
          <p className="result-desc">{result.desc}</p>
          <p className="result-score">Score: {score} / {totalQ} ({Math.round((score/totalQ)*100)}%)</p>
          <div className="result-breakdown">
            <span className="score-pill correct-pill">✅ {score} correct</span>
            <span className="score-pill wrong-pill">❌ {wrongCount} incorrect</span>
          </div>
          <button className="btn btn-green" onClick={handleRestart}>
            🔄 Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  /* ─────────────── QUESTION SCREEN ─────────────── */
  return (
    <div className="quiz-container">
      {/* Progress bar */}
      <div className="quiz-progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: progressPct + '%' }} />
        </div>
        <span className="progress-text">Question {qIndex + 1} of {totalQ}</span>
      </div>

      <div className="quiz-card">
        {/* Question */}
        <p className="quiz-question">{current.question}</p>

        {/* Options */}
        <div className="quiz-options" role="list">
          {current.options.map((opt, i) => (
            <button
              key={i}
              role="listitem"
              className={optionClass(i)}
              onClick={() => handleSelect(i)}
              disabled={answered}
              aria-pressed={selected === i}
            >
              <span className="option-letter">{String.fromCharCode(65 + i)}.</span> {opt}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {answered && (
          <div className={`quiz-feedback ${selected === current.answer ? 'correct-fb' : 'wrong-fb'}`}>
            <strong>{selected === current.answer ? '✅ Correct!' : '❌ Not quite!'}</strong>{' '}
            {current.explanation}
          </div>
        )}

        {/* Next button */}
        {answered && (
          <button className="btn btn-primary" onClick={handleNext}>
            {qIndex + 1 < totalQ ? 'Next Question →' : 'See My Results 🎉'}
          </button>
        )}
      </div>
    </div>
  );
}
