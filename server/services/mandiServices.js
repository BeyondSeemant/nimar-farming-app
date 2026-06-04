const axios = require("axios");
const cache = require("../utils/cache");

/**
 * REAL-TIME MANDI SERVICE (PRODUCTION READY)
 * Uses data.gov.in API
 */

const formatCommodity = (crop) => {
  if (!crop) return "";
  if (crop.toLowerCase() === "soybean") return "SOYABEAN";
  return crop.toUpperCase();
};

const formatDistrict = (district) => {
  if (!district) return "";
  return district.toUpperCase();
};

const fetchFromSource = async (crop, district, state) => {
  try {
    const apiKey = process.env.DATA_GOV_API_KEY;
    const datasetId = process.env.DATA_GOV_DATASET_ID;

    if (!apiKey || !datasetId) {
      throw new Error("Missing DATA_GOV_API_KEY or DATA_GOV_DATASET_ID in .env");
    }

    const url = `https://api.data.gov.in/resource/${datasetId}`;

    const response = await axios.get(url, {
      timeout: 10000,
      params: {
        "api-key": apiKey,
        format: "json",
        limit: 2000,
      },
    });

    const records = response.data?.records || [];

    let filteredRecords = records;

    if (crop) {
      filteredRecords = filteredRecords.filter(
        (item) => item.commodity?.toLowerCase() === crop.toLowerCase()
      );
    }

    if (district) {
      filteredRecords = filteredRecords.filter(
        (item) => item.district?.toLowerCase() === district.toLowerCase()
      );
    }

    if (state) {
      filteredRecords = filteredRecords.filter((item) => {
        const stateValue = item.state || item.state_name;
        return stateValue?.toLowerCase() === state.toLowerCase();
      });
    }

    const results = filteredRecords.map((item) => ({
      name: item.market || item.market_name || "Unknown",
      min: item.min_price || item.minimum_price || 0,
      max: item.max_price || item.maximum_price || 0,
      modal: item.modal_price || 0,
    }));

    return results;
  } catch (err) {
    console.error("Live fetch failed:", err.message);
    return null;
  }
};

const fetchOptionsFromSource = async (selectedState) => {
  try {
    const apiKey = process.env.DATA_GOV_API_KEY;
    const datasetId = process.env.DATA_GOV_DATASET_ID;

    const url = `https://api.data.gov.in/resource/${datasetId}`;

    const response = await axios.get(url, {
      timeout: 10000,
      params: {
        "api-key": apiKey,
        format: "json",
        limit: 5000,
      },
    });

    let records = response.data?.records || [];
    // Always extract states from full dataset FIRST
    const statesSet = new Set();
    records.forEach((item) => {
      const stateValue = item.state || item.state_name || item.state_name_en;
      if (stateValue) statesSet.add(stateValue);
    });

    if (selectedState) {
      records = records.filter((item) => {
        const stateValue = item.state || item.state_name || item.state_name_en;
        return stateValue?.toLowerCase() === selectedState.toLowerCase();
      });
    }

    const cropsSet = new Set();
    const districtsSet = new Set();

    records.forEach((item) => {
      const stateValue = item.state || item.state_name || item.state_name_en;
      const districtValue = item.district || item.district_name || item.district_name_en;
      const cropValue = item.commodity;

      if (cropValue) cropsSet.add(cropValue);
      if (districtValue) districtsSet.add(districtValue);
    });

    console.log("OPTIONS DEBUG:", {
      states: statesSet.size,
      crops: cropsSet.size,
      districts: districtsSet.size,
    });

    return {
      states: Array.from(statesSet).sort(),
      crops: Array.from(cropsSet).sort(),
      districts: Array.from(districtsSet).sort(),
    };
  } catch (err) {
    console.error("Options fetch failed:", err.message);
    return { states: [], crops: [], districts: [] };
  }
};

const getMandiData = async (crop, district, state) => {
  const cacheKey = `${state}_${crop}_${district}`;

  const cached = cache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const liveData = await fetchFromSource(crop, district, state);

  if (liveData && liveData.length > 0) {
    cache.set(cacheKey, liveData);
    return liveData;
  }

  return [];
};

const getMandiOptions = async (state) => {
  const cacheKey = `mandi_options_${state || "all"}`;

  const cached = cache.get(cacheKey);
  if (cached && cached.states && cached.states.length > 0) return cached;

  const options = await fetchOptionsFromSource(state);

  if (options.crops.length > 0 || options.districts.length > 0) {
    cache.set(cacheKey, options);
  }

  return options;
};

module.exports = { getMandiData, getMandiOptions };