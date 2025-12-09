import React, { useState, useEffect } from "react";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 5000); // ⬅️ OPEN AFTER 5 SECONDS
  }, []);

  // CRM Submit Handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.form_name = "Pre-Register";
    data.website_url = window.location.href;

    console.log("📥 Form Submit:", data);

    try {
      const res = await fetch("https://satyam-kharghar.vercel.app/send-crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("📤 CRM Response:", result);

      alert("Form submitted successfully!");
      event.target.reset();
    } catch (err) {
      console.error("❌ Error sending CRM:", err);
      alert("Error submitting form");
    }
  };

  return (
    <>
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
          }}
        >
          <div
            style={{
              width: "320px",
              background: "#fff",
              borderRadius: "2px",
              padding: "24px 20px",
              position: "relative",
              boxShadow: "0px 0px 25px rgba(0,0,0,0.25)",
            }}
          >
            {/* CLOSE BUTTON */}
            <div
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                right: "12px",
                top: "12px",
                fontSize: "24px",
                cursor: "pointer",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              ✖
            </div>

            {/* HEADING */}
            <h2
              style={{
                textAlign: "center",
                fontSize: "24px",
                marginBottom: "4px",
                fontWeight: 700,
              }}
            >
              Enquire Now
            </h2>

       

            {/* ================= FORM ================= */}
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                style={{
                  width: "100%",
                  padding: "10px 4px",
                  border: "none",
                  borderBottom: "1px solid #CFCFCF",
                  fontSize: "14px",
                  outline: "none",
                  marginBottom: "16px",
                }}
              />

              {/* Mobile */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 10px",
                    borderBottom: "1px solid #CFCFCF",
                    fontSize: "14px",
                    gap: "6px",
                    width: "95px",
                  }}
                >
                  🇮🇳 <span>+91</span>
                </div>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile*"
                  required
                  style={{
                    flex: 1,
                    padding: "10px 4px",
                    border: "none",
                    borderBottom: "1px solid #CFCFCF",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email (Optional)"
                style={{
                  width: "100%",
                  padding: "10px 4px",
                  border: "none",
                  borderBottom: "1px solid #CFCFCF",
                  fontSize: "14px",
                  outline: "none",
                  marginBottom: "16px",
                }}
              />

              {/* Checkbox */}
              <label
                style={{
                  fontSize: "10px",
                  color: "#444",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "5px",
                  lineHeight: "14px",
                  marginBottom: "18px",
                }}
              >
                <input type="checkbox" required />
                <span>
                  I Consent to The Processing of Provided Data According To{" "}
                  <a style={{ color: "#0057ff" }}>Privacy Policy</a> |{" "}
                  <a style={{ color: "#0057ff" }}>Terms & Conditions</a>.
                </span>
              </label>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "11px",
                  background: "#000",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 700,
                  borderRadius: "10px",
                  cursor: "pointer",
                  border: "2px solid #2ecc71",
                  boxShadow: "0px 0px 2px #2ecc71 inset",
                  marginBottom: "10px",
                }}
              >
                Enquire Now
              </button>

              {/* OR */}
              {/* <p
                style={{
                  textAlign: "center",
                  margin: "6px 0",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Or
              </p> */}

              {/* WHATSAPP BUTTON */}
              {/* <style>
                {`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}
              </style>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "11px",
                  background: "#25D366",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    animation: "spin 3.5s linear infinite",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 2 .5 3.9 1.5 5.6L.5 23.5l6-1.6c1.7 1 3.6 1.6 5.5 1.6 6.3 0 11.5-5.2 11.5-11.5S18.3.5 12 .5zm0 21c-1.8 0-3.5-.5-5-1.4l-.4-.3-3.6.9 1-3.5-.2-.4C3 15.3 2.5 13.7 2.5 12 2.5 6.8 6.8 2.5 12 2.5S21.5 6.8 21.5 12 17.2 21.5 12 21.5zm5.2-7.1c-.3-.2-1.8-.9-2.1-1-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.6-2-.2-.3-.02-.5.13-.7.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17 0-.37 0-.57 0-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.48 1.9.82 2.64.9 3.58.76.57-.08 1.77-.72 2.03-1.42.25-.7.25-1.3.17-1.42-.08-.13-.28-.2-.58-.35z" />
                  </svg>
                </span>
                Connect On WhatsApp
              </a> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
