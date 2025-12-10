// import React from 'react';
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EnquiryPopup from "../components/EnquiryPopup";

function Hero() {
  useEffect(() => {
    if (window.$) {
      $(".your-slider").slick();
    }
  }, []);

  const handleSubmit = async (event, formName) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.form_name = formName;
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
    } catch (err) {
      console.error("❌ Error sending CRM:", err);
      alert("Error submitting form");
    }
  };



  //  export default function AmenitiesCarousel() {
  const amenities = [
    { img: "KidsPlayArea.webp", label: "KIDS PLAY AREA" },
    { img: "Parking.webp", label: "PARKING" },
    { img: "Sitting Area (1).webp", label: "SITTING AREA" },
    { img: "Out in the Nature (1).webp", label: "OUT IN THE NATURE" },
    { img: "Pet Park.webp", label: "PET PARK" },
    { img: "Swing set.webp", label: "SWING SET" },

  ];


  const carouselRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
      }
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  const sectionStyle = { padding: "40px 20px", textAlign: "center" };
  const titleStyle = { fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" };
  const carouselContainerStyle = { position: "relative" };
  const carouselWrapperStyle = { display: "flex", overflowX: "auto", scrollBehavior: "smooth", gap: "20px", paddingBottom: "10px" };
  const rowStyle = { display: "flex", gap: "20px" };
  const cardStyle = { position: "relative", minWidth: "350px", height: "250px", flex: "0 0 auto", borderRadius: "10px", overflow: "hidden" };
  const imgStyle = { width: "100%", height: "100%", objectFit: "cover", display: "block" };
  const labelLeftStyle = { position: "absolute", bottom: "8px", left: "8px", background: "rgba(0,0,0,0.7)", color: "#fff", padding: "5px 10px", fontSize: "0.85rem", fontWeight: "bold", borderRadius: "4px" };
  const labelRightStyle = { position: "absolute", bottom: "8px", right: "8px", background: "rgba(0,0,0,0.5)", color: "#fff", padding: "3px 6px", fontSize: "0.7rem", borderRadius: "4px" };
  const arrowStyle = { fontSize: "2rem", cursor: "pointer", userSelect: "none", position: "absolute", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.3)", color: "#fff", borderRadius: "50%", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 };
  const leftArrowStyle = { ...arrowStyle, left: "0" };
  const rightArrowStyle = { ...arrowStyle, right: "0" };

  // Split amenities into rows of 3
  const rows = [];
  for (let i = 0; i < amenities.length; i += 3) {
    rows.push(amenities.slice(i, i + 3));
  }

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true); // auto open after 5s
      console.log("Auto opening popup after 5s");
    }, 5000);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="main-container d-flex">

      {/* Popup component */}
      <EnquiryPopup open={open} setOpen={setOpen} />
      <main className="left-section">
        <div className="page-wrapper">
          {/* Top Section */}
          <section id="home" style={{ position: "relative" }}>
            <div className="container-fluid" style={{ position: "relative" }}>

              {/* LEFT OVERLAY INFO CARD */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "3%",
                  transform: "translateY(-50%)",
                  zIndex: 20,
                  width: "100%",
                  maxWidth: "360px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px 22px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.20)",
                }}
              >
                {/* NEW LAUNCH TAG */}
                <div
                  style={{
                    background: "Black",
                    color: "#fff",
                    padding: "6px 18px",
                    width: "fit-content",
                    borderRadius: "12px",
                    margin: "0 auto 14px",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  NEW LAUNCH
                </div>

                {/* TITLE */}
                <h1
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "28px",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                    background: "linear-gradient(90deg, #2C1363, #3A1F78)", // Dark Blue-Purple Gradient
                    WebkitBackgroundClip: "text",
                    color: "black",
                    text: "Black",
                  }}
                >
                  SATYAM CODENAME SHOWSTOPPER
                </h1>

                <h3
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: 500,
                    margin: "0 0 5px",
                  }}
                >
                  At Kharghar
                </h3>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "#444",
                    marginBottom: "16px",
                  }}
                >
                  By Satyam Developers
                </p>

                {/* GREY BOX */}
                <div
                  style={{
                    background: "#f1f1f1",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                >
                  {[
                    ["Land Parcel", "3.25 Acre"],
                    ["Floors", "G+31 Storeys"],
                    ["Possession", "2027"],
                  ].map(([label, value], i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px 0",
                        fontSize: "15px",
                      }}
                    >
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>

                {/* BLUE EOI BOX */}
                <div
                  style={{
                    border: "2px dashed #3A1F78",
                    background: "#EFEAFB",
                    padding: "14px",
                    textAlign: "center",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      color: "Black",
                      fontSize: "16px",
                    }}
                  >
                    EOI Starts From 2 Lakhs
                  </p>

                  {/* <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "15px",
                      color: "#3A1F78",
                    }}
                  >
                    55 Acres Mixed Use Project
                  </p> */}
                </div>

                {/* PRICE */}
                <p style={{ textAlign: "center", margin: "0 0 6px", fontWeight: 500 }}>
                  Premium 2, 3 & 4 BHK Homes
                </p>

                <div style={{ textAlign: "center" }}>
                  <span style={{ color: "#3A1F78", fontSize: "22px", fontWeight: 700 }}>
                    ₹
                  </span>{" "}
                  <span style={{ color: "#3A1F78", fontSize: "26px", fontWeight: 800 }}>
                    2.40 Cr*
                  </span>{" "}
                  <span style={{ fontSize: "18px" }}>Onwards</span>
                </div>

                {/* CTA BUTTON */}
                <div style={{ textAlign: "center", marginTop: "18px" }}>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    style={{
                      background: "black",
                      color: "#fff",
                      padding: "12px 20px",
                      borderRadius: 30,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Enquire Now
                  </button>


                </div>
              </div>


              {/* CAROUSEL */}
              <div
                id="banner-carousel"
                className="carousel slide d-block"
                data-bs-ride="carousel"
                style={{ position: "relative", zIndex: 10 }}
              >
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="https://showstopper-kharghar.site/Raheja/img/webp/slider2.webp" />
                  </div>

                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://showstopper-kharghar.site/Raheja/img/webp/slider1.webp" />
                  </div>

                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://satyammetrocodenameshowstopper.com/assets/img/banner1.jpg" />
                  </div>
                </div>
                <div className="slide-btn">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#banner-carousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#banner-carousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>

              </div>

            </div>
          </section>

          <div className="sec1 mob-form d-sm-block d-md-none d-lg-none">
            <div className="call-back-section text-center mb-3 pb-3 border-bottom">
              <h4 className="mb-0">Pre-Register here for Best Offers</h4>
            </div>
            <div className="form-section">
              <form
                className="text-center"
                name="Pre-Register"
                method="post"
                action="sendlead.php"
                onSubmit={(e) => handleSubmit(e, 'Pre-Register')}
              >
                <input type="hidden" name="iso_code" value="" />
                <input type="hidden" name="mobileExt" value="" />
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Name here..."
                    name="name"
                    required
                  />
                  <span className="error">Name field is required</span>
                </div>
                <div className="form-group mb-4">
                  <input
                    type="tel"
                    id="mobile"
                    className="form-control phone"
                    placeholder="Phone Number"
                    name="mobile"
                    required
                  />
                  <span className="error">Mobile field is required</span>
                </div>
                <div>
                  <input
                    type="hidden"
                    name="form_name"
                    id="form_name1"
                    className="form-control form_name"
                    value="Pre-Register Mobile"
                  />
                  <input
                    type="hidden"
                    id="website_url1"
                    className="website_url"
                    name="website_url"
                  />
                </div>
                <div
                  className="form-group acceptance mb-3"
                  style={{ fontSize: '10px' }}
                >
                  <label className="form-check-label text-start">
                    <input type="checkbox" defaultChecked className="form-check-input" />
                    <span className="text on-rera">
                      I Consent to The Processing of Provided Data According To{' '}
                      <a
                        href="/TermsAndCondition"
                        style={{
                          color: "#007bff",
                          textDecoration: "none",
                          fontWeight: "500",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy | Terms & Conditions | Cookie Policy
                      </a>

                      , I Authorize Globe Pride Realty and its representatives to Call, SMS, Email or WhatsApp Me About Its Products
                      and Offers. I acknowledge that the project I am enquiring about has not yet
                      received RERA clearance. This Consent Overrides Any Registration For DNC/NDNC.
                    </span>
                    <span className="text non-rera">
                      Please be informed that this website is not intended to facilitate any sales
                      transactions. I understand and acknowledge that the project I am interested in
                      hasn't yet secured RERA clearance. The
                      primary purpose of this website is to generate interest and gather information.
                      By providing my data, I consent to its use in accordance with the
                      <a
                        href="/PrivacyPolicy"
                        style={{ color: '#007bff' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {' '}
                        Privacy Policy | Terms & Conditions | Cookie Policy
                      </a>

                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  data-id="Pre-Register Mobile"
                  className="custom-btn data-id-btn on-rera"
                >
                  <span className="enquireNowBtn">Pre-Register Now</span>
                </button>

                <a href="/EnquiryPopup">
                  <button
                    type="submit"
                    onClick={() => setOpen(true)}
                    data-id="Pre-Register Mobile"
                    className="custom-btn data-id-btn non-rera"
                  >
                    <span className="enquireNowBtn">Express Your Interest</span>
                  </button>
                </a>


              </form>
            </div>
          </div>







          {/* Highlight section */}
          <section className="sec2" id="highlights">
            <div className="container mx-auto">
              <h1 className="section-title">Satyam Codename Showstopper - Highlights</h1>
              <div className="row">
                {[
                  'High Rise G+31 Storey Tower',
                  'In the Peace & Tranquil of Kharghar',
                  'Italian Fashion & Luxury Home Icon First Time In India',
                  'Get Ready To Live & Experience The Italian Glitz',
                  'The Most Awaited Italian Fashion & Luxury Home Icon Launch',
                  'Italian Artistry Comes Together With Indian Ascent',
                ].map((text, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-4 col-sm-12 mb-3"
                  >
                    <div className="highlightData">
                      <div className="iconBox">
                        <i className="fa-solid fa-check-double"></i>
                      </div>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Overview section */}
          <section className="sec1" id="overview">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-sm-12">
                  <div className="overview-data">
                    <h1>About Satyam Codename Showstopper</h1>
                    <p className="overview-info">
                      Satyam Codename Showstopper is an upcoming signature landmark near Shilp Chauk
                      in Kharghar, Navi Mumbai. The exceptionally designed elevation will present 2
                      BHK, 3 BHK, and 4 BHK super spacious and luxurious apartments. Each apartment
                      features an expansive layout, huge decks, and an optimal space for the wardrobe.
                      The apartments are designed to offer maximum space and ventilation in every
                      room. The huge decks offer a space to relish the surrounding views. This lavish
                      gated community features multiple levels of parking and a range of amenities
                      like a multipurpose court, swimming pool, indoor games zone, amphitheatre, kids’
                      play area, gymnasium, and more. It also has several retail avenues at the ground
                      level.
                    </p>
                    <p>
                      <span className="moreText" data-hit="more-overview">
                        Situated in the upscale location of Sector 20 in Kharghar, it is close to
                        some of the best facilities in the vicinity. They are Global International
                        School, Ryan International School, Apeejay School, Alpha One Multispeciality
                        Hospital, Polaris Hospital, Medicover Hospital, Kharghar Valley Golf Course,
                        Dmart, ISKCON Temple, Little World Mall, and Central Park. The upcoming
                        International Corporate Park is in the proximity of this residence. The Sion
                        Panvel Highway and Kharghar Railway Station provide wider connectivity
                        towards Mumbai and Panvel. Kharghar Village metro station is within walking
                        distance of your home. The Navi Mumbai International Airport is just a
                        30-minute drive from here. So, Satyam Codename Showstopper is the
                        anticipated address in Kharghar for a high-standard lifestyle.
                      </span>
                      <span
                        data-target="-overview"
                        className="button moreBtn viewmore"
                        style={{ color: '#1773b5' }}
                      >
                        Read more <i className="fa fa-chevron-down"></i>
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="custom-btn data-id-btn on-rera"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-bs-whatever="Enquire Now"
                      data-id="Brochure"
                    >
                      <span className="enquireNowBtn">
                        <img
                          src="/Images/download.gif"
                          className="img-fluid icon_sz me-2"
                          alt="Download"
                        />
                        Request Brochure
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="custom-btn data-id-btn non-rera"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-bs-whatever="Enquire Now"
                      data-id="Brochure"
                    >
                      <span className="enquireNowBtn">Express Your Interest</span>
                    </button>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-sm-12 text-center ps-0 pe-0">
                  <img
                    src="/Images/About.webp"
                    width="100%"
                    className="data-id-btn"
                    data-id="Project Video"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </section>



          {/* Project Video Section */}
          <section
            style={{
              padding: "60px 0",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <div className="container">

              {/* Download Brochure Button */}
              <button
                onClick={() => setOpen(true)}
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "2px solid #b8860b",
                  color: "#b8860b",
                  padding: "10px 22px",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
              >
                
                Request for Download Brochure
              </button>

              {/* Heading */}
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  marginBottom: "25px",
                  color: "#b8860b",
                }}
              >
                Project Video
              </h2>

              {/* Video Box */}
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              >
                <source src="/Video/showstopper.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

            </div>
          </section>




          {/* Pricing section */}
          <section className="sec1" id="pricing">
            <div className="container sec-pd sec-price">
              <div className="row gx-md-5">
                <div className="col-12">
                  <h1 className="section-title on-rera">
                    Satyam Codename Showstopper - Area &amp; Pricing
                  </h1>
                  <h1 className="section-title non-rera">Tentative Area & Pricing</h1>
                  <table className="table table-borderless table-striped table-pricing text-center">
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Carpet Area</th>
                        <th scope="col">Price ( Onwards )</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: '2 BHK',
                          area: '900 - 1000 Sq.Ft.',
                          price: '₹ 2.40 - 2.65 Cr*',
                        },
                        {
                          type: '3 BHK Suite Luxe',
                          area: '1400 - 1550 Sq.Ft.',
                          price: '₹ 3.5 - 3.8 Cr*',
                        },
                        {
                          type: '3 BHK Suite Couture',
                          area: '1500 - 1650 Sq.Ft.',
                          price: '₹ 3.8 - 4.10 Cr*',
                        },
                        {
                          type: '4 BHK Suite Atelier',
                          area: '2300 - 2500 Sq.Ft.',
                          price: '₹ 5.4 - 6 Cr*',
                        },
                      ].map((item, index) => (
                        <tr key={index}>
                          <td className="price">{item.type}</td>
                          <td>{item.area}</td>
                          <td className="price">{item.price}</td>
                          <td>
                            <a
                              href="#"
                              className="btn text-white my-1 custom-btn"
                              data-bs-target="#enquire-modal"
                              data-bs-toggle="modal"
                            >
                              <span className="enquireNowBtn" onClick={() => setOpen(true)} >Complete Costing Details</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Floor Plan section */}
          <section className="sec2" id="floor-plan">
            <div className="container">
              <div className="row">
                <div className="col-md-6 layout-plan text-center">
                  <div>
                    <h1 className="section-title on-rera master_plan_title">
                      Master Plan Layout
                    </h1>
                    <h1 className="section-title non-rera mb-4">
                      Tentative Master Plan Layout
                    </h1>
                  </div>
                  <figure
                    className="unit-plan-figure"
                    data-bs-toggle="modal"
                    data-bs-target="#enquire-modal"
                    data-bs-whatever="Enquire Now"
                    data-id="Unit Layout Plan"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src="/Images/MasterPlan.webp"
                      alt="Master Plan"
                      className="img-fluid unit_plan_img"
                    />
                    <figcaption className="unit-overlay">
                      <h3 className="unit-title">REQUEST MASTER PLAN LAYOUT</h3>
                      <span className="hover-btn" onClick={() => setOpen(true)} >ENQUIRE NOW</span>
                    </figcaption>
                  </figure>
                  <div className="btn_box text-center">
                    <a
                      href="#"
                      className="btn mt-4 custom-btn data-id-btn on-rera mx-auto"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-bs-whatever="Enquire Now"
                      data-id="Master Layout Plan"
                    >
                      <span className="enquireNowBtn" onClick={() => setOpen(true)} >Request Master Layout Plan</span>
                    </a>
                    <a
                      href="#"
                      className="btn mt-4 custom-btn data-id-btn non-rera mx-auto"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-bs-whatever="Enquire Now"
                      data-id="Master Layout Plan"
                    >
                      <span className="enquireNowBtn" onClick={() => setOpen(true)} >Express Your Interest</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 layout-plan text-center">
                  <div>
                    <h1 className="section-title on-rera unit_plan_title">
                      Unit Plan Layout
                    </h1>
                    <h1 className="section-title non-rera mb-4">
                      Tentative Unit Plan Layout
                    </h1>
                  </div>
                  <figure
                    className="unit-plan-figure"
                    data-bs-toggle="modal"
                    data-bs-target="#enquire-modal"
                    data-bs-whatever="Enquire Now"
                    data-id="Unit Layout Plan"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src="/Images/UnitPlan.webp"
                      alt="Unit Plan"
                      className="img-fluid unit_plan_img"
                    />
                    <figcaption className="unit-overlay">
                      <h3 className="unit-title">REQUEST UNIT PLAN LAYOUT</h3>
                      <span className="hover-btn" onClick={() => setOpen(true)} >ENQUIRE NOW</span>
                    </figcaption>
                  </figure>
                  <div className="btn_box text-center">
                    <a
                      href="#"
                      className="btn mt-4 custom-btn data-id-btn on-rera mx-auto"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-bs-whatever="Enquire Now"
                      data-id="Unit Layout Plan"
                    >
                      <span className="enquireNowBtn" onClick={() => setOpen(true)} >Request Unit Layout Plans</span>
                    </a>
                    <a
                      href="#"
                      className="btn mt-4 custom-btn data-id-btn non-rera mx-auto"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-bs-whatever="Enquire Now"
                      data-id="Unit Layout Plan"
                    >
                      <span className="enquireNowBtn" onClick={() => setOpen(true)}>Express Your Interest</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities section */}
          <section style={sectionStyle}>
            <h1 style={titleStyle}>Satyam Codename Showstopper - Luxurious Amenities</h1>
            <div style={carouselContainerStyle}>
              <div style={leftArrowStyle} onClick={scrollLeft}>&#8592;</div>
              <div style={rightArrowStyle} onClick={scrollRight}>&#8594;</div>
              <div style={carouselWrapperStyle} ref={carouselRef}>
                {rows.map((row, rowIndex) => (
                  <div style={rowStyle} key={rowIndex}>
                    {row.map((amenity, index) => (
                      <div style={cardStyle} key={index}>
                        <img src={`/Images/${amenity.img}`} alt={amenity.label} style={imgStyle} />
                        <div style={labelLeftStyle}>{amenity.label}</div>
                        <div style={labelRightStyle}>Artistic Impression</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Amenities section */}
          {/* <section style={sectionStyle}>
            <div style={carouselContainerStyle}>
              <div style={leftArrowStyle} onClick={scrollLeft}>&#8592;</div>
              <div style={rightArrowStyle} onClick={scrollRight}>&#8594;</div>
              <div style={carouselWrapperStyle} ref={carouselRef}>
                {rows.map((row, rowIndex) => (
                  <div style={rowStyle} key={rowIndex}>
                    {row.map((amenity, index) => (
                      <div style={cardStyle} key={index}>
                        <img src={`/Images/${amenity.img}`} alt={amenity.label} style={imgStyle} />
                        <div style={labelLeftStyle}>{amenity.label}</div>
                        <div style={labelRightStyle}>Artistic Impression</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Gallery section */}




          <section
            className="sec2"
            id="gallery"
            style={{ padding: "60px 0" }}
          >
            <div className="container wow fadeInUp">
              <h1
                className="section-title"
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  fontSize: "38px",
                  fontWeight: "700",
                  color: "#222",
                }}
              >
                Project Gallery
              </h1>

              <div className="content-gallery">
                <div
                  className="gallery js-gallery"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "22px",
                  }}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="gallery-item">
                      <div
                        className="gallery-img-holder js-gallery-popup"
                        style={{
                          overflow: "hidden",
                          borderRadius: "14px",
                          cursor: "pointer",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.03)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <img
                          src={`/Images/Gallery${n}.webp`}
                          alt={`Gallery ${n}`}
                          className="gallery-img"
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.35s ease",
                            display: "block",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>





          {/* Connectivity Section */}
          <section
            className="sec1"
            id="connectivity"
            style={{ padding: "60px 0", background: "#fff" }}
          >
            <div className="container">

              {/* Section Title */}
              <h1
                className="section-title text-center mb-4"
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: "25px",
                  color: "#222",
                }}
              >
                Satyam Codename Showstopper – Location Advantage
              </h1>

              {/* Map */}
              <div className="row mt-3">
                <div className="col-xl-12">
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src="/Screenshot 2025-12-10 114316.png"  // <-- Add your map image here
                      alt="Project Location Map"
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>


              {/* Tabs */}
              <div className="row pt-4 mb-3">
                <div className="col-xl-12 col-lg-12 amenities-info mt-3">

                  {/* Pills */}
                  <nav
                    className="nav nav-pills gap-2 justify-content-center mb-3"
                    style={{ display: "flex", justifyContent: "center", gap: "10px" }}
                  >
                    {[
                      { id: "connectivity0", img: "Connectivity.gif", label: "Connectivity" },
                      { id: "educationhub1", img: "Education.gif", label: "Education Hub" },
                      { id: "healthcare2", img: "Healthcare.gif", label: "Healthcare" },
                      { id: "mallshotelsshopping3", img: "Mall.gif", label: "Malls" },
                    ].map((tab, index) => (
                      <a
                        key={index}
                        data-bs-toggle="pill"
                        href={`#${tab.id}`}
                        className={`nav-link d-flex align-items-center ${index === 0 ? "active" : ""}`}
                        style={{
                          background: index === 0 ? "linear-gradient(90deg, #000000, #333333)" : "#fff", // BLACK GRADIENT
                          color: index === 0 ? "#fff" : "#333",
                          borderRadius: "30px",
                          padding: "8px 18px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          fontWeight: 600,
                          border: index === 0 ? "none" : "1px solid #ddd",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >

                        <img
                          src={`/Images/${tab.img}`}
                          width="32"
                          alt={tab.label}
                          style={{ marginRight: "10px" }}
                        />
                        <span>{tab.label}</span>
                      </a>
                    ))}
                  </nav>

                  {/* Tab Content */}
                  <div className="tab-content mt-3" style={{ fontSize: "15px", lineHeight: "24px", color: "#222" }}>

                    {/* Connectivity */}
                    <div className="tab-pane fade show active" id="connectivity0">
                      <ul style={{ paddingLeft: "18px" }}>
                        <li>Mumbai-Pune Expressway - 10 Mins</li>
                        <li>Metro Rail - 3 Mins</li>
                        <li>Navi Mumbai International Airport - 15 Mins</li>
                        <li>Kharghar-Turbhe Link Road (KTLR) - 2 Mins</li>
                        <li>Mumbai Trans Harbour Link (MTHL) - 25 Mins</li>
                        <li>Kharghar Railway Station - 10 Mins</li>
                      </ul>
                    </div>

                    {/* Education */}
                    <div className="tab-pane fade" id="educationhub1">
                      <ul style={{ paddingLeft: "18px" }}>
                        <li>NMIMS – 10 mins</li>
                        <li>B.D. Somani International School – 12 mins</li>
                        <li>Vibgyor High School – 15 mins</li>
                        <li>DAV International School – 15 mins</li>
                        <li>Vishwajyot International School – 15 mins</li>
                        <li>Apeejay School – 16 mins</li>
                      </ul>
                    </div>

                    {/* Healthcare */}
                    <div className="tab-pane fade" id="healthcare2">
                      <ul style={{ paddingLeft: "18px" }}>
                        <li>Sri Sathya Sai Hospital – 8 mins</li>
                        <li>TATA Hospital – 15 mins</li>
                        <li>Navjeevan Hospital – 16 mins</li>
                        <li>Motherhood Hospital – 20 mins</li>
                      </ul>
                    </div>

                    {/* Malls */}
                    <div className="tab-pane fade" id="mallshotelsshopping3">
                      <ul style={{ paddingLeft: "18px" }}>
                        <li>DMart – 16 mins</li>
                        <li>Little World Mall – 20 mins</li>
                        <li>Seawoods Grand Central Mall – 20 mins</li>
                        <li>Orion Mall Panvel – 25 mins</li>
                        <li>Inorbit Mall – 30 mins</li>
                      </ul>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    className="text-center mt-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "14px",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="btn"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-id="Amenities"
                      style={{
                        background: "linear-gradient(90deg, #000000, #333333)", // BLACK GRADIENT
                        color: "#fff",
                        padding: "12px 26px",
                        borderRadius: "40px",
                        border: "none",
                        fontWeight: 600,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.35)",
                      }}
                    >
                      Request Location Details
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="btn"
                      data-bs-target="#enquire-modal"
                      data-bs-toggle="modal"
                      data-id="Amenities"
                      style={{
                        background: "linear-gradient(90deg, #000000, #333333)", // BLACK GRADIENT
                        color: "#fff",
                        padding: "12px 26px",
                        borderRadius: "40px",
                        border: "none",
                        fontWeight: 600,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.35)",
                      }}
                    >
                      Express Your Interest
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            style={{ padding: "60px 0", background: "#fafafa" }}
          >
            <div className="container">

              <div className="row align-items-center">

                {/* Image */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img
                    src="/Images/site_visit.webp"
                    className="img-fluid"
                    alt="Site Visit"
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  />
                </div>

                {/* Form */}
                <div className="col-lg-6">
                  <div
                    className="form"
                    style={{
                      padding: "25px",
                      background: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <h3
                      className="section-title mb-3"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        marginBottom: "20px",
                      }}
                    >
                      Schedule a Site Visit
                    </h3>

                    <form
                      name="schedule-site"
                      onSubmit={(e) => handleSubmit(e, "Schedule Site Visit")}
                    >
                      <input type="hidden" name="iso_code" />
                      <input type="hidden" name="mobileExt" />

                      <div className="mb-3">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required
                          placeholder="Name*"
                          style={{
                            height: "45px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            paddingLeft: "12px",
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="tel"
                          name="mobile"
                          className="form-control"
                          required
                          placeholder="Mobile*"
                          style={{
                            height: "45px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            paddingLeft: "12px",
                          }}
                        />
                      </div>

                      <div className="mb-3" style={{ fontSize: "12px" }}>
                        <label style={{ display: "flex", alignItems: "center" }}>
                          <input type="checkbox" defaultChecked style={{ marginRight: "8px" }} />
                          I consent to data processing as per{" "}
                          <a href="/PrivacyPolicy" target="_blank" style={{ color: "#007bff", marginLeft: "4px" }}>
                            Privacy Policy | Terms
                          </a>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn w-100"
                        style={{
                          background: "linear-gradient(90deg, #000000, #333333)", // BLACK GRADIENT
                          color: "#fff",
                          padding: "12px",
                          borderRadius: "40px",
                          border: "none",
                          fontWeight: 600,
                          marginTop: "8px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                        }}
                      >
                        Submit
                      </button>

                    </form>
                  </div>
                </div>

              </div>
            </div>
          </section>


          {/* About Developer */}
          {/* <section className="sec1" id="overview">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-7 col-sm-12">
                  <div className="overview-data">
                    <h1>About Globe Pride Realty</h1>
                    <p className="overview-info" style={{ fontSize: '16px' }}>
                      Globe Pride Realty provides an integrated real estate ecosystem that caters to
                      both businesses and home buyers. As an affiliate, our intelligent
                      business-to-business approach seamlessly integrates stakeholders, while our ZERO
                      cost assurance guarantees that we do not charge anything to our customers of any
                      kind. This ensures a buyer experience that exceeds expectations. When you
                      transact with us, you can trust that your real estate journey will be
                      characterized by complete peace of mind, under our overarching umbrella of
                      trust.
                    </p>
                    <p style={{ fontSize: '14px' }}>
                      ✔️ Government RERA Authorised Advertiser’s: Associatte Proptech Pvt Ltd, RERA
                      Registration No A52100029540
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* WhatsApp Button */}
          <a
            target="_blank"
            className="whatsaapBtn d-none d-lg-block on-rera discovery"
            aria-label="WhatsApp"
            href="#"
            rel="noopener noreferrer"
          >
            <span>
              <img src="/Images/whatsappAnim.gif" width="34" alt="WhatsApp" />
            </span>
          </a>

          {/* Footer */}
          <footer className="sec3">
            <div className="container on-rera">
              <div className="foot_logo mb-3">
                <img
                  src="/Images/logo.png"
                  alt="Project Logo"
                  className="d-block mx-auto project-logo"
                  style={{ width: '250px' }}
                />
              </div>
              <div id="foot_rera_qr" className="pt-2 mb-2"></div>
              <div className="elementor-widget-container text-center">
                <p>
                  This project is RERA registered.&nbsp; <br />
                  <a style={{ textDecoration: 'none', color: '#000', fontSize: '12px' }}>
                    <span>Agent Rera Number : A52100029540</span>
                    <br />
                    <span>Project Rera Number : Coming Soon!</span>
                    <br />
                  </a>
                </p>
              </div>
              <p id="disclaimer">
                <span className="text-black w-5">Disclaimer :</span> This is not the official website of developer & property, it belongs to authorised channel partner for information purpose only. All rights for logo & images are reserved to developer. Thank you for visiting our website. This disclaimer ("Disclaimer") is applicable to this website and all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any qualification or limitation. This website is in the process of being updated. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website are solely for informational purposes only and the viewer has not relied on this information for making any booking/purchase in any project of the company. Nothing on this website, constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website.
              </p>
              <p className="text-center mb-0 pb-3">
                <a
                  href="/PrivacyPolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Privacy Policy
                </a>

                &nbsp;&nbsp;
                <a
                  href="/TermsConditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Terms & Conditions
                </a>
                &nbsp;&nbsp;
                <a
                  href="/CookiePolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="container non-rera">
              <div className="foot_logo mb-3">
                <img
                  src="./public/Images/logo.png"
                  alt="Project Logo"
                  className="d-block mx-auto project-logo"
                  style={{ width: '250px' }}
                />
              </div>
              <p id="disclaimer">
                The content on this website is for informational purposes only and is not intended as an
                offer for services or sale. The project mentioned has not yet received RERA clearance but is
                currently in the process
                of registration with the State Name Real Estate Regulatory Authority. The project name used
                here is for branding and interest-generation purposes only and is not intended as the final
                project name. No sales
                or purchases are being facilitated for this pending project.
                <span id="additional-content" className="moredisclaimerText" data-hit="more-overview">
                  This site is managed by Prop Solutions4U Pvt. Ltd., a RERA authorized real estate agent.
                  The images displayed are for illustrative purposes and may not represent the actual
                  properties. Additionally, your
                  data may be shared with RERA-registered Developers to gauge interest and for polling
                  purposes. Updates and information may be sent to the contact details provided by you
                  based on your expressed interest.
                  Copyright and other intellectual property laws protect the content, design, and
                  information on this website. Unauthorized use or reproduction of the content may result
                  in legal action. Thank you for your
                  visit. RERA - Coming Soon
                </span>
                <span data-target="-overview" className="moredisclaimerBtn">
                  Read More <i className="fa fa-chevron-down"></i>
                </span>
              </p>
              <p className="text-center mb-0 pb-2 d-flex justify-content-center gap-3">
                <a
                  href="/PrivacyPolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Privacy Policy
                </a>
                <a
                  href="/TermsConditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/CookiePolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Cookie Policy
                </a>


              </p>

            </div>
          </footer>

          <section id="footer-links">
            <div className="container text-center">
              <p>
                Marketed By{' '}
                <a href="#" target="_blank" className="on-rera" rel="noopener noreferrer">
                  Associatte Prop Tech Pvt. Ltd.
                </a>
              </p>
            </div>
          </section>

          <section>
            <div className="footer-enquiryBtn d-flex d-sm-none">
              <a
                className="monCall data-id-btn on-rera"
                href="tel:+918881188181"
              >
                <img src="/Images/callus.gif" className="img-fluid icon_sz" alt="Call" />
                <br />
                Call
              </a>
              <a
                className="monCall data-id-btn non-rera"
                data-bs-target="#enquire-modal"
                data-bs-toggle="modal"
                data-bs-whatever="Enquire Now"
                data-id="call back"
              >
                <img src="/Images/callus.gif" className="img-fluid icon_sz" alt="Call" />
                <br />
                Call
              </a>
              <a
                target="_blank"
                className="monCall whatsappBtn data-id-btn on-rera discovery_mobile"
                href="#"
                rel="noopener noreferrer"
              >
                <img src="/Images/WhatsApp.gif" className="img-fluid icon_sz" alt="WhatsApp" />
                <br />
                WhatsApp
              </a>
              <a
                className="monCall data-id-btn on-rera"
                data-bs-target="#enquire-modal"
                data-bs-toggle="modal"
                data-bs-whatever="Enquire Now"
                data-id="Enquire Now"
              >
                <img
                  src="/Images/Instant%20Call%20Back.gif"
                  className="img-fluid icon_sz"
                  alt="Enquire"
                />
                <br />
                Enquire Now
              </a>
              <a
                className="monCall data-id-btn non-rera"
                data-bs-target="#enquire-modal"
                data-bs-toggle="modal"
                data-bs-whatever="Enquire Now"
                data-id="Enquire Now"
              >
                <img
                  src="/Images/Instant%20Call%20Back.gif"
                  className="img-fluid icon_sz"
                  alt="Express Interest"
                />
                <br />
                Express Your Interest
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Desktop Summary */}
      {/*       {/* RIGHT SIDE FORM */}
      <section className="desktop-summary">
        <div className="og-block d-flex justify-content-between">
          <button className="btn data-id-btn">
            <img
              onClick={() => setOpen(true)}
              src="/Images/Calendar.gif"
              className="img-fluid icon_sz"
              alt="Calendar"
            />
            Schedule Visit
          </button>

          <button className="btn on-rera">
            <img
              src="/Images/callus.gif"
              className="img-fluid icon_sz"
              alt="Call"
            />
            <a href="tel:+918881188181" style={{ color: "#fff" }}>
              +91 8881188181
            </a>
          </button>
        </div>

        <div className="form-section p-3">
          <h2 className="pb-2">Pre-Register here for Best Offers</h2>

          <form
            className="text-center"
            name="Pre-Register-sidemodal"
            onSubmit={(e) => handleSubmit(e, "Pre-Register")}
          >
            <input type="hidden" name="iso_code" value="" />
            <input type="hidden" name="mobileExt" value="" />

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control phone"
                required
                placeholder="Phone Number"
                name="mobile"
              />
            </div>


            <div
              className="form-group acceptance mb-3"
              style={{ fontSize: "10px" }}
            >
              <label className="form-check-label text-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  defaultChecked
                />

                <span className="text on-rera">
                  I Consent to The Processing of Provided Data According To{" "}
                  <a
                    href="/PrivacyPolicy"
                    style={{ color: "#007bff" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href="/TermsConditions"
                    style={{ color: "#007bff" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>

                  &nbsp; &nbsp;
                  <a
                    href="/CookiePolicy"
                    style={{ color: "#007bff" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>
                  , I Authorize Globe Pride Realty and its representatives to Call,
                  SMS, Email or WhatsApp Me About Its Products and Offers. I
                  acknowledge that the project I am enquiring about has not yet
                  received RERA clearance. This Consent Overrides Any Registration
                  For DNC/NDNC.
                </span>

                <span className="text non-rera">
                  Please be informed that this website is not intended to facilitate
                  any sales transactions. I understand and acknowledge that the
                  project I am interested in hasn't yet secured RERA clearance.
                  The primary purpose of this website is to generate interest and
                  gather information. By providing my data, I consent to its use in
                  accordance with the{" "}
                  <a
                    href="/PrivacyPolicy"
                    style={{ color: "#007bff" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/TermsConditions"
                    style={{ color: "#007bff" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions | Cookie Policy
                  </a>
                  <a
                    href="/CookiePolicy"
                    style={{ color: "#007bff" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>
                  .
                </span>
              </label>
            </div>


            <input type="hidden" name="form_name" value="Pre-Register" />
            <input type="hidden" name="website_url" />

            <button
              type="submit"
              className="custom-btn btn data-id-btn on-rera"
            >
              <span className="enquireNowBtn">Pre-Register Now</span>
            </button>
          </form>
          <div className="enqModal mt-4">
            <div className="row text-center justify-content-center icon-sec m-0">

              <div className="col-4">
                <img
                  src="/Images/Instant Call Back.gif"
                  width="42"
                  className="img-fluid data-id-btn"
                  alt="Instant Call Back"
                />
                <p className="mb-0">Instant Call Back</p>
              </div>

              <div className="col-4">
                <img
                  src="/Images/Free Site Visit.gif"
                  width="42"
                  className="img-fluid data-id-btn"
                  style={{ scale: "1.5" }}
                  alt="Free Site Visit"
                />
                <p className="mb-0">Free Site Visit</p>
              </div>

              <div className="col-4">
                <img
                  src="/Images/Best Price.gif"
                  width="42"
                  className="img-fluid"
                  alt="Best Price"
                />
                <p className="mb-0">Best Price</p>
              </div>

            </div>
          </div>

        </div>
        <div className="call-back-section text-center on-rera">
          <button
            id="right-panel-request-callback-button"
            className="custom-btn btn btn-block mx-auto data-id-btn"
            data-bs-target="#enquire-modal"
            data-bs-toggle="modal"
            data-bs-whatever="Enquire Now"
            data-id="Call Back"
          >
            <span className="enquireNowBtn" onClick={() => setOpen(true)} >Request Call Back</span>
          </button>
        </div>


      </section>




    </div>
  );
}

export default Hero;




