import React, { useState } from "react";

const CropDoctor = () => {
  const [form, setForm] = useState({
    crop: "",
    symptom: "",
  });

  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const diagnose = async (e) => {
    e.preventDefault();

    // If image exists → send to backend
    if (image) {
      const formData = new FormData();
      formData.append("file", image);

      try {
        console.log("Sending image to backend...");
        setLoading(true);

        const res = await fetch("http://localhost:5001/api/crops/crop-diagnose", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error("Server error: " + text);
        }

        const data = await res.json();
        console.log("AI RESPONSE:", data);

        if (!data || !data.disease) {
          throw new Error("Invalid response from AI");
        }

        setResult({
          crop: data.crop,
          diagnosis: data.disease,
          confidence: data.confidence,
          solution: data.solution,
          severity: data.severity,
          precautions: data.precautions
        });

      } catch (err) {
        console.error(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }

      return;
    }

    // Fallback manual logic
    let diagnosis = "No disease detected";
    let solution = "Keep monitoring the crop";
    let severity = "Low";
    let precautions = "Maintain proper irrigation and monitor crop regularly";

    if (form.crop === "Wheat") {
      if (form.symptom === "Yellow Leaves") {
        diagnosis = "Nitrogen Deficiency";
        solution = "Apply urea fertilizer in split doses";
        severity = "Medium";
        precautions = "Use balanced fertilizer and avoid over-irrigation";
      } else if (form.symptom === "Dry Leaves") {
        diagnosis = "Water Stress";
        solution = "Increase irrigation frequency";
        severity = "High";
        precautions = "Ensure timely watering and mulching";
      }
    }

    else if (form.crop === "Cotton") {
      if (form.symptom === "Spots") {
        diagnosis = "Leaf Spot Disease";
        solution = "Spray Carbendazim fungicide";
        severity = "Medium";
        precautions = "Avoid overhead irrigation and remove infected leaves";
      } else if (form.symptom === "Wilting") {
        diagnosis = "Bacterial Wilt";
        solution = "Remove infected plants and improve soil drainage";
        severity = "High";
        precautions = "Use disease-free seeds and proper drainage";
      }
    }

    else if (form.crop === "Soybean") {
      if (form.symptom === "Wilting") {
        diagnosis = "Root Rot";
        solution = "Use Trichoderma and avoid waterlogging";
        severity = "High";
        precautions = "Avoid waterlogging and treat soil before sowing";
      } else if (form.symptom === "Stunted Growth") {
        diagnosis = "Nutrient Deficiency";
        solution = "Apply balanced NPK fertilizer";
        severity = "Medium";
        precautions = "Test soil and apply required nutrients";
      }
    }

    else if (form.crop === "Rice") {
      if (form.symptom === "Yellow Leaves") {
        diagnosis = "Iron Deficiency";
        solution = "Apply ferrous sulfate spray";
        severity = "Medium";
        precautions = "Maintain proper pH and water level in field";
      }
    }

    else if (form.crop === "Maize") {
      if (form.symptom === "Stunted Growth") {
        diagnosis = "Zinc Deficiency";
        solution = "Apply zinc sulfate";
        severity = "Medium";
        precautions = "Use micronutrient fertilizers regularly";
      }
    }

    setResult({ diagnosis, solution, severity, precautions });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f8e9",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <h1>🌾 Crop Doctor</h1>
        <p>Get disease diagnosis and treatment suggestions</p>

        <form
          onSubmit={diagnose}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              setForm({ ...form, symptom: "" });
            }}
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <select
            value={form.symptom}
            onChange={(e) => setForm({ ...form, symptom: e.target.value })}
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            <option value="">Select Symptom</option>
            <option value="Yellow Leaves">Yellow Leaves</option>
            <option value="Spots">Spots on Leaves</option>
            <option value="Wilting">Wilting</option>
            <option value="Dry Leaves">Dry Leaves</option>
            <option value="Stunted Growth">Stunted Growth</option>
          </select>

          <button
            style={{
              padding: "12px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Diagnose"}
          </button>
        </form>

        {image && (
          <div style={{ marginTop: "15px" }}>
            <img
              src={URL.createObjectURL(image)}
              alt="crop"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        )}

        {result && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>🌿 Crop: {result.crop}</h3>
            <h3>🧠 Disease: {result.diagnosis}</h3>
            <p>📊 Confidence: {result.confidence}</p>
            <p>💊 Solution: {result.solution}</p>
            <p>⚠️ Severity: <strong>{result.severity}</strong></p>
            <p>🛡️ Precautions: {result.precautions}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropDoctor;