import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        
        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <img
            src="./public/Images/logo.png"
            alt="Project Logo"
            className="img-fluid d-block mx-auto project-logo"
            style={{ width: "250px", maxWidth: "250px" }}
          />
        </a>

        {/* Toggle Button */}
        <div className="d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center responsive-nav">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                <i className="far fa-building mr-2"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#highlights">
                <i className="far fa-star mr-2"></i> Highlights
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                <i className="far fa-money-bill-alt mr-2"></i> Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#floor-plan">
                <i className="far fa-building mr-2"></i> Floor Plan
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#amenities">
                <i className="far fa-list-alt mr-2"></i> Amenities
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link ml-3" href="#gallery">
                <i className="far fa-image mr-2"></i> Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#connectivity">
                <i className="far fa-map mr-2"></i> Location
              </a>
            </li>

            <li className="nav-item on-rera">
              <a className="nav-link brand-logo">
                <img
                  src="/Images/Authorised AFFILIATE PARTNER.png"
                  alt="Affiliate Partner"
                  className="img-fluid"
                />
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Component-level CSS */}
      <style>{`
        .responsive-nav {
          font-size: 16px;
        }
        @media (max-width: 767px) {
          .responsive-nav {
            font-size: 14px;
            align-items: flex-start;
          }
        }
      `}</style>
    </nav>
  );
}

export default Header;
