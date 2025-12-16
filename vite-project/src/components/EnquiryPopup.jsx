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
      await fetch("https://satyam-kharghar-fcf4.vercel.app/send-crm", {
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
      <div className="popup-box">
        {/* Close Button */}
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✖
        </div>

        {/* LEFT SIDE */}
        <div className="left-box">
          {features.map((f, i) => (
            <div key={i} className="left-item">
              <img src={f.icon} alt={f.label} className="left-icon" />
              {f.label}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="right-box">
          <div style={{ textAlign: "center", marginBottom: "12px" }}>
            <img src="/Images/logo.png" alt="Logo" className="form-logo" />
          </div>

          <h2 className="form-title">Enquire Now</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name*" required className="input" />

            <div className="mobile-row">
              <div className="country-box">🇮🇳 +91</div>
              <input type="tel" name="mobile" placeholder="Mobile*" required className="input" />
            </div>

            <input type="email" name="email" placeholder="Email (Optional)" className="input" />

            <label className="privacy">
              <input type="checkbox" required />
              <span>
                I agree to the{" "}
                <a href="#" className="link">Privacy Policy</a> &{" "}
                <a href="#" className="link">Terms</a>
              </span>
            </label>

            <button type="submit" className="submit-btn">Enquire Now</button>
          </form>
        </div>
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
        .popup-box {
          width: 650px;
          background: #fff;
          border-radius: 20px;
          position: relative;
          box-shadow: 0 18px 45px rgba(0,0,0,0.35);
          display: flex;
          overflow: hidden;
          animation: popupShow 0.35s ease;
        }

        .close-btn {
          position: absolute;
          right: 14px;
          top: 12px;
          font-size: 22px;
          cursor: pointer;
          color: #444;
          z-index: 99;
        }

        .left-box {
          width: 200px;
          background: #f4f4f4;
          padding: 30px 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 22px;
          border-right: 1px solid #e5e5e5;
        }

        .left-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
        }

        .left-icon {
          width: 28px;
          height: 28px;
        }

        .right-box {
          flex: 1;
          padding: 28px 30px;
        }

        .form-logo {
          width: 160px;
          object-fit: contain;
        }

        .form-title {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .input {
          width: 100%;
          padding: 13px 12px;
          margin-bottom: 14px;
          border-radius: 10px;
          border: 1px solid #dcdcdc;
          background: #fafafa;
          font-size: 15px;
        }

        .mobile-row {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }

        .country-box {
          width: 90px;
          text-align: center;
          padding: 13px 0;
          border-radius: 10px;
          border: 1px solid #dcdcdc;
          background: #f4f4f4;
          font-weight: 700;
        }

        .privacy {
          font-size: 12px;
          display: flex;
          gap: 6px;
          margin-bottom: 16px;
          color: #666;
        }

        .link {
          color: #0057ff;
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 40px;
          border: none;
          background: linear-gradient(90deg, #000, #2b2b2b, #000);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(0,0,0,0.45);
          transition: 0.3s ease;
        }

        .submit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.55);
        }

        /* ---------- MOBILE RESPONSIVE FIX ---------- */
        @media (max-width: 600px) {
          .popup-box {
            width: 100%;
            flex-direction: column;
            border-radius: 14px;
          }

          .left-box {
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            padding: 18px 10px;
            gap: 10px;
            border-right: none;
            border-bottom: 1px solid #e5e5e5;
          }

          .left-item {
            flex-direction: column;
            font-size: 12px;
            gap: 6px;
          }

          .left-icon {
            width: 26px;
            height: 26px;
          }

          .right-box {
            padding: 20px 18px;
          }

          .form-title {
            font-size: 18px;
          }

          .input {
            padding: 11px;
            font-size: 14px;
          }

          .country-box {
            width: 75px;
            padding: 11px 0;
            font-size: 13px;
          }

          .mobile-row {
            gap: 6px;
          }

          .submit-btn {
            padding: 13px;
            font-size: 15px;
          }
        }

        @keyframes popupShow {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        `}
      </style>
    </div>
  );
}
