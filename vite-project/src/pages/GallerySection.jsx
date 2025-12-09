import { useState } from "react";

function GallerySection() {
    const [popupImage, setPopupImage] = useState(null);

    // Open popup
    const openImage = (src) => {
        setPopupImage(src);
    };

    // Close popup
    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <>
            {/* Gallery Section */}
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
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(250px, 1fr))",
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
                                            onClick={() =>
                                                openImage(`/Images/Gallery${n}.webp`)
                                            }
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.transform = "scale(1.12)")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.transform = "scale(1)")
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            {popupImage && (
                <div
                    onClick={closePopup}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        padding: "20px",
                        cursor: "zoom-out",
                    }}
                >
                    <img
                        src={popupImage}
                        alt="Large View"
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            borderRadius: "12px",
                            boxShadow: "0 0 20px rgba(255,255,255,0.4)",
                            animation: "fadeIn 0.3s ease",
                        }}
                    />

                    {/* Close Button */}
                    <span
                        onClick={closePopup}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "30px",
                            fontSize: "38px",
                            color: "#fff",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        ✕
                    </span>
                </div>
            )}
        </>
    );
}

export default GallerySection;
