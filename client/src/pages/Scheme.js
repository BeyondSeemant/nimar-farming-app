import React, { useState } from "react";

const Schemes = () => {
  const [form, setForm] = useState({
    land: "",
    income: "",
    category: "",
    state: "",
  });

  const [result, setResult] = useState([]);
  const [rejected, setRejected] = useState([]);

  const schemes = [
    {
      name: "PM-KISAN",
      rule: (f) => Number(f.land) <= 2 && Number(f.income) <= 200000,
      desc: "₹6000/year direct income support",
      reason: "Small farmer with low income",
      link: "https://pmkisan.gov.in/",
    },
    {
      name: "Kisan Credit Card",
      rule: (f) => Number(f.land) > 0,
      desc: "Loan up to ₹3 lakh at low interest",
      reason: "All farmers eligible",
      link: "https://www.nabard.org/",
    },
    {
      name: "PM Fasal Bima Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Crop insurance against natural disasters",
      reason: "All farmers can insure crops",
      link: "https://pmfby.gov.in/",
    },
    {
      name: "MP Krishi Anudan Yojana",
      rule: (f) => f.state === "MP",
      desc: "Subsidy on farming equipment in MP",
      reason: "Available only for Madhya Pradesh farmers",
      link: "https://dbt.mpdage.org/",
    },
    {
      name: "SC/ST Farmer Subsidy",
      rule: (f) => f.category === "SC/ST",
      desc: "Extra subsidy benefits",
      reason: "Reserved category benefit",
      link: "https://agriculture.gov.in/",
    },
  ];

  const checkEligibility = (e) => {
    e.preventDefault();

    const eligible = [];
    const notEligible = [];

    schemes.forEach((s) => {
      if (s.rule(form)) {
        eligible.push(s);
      } else {
        let reason = "Not eligible";

        if (s.name === "PM-KISAN") {
          if (Number(form.land) > 2) reason = "Land exceeds 2 acres limit";
          else if (Number(form.income) > 200000) reason = "Income above ₹2 lakh";
        }

        else if (s.name === "Kisan Credit Card") {
          if (Number(form.land) <= 0) reason = "Requires minimum land ownership";
        }

        else if (s.name === "PM Fasal Bima Yojana") {
          if (Number(form.land) <= 0) reason = "No land for crop insurance";
        }

        else if (s.name === "MP Krishi Anudan Yojana") {
          if (form.state !== "MP") reason = "Only available in Madhya Pradesh";
        }

        else if (s.name === "SC/ST Farmer Subsidy") {
          if (form.category !== "SC/ST") reason = "Only for SC/ST category";
        }

        notEligible.push({ ...s, reason });
      }
    });

    setResult(eligible);
    setRejected(notEligible);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f1f8e9",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <div style={{ maxWidth: "700px", margin: "auto" }}>
      <h1>🧾 Scheme Assistant</h1>

      <form
        onSubmit={checkEligibility}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          placeholder="Land (in acres)"
          value={form.land}
          onChange={(e) => setForm({ ...form, land: e.target.value })}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          placeholder="Annual Income"
          value={form.income}
          onChange={(e) => setForm({ ...form, income: e.target.value })}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="">Select Category</option>
          <option value="General">General</option>
          <option value="OBC">OBC</option>
          <option value="SC/ST">SC/ST</option>
        </select>

        <select
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="">Select State</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="Other">Other</option>
        </select>

        <button style={{
          padding: "12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Check Eligibility
        </button>
      </form>

      <h2 style={{ marginTop: "20px" }}>Eligible Schemes</h2>

      {result.length === 0 ? (
        <p>No eligible schemes. Try different details.</p>
      ) : (
        result.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "15px",
              marginTop: "15px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            {i === 0 && (
              <div style={{ color: "green", fontWeight: "bold", marginBottom: "5px" }}>
                ⭐ Best Match
              </div>
            )}
            <h3 style={{ margin: "0 0 5px 0" }}>{s.name}</h3>
            <p style={{ margin: "5px 0" }}>{s.desc}</p>
            <small style={{ color: "gray" }}>{s.reason}</small>

            <br />

            <a
              href={s.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 12px",
                background: "#1976d2",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Apply Now
            </a>
          </div>
        ))
      )}

      <h2 style={{ marginTop: "30px" }}>Not Eligible Schemes</h2>

      {rejected.length === 0 ? (
        <p>All schemes matched.</p>
      ) : (
        rejected.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "12px",
              marginTop: "10px",
              background: "#ffe6e6",
              borderRadius: "8px",
            }}
          >
            <strong>{s.name}</strong>
            <div style={{ color: "red" }}>❌ {s.reason}</div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Schemes;