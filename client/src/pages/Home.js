import React from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  const schemes = [
    "Top Schemes",
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

  const popular = [
    {
      name: "PM Kisan Samman Nidhi",
      link: "https://pmkisan.gov.in/",  
    },
    {
      name: "PM Fasal Bima Yojana",
      link: "https://pmfby.gov.in/",
    },
    { 
      name: "Kisan Credit Card",
      link: "https://www.nabard.org/",
    },
    {
       name: "PM Krishi Sinchayee Yojana",
       link: "#",
  
    },
    {
       name: "Soil Health Card",
       link: "https://soilhealth.dac.gov.in",
  
    },
    {
      name: "e-NAM",
      link: "https://www.enam.gov.in",
  
    },
    {
      name: "PM-KUSUM", 
      link: "https://pmkusum.mnre.gov.in",
  
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&family=Inter:wght@400;500&display=swap');

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #020d18;
          color: white;
        }

        .page {
          background:
            radial-gradient(circle at 20% 20%, rgba(0,255,150,0.08), transparent 40%),
            radial-gradient(circle at 80% 0%, rgba(0,200,255,0.08), transparent 40%);
          min-height: 100vh;
        }

        .top-nav {
          display: flex;
          gap: 20px;
          padding: 14px 24px;
          overflow-x: auto;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nav-item {
          opacity: 0.7;
          font-size: 14px;
          white-space: nowrap;
        }

        .nav-item.active {
          color: #00e676;
          font-weight: 600;
        }

        .container {
          margin: 20px;
          border-radius: 20px;
          background: linear-gradient(180deg,#071828,#041220);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 24px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 700;
        }

        .sub {
          font-size: 12px;
          opacity: 0.6;
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
          grid-template-columns: 1.2fr 1fr;
          margin-top: 30px;
          gap: 30px;
        }

        .tag {
          color: #00e676;
          font-size: 13px;
        }

        h1 {
          font-family: 'Sora';
          font-size: 42px;
          line-height: 1.2;
        }

        h1 span {
          color: #00e676;
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
          bottom: 550px;
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
      `}</style>

      <div className="page">

        {/* NAV */}
        <div className="top-nav">
          {schemes.map((s, i) => (
            <div key={i} className={`nav-item ${i === 0 ? "active" : ""}`}>
              {s}
            </div>
          ))}
        </div>

        <div className="container">

          {/* HEADER */}
          <div className="header">
            <div>
              <div className="logo">🏛 Agri Support Portal</div>
              <div className="sub">Government of India Initiative</div>
            </div>
             <button className="login">Login / Register</button>
          </div>

          {/* HERO */}
          <div className="hero">
            <div>
              <p className="tag">🌿 Empowering Farmers • Enriching India</p>

              <h1>
                Empowering Farmers with <br />
                Government <span>Schemes</span> & <br />
                <span>Digital Support</span>
              </h1>

              <p className="desc">
                Discover the best government schemes tailored for your needs.
              </p>

              <div className="buttons">
              <button 
               className="primary"
               onClick={() => navigate("/schemes")}
              >
               Find My Suitable Schemes
              </button>

              <button 
               className="secondary"
               onClick={() => navigate("/schemes")}
              >
               Check Eligibility
              </button>
              </div>

              <p className="secure">🔒 100% Secure • Your data is safe</p>
            </div>

            <div className="quote-card">
                  <div className="quote-icon">"</div>
                  <div className="quote-text">Empowering farmers,<br />Enriching the nation.</div>
                  <div className="quote-sub">– Together for a better tomorrow</div>
                </div>
        
          </div>

          {/* FEATURES */}
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

          {/* POPULAR */}
          <div className="popular">
            <div className="pop-header">
              <h2>Popular Schemes</h2>
              <span>View All →</span>
            </div>

            <div className="grid">
              {popular.map((p, i) => (
                <div className="card" key={i}>
                  <div>🌱</div>
                  <h3>{p.name}</h3>
                  <p>Government support for farmers</p>
                  <a className="apply-link" href={p.link} target="_blank" rel="noreferrer">Apply Now →</a>
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