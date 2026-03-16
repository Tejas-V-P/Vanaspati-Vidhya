import React, { useState, useEffect } from 'react';
import QuizApp from '../components/QuizApp.jsx';

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/quiz')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch quiz data');
        return res.json();
      })
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container" style={{padding: '100px 0', textAlign: 'center'}}>Loading Quiz...</div>;
  if (error) return <div className="container" style={{padding: '100px 0', color: 'red'}}>Error: {error}</div>;

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Test Your Knowledge</div>
          <h2 className="section-title">Medicinal Plants Quiz</h2>
          <p className="section-sub">10 questions covering all plants, Ayurvedic concepts, and scientific knowledge. Aim for a perfect score!</p>
        </div>
        <QuizApp questions={questions} />
      </div>
    </section>
  );
}
