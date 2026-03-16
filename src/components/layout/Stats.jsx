import React, { useEffect, useRef } from 'react';

export default function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNums = entry.target.querySelectorAll('.stat-num');
            statNums.forEach(num => {
              const target = +num.getAttribute('data-target');
              const duration = 2000;
              const stepTime = Math.abs(Math.floor(duration / target));
              let current = 0;
              const increment = target > 100 ? Math.ceil(target / 50) : 1;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  num.innerText = target;
                  clearInterval(timer);
                } else {
                  num.innerText = current;
                }
              }, stepTime);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="stats-strip" id="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-num" data-target="5000">0</span>
            <span className="stat-suffix">+</span>
            <span className="stat-label">Years of Ayurveda</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-target="8000">0</span>
            <span className="stat-suffix">+</span>
            <span className="stat-label">Medicinal Plant Species</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-target="10">0</span>
            <span className="stat-suffix"></span>
            <span className="stat-label">Plants Covered</span>
          </div>
          <div className="stat-item">
            <span className="stat-num" data-target="700">0</span>
            <span className="stat-suffix">+</span>
            <span className="stat-label">Herbs in Charaka Samhita</span>
          </div>
        </div>
      </div>
    </div>
  );
}
