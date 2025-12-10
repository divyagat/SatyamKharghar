import React from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
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
    marginTop: "60px",
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
    textAlign: "center",
  };

  const linkStyle = {
    color: "#2563eb",
    margin: "0 18px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    transition: "all 0.3s",
    cursor: "pointer",
  };

  const handleHover = (e) => {
    e.currentTarget.style.color = "#f59e0b";
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.color = "#2563eb";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (

<>

    <div style={containerStyle}>
      <div style={cardStyle}>

        {/* Header */}
        <header style={headerStyle}>
          <h1 style={titleStyle}>Privacy Policy</h1>
          <p style={dateStyle}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* Content */}
        <section>
          <p style={paragraphStyle}>
            In our effort and dedication to preserving your data, we have created
            this comprehensive privacy policy in order to keep your interests and
            information protected on our website. This privacy policy is subject to
            changes without prior notice or consent. To stay updated about any revisions,
            please revisit and review the terms & conditions of this privacy policy
            from time to time.
          </p>

          <div style={sectionTitleStyle}>
            <span style={goldBarStyle}></span>
            Disclaimer
          </div>

          <p style={paragraphStyle}>
            This is not the official website of the developer or property; it belongs
            to an authorised channel partner for information purposes only. All rights
            for logos and images are reserved to the developer.
          </p>

          <p style={paragraphStyle}>
            This disclaimer (“Disclaimer”) applies to this website and all microsites
            and websites owned by us. By using or accessing this website you agree to
            the Disclaimer without any limitation.
          </p>

          <p style={paragraphStyle}>
            This website is under the process of updates. By accessing this website,
            the viewer confirms that the information including brochures and marketing
            collaterals on this website is solely for informational purposes only and
            should not be relied upon for making any booking/purchase in any project.
          </p>

          <p style={paragraphStyle}>
            Nothing on this website constitutes advertising, marketing, booking, selling,
            or an offer for sale, or an invitation to purchase a unit in any project.
            The company is not liable for any consequences of actions taken by the
            viewer relying on such material/information on this website.
          </p>
        </section>

        {/* Footer Links */}
        <div style={footerStyle}>
          <a
            href="/TermsConditions"
            style={linkStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Terms & Conditions
          </a>
          <a
            href="/CookiePolicy"
            style={linkStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Cookie Policy
          </a>
          <a
            href="/PrivacyPolicy"
            style={linkStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Privacy Policy
          </a>
        </div>

      </div>
    </div>
<Footer/>


   </>
  );
}
