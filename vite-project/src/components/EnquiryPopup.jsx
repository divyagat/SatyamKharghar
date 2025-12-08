import React, { useState, useEffect } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  // Auto-open popup when page loads
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 300); // small delay for smooth appearance
  }, []);

  return (
    <>
      {/* ===== POPUP OVERLAY ===== */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            backdropFilter: "blur(2px)",
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* ===== POPUP BOX ===== */}
          <div
            style={{
              width: "360px",
              height: "auto",
              background: "#fff",
              borderRadius: "12px",
              padding: "32px",
              boxShadow: "0 0 45px rgba(0,0,0,0.25)",
              position: "relative",
              animation: "popupScale 0.32s ease",
            }}
          >
            {/* Close Button */}
            <div
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                right: "18px",
                top: "15px",
                fontSize: "24px",
                cursor: "pointer",
                color: "#000",
                fontWeight: 700,
                transition: "0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff3b3b")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              ×
            </div>

            {/* Heading */}
            <h2
              style={{
                textAlign: "center",
                marginBottom: "-30px",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              Enquire Now
            </h2>

            {/* Logos */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
                marginBottom: "25px",
                opacity: 0.85,
              }}
            >
              <img src="logo1.png" alt="" style={{ height: "32px" }} />
              <img src="logo2.png" alt="" style={{ height: "32px" }} />
              <img src="logo3.png" alt="" style={{ height: "32px" }} />
            </div>

            {/* ===== FORM ===== */}
            <form>
              {/* Name */}
              <div style={{ position: "relative", marginBottom: "16px" }}>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px 12px 42px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    fontSize: "18px",
                  }}
                >
                  👤
                </span>
              </div>

              {/* Mobile */}
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "95px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    padding: "12px",
                    fontSize: "15px",
                    textAlign: "center",
                    background: "#f8f8f8",
                  }}
                >
                  🇮🇳 +91
                </div>

                <input
                  type="tel"
                  placeholder="Mobile*"
                  required
                  style={{
                    flex: 1,
                    padding: "12px 15px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email (Optional)"
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              />

              {/* Checkbox */}
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  lineHeight: "18px",
                  marginBottom: "20px",
                  color: "#444",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" required style={{ marginRight: "6px" }} />
                I Consent to The Processing of Provided Data...
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#000",
                  color: "#fff",
                  border: 0,
                  borderRadius: "6px",
                  fontSize: "18px",
                  cursor: "pointer",
                  fontWeight: 600,
                  marginBottom: "0px",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Enquire Now
              </button>

              {/* OR */}
              <div
                style={{
                  textAlign: "center",
                  fontSize: "17px",
                  margin: "10px 0",
                  fontWeight: 500,
                }}
              >
                Or
              </div>

              {/* WhatsApp Button */}
              <a
                href="#"
                style={{
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                  padding: "12px",
                  background: "#25D366",
                  color: "#fff",
                  borderRadius: "6px",
                  fontSize: "18px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Connect On WhatsApp
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
