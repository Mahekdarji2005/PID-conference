export const metadata = {
  title: 'Call for Papers - DISHA 2027 | Parul University',
};

export default function CallForPapersPage() {
  return (
    <>
      <style>{`
        .cfp-section {
            padding: 60px 5% 80px;
            background: transparent;
            color: var(--text-main);
        }
        
        .cfp-container {
            max-width: 1100px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-tag {
            color: var(--accent-color) !important;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-size: 0.85rem;
            display: inline-block;
            margin-bottom: 15px;
            background: #fff5f3;
            padding: 8px 16px;
            border-radius: 20px;
        }

        .section-title {
            font-family: var(--font-heading);
            font-size: 2.8rem;
            color: var(--primary-color);
            margin-top: 0;
            position: relative;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: var(--accent-color);
            border-radius: 2px;
        }

        .section-subtitle {
            font-size: 1.1rem;
            color: var(--text-light);
            margin-top: 20px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .btn-cta-primary {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background-color: var(--accent-color);
            color: #ffffff;
            padding: 16px 36px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 1.05rem;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(181, 71, 40, 0.25);
            letter-spacing: 0.5px;
        }

        .btn-cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(181, 71, 40, 0.35);
            background-color: #9c3b20;
        }

        .calls-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
            margin-top: 30px;
        }

        .call-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 45px 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            border-top: 5px solid var(--accent-color);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }

        .call-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .call-card-badge {
            align-self: flex-start;
            background: #fff5f3;
            color: var(--accent-color);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 6px 14px;
            border-radius: 20px;
            margin-bottom: 20px;
        }

        .call-card-title {
            font-family: var(--font-heading);
            font-size: 2.2rem;
            color: var(--primary-color);
            margin-bottom: 12px;
        }

        .call-card-audience {
            font-size: 1.05rem;
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f0ede6;
        }

        .call-card-body {
            font-size: 1rem;
            color: var(--text-main);
            line-height: 1.7;
            margin-bottom: 30px;
        }

        .proposals-list {
            list-style: none;
            padding: 0;
            margin: 15px 0 0 0;
        }

        .proposals-list li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
            color: var(--primary-color);
        }

        .proposals-list li i {
            color: var(--accent-color);
            font-size: 0.85rem;
        }

        .btn-call-action {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: var(--primary-color);
            color: #ffffff;
            padding: 14px 28px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            transition: all 0.3s ease;
            letter-spacing: 0.5px;
        }

        .btn-call-action:hover {
            background-color: var(--accent-color);
            transform: translateY(-2px);
        }

        .guidelines-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 30px;
        }

        .guideline-item {
            background: #ffffff;
            border-radius: 12px;
            padding: 24px 28px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            display: flex;
            align-items: flex-start;
            gap: 20px;
            border-left: 4px solid var(--accent-color);
            transition: transform 0.2s ease;
        }

        .guideline-item:hover {
            transform: translateX(4px);
        }

        .guideline-number {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent-color);
            min-width: 36px;
            height: 36px;
            background: #fff5f3;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .guideline-text {
            font-size: 0.98rem;
            color: var(--text-main);
            line-height: 1.6;
        }

        .process-steps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 35px;
        }

        .step-card {
            background: #ffffff;
            border-radius: 14px;
            padding: 30px 25px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
            border-top: 3px solid var(--accent-color);
            position: relative;
        }

        .step-num {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent-color);
            margin-bottom: 10px;
        }

        .step-title {
            font-family: var(--font-heading);
            font-size: 1.15rem;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 10px;
        }

        .step-desc {
            font-size: 0.92rem;
            color: var(--text-light);
            line-height: 1.5;
        }

        .publication-box {
            background: #ffffff;
            border-radius: 16px;
            padding: 45px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.06);
            margin-top: 30px;
        }

        .pub-highlight {
            font-size: 1.25rem;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f0ede6;
        }

        .pub-highlight i {
            color: var(--accent-color);
            font-size: 1.5rem;
        }

        .pub-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .pub-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1rem;
            color: var(--text-main);
            font-weight: 500;
        }

        .pub-item i {
            color: var(--accent-color);
        }

        .pub-disclaimer {
            background: #fff5f3;
            border-left: 4px solid var(--accent-color);
            padding: 16px 20px;
            border-radius: 0 8px 8px 0;
            font-size: 0.9rem;
            color: #7a2d1b;
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
            font-size: 3rem;
            color: #ffffff;
            margin-bottom: 15px;
        }

        .cta-final-desc {
            font-size: 1.2rem;
            color: #d1e2ec;
            margin-bottom: 25px;
        }

        .cta-final-meta {
            font-size: 0.95rem;
            font-weight: 600;
            letter-spacing: 2px;
            color: #d4af37;
            text-transform: uppercase;
            margin-bottom: 35px;
        }

        .cta-buttons-group {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .btn-cta-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: transparent;
            color: #ffffff;
            border: 2px solid rgba(255, 255, 255, 0.8);
            padding: 14px 32px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .btn-cta-secondary:hover {
            background-color: #ffffff;
            color: var(--primary-color);
            transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
            .calls-grid { gap: 25px; }
            .process-steps { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            .section-title { font-size: 2.2rem; }
            .calls-grid { grid-template-columns: 1fr; }
            .guidelines-grid { grid-template-columns: 1fr; }
            .process-steps { grid-template-columns: 1fr; }
            .pub-list { grid-template-columns: 1fr; }
            .cta-final-title { font-size: 2.2rem; }
            .cta-buttons-group { flex-direction: column; align-items: stretch; }
        }
      `}</style>

      {/* TWO CALLS SECTION */}
      <section className="cfp-section" id="two-calls">
        <div className="cfp-container">
          <div className="section-header">
            <span className="section-tag">SUBMISSION ROUTES</span>
            <h2 className="section-title">Two Calls, One Conference</h2>
            <p className="section-subtitle">Choose the submission pathway that best fits your academic research or professional creative practice.</p>
          </div>

          <div className="calls-grid" id="submit-options">
            {/* CARD 1: CALL FOR PAPERS */}
            <div className="call-card">
              <div>
                <span className="call-card-badge">ACADEMIC ROUTE</span>
                <h3 className="call-card-title">Call for Papers</h3>
                <div className="call-card-audience">For academics, research scholars and doctoral candidates.</div>
                <p className="call-card-body">
                  Abstracts are allocated to one track and reviewed double blind. Accepted papers are presented in parallel sessions and considered for publication in Scopus-indexed proceedings and journals.
                </p>
              </div>
              <a href="#submit-portal" className="btn-call-action">
                SUBMIT PAPER <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>

            {/* CARD 2: CALL FOR PROPOSALS */}
            <div className="call-card">
              <div>
                <span className="call-card-badge">PRACTICE ROUTE</span>
                <h3 className="call-card-title">Call for Proposals</h3>
                <div className="call-card-audience">For professional designers, artists and educators, postgraduate students and staff.</div>
                <div className="call-card-body">
                  Proposals may take the form of:
                  <ul className="proposals-list">
                    <li><i className="fa-solid fa-circle-check"></i> Workshops</li>
                    <li><i className="fa-solid fa-circle-check"></i> Demonstrations</li>
                    <li><i className="fa-solid fa-circle-check"></i> Exhibitions</li>
                    <li><i className="fa-solid fa-circle-check"></i> Performances</li>
                    <li><i className="fa-solid fa-circle-check"></i> Posters</li>
                  </ul>
                </div>
              </div>
              <a href="#submit-portal" className="btn-call-action">
                SUBMIT PROPOSAL <i className="fa-solid fa-layer-group"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION GUIDELINES */}
      <section className="cfp-section" id="guidelines">
        <div className="cfp-container">
          <div className="section-header">
            <span className="section-tag">AUTHOR INSTRUCTIONS</span>
            <h2 className="section-title">Submission Guidelines</h2>
            <p className="section-subtitle">Please ensure your submission meets all structural, formatting, and ethical requirements before submitting.</p>
          </div>

          <div className="guidelines-grid">
            <div className="guideline-item">
              <div className="guideline-number">01</div>
              <div className="guideline-text">Abstracts of up to 250 words, with five keywords, allocated to a single track and sub theme.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">02</div>
              <div className="guideline-text">Abstract title limited to 20 words.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">03</div>
              <div className="guideline-text">Submissions must be in English.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">04</div>
              <div className="guideline-text">Full papers up to 5,000 words in the conference template.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">05</div>
              <div className="guideline-text">Times New Roman, 12 point.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">06</div>
              <div className="guideline-text">References single spaced.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">07</div>
              <div className="guideline-text">Similarity below 10 per cent.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">08</div>
              <div className="guideline-text">Work must be original and not previously published or accepted elsewhere.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">09</div>
              <div className="guideline-text">At least one author must register for a paper to be presented and considered for publication.</div>
            </div>
            <div className="guideline-item">
              <div className="guideline-number">10</div>
              <div className="guideline-text">No change of title, abstract or authorship is permitted after the submission deadline.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION WORKFLOW */}
      <section className="cfp-section" id="process">
        <div className="cfp-container">
          <div className="section-header">
            <span className="section-tag">STEP-BY-STEP PROCESS</span>
            <h2 className="section-title">Submission Workflow</h2>
            <p className="section-subtitle">Follow these six steps to guide your contribution from initial idea to final publication.</p>
          </div>

          <div className="process-steps">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3 className="step-title">Choose Your Call</h3>
              <p className="step-desc">Select between Academic Call for Papers or Practice Call for Proposals.</p>
            </div>

            <div className="step-card">
              <div className="step-num">02</div>
              <h3 className="step-title">Select Your Track</h3>
              <p className="step-desc">Choose the single research track/sub-theme that best fits your research scope.</p>
            </div>

            <div className="step-card">
              <div className="step-num">03</div>
              <h3 className="step-title">Prepare Your Abstract</h3>
              <p className="step-desc">Maximum 250 words, 5 keywords, title maximum 20 words in English.</p>
            </div>

            <div className="step-card">
              <div className="step-num">04</div>
              <h3 className="step-title">Submit</h3>
              <p className="step-desc">Submit your abstract through the official online portal prior to deadline.</p>
            </div>

            <div className="step-card">
              <div className="step-num">05</div>
              <h3 className="step-title">Double-Blind Review</h3>
              <p className="step-desc">Academic papers undergo rigorous double-blind peer review by experts.</p>
            </div>

            <div className="step-card">
              <div className="step-num">06</div>
              <h3 className="step-title">Acceptance & Presentation</h3>
              <p className="step-desc">Accepted authors proceed to presentation, registration, and publication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATION SECTION */}
      <section className="cfp-section" id="publication">
        <div className="cfp-container">
          <div className="section-header">
            <span className="section-tag">INDEXING &amp; PUBLISHING</span>
            <h2 className="section-title">Publication Opportunities</h2>
            <p className="section-subtitle">DISHA 2027 is committed to disseminating high-quality research into global academic discourse.</p>
          </div>

          <div className="publication-box">
            <div className="pub-highlight">
              <i className="fa-solid fa-award"></i>
              <span>Conference proceedings will be Scopus-indexed.</span>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '20px', fontWeight: 500 }}>
              Selected accepted papers will be considered for:
            </p>

            <div className="pub-list">
              <div className="pub-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Scopus-indexed publication</span>
              </div>
              <div className="pub-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Taylor &amp; Francis (in discussion)</span>
              </div>
              <div className="pub-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Edited volumes with international publishers</span>
              </div>
              <div className="pub-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Special issues of reputed journals</span>
              </div>
            </div>

            <div className="pub-disclaimer">
              <i className="fa-solid fa-circle-info"></i> <strong>Important Note:</strong> Publication is subject to the review process and the specific terms and conditions of the respective journal or publisher.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="cfp-section" id="submit-portal" style={{ paddingBottom: '100px' }}>
        <div className="cfp-container">
          <div className="cta-final-box">
            <h2 className="cta-final-title">READY TO CONTRIBUTE?</h2>
            <p className="cta-final-desc">Bring your research, ideas and creative practice to DISHA 2027.</p>
            <div className="cta-final-meta">22–23 JANUARY 2027 &middot; PARUL UNIVERSITY &middot; VADODARA</div>
            
            <div className="cta-buttons-group">
              <a href="#tba-portal" className="btn-cta-primary" style={{ backgroundColor: '#ffffff', color: 'var(--primary-color)' }}>
                SUBMIT YOUR PAPER <i className="fa-solid fa-paper-plane"></i>
              </a>
              <a href="#tba-portal" className="btn-cta-secondary">
                SUBMIT YOUR PROPOSAL <i className="fa-solid fa-layer-group"></i>
              </a>
            </div>
            
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>
              * Submission Portal URL: TBA (To Be Announced). Online submission portal link will open shortly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
