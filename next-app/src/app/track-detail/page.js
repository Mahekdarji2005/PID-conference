"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { tracksData } from "@/data/tracks-data";

function TrackDetailContent() {
  const searchParams = useSearchParams();
  const trackIdParam = searchParams.get("track") || searchParams.get("id") || "1";
  const trackId = tracksData[trackIdParam] ? trackIdParam : "1";
  const track = tracksData[trackId];
  const currentNum = parseInt(trackId, 10);

  const prevId = String(currentNum > 1 ? currentNum - 1 : 7);
  const nextId = String(currentNum < 7 ? currentNum + 1 : 1);

  return (
    <section className="detail-section">
      <div className="detail-container">
        {/* Back Button */}
        <Link href="/tracks" className="btn-back">
          <i className="fa-solid fa-arrow-left"></i> BACK TO RESEARCH CATEGORIES
        </Link>

        {/* Dynamic Track Detail View Container */}
        <div id="trackView">
          {/* Hero Header Card */}
          <div className="detail-hero-card">
            <span className="detail-tag-pill">RESEARCH CATEGORY</span>
            <div className="detail-num">{track.number}</div>
            <h1 className="detail-title">{track.title}</h1>
            <div className="detail-institution">
              <i className={`fa-solid ${track.icon}`}></i> {track.institution}
            </div>
          </div>

          {/* 1. About Section */}
          <div className="content-card">
            <div className="section-label">
              <i className="fa-solid fa-circle-info"></i> ABOUT THIS TRACK
            </div>
            <p className="about-text">{track.about}</p>
          </div>

          {/* 2. Key Themes / Areas */}
          <div className="content-card">
            <div className="section-label">
              <i className="fa-solid fa-list-check"></i> KEY THEMES & SUB-THEMES
            </div>
            <ul className="themes-list">
              {track.themes.map((t, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Relevant Sub-fields & Topics */}
          <div className="content-card">
            <div className="section-label">
              <i className="fa-solid fa-tags"></i> RELEVANT TOPICS & SUB-FIELDS
            </div>
            <div className="badge-group">
              {track.topics.map((tp, idx) => (
                <span key={idx} className="topic-badge">
                  <i className="fa-solid fa-hashtag"></i> {tp}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Research Focus & Policy Alignment */}
          <div className="content-card">
            <div className="section-label">
              <i className="fa-solid fa-earth-americas"></i> POLICY & SDG ALIGNMENT
            </div>
            <p style={{ fontWeight: 600, color: "var(--primary-color)", marginBottom: "10px", fontSize: "0.95rem" }}>
              UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS:
            </p>
            <div className="badge-group" style={{ marginBottom: "25px" }}>
              {track.sdgs.map((s, idx) => (
                <span key={idx} className="sdg-badge">
                  <i className="fa-solid fa-leaf"></i> {s}
                </span>
              ))}
            </div>

            <p style={{ fontWeight: 600, color: "var(--primary-color)", marginBottom: "10px", fontSize: "0.95rem" }}>
              NATIONAL MISSIONS & POLICY FRAMEWORKS:
            </p>
            <div className="badge-group">
              {track.nationalMissions.map((m, idx) => (
                <span key={idx} className="mission-badge">
                  <i className="fa-solid fa-landmark"></i> {m}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Submission Guidance CTA Box */}
          <div className="cta-submit-box">
            <div className="cta-submit-info">
              <h3>Ready to Submit to Track {track.number}?</h3>
              <p>Submit your 250-word abstract by 31 October 2026 for double-blind peer review.</p>
            </div>
            <Link href="/call-for-papers#submit-options" className="btn-submit-action">
              SUBMIT ABSTRACT <i className="fa-solid fa-paper-plane"></i>
            </Link>
          </div>
        </div>

        {/* Bottom Pagination Navigation */}
        <div className="track-nav-bar">
          <Link href={`/track-detail?track=${prevId}`} className="btn-nav-track">
            <i className="fa-solid fa-arrow-left"></i> Track {tracksData[prevId].number}
          </Link>
          <Link href="/tracks" className="btn-nav-track">
            <i className="fa-solid fa-grid-2"></i> All Tracks
          </Link>
          <Link href={`/track-detail?track=${nextId}`} className="btn-nav-track">
            Track {tracksData[nextId].number} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function TrackDetailPage() {
  return (
    <>
      <style jsx global>{`
        .detail-section {
          padding: 50px 5% 80px;
          background: transparent;
          color: var(--text-main);
        }

        .detail-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #ffffff;
          color: var(--primary-color);
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          margin-bottom: 35px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .btn-back:hover {
          background-color: var(--accent-color);
          color: #ffffff;
          transform: translateX(-4px);
        }

        .detail-hero-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
          margin-bottom: 35px;
          border-top: 6px solid var(--accent-color);
          position: relative;
        }

        .detail-tag-pill {
          display: inline-block;
          background-color: #fff5f3;
          color: var(--accent-color);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .detail-num {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--accent-color);
          line-height: 1;
          margin-bottom: 15px;
        }

        .detail-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          color: var(--primary-color);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .detail-institution {
          font-size: 1.05rem;
          color: var(--text-light);
          font-style: italic;
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 20px;
          border-top: 1px solid #f0ede6;
        }

        .detail-institution i {
          color: var(--accent-color);
          font-size: 1.1rem;
        }

        .content-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          margin-bottom: 30px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .section-label {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          color: var(--primary-color);
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 2px solid #f5f3ef;
        }

        .section-label i {
          color: var(--accent-color);
          font-size: 1.2rem;
        }

        .about-text {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #444444;
        }

        .themes-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .themes-list li {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-main);
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 12px 16px;
          background: #faf8f5;
          border-radius: 10px;
          border-left: 3px solid var(--accent-color);
        }

        .themes-list li i {
          color: var(--accent-color);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .badge-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 15px;
        }

        .topic-badge {
          background: #f8f6f2;
          color: var(--primary-color);
          padding: 10px 18px;
          border-radius: 25px;
          font-size: 0.92rem;
          font-weight: 600;
          border: 1px solid #e8e4dc;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .topic-badge i {
          color: var(--accent-color);
          font-size: 0.8rem;
        }

        .sdg-badge {
          background: #fff5f3;
          color: #b54728;
          padding: 10px 18px;
          border-radius: 25px;
          font-size: 0.92rem;
          font-weight: 600;
          border: 1px solid rgba(181, 71, 40, 0.2);
        }

        .mission-badge {
          background: #eef5f8;
          color: #0d2836;
          padding: 10px 18px;
          border-radius: 25px;
          font-size: 0.92rem;
          font-weight: 600;
          border: 1px solid rgba(13, 40, 54, 0.15);
        }

        .cta-submit-box {
          background: linear-gradient(135deg, var(--primary-color) 0%, #173d52 100%);
          border-radius: 18px;
          padding: 40px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          box-shadow: 0 12px 35px rgba(13, 40, 54, 0.2);
          margin-top: 40px;
        }

        .cta-submit-info h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #ffffff;
        }

        .cta-submit-info p {
          font-size: 1rem;
          color: #d1e2ec;
          margin: 0;
        }

        .btn-submit-action {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--accent-color);
          color: #ffffff;
          padding: 16px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          box-shadow: 0 6px 20px rgba(181, 71, 40, 0.3);
        }

        .btn-submit-action:hover {
          background-color: #9c3b20;
          transform: translateY(-2px);
        }

        .track-nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 50px;
          padding-top: 30px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .btn-nav-track {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: var(--primary-color);
          padding: 14px 24px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .btn-nav-track:hover {
          background: var(--primary-color);
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .detail-hero-card { padding: 30px 25px; }
          .detail-title { font-size: 1.8rem; }
          .content-card { padding: 25px 20px; }
          .cta-submit-box { flex-direction: column; text-align: center; padding: 30px 20px; }
          .track-nav-bar { flex-direction: column; gap: 15px; }
        }
      `}</style>
      <Suspense fallback={<div className="detail-section"><div className="detail-container"><p>Loading track details...</p></div></div>}>
        <TrackDetailContent />
      </Suspense>
    </>
  );
}
