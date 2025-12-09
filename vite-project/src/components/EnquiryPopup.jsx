// EnquiryPopup.jsx
import React from "react";


export default function EnquiryPopup({ open, setOpen }) {
  const handleSubmit = async (event) => {


 const [open, setOpen] = useState(false);


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
      setOpen(false); // Close popup after submission
    } catch (err) {
      console.error("❌ Error sending CRM:", err);
      alert("Error submitting form");
    }
  };

  if (!open) return null; // Do not render if not open

  return (
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

        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}
