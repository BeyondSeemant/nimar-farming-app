import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const farmerImg = process.env.PUBLIC_URL + "/farmer.jpg";

const Schemes = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    land: "",
    income: "",
    category: "",
    state: "",
  });

  const [result, setResult] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [checked, setChecked] = useState(false);

  const schemes = [
    {
      name: "PM-KISAN",
      rule: (f) => Number(f.land) <= 2 && Number(f.income) <= 200000,
      desc: "₹6000/year direct income support",
      link: "https://pmkisan.gov.in/",
    },
    {
      name: "Kisan Credit Card",
      rule: (f) => Number(f.land) > 0,
      desc: "Loan up to ₹3 lakh at low interest",
      link: "https://www.nabard.org/",
    },
    {
      name: "PM Fasal Bima Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Crop insurance against natural disasters",
      link: "https://pmfby.gov.in/",
    },
    {
      name: "MP Krishi Anudan Yojana",
      rule: (f) => f.state === "MP",
      desc: "Subsidy on farming equipment in MP",
      link: "https://dbt.mpdage.org/",
    },
    {
      name: "SC/ST Farmer Subsidy",
      rule: (f) => f.category === "SC/ST",
      desc: "Extra subsidy benefits",
      link: "https://agriculture.gov.in/",
    },
  ];

  const checkEligibility = () => {
    const eligible = [];
    const notEligible = [];
    schemes.forEach((s) => {
      if (s.rule(form)) eligible.push(s);
      else notEligible.push({ ...s, reason: "Not eligible based on your input" });
    });
    setResult(eligible);
    setRejected(notEligible);
    setChecked(true);
  };

  const topSchemes = [
    "PM Kisan Samman Nidhi",
    "PM Fasal Bima Yojana",
    "Kisan Credit Card",
    "PM Krishi Sinchayee Yojana",
    "Soil Health Card Scheme",
    "National Agriculture Market",
    "PM-KUSUM Yojana",
  ];

  const features = [
    { icon: "🎯", title: "Personalized Results", sub: "Get schemes that match your profile" },
    { icon: "🔐", title: "100% Secure", sub: "Your data is protected and confidential" },
    { icon: "⏱", title: "Up-to-date Information", sub: "We provide the latest scheme information" },
    { icon: "👨‍🌾", title: "Farmer First", sub: "Designed to support our farmers" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .schemes-root {
          font-family: 'Inter', sans-serif;
          background: #03111f;
          min-height: 100vh;
          color: white;
        }

        /* TOP NAV */
        .top-nav {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 28px;
          height: 52px;
          background: rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
        }
        .top-nav-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #00e676;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          padding-right: 14px;
          border-right: 1px solid rgba(255,255,255,0.15);
          margin-right: 8px;
        }
        .top-nav-label svg { width: 16px; height: 16px; }
        .top-nav-items {
          display: flex;
          gap: 0;
          overflow: hidden;
          flex: 1;
        }
        .top-nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
          padding: 0 16px;
          cursor: pointer;
          transition: color 0.2s;
        }
        .top-nav-item:hover { color: white; }
        .top-nav-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00e676;
          opacity: 0.6;
        }
        .top-nav-arrow {
          margin-left: auto;
          color: rgba(255,255,255,0.5);
          font-size: 18px;
          cursor: pointer;
        }

        /* MAIN CARD WRAPPER */
        .main-wrapper {
          padding: 28px 28px 0 28px;
        }
        .main-card {
          border-radius: 20px;
          overflow: hidden;
          background: #071828;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
        }

        /* PORTAL HEADER ROW */
        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px 0 32px;
        }
        .portal-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .portal-emblem {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .portal-name {
          font-size: 15px;
          font-weight: 700;
          color: white;
          font-family: 'Sora', sans-serif;
        }
        .portal-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          margin-top: 1px;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 9px 18px;
          color: rgba(255,255,255,0.8);
          font-size: 13px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: background 0.2s;
        }
        .back-btn:hover { background: rgba(255,255,255,0.12); }

        /* HERO LAYOUT */
        .hero {
          display: grid;
          grid-template-columns: 520px 1fr;
          min-height: 580px;
          position: relative;
        }

        /* LEFT PANEL */
        .hero-left {
          padding: 36px 36px 40px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        .hero-title {
          font-family: 'Sora', sans-serif;
          font-size: 44px;
          font-weight: 800;
          line-height: 1.1;
          margin: 18px 0 8px 0;
          letter-spacing: -0.5px;
        }
        .title-underline {
          width: 52px;
          height: 3px;
          background: linear-gradient(90deg, #00c853, #00e676);
          border-radius: 2px;
          margin-bottom: 12px;
        }
        .hero-subtitle {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 28px;
          line-height: 1.5;
        }
        .hero-subtitle span { color: #00e676; font-weight: 600; }

        /* FORM CARD */
        .form-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          border-radius: 18px;
          padding: 24px;
        }
        .form-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .form-card-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 18px;
        }
        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .field-row {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .field-row:focus-within {
          border-color: rgba(0, 230, 118, 0.5);
        }
        .field-icon {
          padding: 0 14px;
          font-size: 16px;
          color: #00e676;
          background: rgba(0,230,118,0.06);
          height: 48px;
          display: flex;
          align-items: center;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .field-label {
          padding: 0 12px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          white-space: nowrap;
          min-width: 110px;
        }
        .field-select {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 13px;
          padding: 0 14px 0 0;
          height: 48px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          appearance: none;
        }
        .field-select option { background: #0d2137; color: white; }
        .field-arrow {
          padding-right: 14px;
          color: rgba(255,255,255,0.4);
          font-size: 12px;
        }

        .find-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(90deg, #00b341, #00e676);
          border: none;
          border-radius: 12px;
          padding: 14px;
          color: white;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          margin-top: 4px;
          letter-spacing: 0.2px;
          transition: opacity 0.2s, transform 0.1s;
        }
        .find-btn:hover { opacity: 0.92; transform: translateY(-1px); }
        .find-btn:active { transform: translateY(0); }

        .secure-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 11.5px;
          color: #00e676;
          margin-top: 10px;
          opacity: 0.8;
        }

        /* RIGHT IMAGE PANEL */
        .hero-right {
          position: relative;
          overflow: hidden;
        }
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .hero-bg-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(7, 24, 40, 1) 0%,
            rgba(7, 24, 40, 0.90) 20%,
            rgba(7, 24, 40, 0.75) 35%,
            rgba(7, 24, 40, 0.55) 45%,
            rgba(7, 24, 40, 0.35) 55%,
            rgba(7, 24, 40, 0.15) 65%,
            rgba(0,0,0,0) 80%
          );
          z-index: 1;
        }
        .quote-card {
          position: absolute;
          bottom: 28px;
          right: 28px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 18px 22px;
          max-width: 280px;
          z-index: 2;
        }
        .quote-icon {
          font-size: 28px;
          color: #00e676;
          line-height: 1;
          margin-bottom: 6px;
          font-family: Georgia, serif;
        }
        .quote-text {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 8px;
        }
        .quote-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
        }

        /* FEATURES BAR */
        .features-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 0 28px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-top: none;
          border-radius: 0 0 20px 20px;
          overflow: hidden;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .feature-item:last-child { border-right: none; }
        .feature-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(0,230,118,0.08);
          border: 1px solid rgba(0,230,118,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .feature-title {
          font-size: 13px;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          margin-bottom: 2px;
        }
        .feature-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          line-height: 1.4;
        }

        /* RESULTS */
        .results-section {
          padding: 36px 28px 40px;
        }
        .results-title {
          font-family: 'Sora', sans-serif;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 18px;
        }
        .results-title span { color: #00e676; }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .result-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(0,230,118,0.25);
          border-radius: 14px;
          padding: 18px 20px;
        }
        .result-card h3 {
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .result-card p {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 12px;
        }
        .apply-link {
          display: inline-block;
          background: linear-gradient(90deg, #00b341, #00e676);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 18px;
          border-radius: 8px;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
        }
        .no-results {
          color: rgba(255,255,255,0.4);
          font-size: 14px;
          padding: 20px 0;
        }
      `}</style>

      <div className="schemes-root">
        {/* TOP NAV */}
        <div className="top-nav">
          <div className="top-nav-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Top Schemes
          </div>
          <div className="top-nav-items">
            {topSchemes.map((s, i) => (
              <div className="top-nav-item" key={i}>
                {i > 0 && <div className="top-nav-dot" />}
                {s}
              </div>
            ))}
          </div>
          <div className="top-nav-arrow">›</div>
        </div>

        {/* MAIN CARD */}
        <div className="main-wrapper">
          <div className="main-card">

            {/* PORTAL HEADER */}
            <div className="portal-header">
              <div className="portal-brand">          
                <div>
                  <div className="portal-name">Yojnex</div>
                  <div className="portal-sub">Simplifying Government Schemes</div>
                </div>
              </div>
              <button className="back-btn" onClick={() => navigate("/")}
              >← Back to Home
              </button>
            </div>

            {/* HERO */}
            <div className="hero">
              {/* LEFT */}
              <div className="hero-left">
                <div style={{ marginTop: 8 }}>
                  <h1 className="hero-title">Scheme Assistance</h1>
                  <div className="title-underline" />
                  <p className="hero-subtitle">
                  Find the right scheme & <span>apply with ease</span>
                  </p>
                </div>

                <div className="form-card">
                  <div className="form-card-title">Tell us about your details</div>
                  <div className="form-card-sub">We'll suggest the best matching schemes</div>

                  <div className="form-fields">
                    {/* Land */}
                    <div className="field-row">
                      <div className="field-icon">🌾</div>
                      <div className="field-label">Land Holding</div>
                      <select className="field-select"
                        onChange={(e) => setForm({ ...form, land: e.target.value })}>
                        <option value="">Select land holding</option>
                        <option value="1">Less than 2 acres</option>
                        <option value="3">More than 2 acres</option>
                      </select>
                      <div className="field-arrow">▾</div>
                    </div>

                    {/* Income */}
                    <div className="field-row">
                      <div className="field-icon">₹</div>
                      <div className="field-label">Annual Income</div>
                      <select className="field-select"
                        onChange={(e) => setForm({ ...form, income: e.target.value })}>
                        <option value="">Select annual income</option>
                        <option value="100000">Below ₹2L</option>
                        <option value="300000">Above ₹2L</option>
                      </select>
                      <div className="field-arrow">▾</div>
                    </div>

                    {/* Category */}
                    <div className="field-row">
                      <div className="field-icon">👤</div>
                      <div className="field-label">Category</div>
                      <select className="field-select"
                        onChange={(e) => setForm({ ...form, category: e.target.value })}>
                        <option value="">Select category</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC/ST">SC/ST</option>
                      </select>
                      <div className="field-arrow">▾</div>
                    </div>

                    <button className="find-btn" onClick={checkEligibility}>
                      🔍 Find My Suitable Schemes
                    </button>
                    <div className="secure-note">
                      🔒 Your information is secure and confidential
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-right">
                <div className="hero-bg-image" style={{ backgroundImage: `url(${farmerImg})` }} />
                <div className="hero-bg-fade" />
                <div className="quote-card">
                  <div className="quote-icon">"</div>
                  <div className="quote-text">Empowering farmers,<br />Enriching the nation.</div>
                  <div className="quote-sub">– Together for a better tomorrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES BAR */}
        <div className="features-bar">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon-wrap">{f.icon}</div>
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-sub">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* RESULTS */}
        {checked && (
          <div className="results-section">
            <h2 className="results-title">
              <span>Eligible</span> Schemes
            </h2>
            {result.length === 0 ? (
              <p className="no-results">No eligible schemes found based on your inputs. Try adjusting your details.</p>
            ) : (
              <div className="results-grid">
                {result.map((s, i) => (
                  <div className="result-card" key={i}>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                    <a className="apply-link" href={s.link} target="_blank" rel="noreferrer">Apply Now →</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Schemes;