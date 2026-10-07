"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VenuePage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const initMapplsMap = () => {
    if (typeof window !== "undefined" && window.mappls) {
      const venuePos = { lat: 22.2887, lng: 73.3634 };
      const mapContainer = document.getElementById("map");

      if (mapContainer && !mapContainer.hasChildNodes()) {
        const map = new window.mappls.Map("map", {
          center: [venuePos.lat, venuePos.lng],
          zoom: 16,
          zoomControl: true,
          hybrid: false,
        });

        const popupHtml = `
          <div style="padding: 4px 2px; font-family: Inter, sans-serif; text-align: left;">
            <h4 style="margin: 0 0 4px 0; font-family: Playfair Display, Georgia, serif; color: #002f4b; font-size: 1.05rem; font-weight: 700;">
              <i className="fa-solid fa-graduation-cap" style="color: #a83c27; margin-right: 4px;"></i> Parul University
            </h4>
            <p style="margin: 0; font-size: 0.84rem; color: #555555; line-height: 1.45;">
              P.O. Limda, Waghodia, Vadodara, Gujarat 391760, India
            </p>
          </div>
        `;

        const marker = new window.mappls.Marker({
          map: map,
          position: venuePos,
          title: "Parul University",
          popupHtml: popupHtml,
        });

        setTimeout(() => {
          if (marker && typeof marker.openPopup === "function") {
            marker.openPopup();
          }
        }, 500);
      }
    }
  };

  useEffect(() => {
    if (mapLoaded) {
      initMapplsMap();
    }
  }, [mapLoaded]);

  return (
    <>
      <Script
        src="https://sdk.mappls.com/map/sdk/web?v=3.0&access_token=ufzlnzaluieyjgustwgcosojzarnuunnnprg"
        onLoad={() => setMapLoaded(true)}
      />

      <style jsx global>{`
        .venue-section {
          padding: 60px 5% 80px;
          background: transparent;
          color: var(--text-main);
        }

        .venue-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-tag-pill {
          display: inline-block;
          background-color: #ffffff;
          color: var(--accent-color);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 8px 24px;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
          margin-bottom: 20px;
          border: 1px solid rgba(181, 71, 40, 0.15);
        }

        .venue-hero-title {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .title-divider {
          width: 65px;
          height: 3.5px;
          background-color: var(--accent-color);
          margin: 16px auto 18px;
          border-radius: 2px;
        }

        .venue-location-sub {
          font-size: 1.2rem;
          color: var(--accent-color);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
        }

        .venue-hero-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--text-light);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-top: 40px;
        }

        .intro-info-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 45px 40px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
          border-top: 5px solid var(--accent-color);
        }

        .intro-card-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 15px;
        }

        .intro-card-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-main);
          margin-bottom: 30px;
        }

        .venue-info-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          border-top: 1px solid #f0ede6;
          padding-top: 25px;
        }

        .venue-info-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          font-size: 0.98rem;
          line-height: 1.5;
        }

        .venue-info-item .icon-wrap {
          width: 38px;
          height: 38px;
          background: #fff5f3;
          color: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .venue-info-item strong {
          color: var(--primary-color);
          display: block;
          margin-bottom: 2px;
        }

        .map-wrapper {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
          margin-top: 30px;
        }

        .map-container {
          width: 100%;
          height: 420px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 25px;
          position: relative;
        }

        .mappls-popup-content-wrapper, .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 8px 25px rgba(0, 47, 75, 0.18) !important;
          border-top: 3.5px solid #a83c27 !important;
        }

        .mappls-popup-content, .leaflet-popup-content {
          margin: 10px 14px !important;
          line-height: 1.4 !important;
        }

        .map-action-bar {
          text-align: center;
        }

        .btn-map-directions {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--accent-color);
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(181, 71, 40, 0.25);
          letter-spacing: 0.5px;
        }

        .btn-map-directions:hover {
          background-color: #9c3b20;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(181, 71, 40, 0.35);
        }

        .travel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 35px;
        }

        .travel-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 38px 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
          border-top: 4px solid var(--primary-color);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .travel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          border-top-color: var(--accent-color);
        }

        .travel-icon {
          font-size: 2.2rem;
          color: var(--accent-color);
          margin-bottom: 18px;
        }

        .travel-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .travel-desc {
          font-size: 0.96rem;
          color: var(--text-main);
          line-height: 1.65;
        }

        .intro-img-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          height: 100%;
          min-height: 380px;
        }

        .intro-campus-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .intro-img-card:hover .intro-campus-img {
          transform: scale(1.03);
        }

        .intro-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0, 47, 75, 0.88);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .campus-gallery-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 25px;
          margin-top: 35px;
        }

        .gallery-item {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          background: #ffffff;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0, 47, 75, 0.14);
        }

        .gallery-img-container {
          width: 100%;
          height: 100%;
          min-height: 320px;
          position: relative;
          overflow: hidden;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
          display: block;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
        }

        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 20px 18px;
          background: linear-gradient(to top, rgba(0, 47, 75, 0.88) 0%, rgba(0, 47, 75, 0.4) 65%, transparent 100%);
          color: #ffffff;
          transition: background 0.3s ease;
        }

        .gallery-caption h3 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .gallery-caption p {
          font-size: 0.85rem;
          color: #d1e2ec;
          margin: 0;
          font-weight: 500;
        }

        .cta-final-box {
          background: linear-gradient(135deg, var(--primary-color) 0%, #153a4d 100%);
          border-radius: 20px;
          padding: 60px 40px;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 15px 40px rgba(13, 40, 54, 0.2);
          margin-top: 40px;
        }

        .cta-final-title {
          font-family: var(--font-heading);
          font-size: 3.0rem;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .cta-final-desc {
          font-size: 1.2rem;
          color: #d1e2ec;
          margin-bottom: 30px;
          text-align: center;
          text-align-last: center;
          -webkit-text-align-last: center;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1024px) {
          .intro-grid { grid-template-columns: 1fr; gap: 30px; }
          .travel-grid { grid-template-columns: repeat(2, 1fr); }
          .campus-gallery-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .venue-hero-title { font-size: 2.2rem; }
          .travel-grid { grid-template-columns: 1fr; }
          .campus-gallery-grid { grid-template-columns: 1fr; }
          .gallery-img-container { min-height: 260px; }
          .map-container { height: 320px; }
          .cta-final-title { font-size: 2.2rem; }
          .venue-section { padding: 40px 4% 60px; }
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="venue-section" id="hero">
        <div className="venue-container">
          <div className="section-header">
            <span className="section-tag-pill">VENUE</span>
            <h1 className="venue-hero-title">PARUL UNIVERSITY</h1>
            <div className="venue-location-sub">Vadodara, Gujarat, India</div>
            <div className="title-divider"></div>
            <p className="venue-hero-desc">
              DISHA 2027 is proudly hosted at the vibrant multidisciplinary campus of Parul University, bringing together global researchers, artists, educators, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Venue Introduction Section */}
      <section className="venue-section" id="intro" style={{ paddingTop: 0 }}>
        <div className="venue-container">
          <div className="intro-grid">
            {/* Left: Campus Image */}
            <div className="intro-img-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Image Place Holder/Campus Image.webp"
                alt="Parul University Main Campus"
                className="intro-campus-img"
              />
              <div className="intro-img-badge">
                <i className="fa-solid fa-building-columns"></i> Parul University Campus
              </div>
            </div>

            {/* Right: Venue Details Card */}
            <div className="intro-info-card">
              <h2 className="intro-card-title">PARUL UNIVERSITY</h2>
              <p className="intro-card-text">
                Parul University, Vadodara, is a NAAC A++ accredited private university in Gujarat, home to a large multidisciplinary campus that spans engineering, medicine, management, design, fine arts, liberal arts, and sciences. The conference sessions and parallel tracks will take place in the state-of-the-art Central Auditorium and Parul Institute of Design campus facilities.
              </p>

              <div className="venue-info-list">
                <div className="venue-info-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <strong>Location</strong>
                    Parul University Campus, P.O. Limda, Ta. Waghodia, Vadodara, Gujarat, India - 391760
                  </div>
                </div>

                <div className="venue-info-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <strong>Conference Venue</strong>
                    Parul Institute of Design / Central Auditorium, Parul University
                  </div>
                </div>

                <div className="venue-info-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-universal-access"></i>
                  </div>
                  <div>
                    <strong>Accessibility</strong>
                    Fully accessible air-conditioned auditoriums, studio spaces, and campus transit options
                  </div>
                </div>

                <div className="venue-info-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-compass"></i>
                  </div>
                  <div>
                    <strong>Directions</strong>
                    Accessible via National Expressway 1 (NE-1) &amp; Waghodia Main Road from Vadodara City Center
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Campus Gallery Section */}
      <section className="venue-section" id="gallery" style={{ paddingTop: "20px" }}>
        <div className="venue-container">
          <div className="section-header">
            <span className="section-tag-pill">CAMPUS PREVIEW</span>
            <h2 className="venue-hero-title">EXPLORE THE CAMPUS</h2>
            <div className="title-divider"></div>
            <p className="venue-hero-desc">
              A visual glimpse of Parul University's world-class academic infrastructure and facilities.
            </p>
          </div>

          <div className="campus-gallery-grid">
            <div className="gallery-item featured">
              <div className="gallery-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Image Place Holder/Campus Image.webp"
                  alt="Parul University Main Campus"
                  className="gallery-img"
                />
                <div className="gallery-caption">
                  <h3>Parul University Main Campus</h3>
                  <p>Central Academic Infrastructure &amp; Auditoriums</p>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <div className="gallery-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Image Place Holder/Campus Image Placeholder 1.jpg"
                  alt="Campus Facility 1"
                  className="gallery-img"
                />
                <div className="gallery-caption">
                  <h3>Central Auditorium &amp; Event Lawns</h3>
                  <p>Main Conference Venue</p>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <div className="gallery-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Image Place Holder/Campus Image Placehoder 2.jpg"
                  alt="Campus Facility 2"
                  className="gallery-img"
                />
                <div className="gallery-caption">
                  <h3>Parul Institute of Design Studios</h3>
                  <p>Design &amp; Exhibition Spaces</p>
                </div>
              </div>
            </div>

            <div className="gallery-item">
              <div className="gallery-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Image Place Holder/Campus Image Pacehoder 3.jpg"
                  alt="Campus Facility 3"
                  className="gallery-img"
                />
                <div className="gallery-caption">
                  <h3>Exhibition Hall &amp; Galleries</h3>
                  <p>Display &amp; Interactive Workshops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Getting to the Venue Section (Interactive Map) */}
      <section className="venue-section" id="getting-to-venue">
        <div className="venue-container">
          <div className="section-header">
            <span className="section-tag-pill">LOCATION MAP</span>
            <h2 className="venue-hero-title">GETTING TO THE VENUE</h2>
            <div className="title-divider"></div>
            <p className="venue-hero-desc">
              Find your way to the Parul University campus in Limda, Vadodara.
            </p>
          </div>

          <div className="map-wrapper">
            <div className="map-container" id="map-container">
              <div id="map" style={{ width: "100%", height: "100%" }}></div>
            </div>
            <div className="map-action-bar">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Parul+University+Limda+Waghodia+Vadodara+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map-directions"
              >
                OPEN IN GOOGLE MAPS <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Travelling to Vadodara Section */}
      <section className="venue-section" id="travel">
        <div className="venue-container">
          <div className="section-header">
            <span className="section-tag-pill">TRAVEL GUIDE</span>
            <h2 className="venue-hero-title">TRAVELLING TO VADODARA</h2>
            <div className="title-divider"></div>
            <p className="venue-hero-desc">
              Vadodara is well-connected by air, rail, and road networks from all major cities across India and internationally.
            </p>
          </div>

          <div className="travel-grid">
            <div className="travel-card">
              <div className="travel-icon">
                <i className="fa-solid fa-plane"></i>
              </div>
              <h3 className="travel-title">BY AIR</h3>
              <p className="travel-desc">
                Vadodara Airport (BDQ) is located approximately 15 km from the university campus, offering direct domestic flights to Mumbai, Delhi, Bangalore, and major hubs. Sardar Vallabhbhai Patel International Airport (AMD) in Ahmedabad is about 2 hours away by road via the NE-1 Express Highway.
              </p>
            </div>

            <div className="travel-card">
              <div className="travel-icon">
                <i className="fa-solid fa-train"></i>
              </div>
              <h3 className="travel-title">BY TRAIN</h3>
              <p className="travel-desc">
                Vadodara Junction (BRC) is one of India's major railway hubs on the Western Railway main line. It provides frequent, high-speed rail connectivity (including Vande Bharat &amp; Rajdhani Express) to Mumbai, Delhi, Ahmedabad, Jaipur, and all premier cities.
              </p>
            </div>

            <div className="travel-card">
              <div className="travel-icon">
                <i className="fa-solid fa-car"></i>
              </div>
              <h3 className="travel-title">BY ROAD</h3>
              <p className="travel-desc">
                Vadodara is connected via National Expressway 1 (NE-1) and NH-48. Taxis, auto-rickshaws, and ride-hailing platforms (Uber &amp; Ola) operate continuously between Vadodara Junction, Vadodara Airport, and the Parul University Limda campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="venue-section" id="cta" style={{ paddingBottom: "100px" }}>
        <div className="venue-container">
          <div className="cta-final-box">
            <h2 className="cta-final-title">SEE YOU AT DISHA 2027</h2>
            <p className="cta-final-desc">We look forward to welcoming you to Parul University, Vadodara.</p>
            <a
              href="#getting-to-venue"
              className="btn-map-directions"
              style={{ backgroundColor: "#ffffff", color: "var(--primary-color)" }}
            >
              GET DIRECTIONS <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
