import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="hero-section">
        <div className="hero-main">
          <div className="hero-content">
            <p className="subtitle">PARUL UNIVERSITY INTERNATIONAL CONFERENCE</p>
            <h1 className="title">DISH<span>A</span> 2027</h1>
            <p className="disciplines">Design &middot; Innovation &middot; Sustainability &middot; Humanities &middot; Arts</p>

            <h2 className="main-statement">Sustainable and Creative Futures across<br />Design, the Arts and Knowledge Systems</h2>

            <div className="info-boxes">
              <div className="info-box">
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <strong>Date</strong>
                  <p style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1rem" }}>22 & 23 January 2027</p>
                </div>
              </div>
              <div className="info-box">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Venue</strong>
                  <p style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1rem" }}>Parul University, Vadodara</p>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link href="/call-for-papers" className="btn btn-primary">
                Submit Your Paper <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/call-for-papers" className="btn btn-primary">
                Call for Papers
              </Link>
            </div>
          </div>

          <div className="hero-image blob-shape">
            <div className="slideshow">
              <img src="/design/desgin-1.jpg" alt="Parul Institute of Design Campus 1" className="slide" />
              <img src="/design/desgin-2.jpg" alt="Parul Institute of Design Campus 2" className="slide" />
              <img src="/design/desgin-3.jpg" alt="Parul Institute of Design Campus 3" className="slide" />
              <img src="/design/desgin-4.jpg" alt="Parul Institute of Design Campus 4" className="slide" />
              <img src="/design/desgin-5.jpg" alt="Parul Institute of Design Campus 5" className="slide" />
            </div>
          </div>
        </div>

        {/* Wide Horizontal SDG Showcase Section */}
        <div className="sdg-showcase-container">
          <div className="sdg-showcase-header">
            <span className="sdg-showcase-badge"><i className="fa-solid fa-leaf"></i> SDG Showcase</span>
            <h3 className="sdg-showcase-heading">Advancing Sustainable Development Goals</h3>
          </div>
          <div className="sdg-grid-rows">
            <div className="sdg-row">
              <div className="sdg-item"><img src="/SDG's/sdg4.png" alt="SDG 4 - Quality Education" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg5.png" alt="SDG 5 - Gender Equality" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg9.png" alt="SDG 9 - Industry, Innovation and Infrastructure" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg10.png" alt="SDG 10 - Reduced Inequalities" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg11.png" alt="SDG 11 - Sustainable Cities and Communities" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg12.png" alt="SDG 12 - Responsible Consumption and Production" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg13.png" alt="SDG 13 - Climate Action" className="sdg-img" loading="lazy" /></div>
              <div className="sdg-item"><img src="/SDG's/sdg17.png" alt="SDG 17 - Partnerships for the Goals" className="sdg-img" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section" id="about">
        <div className="about-content">
          <span className="section-tag" style={{ color: "var(--accent-color)" }}>ABOUT THE CONFERENCE</span>
          <h2
            style={{
              fontSize: "2.2rem",
              lineHeight: 1.3,
              fontStyle: "italic",
              fontWeight: 400,
              borderLeft: "4px solid var(--accent-color)",
              paddingLeft: "20px",
              marginBottom: "2rem",
              color: "var(--primary-color)",
            }}
          >
            "A bridge does two things at once. It joins what stands apart, and it carries weight. DISHA 2027 is
            built to do both."
          </h2>
          <p>
            DISHA 2027 reframes the conversation around sustainability, creativity and civilisational knowledge by
            bringing three creative and intellectual faculties of Parul University, Design, Fine Arts and Liberal
            Arts, onto a single international stage. Over two days in Vadodara, the conference convenes researchers,
            designers, artists, scholars, technologists, entrepreneurs and policy thinkers to work out practical
            pathways towards futures that are sustainable, equitable and culturally rooted.
          </p>
          <p>
            The conference holds two ideas together rather than choosing between them. In the spirit of Vasudhaiva
            Kutumbakam, the world as one family, it places India’s long inheritance of knowledge alongside its
            restless contemporary energy in design, scholarship and technology. Ancient wisdom is not treated as
            heritage to be admired. It is treated as working material for the problems in front of us.
          </p>
          <p>
            Contributions are invited across seven research tracks and six cross faculty thematic panels that span
            design, the visual arts, the humanities, Indian Knowledge Systems, artificial intelligence, creative
            pedagogy and the study of peace and human futures. Two parallel calls, one academic and one for
            practice, ensure that the room holds both the paper and the prototype.
          </p>
        </div>
        <div className="about-features">
          <div className="feature-box why-now">
            <h3 style={{ color: "var(--accent-color)" }}>Why this conference, and why now</h3>
            <p>
              India’s approach to its centenary in 2047 calls for integrated thinking: civilisational wisdom,
              creative practice, technological innovation and sustainable global leadership, argued together
              rather than in separate rooms. A multidisciplinary creative conference is unusually well placed to
              translate that ambition into culture, pedagogy and practice. DISHA 2027 sets out to:
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "var(--text-light)", marginTop: "1rem" }}>
              <li style={{ marginBottom: "10px" }}>Turn research and creative practice into implementable strategies
                for cities, communities, institutions and the creative economy.</li>
              <li style={{ marginBottom: "10px" }}>Surface scalable innovations across design, the arts, AI and
                digital culture that respect social equity and ecological limits.</li>
              <li style={{ marginBottom: "10px" }}>Connect academia, government, industry, foundations and community
                stakeholders through a two call engagement model.</li>
              <li style={{ marginBottom: "10px" }}>Strengthen Parul University’s international standing through
                Cumulus endorsement and a standing Global Advisory Board.</li>
            </ul>
          </div>

          <div
            className="feature-box global-alignment"
            style={{ backgroundColor: "#f8fcfb", padding: "3rem", borderRadius: "20px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem",
                color: "var(--accent-color)",
                marginBottom: "1rem",
              }}
            >
              Global alignment
            </h3>
            <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>
              The themes of DISHA 2027 map directly onto Viksit Bharat 2047, the G20 development agenda and the
              seventeen United Nations Sustainable Development Goals. Cumulus endorsement extends the reach of the
              conference to a worldwide network of art, design and media institutions across more than seventy
              countries, and gives accepted work a route into global creative and academic discourse.
            </p>
          </div>
        </div>
      </section>

      <section
        className="university-section"
        style={{ padding: "5rem 4%", backgroundColor: "var(--bg-light)", borderTop: "1px solid #e0ddd7" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              color: "var(--accent-color)",
              marginBottom: "1.5rem",
            }}
          >
            Parul University
          </h2>
          <p style={{ color: "var(--text-main)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Parul University, Vadodara, is a NAAC A++ accredited private university in Gujarat, home to a large
            multidisciplinary campus that spans engineering, medicine, management, design, fine arts, liberal arts,
            law and the sciences. Its scale allows research questions to travel across faculties, which is precisely
            the condition DISHA 2027 is designed to exploit.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              borderTop: "4px solid var(--accent-color)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                color: "var(--accent-color)",
                marginBottom: "1rem",
              }}
            >
              Parul Institute of Design
            </h3>
            <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Parul Institute of Design teaches and practises across fashion design, fashion merchandising,
              interior design, product and industrial design, communication design, animation, VFX, film and
              television. A member institution of the Cumulus Association, PID works at the intersection of craft
              ecosystems, industry practice and design research, and convenes DISHA 2027.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              borderTop: "4px solid var(--accent-color)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                color: "var(--accent-color)",
                marginBottom: "1rem",
              }}
            >
              Parul Institute of Fine Arts
            </h3>
            <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Parul Institute of Fine Arts carries forward the studio traditions of painting, sculpture,
              printmaking and applied art, with sustained attention to material practice, visual culture and the
              place of the artist in public life.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              borderTop: "4px solid var(--accent-color)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                color: "var(--accent-color)",
                marginBottom: "1rem",
              }}
            >
              Parul Institute of Liberal Arts
            </h3>
            <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Parul Institute of Liberal Arts anchors the conference in critical inquiry. Across literature,
              philosophy, history, psychology, policy and cultural studies, it serves as the integrative knowledge
              partner, connecting every track through ethics, communication, language and civilisational thought.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
