const express = require("express");
const cors = require("cors");

// FIX fetch error
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-crm", async (req, res) => {
  try {
    console.log("📥 React Data:", req.body);

    const crmRes = await fetch(
      "https://connector.b2bbricks.com/api/Integration/hook/9f622a16-2560-4903-9729-b2c18dc5405a",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const crmData = await crmRes.text();
    console.log("📤 CRM:", crmData);

    res.json({ success: true, crm_response: crmData });
  } catch (err) {
    console.error("❌ Backend Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
