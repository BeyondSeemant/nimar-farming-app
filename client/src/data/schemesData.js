export const schemes = [

    // 🔵 CENTRAL SCHEMES
    
    {
      name: "PM Kisan Samman Nidhi",
      rule: (f) => Number(f.land) > 0,
      desc: "₹6000 per year given directly to farmers in 3 installments.",
      reason: "You own agricultural land",
      link: "https://pmkisan.gov.in",
    },
  
    {
      name: "PM Fasal Bima Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Insurance coverage for crop loss due to natural disasters.",
      reason: "All farmers growing crops are eligible",
      link: "https://pmfby.gov.in",
    },
  
    {
      name: "Kisan Credit Card (KCC)",
      rule: (f) => Number(f.land) > 0,
      desc: "Easy loan facility for farmers at low interest rates.",
      reason: "Farmers with land can apply for loans",
      link: "https://www.nabard.org",
    },
  
    {
      name: "PM Krishi Sinchai Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Provides irrigation support to improve water use efficiency.",
      reason: "You have agricultural land",
      link: "https://pmksy.gov.in",
    },
  
    {
      name: "Soil Health Card Scheme",
      rule: (f) => Number(f.land) > 0,
      desc: "Provides soil health reports to improve crop productivity.",
      reason: "Available to all farmers",
      link: "https://soilhealth.dac.gov.in",
    },
  
    {
      name: "National Agriculture Market (e-NAM)",
      rule: (f) => Number(f.land) > 0,
      desc: "Online platform to sell crops across India.",
      reason: "You can sell your produce digitally",
      link: "https://www.enam.gov.in",
    },
  
    {
      name: "Paramparagat Krishi Vikas Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Support for organic farming and certification.",
      reason: "Farmers interested in organic farming",
      link: "https://pgsindia-ncof.gov.in",
    },
  
    {
      name: "PM Kusum Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Subsidy for installing solar pumps and solar energy systems.",
      reason: "Farmers can benefit from solar irrigation",
      link: "https://pmkusum.mnre.gov.in",
    },
  
    {
      name: "Agriculture Infrastructure Fund",
      rule: (f) => Number(f.land) > 0,
      desc: "Financial support for building farm infrastructure.",
      reason: "Available for farmers and agri-entrepreneurs",
      link: "https://agriinfra.dac.gov.in",
    },
  
    {
      name: "Rashtriya Krishi Vikas Yojana",
      rule: (f) => Number(f.land) > 0,
      desc: "Supports agricultural development projects.",
      reason: "General support scheme for farmers",
      link: "https://rkvy.nic.in",
    },
  
    // 🟢 MP STATE SCHEMES
    
    {
      name: "MP Krishi Anudan Yojana",
      rule: (f) => f.state === "MP",
      desc: "Subsidy on agricultural equipment like tractors and tools.",
      reason: "You selected Madhya Pradesh",
      link: "https://dbt.mpdage.org",
    },
  
    {
      name: "Bhavantar Bhugtan Yojana (MP)",
      rule: (f) => f.state === "MP",
      desc: "Compensation for price difference of crops.",
      reason: "MP farmers get price support",
      link: "https://mp.gov.in",
    },
  
    {
      name: "MP Kisan Anudan Scheme",
      rule: (f) => f.state === "MP",
      desc: "Financial assistance for purchasing farm equipment.",
      reason: "Available for farmers in MP",
      link: "https://mpkrishi.mp.gov.in",
    },
  
    {
      name: "MP Solar Pump Scheme",
      rule: (f) => f.state === "MP",
      desc: "Subsidy for installing solar-powered irrigation pumps.",
      reason: "You are a farmer in MP",
      link: "https://mp.gov.in",
    },
  
    {
      name: "MP Crop Insurance Scheme",
      rule: (f) => f.state === "MP" && Number(f.land) > 0,
      desc: "State-level crop insurance support.",
      reason: "You grow crops in MP",
      link: "https://mp.gov.in",
    },
  
    // 🔴 SC/ST SPECIAL SCHEMES
    
    {
      name: "SC/ST Agriculture Support Scheme (MP)",
      rule: (f) => f.state === "MP" && (f.category === "SC" || f.category === "ST"),
      desc: "Extra subsidy and financial help for SC/ST farmers.",
      reason: "You belong to SC/ST category in MP",
      link: "https://mp.gov.in",
    },
  
    {
      name: "National SC/ST Farmer Support Scheme",
      rule: (f) => f.category === "SC" || f.category === "ST",
      desc: "Central support schemes for SC/ST farmers.",
      reason: "You belong to SC/ST category",
      link: "https://india.gov.in",
    },
  
    // 🟡 INCOME BASED
    
    {
      name: "Low Income Farmer Support Scheme",
      rule: (f) => Number(f.income) <= 200000,
      desc: "Special benefits for farmers with low income.",
      reason: "Your income is below ₹2 lakh",
      link: "https://india.gov.in",
    },
  
    {
      name: "Small Farmer Assistance Program",
      rule: (f) => Number(f.land) <= 2,
      desc: "Support for small and marginal farmers.",
      reason: "You have small land holding",
      link: "https://india.gov.in",
    },
  
    // 🟣 EXTRA
    
    {
      name: "Dairy Entrepreneurship Development Scheme",
      rule: (f) => Number(f.land) > 0,
      desc: "Support for dairy farming business.",
      reason: "Farmers can diversify income",
      link: "https://nabard.org",
    },
  
    {
      name: "National Beekeeping Scheme",
      rule: (f) => Number(f.land) > 0,
      desc: "Support for beekeeping and honey production.",
      reason: "Additional income opportunity",
      link: "https://nbb.gov.in",
    }
  
  ];