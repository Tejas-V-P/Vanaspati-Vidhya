import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        e.target.reset();
      }, 5000);
    } else {
      e.target.reportValidity();
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Connect</div>
          <h2 className="section-title">References & Contact</h2>
        </div>
        <div className="contact-layout">
          <div className="references reveal">
            <h3 className="contact-heading">📚 Academic References</h3>
            <ul className="ref-list">
              <li><strong>Charaka Samhita</strong> (est. 300 BCE) — <em>Foundational Ayurvedic pharmacology text</em></li>
              <li><strong>Sushruta Samhita</strong> (est. 600 BCE) — <em>Surgical and herbal medicine treatise</em></li>
              <li><strong>WHO Traditional Medicine Strategy 2019–2025</strong> — World Health Organization, Geneva</li>
              <li>Bharat et al. (2020). <em>Phytochemistry of Ocimum tenuiflorum.</em> J. Ethnopharmacology, 254.</li>
              <li>Gupta et al. (2021). <em>Curcumin: From ancient spice to modern medicine.</em> PLOS ONE, 16(4).</li>
              <li>Singh et al. (2011). <em>Withania somnifera: A review of clinical evidence.</em> Phytomedicine.</li>
              <li>Russo & Borrelli (2005). <em>Bacopa monnieri — nootropic plant.</em> Phytomedicine, 12(4).</li>
              <li><strong>CCRAS</strong> — Central Council for Research in Ayurvedic Sciences, Ministry of AYUSH</li>
              <li><strong>IKS Division, MoE</strong> — iksindia.org (National Education Policy 2020)</li>
              <li>Sharma et al. (2022). <em>Tinospora cordifolia: Phytopharmacological review.</em> Pharmacognosy Reviews.</li>
            </ul>
          </div>
          <div className="contact-form-wrap reveal">
            <h3 className="contact-heading">✉️ Contact Us</h3>
            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label htmlFor="fname">First Name</label><input type="text" id="fname" placeholder="Priya" required /></div>
                <div className="form-group"><label htmlFor="lname">Last Name</label><input type="text" id="lname" placeholder="Sharma" required /></div>
              </div>
              <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" placeholder="priya@example.com" required /></div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option>General Enquiry</option>
                  <option>Suggest a Plant</option>
                  <option>Academic Collaboration</option>
                  <option>IKS Project Feedback</option>
                  <option>Report an Error</option>
                </select>
              </div>
              <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" rows="4" placeholder="Share your knowledge, suggest a plant, or ask a question about Ayurveda…" required></textarea></div>
              <button type="submit" className="btn btn-primary">🌿 Send Message</button>
              {submitted && <div className="form-success" style={{ display: 'block' }}>🙏 Dhanyavaad! Your message has been received. We will respond shortly.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
