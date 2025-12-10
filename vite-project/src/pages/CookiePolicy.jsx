import React from "react";
import Footer from "../components/Footer";

export default function CookiePolicy() {
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

  const listStyle = {
    paddingLeft: "24px",
    marginBottom: "24px",
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

  const anchorStyle = {
    color: "#2563eb",
    textDecoration: "none",
  };

  return (



    <>




      <div style={containerStyle}>
        <div style={cardStyle}>

          {/* Header */}
          <header style={headerStyle}>
            <h1 style={titleStyle}>Cookie Policy</h1>
            <p style={dateStyle}>Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          {/* Content */}
          <section>
            <p style={paragraphStyle}>
              A cookie is a piece of software code that an internet website sends to your browser
              when you access information at that site. A cookie is stored as a simple text file
              on your computer or mobile device by a website’s server, and only that server can
              retrieve or read the contents of that cookie.
            </p>

            <p style={paragraphStyle}>
              Cookies let you navigate between pages efficiently as they store your preferences,
              and generally improve your experience. riverviewcityindia.com uses the following
              types of cookies to enhance your experience and interactivity:
            </p>

            <ol style={listStyle}>
              <li style={{ marginBottom: "12px" }}>
                <strong>Analytics cookies:</strong> For anonymously remembering your computer or
                mobile device when you visit our website to keep track of browsing patterns.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <strong>Service cookies:</strong> Help our website work efficiently by remembering
                your registration and login details, settings preferences, and keeping track of
                the pages you view.
              </li>
              <li>
                <strong>Non-persistent cookies (per-session cookies):</strong> Serve technical
                purposes of providing seamless navigation. These cookies do not collect personal
                information, and they are deleted as soon as you leave our website. They are stored
                in memory only during an active browser session and disappear once the browser is closed.
              </li>
            </ol>

            <p style={paragraphStyle}>
              You may note additionally that when you visit{" "}
              <a
                href="https://riverviewcityindia.com"
                target="_blank"
                rel="noopener noreferrer"
                style={anchorStyle}
              >
                https://riverviewcityindia.com
              </a>,
              you may be required to accept cookies. If you choose to refuse cookies, it is possible
              that the website may not function properly.
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
      <Footer />
    </>
  );
}
