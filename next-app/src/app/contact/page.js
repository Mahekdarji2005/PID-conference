export const metadata = {
  title: 'Contact Us - DISHA 2027 | Parul University',
};

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-page-container {
            padding: 3.5rem 5% 6rem;
            max-width: 1100px;
            margin: 0 auto;
        }

        .contact-hero {
            text-align: center;
            margin-bottom: 3.5rem;
        }

        .contact-hero .section-tag {
            font-size: 0.85rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--accent-color, #0d9488);
            font-weight: 700;
            margin-bottom: 0.75rem;
            font-family: var(--font-body);
            display: inline-block;
            background: rgba(13, 148, 136, 0.08);
            padding: 6px 18px;
            border-radius: 30px;
        }

        .contact-hero h1 {
            font-family: var(--font-heading);
            font-size: clamp(2.5rem, 5vw, 3.8rem);
            color: var(--primary-color, #0f2c3d);
            font-weight: 700;
            line-height: 1.15;
            margin-bottom: 1rem;
        }

        .contact-hero p {
            font-size: clamp(1rem, 1.8vw, 1.15rem);
            color: #556975;
            max-width: 720px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .contact-section {
            margin-bottom: 4rem;
        }

        .contact-section-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .contact-section-title {
            font-family: var(--font-heading);
            font-size: clamp(1.6rem, 3vw, 2.2rem);
            color: var(--primary-color, #0f2c3d);
            font-weight: 700;
            display: inline-block;
            position: relative;
        }

        .contact-section-title::after {
            content: '';
            display: block;
            width: 44px;
            height: 3px;
            background-color: var(--accent-color, #0d9488);
            margin: 0.6rem auto 0;
            border-radius: 2px;
        }

        .conveners-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 960px;
            margin: 0 auto;
        }

        .convener-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 2.5rem 2rem;
            box-shadow: 0 10px 30px rgba(13, 40, 54, 0.06);
            border: 1px solid rgba(13, 40, 54, 0.08);
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .convener-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(13, 40, 54, 0.12);
        }

        .convener-avatar-circle {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background: rgba(13, 148, 136, 0.1);
            color: var(--accent-color, #0d9488);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
            border: 2px solid rgba(13, 148, 136, 0.2);
        }

        .convener-role-badge {
            display: inline-block;
            background: var(--accent-color, #0d9488);
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            padding: 0.35rem 1rem;
            border-radius: 30px;
            margin-bottom: 0.85rem;
        }

        .convener-name {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            color: var(--primary-color, #0f2c3d);
            font-weight: 700;
            margin-bottom: 0.35rem;
        }

        .convener-dept {
            font-size: 0.92rem;
            color: #64748b;
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        .contact-detail-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
        }

        .contact-link-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.65rem;
            background: #f8fafc;
            padding: 0.8rem 1.2rem;
            border-radius: 10px;
            border: 1px solid rgba(13, 40, 54, 0.06);
            color: var(--primary-color, #0f2c3d);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            word-break: break-all;
            transition: all 0.25s ease;
        }

        .contact-link-item i {
            color: var(--accent-color, #0d9488);
            font-size: 1.1rem;
            flex-shrink: 0;
        }

        .contact-link-item:hover {
            background: var(--primary-color, #0f2c3d);
            color: #ffffff;
            border-color: var(--primary-color, #0f2c3d);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(13, 40, 54, 0.15);
        }

        .contact-link-item:hover i {
            color: #ffffff;
        }

        .desk-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 2.5rem 2rem;
            max-width: 680px;
            margin: 0 auto;
            text-align: center;
            box-shadow: 0 10px 30px rgba(13, 40, 54, 0.05);
            border: 1px dashed rgba(13, 148, 136, 0.3);
            background-color: #fafdfd;
        }

        .desk-icon {
            font-size: 2.2rem;
            color: var(--accent-color, #0d9488);
            margin-bottom: 1rem;
        }

        .desk-title {
            font-family: var(--font-heading);
            font-size: 1.4rem;
            color: var(--primary-color, #0f2c3d);
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .desk-status {
            font-size: 0.95rem;
            color: #64748b;
            font-style: italic;
            background: #f1f5f9;
            display: inline-block;
            padding: 0.5rem 1.2rem;
            border-radius: 20px;
            margin-top: 0.5rem;
        }

        .cumulus-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 2.5rem 2rem;
            max-width: 680px;
            margin: 0 auto;
            text-align: center;
            box-shadow: 0 10px 30px rgba(13, 40, 54, 0.05);
            border: 1px solid rgba(13, 40, 54, 0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .cumulus-logo-wrap {
            margin-bottom: 1.2rem;
        }

        .cumulus-logo-wrap img {
            max-height: 56px;
            width: auto;
            object-fit: contain;
            mix-blend-mode: multiply;
        }

        .cumulus-link {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            color: var(--accent-color, #0d9488);
            font-weight: 600;
            font-size: 1.1rem;
            text-decoration: none;
            padding: 0.6rem 1.4rem;
            border-radius: 30px;
            border: 1px solid rgba(13, 148, 136, 0.25);
            transition: all 0.25s ease;
        }

        .cumulus-link:hover {
            background: var(--accent-color, #0d9488);
            color: #ffffff;
            box-shadow: 0 6px 18px rgba(13, 148, 136, 0.25);
            transform: translateY(-2px);
        }

        .alignment-banner {
            background: linear-gradient(135deg, var(--primary-color, #0f2c3d) 0%, #1a4358 100%);
            color: #ffffff;
            border-radius: 16px;
            padding: 2.5rem 2.5rem;
            max-width: 960px;
            margin: 0 auto;
            text-align: center;
            box-shadow: 0 14px 35px rgba(15, 44, 61, 0.18);
            position: relative;
            overflow: hidden;
            border-left: 5px solid var(--accent-color, #0d9488);
        }

        .alignment-banner p {
            font-size: clamp(1.05rem, 1.8vw, 1.2rem);
            line-height: 1.7;
            font-weight: 400;
            margin: 0;
            color: #f0f4f8;
            font-family: var(--font-heading);
        }

        @media (max-width: 768px) {
            .conveners-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .contact-page-container {
                padding: 2.5rem 4% 4rem;
            }

            .alignment-banner {
                padding: 1.8rem 1.4rem;
            }
        }
      `}</style>

      <div className="contact-page-container">
        <header className="contact-hero">
          <span className="section-tag">DISHA 2027 &middot; INTERNATIONAL CONFERENCE</span>
          <h1>GET IN TOUCH</h1>
          <p>For conference enquiries, submissions, and general information, please contact the conference conveners or the conference desk.</p>
        </header>

        <section className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-section-title">Conference Conveners</h2>
          </div>
          <div className="conveners-grid">
            <div className="convener-card">
              <div className="convener-avatar-circle">
                <i className="fa-solid fa-user"></i>
              </div>
              <span className="convener-role-badge">CONVENER</span>
              <h3 className="convener-name">Ms. Dhara Vinod Parmar</h3>
              <p className="convener-dept">Parul Institute of Design</p>
              <div className="contact-detail-list">
                <a href="mailto:dhara.parmar89031@paruluniversity.ac.in" className="contact-link-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>dhara.parmar89031@paruluniversity.ac.in</span>
                </a>
                <a href="tel:9687560244" className="contact-link-item">
                  <i className="fa-solid fa-phone"></i>
                  <span>+91 9687560244</span>
                </a>
              </div>
            </div>

            <div className="convener-card">
              <div className="convener-avatar-circle">
                <i className="fa-solid fa-user"></i>
              </div>
              <span className="convener-role-badge">CONVENER</span>
              <h3 className="convener-name">Mr. Anand Bhargava</h3>
              <p className="convener-dept">Parul Institute of Design</p>
              <div className="contact-detail-list">
                <a href="mailto:anand.bhargava34569@paruluniversity.ac.in" className="contact-link-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>anand.bhargava34569@paruluniversity.ac.in</span>
                </a>
                <a href="tel:9873257320" className="contact-link-item">
                  <i className="fa-solid fa-phone"></i>
                  <span>+91 9873257320</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-section-title">Conference Desk</h2>
          </div>
          <div className="desk-card">
            <div className="desk-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3 className="desk-title">Conference Desk</h3>
            <span className="desk-status"><i className="fa-regular fa-clock"></i> Conference email and website to be inserted later.</span>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-section-title">Cumulus Association</h2>
          </div>
          <div className="cumulus-card">
            <div className="cumulus-logo-wrap">
              <img src="/logo/Cumulus-logo.jpg" alt="Cumulus Association Logo" />
            </div>
            <a href="https://cumulusassociation.org/" target="_blank" rel="noopener noreferrer" className="cumulus-link">
              <i className="fa-solid fa-globe"></i> cumulusassociation.org
            </a>
          </div>
        </section>

        <section className="contact-section">
          <div className="alignment-banner">
            <p>
              DISHA 2027 is endorsed by the Cumulus Association and aligned with Viksit Bharat 2047, the seventeen United Nations Sustainable Development Goals and the G20 agenda.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
