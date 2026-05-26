import React, { useEffect } from "react";
import { getCrops } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const fetchCrops = async () => {
    await getCrops();
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          🌾 Nimar Farming Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Scheme Assistant */}
          <div style={cardStyle}>
            <h2>🧾 Scheme Assistant</h2>
            <p>Find government schemes based on your profile.</p>
            <button style={primaryBtn} onClick={() => navigate("/schemes")}>Explore</button>
          </div>

          {/* Crop Doctor */}
          <div style={cardStyle}>
            <h2>🌱 Crop Doctor</h2>
            <p>Upload crop image and detect diseases.</p>
            <button style={primaryBtn} onClick={() => navigate("/crop-doctor")}>Check Crop</button>
          </div>

          {/* Mandi Prices */}
          <div style={cardStyle}>
            <h2>💰 Mandi Prices</h2>
            <p>Check latest crop prices in your area.</p>
            <button style={primaryBtn} onClick={() => navigate("/mandi")}>View Prices</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const primaryBtn = {
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "10px",
  cursor: "pointer",
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  textAlign: "center",
};

export default Home;