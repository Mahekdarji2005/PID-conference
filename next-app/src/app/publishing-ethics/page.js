"use client";

import { useState } from "react";
import Link from "next/link";

export default function PublishingEthicsPage() {
  const [openItems, setOpenItems] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const [downloading, setDownloading] = useState(false);

  const toggleAccordion = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/docs/DISHA_2027_Publishing_Ethics_Guidelines.pdf";
    link.download = "DISHA_2027_Publishing_Ethics_Guidelines.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 2000);
  };

  const requirementsList = [
    {
      title: "Authors and Their Responsibilities",
      icon: "fa-solid fa-users",
      content: (
        <div className="accordion-content-text">
          <p>
            Authors must ensure that their work is entirely original and that any citations or references to other scholarly materials are clearly identified. 
            All authors are expected to maintain an accurate and transparent record of their research, including experimental designs, methodologies, datasets, 
            and analytical findings.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Original Data &amp; Reproducibility:</strong> Authors should be prepared to provide raw datasets or source materials upon reasonable editorial request to facilitate scientific reproducibility.</li>
            <li><strong>Conflict of Interest Disclosure:</strong> Authors must openly declare any financial, commercial, or institutional affiliations that could potentially introduce bias or perceived conflicts of interest.</li>
            <li><strong>Acknowledgment of Sources:</strong> Appropriate credit must be extended to all contributors and published literature that informed the study. Plagiarizing source ideas or omitting primary references is strictly forbidden.</li>
            <li><strong>Correction of Errors:</strong> If an author discovers a fundamental error or inaccuracy in their submitted or published manuscript, it is their immediate duty to notify the conference committee to facilitate an erratum or correction.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Peer-Review Process",
      icon: "fa-solid fa-clipboard-check",
      content: (
        <div className="accordion-content-text">
          <p>
            DISHA 2027 enforces a strict double-blind peer-review policy to guarantee unbiased, rigorous, and constructive evaluation of all submitted manuscripts.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Independent Evaluation:</strong> Every submitted paper is reviewed by at least two independent subject-matter referees possessing verified research expertise in the corresponding track.</li>
            <li><strong>Confidentiality:</strong> Referees treat all received manuscripts as privileged, confidential materials and must never share, quote, or exploit unpublished research findings for personal or institutional gain.</li>
            <li><strong>Constructive &amp; Fair Feedback:</strong> Reviewers must evaluate papers based solely on academic merit, technical validity, originality, methodological soundness, and clarity of presentation, without bias toward author background or nationality.</li>
            <li><strong>Conflict of Interest Mitigation:</strong> Any referee with potential personal, academic, or commercial conflicts with the authors or their institutions must decline the review assignment promptly.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Publication Ethics",
      icon: "fa-solid fa-certificate",
      content: (
        <div className="accordion-content-text">
          <p>
            The conference adheres strictly to the principles, core practices, and codes of conduct articulated by the <strong>Committee on Publication Ethics (COPE)</strong>.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Integrity in Research:</strong> Any manifestation of data fabrication, data falsification, selective reporting, or digital image manipulation is treated as severe scientific misconduct.</li>
            <li><strong>Concurrent Submission Prohibition:</strong> Submitting the same manuscript simultaneously to multiple conferences, journals, or symposia is strictly unethical and will result in immediate disqualification.</li>
            <li><strong>Editorial Impartiality:</strong> Editors make acceptance or rejection determinations based exclusively on the scholarly rigor and scope of the manuscript, free from external or commercial pressures.</li>
            <li><strong>Misconduct Inquiries:</strong> Any reported ethical concerns or allegations of misconduct will trigger an official inquiry guided by standardized COPE procedural flowcharts.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Policy on Retraction and Correction",
      icon: "fa-solid fa-shield-halved",
      content: (
        <div className="accordion-content-text">
          <p>
            Maintaining the integrity of the scholarly literature is paramount. In situations where errors or ethical breaches compromise published papers, 
            the conference committee enforces established retraction and correction protocols.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Grounds for Retraction:</strong> A published paper will be retracted if there is clear evidence that the conclusions are invalid due to fabricated data, methodological fraud, pervasive plagiarism, or undeclared redundant publication.</li>
            <li><strong>Formal Retraction Notice:</strong> Retracted articles will be marked with a clear, permanent watermark and linked to an explanatory retraction notice signed by the editorial committee and/or authors.</li>
            <li><strong>Corrigenda &amp; Errata:</strong> Inadvertent analytical errors, mathematical typos, or typographical mistakes that do not invalidate the primary conclusions will be promptly rectified via an official published erratum.</li>
            <li><strong>Expression of Concern:</strong> If an investigation into suspected misconduct is inconclusive or pending substantial inquiry, an interim Editorial Expression of Concern may be issued to notify the academic community.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Originality and Plagiarism",
      icon: "fa-solid fa-file-shield",
      content: (
        <div className="accordion-content-text">
          <p>
            DISHA 2027 maintains a strict zero-tolerance policy against all forms of plagiarism, verbatim text copying without attribution, and self-plagiarism.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Automated Screening:</strong> All submitted manuscripts are systematically scanned using industry-standard plagiarism detection software (including Turnitin and CrossCheck/iThenticate) prior to peer review.</li>
            <li><strong>Acceptable Similarity Thresholds:</strong> An overall similarity score exceeding 15%, or a match greater than 5% with any single published reference, will be flagged for immediate editorial inspection and potential desk rejection.</li>
            <li><strong>Self-Plagiarism &amp; Text Recycling:</strong> Authors who draw upon their previous publications or conference proceedings must clearly cite and describe their earlier work, delineating novel contributions and avoiding redundant repetition of text.</li>
            <li><strong>Unauthorized Translations:</strong> Translating previously published papers from other languages without proper permission and clear attribution is recognized as plagiarism and is strictly prohibited.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Authorship of the Paper",
      icon: "fa-solid fa-user-group",
      content: (
        <div className="accordion-content-text">
          <p>
            Authorship should accurately reflect significant intellectual contributions to the reported scientific inquiry, adhering to ICMJE and COPE authorship standards.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Criteria for Co-Authorship:</strong> Every listed author must have made substantial contributions to the conception, design, execution, or interpretation of the study, and contributed to drafting or revising the manuscript.</li>
            <li><strong>Final Approval:</strong> All co-authors must read, review, and approve the final version of the manuscript prior to formal submission and agree to its public dissemination.</li>
            <li><strong>Prohibition of Gift &amp; Ghost Authors:</strong> Including individuals who did not contribute intellectually (&ldquo;gift&rdquo; or &ldquo;honorary&rdquo; authorship) or omitting contributors who participated significantly (&ldquo;ghost&rdquo; authorship) is strictly prohibited.</li>
            <li><strong>Corresponding Author Obligations:</strong> The corresponding author serves as the official liaison between the conference and all co-authors, ensuring mutual communication, consensus, and compliance throughout the publication cycle.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Copyright and Accessibility",
      icon: "fa-regular fa-copyright",
      content: (
        <div className="accordion-content-text">
          <p>
            To advance sustainable computing, interdisciplinary technology research, and equitable dissemination of knowledge worldwide, the conference promotes open access publishing.
          </p>
          <ul className="ethics-sub-bullets">
            <li><strong>Creative Commons License:</strong> Accepted and registered articles are published under the <strong>Creative Commons Attribution 4.0 International License (CC BY 4.0)</strong>, allowing universal sharing, adaptation, and citation with appropriate credit.</li>
            <li><strong>Retention of Author Rights:</strong> Authors retain the copyright to their work while granting the conference and its publishing partners the perpetual, worldwide non-exclusive right to publish, index, and archive the paper.</li>
            <li><strong>Digital Archiving &amp; Indexing:</strong> Conference proceedings will be archived in digital repositories and submitted to major international indexing services (such as Scopus, Web of Science, and Google Scholar) for maximum scholarly visibility.</li>
            <li><strong>No Paywalls:</strong> Open access guarantees that researchers, students, and practitioners worldwide can read, download, and reference the published research without subscription barriers.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="ethics-page-wrapper">
      <div className="ethics-container">
        {/* Section Tag Pill matching site convention */}
        <div className="header-pill-wrapper">
          <span className="section-tag-pill">
            <i className="fa-solid fa-scale-balanced"></i>
            <span>Academic Integrity &amp; Standards</span>
          </span>
        </div>

        {/* Main Title with website's font & primary color */}
        <h1 className="section-title">
          Publishing Ethics and Malpractice Statement
        </h1>
        <div className="title-divider"></div>

        {/* Subtitle / Intro Description */}
        <p className="section-subtitle">
          DISHA 2027 (International Conference on Sustainable and Creative Futures
          across Design, the Arts and Knowledge Systems) is committed to maintaining the highest
          ethical standards in academic publishing. This comprehensive guide outlines
          our policies and expectations for authors, reviewers, and editors.
        </p>

        {/* Card 1: Author Guidelines & Policies */}
        <section className="ethics-card guidelines-card" aria-label="Author Guidelines & Policies">
          <div className="guidelines-card-text">
            <div className="card-badge">Guidelines</div>
            <h2 className="ethics-card-title">
              Author Guidelines &amp; Policies
            </h2>
            <p className="ethics-card-subtext">
              Download our comprehensive author guidelines to ensure your submission
              meets all requirements and ethical standards.
            </p>
          </div>
          <div className="guidelines-card-action">
            <button
              onClick={handleDownload}
              className="btn-cta-primary"
              title="Download Author Guidelines"
              aria-label="Download Author Guidelines PDF"
            >
              <i className="fa-solid fa-download"></i>
              <span>{downloading ? "Downloading..." : "Download Guidelines"}</span>
            </button>
          </div>
        </section>

        {/* Card 2: Publishing Requirements (Expandable Accordions) */}
        <section className="ethics-card" aria-label="Publishing Requirements">
          <div className="card-badge">Requirements</div>
          <h2 className="ethics-card-title mb-24">
            Publishing Requirements
          </h2>

          <div className="accordion-list">
            {requirementsList.map((req, idx) => {
              const isOpen = openItems[idx];
              return (
                <div
                  key={idx}
                  className={`accordion-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    id={`accordion-btn-${idx}`}
                    aria-controls={`accordion-body-${idx}`}
                  >
                    <div className="accordion-header-left">
                      <div className="accordion-icon-box">
                        <i className={req.icon}></i>
                      </div>
                      <span className="accordion-title-text">{req.title}</span>
                    </div>
                    <div className="accordion-chevron">
                      <i className={`fa-solid fa-chevron-down ${isOpen ? "rotated" : ""}`}></i>
                    </div>
                  </button>

                  <div
                    id={`accordion-body-${idx}`}
                    role="region"
                    aria-labelledby={`accordion-btn-${idx}`}
                    className={`accordion-collapse ${isOpen ? "expanded" : ""}`}
                  >
                    <div className="accordion-body-inner">
                      {req.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Card 3: Key Ethics Commitments */}
        <section className="ethics-card commitments-card" aria-label="Key Ethics Commitments">
          <div className="commitments-header">
            <div className="commitments-icon-box" aria-hidden="true">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h2 className="ethics-card-title">
                Key Ethics Commitments
              </h2>
              <p className="commitments-subtitle">
                DISHA 2027 is committed to the highest standards of research ethics and integrity.
              </p>
            </div>
          </div>

          <div className="commitments-grid">
            <div className="commitment-item">
              <div className="check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="commitment-item-text">
                <span className="commitment-title">Original Research</span>
                <span className="commitment-desc">Only unpublished original work is accepted</span>
              </div>
            </div>

            <div className="commitment-item">
              <div className="check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="commitment-item-text">
                <span className="commitment-title">Transparency</span>
                <span className="commitment-desc">Clear disclosure of funding and conflicts</span>
              </div>
            </div>

            <div className="commitment-item">
              <div className="check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="commitment-item-text">
                <span className="commitment-title">Ethical Conduct</span>
                <span className="commitment-desc">All research must follow ethical guidelines</span>
              </div>
            </div>

            <div className="commitment-item">
              <div className="check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="commitment-item-text">
                <span className="commitment-title">Accountability</span>
                <span className="commitment-desc">Authors accountable for research accuracy</span>
              </div>
            </div>

            <div className="commitment-item">
              <div className="check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="commitment-item-text">
                <span className="commitment-title">Peer Review</span>
                <span className="commitment-desc">Fair and rigorous peer review process</span>
              </div>
            </div>

            <div className="commitment-item">
              <div className="check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="commitment-item-text">
                <span className="commitment-title">Open Access</span>
                <span className="commitment-desc">Published works available under CC BY 4.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* Card 4: Ethics Inquiries and Complaints */}
        <section className="ethics-card" aria-label="Ethics Inquiries and Complaints">
          <div className="card-badge">Support &amp; Inquiries</div>
          <div className="inquiries-header">
            <div className="inquiries-icon-box" aria-hidden="true">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h2 className="ethics-card-title">
              Ethics Inquiries and Complaints
            </h2>
          </div>

          <p className="inquiries-intro">
            If you have any concerns regarding research ethics, publication misconduct, or other ethics-related
            matters, please contact our editorial office:
          </p>

          <div className="inquiries-box">
            <div className="email-row">
              <span className="email-label">Email:</span>
              {/* Conference editorial email will be added here */}
              <span className="email-placeholder">[To be announced]</span>
            </div>
            <p className="inquiries-confidential-note">
              <i className="fa-solid fa-lock" style={{ marginRight: "6px", color: "var(--accent-color)" }}></i>
              All complaints and inquiries will be handled confidentially and investigated thoroughly.
            </p>
          </div>
        </section>

        {/* Card 5: Important Notice */}
        <section className="ethics-card notice-card" aria-label="Important Notice">
          <div className="notice-header">
            <i className="fa-solid fa-circle-exclamation notice-warning-icon" aria-hidden="true"></i>
            <h2 className="notice-title">Important Notice</h2>
          </div>

          <p className="notice-lead">
            By submitting a manuscript to DISHA 2027, all authors confirm that:
          </p>

          <ul className="notice-bullet-list">
            <li>The work is original and has not been published elsewhere</li>
            <li>All authors have agreed on authorship and order</li>
            <li>The work complies with ethical standards and regulations</li>
            <li>All conflicts of interest have been disclosed</li>
            <li>The corresponding author is authorized to act on behalf of all co-authors</li>
            <li>The manuscript will not be submitted elsewhere while under review</li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        .ethics-page-wrapper {
          min-height: 100vh;
          background: transparent;
          color: var(--text-main);
          padding: 60px 5% 100px;
          font-family: var(--font-body);
        }

        .ethics-container {
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Section Tag Pill */
        .header-pill-wrapper {
          text-align: center;
          margin-bottom: 16px;
        }

        .section-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #fff5f3;
          color: var(--accent-color);
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 22px;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(181, 71, 40, 0.06);
          border: 1px solid rgba(181, 71, 40, 0.18);
        }

        /* Signature Section Title */
        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          color: var(--primary-color);
          font-weight: 700;
          text-align: center;
          line-height: 1.25;
          margin: 0 auto 12px;
          position: relative;
        }

        .title-divider {
          width: 65px;
          height: 3.5px;
          background-color: var(--accent-color);
          margin: 16px auto 24px;
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--text-light);
          text-align: center;
          max-width: 820px;
          margin: 0 auto 45px;
        }

        /* Card Container Styles */
        .ethics-card {
          background: #ffffff;
          border: 1px solid rgba(13, 40, 54, 0.08);
          border-radius: 18px;
          padding: 38px 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(13, 40, 54, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
        }

        .ethics-card:hover {
          box-shadow: 0 15px 40px rgba(13, 40, 54, 0.08);
          border-color: rgba(181, 71, 40, 0.2);
        }

        .card-badge {
          display: inline-block;
          background: #fff5f3;
          color: var(--accent-color);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
          border: 1px solid rgba(181, 71, 40, 0.15);
        }

        .ethics-card-title {
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--primary-color);
          letter-spacing: -0.01em;
          margin: 0;
          line-height: 1.3;
        }

        .mb-24 {
          margin-bottom: 24px;
        }

        /* Card 1: Author Guidelines */
        .guidelines-card {
          border-left: 5px solid var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .guidelines-card-text {
          flex: 1;
        }

        .ethics-card-subtext {
          color: var(--text-light);
          font-size: 0.96rem;
          line-height: 1.6;
          margin-top: 8px;
          margin-bottom: 0;
        }

        .guidelines-card-action {
          flex-shrink: 0;
        }

        .btn-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--accent-color);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 13px 28px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(181, 71, 40, 0.28);
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }

        .btn-cta-primary:hover {
          background-color: #9c3b20;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(181, 71, 40, 0.38);
        }

        .btn-cta-primary:active {
          transform: translateY(0);
        }

        /* Card 2: Accordion List */
        .accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          background: #faf8f5;
          border: 1px solid #eae5dc;
          border-radius: 12px;
          overflow: hidden;
          transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .accordion-item:hover {
          border-color: rgba(181, 71, 40, 0.35);
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(13, 40, 54, 0.04);
        }

        .accordion-item.is-open {
          border-color: var(--accent-color);
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(181, 71, 40, 0.08);
        }

        .accordion-header {
          width: 100%;
          background: transparent;
          border: none;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          color: var(--primary-color);
        }

        .accordion-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .accordion-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #fff5f3;
          border: 1px solid rgba(181, 71, 40, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.05rem;
          flex-shrink: 0;
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        .accordion-item.is-open .accordion-icon-box {
          background: var(--accent-color);
          color: #ffffff;
          border-color: var(--accent-color);
        }

        .accordion-title-text {
          font-family: var(--font-body);
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--primary-color);
          letter-spacing: -0.01em;
        }

        .accordion-chevron {
          color: var(--accent-color);
          font-size: 0.9rem;
          margin-left: 14px;
        }

        .accordion-chevron i {
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .accordion-chevron i.rotated {
          transform: rotate(180deg);
        }

        .accordion-collapse {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
          opacity: 0;
        }

        .accordion-collapse.expanded {
          max-height: 900px;
          opacity: 1;
        }

        .accordion-body-inner {
          padding: 12px 26px 26px 26px;
          border-top: 1px solid #f0eae1;
          color: var(--text-main);
          font-size: 0.94rem;
          line-height: 1.7;
        }

        .accordion-content-text p {
          margin-bottom: 14px;
          color: var(--text-main);
          text-align: left;
        }

        .ethics-sub-bullets {
          list-style: disc;
          padding-left: 20px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ethics-sub-bullets li {
          color: #4b5563;
          line-height: 1.6;
        }

        .ethics-sub-bullets li strong {
          color: var(--primary-color);
        }

        /* Card 3: Key Ethics Commitments */
        .commitments-card {
          border-top: 5px solid var(--accent-color);
        }

        .commitments-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .commitments-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #fff5f3;
          border: 1px solid rgba(181, 71, 40, 0.2);
          color: var(--accent-color);
          font-size: 1.35rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .commitments-subtitle {
          color: var(--text-light);
          font-size: 0.95rem;
          margin: 4px 0 0 0;
          line-height: 1.5;
        }

        .commitments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          row-gap: 22px;
          column-gap: 36px;
        }

        .commitment-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          background: #faf8f5;
          border: 1px solid #eae5dc;
          transition: all 0.25s ease;
        }

        .commitment-item:hover {
          background: #ffffff;
          border-color: rgba(181, 71, 40, 0.3);
          box-shadow: 0 4px 15px rgba(13, 40, 54, 0.04);
        }

        .check-icon {
          color: #15803d;
          background: #ecfdf5;
          border: 1px solid #bbf7d0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .commitment-item-text {
          display: flex;
          flex-direction: column;
        }

        .commitment-title {
          font-weight: 700;
          font-size: 1rem;
          color: var(--primary-color);
          letter-spacing: -0.01em;
        }

        .commitment-desc {
          font-size: 0.88rem;
          color: var(--text-light);
          margin-top: 2px;
          line-height: 1.45;
        }

        /* Card 4: Inquiries and Complaints */
        .inquiries-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .inquiries-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #fff5f3;
          border: 1px solid rgba(181, 71, 40, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.15rem;
          flex-shrink: 0;
        }

        .inquiries-intro {
          color: var(--text-light);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 22px;
          margin-top: 6px;
        }

        .inquiries-box {
          background: #fbf9f6;
          border: 1px solid #ebe5dc;
          border-radius: 12px;
          padding: 22px 26px;
        }

        .email-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.98rem;
        }

        .email-label {
          font-weight: 700;
          color: var(--primary-color);
        }

        .email-placeholder {
          color: var(--text-light);
          font-style: italic;
          font-weight: 500;
          letter-spacing: 0.2px;
        }

        .inquiries-confidential-note {
          color: var(--text-light);
          font-size: 0.88rem;
          margin-top: 12px;
          margin-bottom: 0;
          line-height: 1.5;
        }

        /* Card 5: Important Notice */
        .notice-card {
          border: 1.5px solid rgba(181, 71, 40, 0.25);
          border-left: 5px solid var(--accent-color);
          background: #fff9f6;
          box-shadow: 0 8px 25px rgba(181, 71, 40, 0.05);
        }

        .notice-card:hover {
          border-color: rgba(181, 71, 40, 0.45);
          box-shadow: 0 12px 30px rgba(181, 71, 40, 0.09);
        }

        .notice-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .notice-warning-icon {
          color: var(--accent-color);
          font-size: 1.4rem;
        }

        .notice-title {
          font-family: var(--font-heading);
          color: var(--accent-color);
          font-size: 1.55rem;
          font-weight: 700;
          margin: 0;
        }

        .notice-lead {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.95rem;
          margin: 0 0 16px 0;
          line-height: 1.55;
        }

        .notice-bullet-list {
          list-style: disc;
          padding-left: 22px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .notice-bullet-list li {
          color: var(--text-main);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .ethics-page-wrapper {
            padding: 40px 5% 80px;
          }

          .ethics-card {
            padding: 26px 20px;
            margin-bottom: 24px;
          }

          .guidelines-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-cta-primary {
            width: 100%;
            justify-content: center;
          }

          .commitments-grid {
            grid-template-columns: 1fr;
            row-gap: 14px;
          }

          .accordion-header {
            padding: 14px 16px;
          }

          .accordion-body-inner {
            padding: 10px 16px 20px 16px;
          }

          .inquiries-box {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
