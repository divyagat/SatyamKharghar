// index.js (Vercel Backend)
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// CRM HOOK URL
const CRM_URL =
  "https://connector.b2bbricks.com/api/Integration/hook/502104d3-402c-49ce-89c5-44fcc1344e67";

app.post("/send-crm", async (req, res) => {
  try {
    console.log("📥 Incoming React Data:", req.body);

    // 1️⃣ Randomization to avoid spam detection
    const safeData = {
      ...req.body,
      anti_spam_id: Date.now(),
      unique_hash: Math.random().toString(36).substring(2)
    };

    console.log("🛡 Anti-Spam Safe Request:", safeData);

    // 2️⃣ Add delay to avoid bot pattern
    await new Promise((r) => setTimeout(r, 500));

    // 3️⃣ Send to CRM with browser-like headers
    const crmRes = await axios.post(CRM_URL, safeData, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/142.0.0.0 Safari/537.36",
        Accept: "application/json",
        Origin: "https://newlaunchindia.in",
        Referer: "https://newlaunchindia.in/SatyamKharghar"
      },
      timeout: 10000
    });

    console.log("📤 CRM Response:", crmRes.data);

    res.json({
      success: true,
      crm_response: crmRes.data
    });
  } catch (err) {
    console.error("❌ CRM Error:", err.response?.data || err.message);

    res.status(500).json({
      success: false,
      error: err.response?.data || err.message
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});

module.exports = app;
