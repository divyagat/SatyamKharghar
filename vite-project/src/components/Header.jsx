import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const nav = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");

    const handleOutsideClick = (event) => {
      if (
        nav &&
        toggler &&
        !nav.contains(event.target) &&
        !toggler.contains(event.target)
      ) {
        nav.classList.remove("show");
      }
    };

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) =>
      link.addEventListener("click", () => {
        if (nav) nav.classList.remove("show");
      })
    );

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">

        {/* LEFT SIDE: LOGO */}
        <a href="#home" className="navbar-brand d-flex align-items-center">
          <img
            src="/logo (3).png"     // 🔁 replace with your logo path
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        {/* TOGGLE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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

          </ul>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .navbar-logo {
          height: 48px;
          width: auto;
        }

        .responsive-nav {
          font-size: 16px;
        }

        @media (max-width: 767px) {
          .navbar-logo {
            height: 40px;
          }
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
