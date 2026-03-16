import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

// Pages
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AlchemyPage from './pages/AlchemyPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimationObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to allow React to paint the new DOM nodes after a route change
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              if (!entry.target.classList.contains('plant-card')) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.06 }
      );

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // Stagger delays for initial load
      const reveals = document.querySelectorAll('.reveal:not([style*="transition"])');
      reveals.forEach((el, i) => {
        el.style.transitionDelay = (i % 5) * 0.08 + 's';
      });

      // Cleanup function to disconnect observer when component unmounts or before next effect runs
      // Need a way to store the disconnect cleanly
      window.__appObserver = observer;
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      if (window.__appObserver) {
        window.__appObserver.disconnect();
      }
    };
  }, [pathname]);

  return null;
}

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimationObserver />
      <Navbar />
      
      <main className="main-content" style={{ minHeight: '80vh', paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/alchemy" element={<AlchemyPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
