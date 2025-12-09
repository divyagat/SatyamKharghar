import React, { useState } from "react";

export default function MapSection({ handleSubmit }) {
    const [showMap, setShowMap] = useState(false);

    return (
        <>
            {/* CONNECTIVITY SECTION */}
            <section className="sec1" id="connectivity" style={{ padding: "40px 0" }}>
                <div className="container">
                    <h1
                        className="section-title text-center"
                        style={{ fontSize: "28px", fontWeight: 700 }}
                    >
                        Satyam Codename Showstopper - Location Advantage
                    </h1>

                    {/* MAP PREVIEW → CLICK TO SHOW IFRAME */}
                    <div className="row justify-content-center mt-4">
                        <div
                            className="col-xl-10 col-lg-10 col-md-11 col-sm-12"
                            style={{
                                background: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                padding: "15px",
                            }}
                        >
                            {!showMap ? (
                                <div
                                    onClick={() => setShowMap(true)}
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        src="/Images/map-placeholder.jpg"
                                        alt="Map Preview"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "15px",
                                            left: "15px",
                                            background: "rgba(0,0,0,0.6)",
                                            color: "#fff",
                                            padding: "6px 12px",
                                            borderRadius: "6px",
                                            fontSize: "12px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Click to View Map
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    title="Google map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.355759148016!2d73.07064017593574!3d19.047287252871854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3f84aabca5b%3A0x2867bcd83f974e16!2sCodename%20Showstopper%20by%20Satyam%20and%20Metro!5e0!3m2!1sen!2sin!4v1763528748552!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{
                                        border: "1px solid #333",
                                        padding: "2px",
                                        background: "#fff",
                                        borderRadius: "6px",
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            )}
                        </div>
                    </div>

                    {/* TABS SECTION */}
                    <div className="row pt-4 mb-3">
                        <div className="col-xl-12 col-lg-12 col-sm-12 text-dark amenities-info mt-3 ps-2 pe-2">
                            <div id="exTab1" className="fluid-container">
                                <nav className="nav nav-pills justify-content-center flex-wrap">
                                    {[
                                        { id: "connectivity0", img: "Connectivity.gif", label: "Connectivity" },
                                        { id: "educationhub1", img: "Education.gif", label: "Education Hub" },
                                        { id: "healthcare2", img: "Healthcare.gif", label: "Healthcare" },
                                        { id: "mallshotelsshopping3", img: "Mall.gif", label: "Malls" },
                                    ].map((tab, index) => (
                                        <a
                                            key={index}
                                            className={`nav-link d-flex align-items-center ${index === 0 ? "active show" : ""
                                                }`}
                                            data-bs-toggle="pill"
                                            href={`#${tab.id}`}
                                            style={{
                                                margin: "5px",
                                                borderRadius: "30px",
                                                padding: "8px 18px",
                                                fontWeight: 600,
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={`/Images/${tab.img}`}
                                                width="36"
                                                className="img-fluid mb-2 me-2"
                                                alt={tab.label}
                                            />
                                            <h6 className="subtitle inventory">{tab.label}</h6>
                                        </a>
                                    ))}
                                </nav>

                                <div className="tab-content clearfix mt-3">
                                    {/* Connectivity */}
                                    <div className="tab-pane fade active show" id="connectivity0">
                                        <ul>
                                            <li>Mumbai-Pune Expressway - 10 Mins</li>
                                            <li>Metro Rail - 3 Mins</li>
                                            <li>Navi Mumbai International Airport - 15 Mins</li>
                                            <li>Kharghar-Turbhe Link Road - 2 Mins</li>
                                            <li>Mumbai Trans Harbour Link - 25 Mins</li>
                                            <li>Kharghar Railway Station - 10 Mins</li>
                                        </ul>
                                    </div>

                                    {/* Education */}
                                    <div className="tab-pane fade" id="educationhub1">
                                        <ul>
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
                                        <ul>
                                            <li>Sri Sathya Sai Hospital – 8 mins</li>
                                            <li>TATA Hospital – 15 mins</li>
                                            <li>Navjeevan Hospital – 16 mins</li>
                                            <li>Motherhood Hospital – 20 mins</li>
                                        </ul>
                                    </div>

                                    {/* Malls */}
                                    <div className="tab-pane fade" id="mallshotelsshopping3">
                                        <ul>
                                            <li>DMart – 16 mins</li>
                                            <li>Little World Mall – 20 mins</li>
                                            <li>Seawoods Grand Central Mall – 20 mins</li>
                                            <li>Orion Mall Panvel – 25 mins</li>
                                            <li>Inorbit Mall – 30 mins</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="text-center mt-3">
                            <button
                                type="button"
                                className="btn custom-btn data-id-btn on-rera me-2"
                                data-bs-target="#enquire-modal"
                                data-bs-toggle="modal"
                                data-bs-whatever="Enquire Now"
                                data-id="Amenities"
                            >
                                <span className="enquireNowBtn">Request Location Details</span>
                            </button>

                            <button
                                type="button"
                                className="btn custom-btn data-id-btn non-rera"
                                data-bs-target="#enquire-modal"
                                data-bs-toggle="modal"
                                data-bs-whatever="Enquire Now"
                                data-id="Amenities"
                            >
                                <span className="enquireNowBtn">Express Your Interest</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" style={{ padding: "50px 0", background: "#fafafa" }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* LEFT IMAGE */}
                        <div className="col-lg-6 mb-4">
                            <img
                                src="/Images/site_visit.webp"
                                className="img-fluid rounded shadow"
                                alt="Site Visit"
                            />
                        </div>

                        {/* RIGHT FORM */}
                        <div className="col-lg-6">
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                    padding: "20px",
                                }}
                            >
                                <h3 className="section-title text-center mb-3">
                                    Schedule a Site Visit
                                </h3>

                                <form
                                    name="schedule-site"
                                    onSubmit={(e) => handleSubmit(e, "Schedule Site Visit")}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control mb-3"
                                        placeholder="Name*"
                                        required
                                    />

                                    <input
                                        type="tel"
                                        name="mobile"
                                        className="form-control mb-3"
                                        placeholder="Mobile*"
                                        required
                                    />

                                    <div
                                        className="form-group acceptance mb-3"
                                        style={{ fontSize: "11px" }}
                                    >
                                        <label>
                                            <input type="checkbox" defaultChecked /> I Consent to data processing as per{" "}
                                            <a href="/PrivacyPolicy" target="_blank">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100"
                                        style={{
                                            padding: "10px",
                                            background: "#007bff",
                                            color: "#fff",
                                            borderRadius: "30px",
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
        </>
    );
}
