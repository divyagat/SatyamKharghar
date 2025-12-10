// EnquiryPopup.jsx
import React from "react";

const features = [
  { icon: "/Images/call-back.webp", label: "Instant Call Back" },
  { icon: "/Images/site-visit.png", label: "Free Site Visit" },
  { icon: "/Images/best-price.png", label: "Unmatched Price" },
];

export default function EnquiryPopup({ open, setOpen }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.form_name = "Pre-Register";
    data.website_url = window.location.href;

    try {
      await fetch("http://localhost:5000/send-crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Form submitted successfully!");
      event.target.reset();
      setOpen(false);
    } catch (err) {
      alert("Error submitting form");
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "15px",
      }}
    >
      <div
        style={{
          width: "650px",
          background: "#fff",
          padding: 0,
          borderRadius: "20px",
          position: "relative",
          boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
          display: "flex",
          overflow: "hidden",
          animation: "popupShow 0.35s ease",
        }}
      >
        {/* Close Button */}
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            right: "14px",
            top: "12px",
            fontSize: "22px",
            cursor: "pointer",
            color: "#444",
            zIndex: 9,
          }}
        >
          ✖
        </div>

        {/* LEFT SIDE */}
        <div
          style={{
            width: "200px",
            background: "#f4f4f4",
            padding: "30px 18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "22px",
            borderRight: "1px solid #e5e5e5",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              <img
                src={f.icon}
                alt={f.label}
                style={{
                  width: "28px",
                  height: "28px",
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.15))",
                }}
              />
              {f.label}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE FORM */}
        <div style={{ flex: 1, padding: "28px 30px" }}>
          {/* Center Logo */}
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <img
              src="/Images/logo.png"
              alt="Company Logo"
              style={{
                width: "160px",
                objectFit: "contain",
                filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.15))",
              }}
            />
          </div>

          <h2
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: 700,
              color: "#222",
              marginBottom: "18px",
            }}
          >
            Enquire Now
          </h2>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              style={input}
            />

            <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
              <div style={countryBox}>🇮🇳 +91</div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile*"
                required
                style={{ ...input, marginBottom: 0 }}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email (Optional)"
              style={input}
            />

            <label style={privacy}>
              <input type="checkbox" required style={{ marginTop: "1px" }} />
              <span>
                I agree to the{" "}
                <a href="#" style={link}>
                  Privacy Policy
                </a>{" "}
                &{" "}
                <a href="#" style={link}>
                  Terms
                </a>
              </span>
            </label>

            {/* BLACK PREMIUM BUTTON */}
            <button
              type="submit"
              style={button}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.55)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 14px rgba(0,0,0,0.45)";
              }}
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes popupShow {
            from { transform: translateY(10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

/* ---------------- CLEAN UI STYLES ---------------- */

const input = {
  width: "100%",
  padding: "13px 12px",
  marginBottom: "14px",
  borderRadius: "10px",
  border: "1px solid #dcdcdc",
  fontSize: "15px",
  background: "#fafafa",
  outline: "none",
};

const countryBox = {
  width: "90px",
  textAlign: "center",
  padding: "13px 0",
  borderRadius: "10px",
  border: "1px solid #dcdcdc",
  background: "#f4f4f4",
  fontWeight: 700,
};

const privacy = {
  fontSize: "12px",
  display: "flex",
  gap: "6px",
  marginBottom: "16px",
  color: "#666",
  lineHeight: "15px",
};

const link = {
  color: "#0057ff",
  textDecoration: "underline",
};

/* ⭐ BLACK LUXURY BUTTON */
const button = {
  width: "100%",
  padding: "14px",
  borderRadius: "40px",
  border: "none",
  background: "linear-gradient(90deg, #000000, #2b2b2b, #000000)",
  color: "#fff",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  textTransform: "uppercase",
  transition: "0.3s ease",
  boxShadow: "0 4px 14px rgba(0,0,0,0.45)",
};
