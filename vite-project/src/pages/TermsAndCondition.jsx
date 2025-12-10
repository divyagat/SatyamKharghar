import React from "react";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f5f5f7",
    padding: "60px 16px",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  const cardStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "32px",
    boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
    padding: "60px 40px",
    border: "1px solid #e0e0e0",
  };

  const headerStyle = {
    paddingBottom: "36px",
    marginBottom: "48px",
    borderBottom: "1px solid #e0e0e0",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "44px",
    fontWeight: "800",
    background: "linear-gradient(90deg,#2563eb,#facc15)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0",
    lineHeight: "1.2",
  };

  const dateStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "8px",
  };

  const paragraphStyle = {
    color: "#374151",
    lineHeight: "1.85",
    fontSize: "18px",
    marginBottom: "24px",
  };

  const sectionTitleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "16px",
    color: "#111827",
  };

  const goldBarStyle = {
    width: "10px",
    height: "36px",
    background: "linear-gradient(180deg, #facc15, #2563eb)",
    borderRadius: "4px",
    marginRight: "12px",
  };

  const footerStyle = {
    marginTop: "64px",
    paddingTop: "28px",
    borderTop: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const backToTopStyle = {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s",
  };

  const handleHover = (e) => {
    e.currentTarget.style.backgroundColor = "#f59e0b";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#2563eb";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (


    <>



      <div style={containerStyle}>
        <div style={cardStyle}>

          {/* Header */}
          <header style={headerStyle}>
            <h1 style={titleStyle}>Terms & Conditions</h1>
            <p style={dateStyle}>Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          {/* Content */}
          <section>
            <p style={paragraphStyle}>
              By using our website, you acknowledge abiding by the rules set out by
              us and agree to the collection and use of all such data that you may
              provide to, or through our website.
            </p>

            <p style={paragraphStyle}>
              In some instances, while you visit our website, you may not be
              required to give any personal information. But in certain cases, we
              must have your personal information to allow you access to some of
              the links or pages. These may request your name, e-mail ID, contact
              number, etc. The data provided by you is used to present relevant
              products, confirm acceptance of communication, or send updates. You
              may also request removal from our mailing list. We do not share your
              personal information with any third party.
            </p>

            <p style={paragraphStyle}>
              To ensure security during transfer of your personal information
              between client and server, encrypted protocols are used. We maintain
              limited access by employees and ensure confidentiality. Cookies may
              be used for safety, session flow, and personalization. Disabling
              cookies may limit certain website features.
            </p>

            <p style={paragraphStyle}>
              For any concerns regarding privacy statements or your interaction
              with our website, feel free to contact us.
            </p>

            {/* Disclaimer Section */}
            <div style={sectionTitleStyle}>
              <span style={goldBarStyle}></span>
              Disclaimer
            </div>

            <p style={paragraphStyle}>
              This is not the official website of the developer or property; it
              belongs to an authorised channel partner for informational purposes
              only. All rights for logos and images are reserved to the developer.
              By accessing this website, you agree to this Disclaimer without
              limitation.
            </p>

            <p style={paragraphStyle}>
              This website is under continuous updates. All information including
              brochures and marketing materials available here are for
              informational purposes only and should not be relied upon for making
              booking or purchase decisions. Nothing on this website constitutes
              an offer, marketing, booking, selling, or an invitation to purchase
              a property.
            </p>

            <p style={paragraphStyle}>
              The company is not responsible for any consequences of actions taken
              based on the material or information on this website.
            </p>
          </section>

          {/* Footer */}
          <footer style={footerStyle}>
            <small style={{ fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>
              If you have questions, feel free to contact us.
            </small>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={backToTopStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Back to Top
            </button>
          </footer>
        </div>
      </div>

      <Footer />
    </>
  );
}
