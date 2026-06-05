import React, { useState, useEffect } from "react";

const Mandi = () => {
  const [crop, setCrop] = useState("");
  const [district, setDistrict] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState({ crops: [], districts: [] });
  const [state, setState] = useState("");

  const fetchMandiData = async (selectedCrop, selectedDistrict) => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5001/api/mandi/live?crop=${selectedCrop}&district=${selectedDistrict}&state=${state}`
      );

      const result = await res.json();

      setData(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error("Error fetching mandi data:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchOptions = async (selectedState) => {
    try {
      const res = await fetch(
        `http://localhost:5001/api/mandi/options?state=${selectedState || ""}`
      );
      const result = await res.json();
      setOptions(result);
    } catch (err) {
      console.error("Error fetching options:", err);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
  
    setDistrict("");
    setCrop("");
  
    if (value) {
      fetchOptions(value);
    }
  };

  const handleCropChange = (e) => {
    const value = e.target.value;
    setCrop(value);
    if (value && district && state) {
      fetchMandiData(value, district);
    }
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setDistrict(value);

    if (value && crop && state) {
      fetchMandiData(crop, value);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f1f8e9", padding: "40px", fontFamily: "Arial" }}>
      <div style={{ maxWidth: "700px", margin: "auto" }}>
        <h1>💰 Mandi Prices</h1>
        <p>Check real-time crop prices in nearby mandis</p>

        {/* State Select */}
        <select
          onChange={handleStateChange}
          value={state}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%" }}
        >
          <option value="">Select State</option>
          {options.states?.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* District Select */}
        <select
          onChange={handleDistrictChange}
          value={district}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%" }}
        >
          <option value="">Select District</option>
          {options.districts.slice(0, 100).map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Crop Select */}
        <select
          onChange={handleCropChange}
          value={crop}
          style={{ padding: "10px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc", width: "100%" }}
        >
          <option value="">Select Crop</option>
          {options.crops.slice(0, 100).map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div style={{ marginTop: "20px" }}>
          {loading && <p>Loading mandi prices...</p>}

          {!loading && data.length === 0 && (
            <p>No data available. Select crop and district.</p>
          )}

          {data.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "10px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3>📍 {item.name}</h3>
              <p>Min Price: ₹{item.min}</p>
              <p>Max Price: ₹{item.max}</p>
              <p><b>Modal Price: ₹{item.modal}</b></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mandi;