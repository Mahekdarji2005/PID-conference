"use client";

import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  "DSC00010.jpg",
  "DSC00013.jpg",
  "DSC00025.jpg",
  "DSC00033.jpg",
  "DSC00035.jpg",
  "DSC00036.jpg",
  "DSC00043.jpg",
  "DSC00048.jpg",
  "DSC00050.jpg",
  "DSC00054.jpg",
  "DSC00055.jpg",
  "DSC00061.jpg",
  "DSC00062.jpg",
  "DSC00072-Pano.jpg",
  "DSC00073.jpg",
  "DSC00077.jpg",
  "DSC00078.jpg",
  "DSC00084.jpg",
  "DSC00089.jpg",
  "DSC00090.jpg",
  "DSC00095.jpg",
  "DSC00098.jpg",
  "DSC00100.jpg",
  "DSC00101.jpg",
  "DSC00102.jpg",
  "DSC00103.jpg",
  "DSC00106.jpg",
  "DSC00108.jpg",
  "DSC00115.jpg",
  "DSC00118.jpg",
  "DSC00121.jpg",
  "DSC00125.jpg",
  "DSC00129.jpg",
  "DSC00133.jpg",
  "DSC00141.jpg",
  "DSC00147.jpg",
  "DSC00149.jpg",
  "DSC00157.jpg",
  "DSC00158.jpg",
  "DSC00166.jpg",
  "DSC00167.jpg",
  "DSC00168.jpg",
  "DSC00169.jpg",
  "DSC00171.jpg",
  "DSC00173.jpg",
  "DSC00176.jpg",
  "DSC00178.jpg",
  "DSC00179.jpg",
  "DSC00181.jpg",
  "DSC00183.jpg",
  "DSC00190.jpg",
  "DSC00193.jpg",
  "DSC00195.jpg",
  "DSC00200.jpg",
  "DSC00202.jpg",
  "DSC00203.jpg",
  "DSC00206.jpg",
  "DSC00207.jpg",
  "DSC00219-HDR.jpg",
  "DSC00224.jpg",
  "DSC00235.jpg",
  "DSC00238.jpg",
  "DSC00240.jpg",
  "DSC00245.jpg",
  "DSC00247.jpg",
  "DSC00250.jpg",
  "DSC00254.jpg",
  "DSC00256.jpg",
  "DSC00261.jpg",
  "DSC00266.jpg",
  "DSC00269.jpg",
  "DSC00270.jpg",
  "DSC00271.jpg",
  "DSC00272.jpg",
  "DSC00273.jpg",
  "DSC00278.jpg",
  "DSC00279.jpg",
  "DSC00285.jpg",
  "DSC00286.jpg",
  "DSC00287.jpg",
  "DSC00290.jpg",
  "DSC00291.jpg",
  "DSC00292.jpg",
  "DSC00293.jpg",
  "DSC00294.jpg",
  "DSC00297.jpg",
  "DSC00299.jpg",
  "DSC00300.jpg",
  "DSC00306.jpg",
  "DSC00308.jpg",
  "DSC00309.jpg",
  "DSC00310.jpg",
  "DSC00313.jpg",
  "IMG20261007143349.jpg",
  "IMG20261007144343.jpg",
  "IMG20261007145216.jpg",
  "IMG20261007145448.jpg",
  "IMG20261007145700.jpg",
];

export default function GalleryPage() {
  const [activeIdx, setActiveIdx] = useState(null);

  const total = galleryImages.length;

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handleClose = useCallback(() => {
    setActiveIdx(null);
  }, []);

  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx, handleClose, handlePrev, handleNext]);

  return (
    <>
      <style>{`
        .gallery-page-container {
          min-height: 80vh;
          padding: 60px 5% 100px;
          background: transparent;
        }

        .gallery-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 45px;
        }

        .gallery-tag-pill {
          display: inline-block;
          background-color: #ffffff;
          color: var(--accent-color);
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 8px 24px;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          margin-bottom: 18px;
          border: 1px solid rgba(181, 71, 40, 0.15);
        }

        .gallery-hero-title {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          color: var(--primary-color);
          font-weight: 700;
          margin: 0 0 8px;
          line-height: 1.2;
        }

        .gallery-title-divider {
          width: 65px;
          height: 3.5px;
          background-color: var(--accent-color);
          margin: 14px auto 18px;
          border-radius: 2px;
        }

        .gallery-hero-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--text-light);
          max-width: 720px;
          margin: 0 auto 16px;
          line-height: 1.6;
        }

        .gallery-stats-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(13, 40, 54, 0.06);
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.88rem;
          padding: 6px 18px;
          border-radius: 20px;
          border: 1px solid rgba(13, 40, 54, 0.12);
        }

        /* Multi-column masonry preserving original aspect ratios */
        .gallery-masonry {
          column-count: 4;
          column-gap: 22px;
          margin-top: 30px;
        }

        .gallery-card {
          break-inside: avoid;
          margin-bottom: 22px;
          display: inline-block;
          width: 100%;
          position: relative;
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 47, 75, 0.06);
          border: 1px solid rgba(0, 47, 75, 0.08);
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(0, 47, 75, 0.15);
        }

        .gallery-img-wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #eae6df;
        }

        .gallery-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.03);
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(13, 40, 54, 0.72) 0%,
            rgba(13, 40, 54, 0.2) 50%,
            rgba(13, 40, 54, 0) 100%
          );
          opacity: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 16px;
          transition: opacity 0.3s ease;
        }

        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }

        .gallery-card-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .gallery-card-counter {
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          background: rgba(0, 0, 0, 0.4);
          padding: 4px 10px;
          border-radius: 12px;
          backdrop-filter: blur(4px);
        }

        /* Lightbox modal */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(9, 26, 36, 0.93);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-topbar {
          position: absolute;
          top: 18px;
          left: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100000;
          pointer-events: none;
        }

        .lightbox-counter {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.15);
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          pointer-events: auto;
        }

        .lightbox-close-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.2s ease;
          pointer-events: auto;
        }

        .lightbox-close-btn:hover {
          background: var(--accent-color);
          border-color: var(--accent-color);
          transform: scale(1.08);
        }

        .lightbox-content {
          position: relative;
          max-width: 92vw;
          max-height: 86vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-main-img {
          max-width: 90vw;
          max-height: 82vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 100000;
        }

        .lightbox-nav-btn:hover {
          background: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-50%) scale(1.08);
        }

        .lightbox-nav-prev {
          left: 20px;
        }

        .lightbox-nav-next {
          right: 20px;
        }

        @media (max-width: 1200px) {
          .gallery-masonry {
            column-count: 3;
            column-gap: 18px;
          }
        }

        @media (max-width: 820px) {
          .gallery-hero-title {
            font-size: 2.4rem;
          }
          .gallery-masonry {
            column-count: 2;
            column-gap: 16px;
          }
          .lightbox-nav-btn {
            width: 42px;
            height: 42px;
            font-size: 1.1rem;
          }
          .lightbox-nav-prev {
            left: 10px;
          }
          .lightbox-nav-next {
            right: 10px;
          }
        }

        @media (max-width: 540px) {
          .gallery-page-container {
            padding: 40px 4% 70px;
          }
          .gallery-hero-title {
            font-size: 2rem;
          }
          .gallery-masonry {
            column-count: 1;
            column-gap: 0;
          }
          .lightbox-topbar {
            top: 12px;
            left: 14px;
            right: 14px;
          }
        }
      `}</style>

      <main className="gallery-page-container">
        <div className="gallery-inner">
          <header className="gallery-hero">
            <span className="gallery-tag-pill">CONFERENCE HIGHLIGHTS</span>
            <h1 className="gallery-hero-title">PHOTO GALLERY</h1>
            <div className="gallery-title-divider"></div>
            <p className="gallery-hero-desc">
              A visual journey celebrating design, innovation, academic excellence,
              and vibrant campus moments at Parul University during DISHA 2027.
            </p>
            <div className="gallery-stats-badge">
              <i className="fa-regular fa-images"></i>
              <span>{total} Photographs</span>
            </div>
          </header>

          <section className="gallery-masonry" aria-label="Conference Image Gallery">
            {galleryImages.map((fileName, idx) => (
              <article
                key={fileName}
                className="gallery-card"
                onClick={() => setActiveIdx(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Open photo ${idx + 1}: ${fileName}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }
                }}
              >
                <div className="gallery-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/broucher-images/${encodeURIComponent(fileName)}`}
                    alt={`DISHA 2027 Conference Highlight ${idx + 1}`}
                    className="gallery-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-counter">
                      {idx + 1} / {total}
                    </span>
                    <div className="gallery-card-icon" title="View Fullscreen">
                      <i className="fa-solid fa-expand"></i>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Preview"
        >
          <div className="lightbox-topbar">
            <div className="lightbox-counter">
              <i className="fa-regular fa-image" style={{ marginRight: 6 }}></i>
              {activeIdx + 1} of {total}
            </div>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={handleClose}
              aria-label="Close Lightbox (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <button
            type="button"
            className="lightbox-nav-btn lightbox-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image (Left Arrow)"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/broucher-images/${encodeURIComponent(galleryImages[activeIdx])}`}
              alt={`DISHA 2027 Fullview Highlight ${activeIdx + 1}`}
              className="lightbox-main-img"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav-btn lightbox-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image (Right Arrow)"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
}
