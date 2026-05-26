const BASE_URL = "https://nimar-farming-app.onrender.com";

export const getCrops = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};


