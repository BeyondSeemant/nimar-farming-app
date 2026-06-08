import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import translations from "../translations";

const farmerImg = "/farmer.jpg";
const Home = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
const t = translations[lang]; 

  const schemes = [
    t.topSchemes,
    t.scheme1Name,
    t.scheme2Name,  
    t.scheme3Name,  
    t.scheme4Name,
    t.scheme5Name,  
    t.scheme6Name,
  ];

  const [loading, setLoading] = useState(false);

  const popular = [
    {
      name: t.scheme1Name,
      desc: t.scheme1Desc,
      link: "https://pmkisan.gov.in/",
    },
    {
      name: t.scheme2Name,
      desc: t.scheme2Desc,
      link: "https://pmfby.gov.in/",
    },
    {
      name: t.scheme3Name,
      desc: t.scheme3Desc,
      link: "https://www.nabard.org/",
    },
    {
      name: t.scheme4Name,
      desc: t.scheme4Desc,
      link: "#",
    },
    {
      name: t.scheme5Name,
      desc: t.scheme5Desc,
      link: "https://www.enam.gov.in",
    },
    {
      name: t.scheme6Name,
      desc: t.scheme6Desc,
      link: "https://pmkusum.mnre.gov.in",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&family=Inter:wght@400;500&display=swap');

        body, html {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: #03111f;
          color: white;
        }

        .schemes-root {
          background: #03111f;
          min-height: 100vh;
        }

        .page {
          background:
            radial-gradient(circle at 20% 20%, rgba(0,255,150,0.08), transparent 40%),
            radial-gradient(circle at 80% 0%, rgba(0,200,255,0.08), transparent 40%);
          min-height: 100vh;
        }

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


        .container {
          margin: 24px;
          border-radius: 20px;
          background-image: url('/farmer.jpg');
          background-size: cover;
          background-position: 0% 0%;
          background-repeat: no-repeat;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 24px 24px 35px 24px;
          position: relative;
          overflow: hidden;
          min-height: 500px;
          backdrop-filter: blur(2px);
          background-color: #03111f;
          background-clip: padding-box;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05) inset;
        }

        .container::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background:
            linear-gradient(
              to right,
              rgba(3,17,31,1) 0%,
              rgba(3,17,31,0.95) 20%,
              rgba(3,17,31,0.8) 38%,
              rgba(3,17,31,0.5) 65%,
              rgba(3,17,31,0.2) 80%,
              rgba(3,17,31,0) 100%
            ),
            linear-gradient(
              to top,
              rgba(3,17,31,0.95) 0%,
              rgba(3,17,31,0.85) 20%,
              rgba(3,17,31,0.6) 31%,
              rgba(3,17,31,0.3) 60%,
              rgba(3,17,31,0) 80%
            );
          z-index: 1;
        }

        .container > * {
          position: relative;
          z-index: 2;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 900;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .sub {
          font-size: 12px;
          opacity: 0.6;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1px;
        }
        
        .lang-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 16px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
         
        }

        .login {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 16px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 520px) 1.2fr;
          align-items: center;
          min-height: 580px;
          position: relative;
          overflow: hidden;
          gap: 0;
        }

        .hero-left {
          position: relative;
          z-index: 2;
          padding-right: 20px;
          padding-top: 40px;
        }

        .hero-right {
          position: relative;
          overflow: hidden;
          min-height: 580px;
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          /* Adjust second value (0% = top, 50% = center, 100% = bottom) to move image vertically */
          background-position: 50% 0%;
          z-index: 0;
          filter: brightness(0.75);
        }

        .hero-bg-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            
          );
          z-index: 1;
        }

        .tag {
          color: #00e676;
          font-size: 13px;
        }
         
        h1 {
          font-family: 'Sora', sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.5px;
           }
        
        h1 span {
          background: linear-gradient(90deg, #22c55e, #4ade80);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .desc {
          opacity: 0.7;
          margin-top: 12px;
        }

        .buttons {
          margin-top: 20px;
          display: flex;
          gap: 12px;
        }

        .primary {
          background: linear-gradient(90deg,#00b341,#00e676);
          border: none;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          color: white;
          cursor: pointer;
        }

        .secondary {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px 18px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        .secure {
          margin-top: 10px;
          font-size: 12px;
          color: #00e676;
        }

        .quote-card {
          position: absolute;
          bottom: 40px;
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

        .features-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: -10px 28px 0 2800x;
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
          padding: 18px 20px;
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

        .popular {
          margin-top: 30px;
        }

        .pop-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
          gap: 16px;
        }

        .card {
          background: rgba(255,255,255,0.04);
          padding: 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: 0.2s;
          position: relative;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: rgba(0,230,118,0.5);
        }

        .card h3 {
          font-size: 14px;
        }

        .card p {
          font-size: 12px;
          opacity: 0.6;
        }

        .arrow {
          margin-top: 10px;
          opacity: 0.5;
        }
        
        .apply-link {
          display: inline-block;
          margin-top: 10px;
          background: linear-gradient(90deg, #00b341, #00e676);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
          visibility: visible;
          opacity: 1;
        }

        @media(max-width: 900px){
          .hero {
            grid-template-columns: 1fr;
          }

          .features {
            grid-template-columns: 1fr 1fr;
          }
        }
          * {
          max-width: 100%;
           }
          body {
          background-color: #03111f !important;
        }

        #root {
          background: #03111f;
          min-height: 100vh;
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
            {schemes.map((s, i) => (
              <div className="top-nav-item" key={i}>
                {i > 0 && <div className="top-nav-dot" />}
                {s}
              </div>
            ))}
          </div>
          <div className="top-nav-arrow">›</div>
        </div>
        <div className="container">

          {/* HEADER */}
          <div className="header">
            <div>
              <div className="logo">Yojnex</div>
              <div className="sub">{t.subtitle}</div>
            </div>
            <div className="header-actions">
              <button
                className="login"
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
              >
                {lang === "en" ? "हिंदी" : "English"}
              </button>
              <button className="login">Login / Register</button>
            </div>
          </div>
          

          {/* HERO */}
      
          <div className="hero">
            <div className="hero-left">
              <p className="tag">{t.tagline}</p>

              <h1>
                {t.heroLine1}<br />
                {t.heroLine2} <span>{t.heroHighlight1}</span> <br />
                {t.heroLine3} <span>{t.heroHighlight2}</span>
              </h1>

              <p className="desc">{t.description}</p>

              <div className="buttons">
              <button
                className="primary"
                onClick={() => {
                  setLoading(true);
              
                  setTimeout(() => {
                    navigate("/schemes");
                    setLoading(false);
                  }, 600);
                }}
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1}}
              >
                {loading ? t.loading : t.checkEligibility}
              </button>
          
              </div>

              <p className="secure">{t.secure}</p>
            </div>

            <div className="hero-right">
              <div className="quote-card">
                <div className="quote-icon">"</div>
                <div className="quote-text">{t.quoteText}</div>
                <div className="quote-sub">{t.quoteSub}</div>
              </div>
            </div>
        
          </div>

          {/* POPULAR */}
          <div className="popular">
            <div className="pop-header">
              <h2>{t.popularSchemes}</h2>
              <span>{t.viewAll}</span>
            </div>

            <div className="grid">
              {popular.map((p, i) => (
                <div className="card" key={i}>
                  <div>🌱</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <a className="apply-link" href={p.link} target="_blank" rel="noreferrer">{t.applyNow}</a>
                  <div className="arrow">→</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;