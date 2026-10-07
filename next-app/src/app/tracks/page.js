import Link from 'next/link';

export const metadata = {
  title: 'Tracks & Panels - DISHA 2027 | Parul University',
};

export default function TracksPage() {
  return (
    <>
      <style>{`
        .tracks-hero-section {
            padding: 60px 5% 90px;
            background: transparent;
            color: var(--text-main);
        }

        .tracks-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .tracks-header {
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

        .tracks-main-title {
            font-family: var(--font-heading);
            font-size: 3rem;
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 8px;
            line-height: 1.2;
        }

        .title-divider {
            width: 65px;
            height: 3.5px;
            background-color: var(--accent-color);
            margin: 16px auto 22px;
            border-radius: 2px;
        }

        .tracks-main-desc {
            font-family: var(--font-body);
            font-size: 1.1rem;
            color: var(--text-light);
            max-width: 680px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .tracks-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 45px;
        }

        .track-card {
            background: #ffffff;
            border-radius: 18px;
            padding: 40px 32px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.04);
            position: relative;
            text-decoration: none;
            color: inherit;
        }

        .track-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.09);
            border-color: rgba(181, 71, 40, 0.25);
        }

        .track-card-number {
            font-family: var(--font-heading);
            font-size: 2.3rem;
            font-weight: 700;
            color: var(--accent-color);
            margin-bottom: 18px;
            line-height: 1;
        }

        .track-card-title {
            font-family: var(--font-heading);
            font-size: 1.35rem;
            color: var(--primary-color);
            font-weight: 600;
            line-height: 1.38;
            margin-bottom: 16px;
            flex-grow: 1;
        }

        .track-card-institution {
            font-size: 0.92rem;
            color: var(--text-light);
            font-style: italic;
            display: flex;
            align-items: center;
            gap: 9px;
            margin-bottom: 28px;
            font-family: var(--font-body);
        }

        .track-card-institution i {
            color: var(--text-light);
            font-size: 0.9rem;
            opacity: 0.85;
        }

        .track-card-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent-color);
            font-weight: 700;
            font-size: 0.88rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: gap 0.25 ease;
            margin-top: auto;
        }

        .track-card:hover .track-card-link {
            gap: 12px;
            color: #9c3b20;
        }

        .panels-wrapper {
            margin-top: 90px;
            padding-top: 60px;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .panels-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .panels-main-title {
            font-family: var(--font-heading);
            font-size: 2.4rem;
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 15px;
        }

        .panels-main-desc {
            font-family: var(--font-body);
            font-size: 1.05rem;
            color: var(--text-light);
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .panels-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 35px;
        }

        .panel-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 38px 32px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            border-left: 5px solid var(--accent-color);
            transition: transform 0.3s ease;
        }

        .panel-card:hover {
            transform: translateY(-4px);
        }

        .panel-title {
            font-family: var(--font-heading);
            font-size: 1.45rem;
            color: var(--primary-color);
            line-height: 1.35;
            margin-bottom: 8px;
        }

        .panel-title span {
            color: var(--accent-color);
            font-weight: 700;
        }

        .panel-meta {
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--accent-color);
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 15px;
            padding-bottom: 12px;
            border-bottom: 1px solid #f0ede6;
        }

        .panel-body {
            font-size: 0.95rem;
            color: var(--text-main);
            line-height: 1.65;
        }

        @media (max-width: 1024px) {
            .tracks-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 25px;
            }
        }

        @media (max-width: 768px) {
            .tracks-main-title {
                font-size: 2.2rem;
            }
            .tracks-grid {
                grid-template-columns: 1fr;
            }
            .panels-grid {
                grid-template-columns: 1fr;
            }
            .tracks-hero-section {
                padding: 40px 4% 60px;
            }
        }
      `}</style>

      <section className="tracks-hero-section">
        <div className="tracks-container">
          <div className="tracks-header">
            <span className="section-tag-pill">RESEARCH CATEGORIES</span>
            <h1 className="tracks-main-title">Where Does Your Research Belong?</h1>
            <div className="title-divider"></div>
            <p className="tracks-main-desc">
              Every submission is allocated to a SINGLE track. Select the category that best aligns with your work.
            </p>
          </div>

          <div className="tracks-grid">
            <Link href="/track-detail?track=1" className="track-card">
              <div>
                <div className="track-card-number">01</div>
                <h2 className="track-card-title">Design for Sustainable and Civilisational Futures</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-building-columns"></i> Parul Institute of Design
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/track-detail?track=2" className="track-card">
              <div>
                <div className="track-card-number">02</div>
                <h2 className="track-card-title">Fine Arts, Visual Culture and Material Ecologies</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-building-columns"></i> Parul Institute of Fine Arts
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/track-detail?track=3" className="track-card">
              <div>
                <div className="track-card-number">03</div>
                <h2 className="track-card-title">Humanities, Society and Civilisational Thought</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-building-columns"></i> Parul Institute of Liberal Arts
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/track-detail?track=4" className="track-card">
              <div>
                <div className="track-card-number">04</div>
                <h2 className="track-card-title">Indian Knowledge Systems towards Future Sustainability</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-star"></i> Cross Faculty Signature Track
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/track-detail?track=5" className="track-card">
              <div>
                <div className="track-card-number">05</div>
                <h2 className="track-card-title">AI, Digital Cultures and Creative Technologies</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-layer-group"></i> Cross Faculty Track
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/track-detail?track=6" className="track-card">
              <div>
                <div className="track-card-number">06</div>
                <h2 className="track-card-title">Creative Education, Research and Global Collaboration</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-layer-group"></i> Cross Faculty Track
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/track-detail?track=7" className="track-card">
              <div>
                <div className="track-card-number">07</div>
                <h2 className="track-card-title">Peace, Sustainability and Human Futures</h2>
                <div className="track-card-institution">
                  <i className="fa-solid fa-layer-group"></i> Cross Faculty Track
                </div>
              </div>
              <div className="track-card-link">
                VIEW TRACK <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          </div>

          <div className="panels-wrapper">
            <div className="panels-header">
              <h2 className="panels-main-title">Cross Faculty Thematic Panels</h2>
              <p className="panels-main-desc">
                Alongside the paper tracks, six thematic panels run through both days. Each is curated jointly by the three faculties and brings an invited expert panel into conversation with delegates. Where the tracks gather research, the panels test it against practice, policy and industry.
              </p>
            </div>

            <div className="panels-grid">
              <div className="panel-card">
                <h3 className="panel-title">
                  <span>Panel 1.</span> Policy, Skills and the Creative Economy: Turning Curriculum into Capability
                </h3>
                <div className="panel-meta">
                  Day one &middot; 22 January 2027
                </div>
                <p className="panel-body">
                  Where creative education meets national policy. The panel takes the multidisciplinary mandate of NEP 2020, the entry of Indian Knowledge Systems into the curriculum, national skill standards and craft livelihoods, public educational media, and sets them against what employers actually ask of a creative graduate. Design brings the stake in skills, craft to industry pipelines and employability. Liberal Arts brings policy, governance, ethics and the knowledge systems question. Fine Arts brings arts education, cultural institutions and the livelihood of the practising artist.
                </p>
              </div>

              <div className="panel-card">
                <h3 className="panel-title">
                  <span>Panel 2.</span> The Machine in the Studio: Authorship, Ethics and Creative Education
                </h3>
                <div className="panel-meta">
                  Day two &middot; 23 January 2027
                </div>
                <p className="panel-body">
                  What artificial intelligence is doing to the three things a creative faculty exists to protect: authorship, judgement and the apprenticeship that produces both. The panel moves from the making of the artefact to the teaching of the maker, and on to the question of ownership that neither law nor pedagogy has yet settled. Design asks what remains of the brief when generation is cheap. Fine Arts asks what authorship means when the hand is optional. Liberal Arts asks who carries the ethical and legal weight of the result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
