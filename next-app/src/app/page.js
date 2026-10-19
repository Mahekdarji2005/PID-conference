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
                  <strong>Date &amp; Mode</strong>
                  <p style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1rem", margin: 0 }}>22 &amp; 23 January 2027</p>
                  <span style={{ fontSize: "0.85rem", color: "var(--accent-color)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Hybrid mode</span>
                </div>
              </div>
              <div className="info-box">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Venue</strong>
                  <p style={{ fontWeight: 700, color: "#1a1a1a", fontSize: "1rem", margin: 0 }}>Parul University, Vadodara</p>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>PID / Central Auditorium</span>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link href="/call-for-papers#two-calls" className="btn btn-primary">
                Call for Papers <i className="fa-solid fa-paper-plane"></i>
              </Link>
              <Link href="/call-for-papers#submit-options" className="btn btn-primary" style={{ backgroundColor: "var(--primary-color)" }}>
                Call for Proposals <i className="fa-solid fa-layer-group"></i>
              </Link>
            </div>
          </div>

          <div className="hero-image blob-shape">
            <div className="slideshow">
              <img src="/api/illustrated-images/WhatsApp%20Image%202026-10-16%20at%209.37.51%20AM.jpeg" alt="DISHA 2027 Conference Highlight 1" className="slide" />
              <img src="/api/illustrated-images/WhatsApp%20Image%202026-10-16%20at%209.37.52%20AM%20(1).jpeg" alt="DISHA 2027 Conference Highlight 2" className="slide" />
              <img src="/api/illustrated-images/WhatsApp%20Image%202026-10-16%20at%209.37.52%20AM%20(2).jpeg" alt="DISHA 2027 Conference Highlight 3" className="slide" />
              <img src="/api/illustrated-images/WhatsApp%20Image%202026-10-16%20at%209.37.52%20AM.jpeg" alt="DISHA 2027 Conference Highlight 4" className="slide" />
              <img src="/api/illustrated-images/WhatsApp%20Image%202026-10-16%20at%209.37.53%20AM%20(1).jpeg" alt="DISHA 2027 Conference Highlight 5" className="slide" />
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
            Contributions are invited across seven research tracks and thematic panels that span
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
              <li style={{ marginBottom: "10px" }}>Strengthen Parul University’s international standing through the
                Cumulus network and a standing Global Advisory Board.</li>
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
              seventeen United Nations Sustainable Development Goals. The Cumulus Association extends the reach of the
              conference to a worldwide network of art, design and media institutions across more than seventy
              countries, and gives accepted work a route into global creative and academic discourse.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives & Outcomes Section */}
      <section style={{ padding: "5rem 4%", backgroundColor: "#ffffff", borderTop: "1px solid #e0ddd7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ color: "var(--accent-color)", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", fontSize: "0.85rem" }}>
              CONFERENCE ROADMAP
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--primary-color)", marginTop: "10px" }}>
              Objectives &amp; Outcomes
            </h2>
            <div style={{ width: "60px", height: "3px", backgroundColor: "var(--accent-color)", margin: "14px auto 0", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginBottom: "3.5rem" }}>
            {/* 7 Objectives */}
            <div style={{ background: "#fdfbf7", borderRadius: "18px", padding: "2.5rem", border: "1px solid #eee8df", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--primary-color)", fontSize: "1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <i className="fa-solid fa-bullseye" style={{ color: "var(--accent-color)" }}></i> Seven Core Objectives
              </h3>
              <ol style={{ paddingLeft: "1.2rem", margin: 0, display: "flex", flexDirection: "column", gap: "12px", color: "var(--text-main)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                <li>Examine pathways for sustainable and creative futures through design, the arts, the humanities and global collaboration.</li>
                <li>Build genuine interdisciplinary exchange across the three faculties and with industry, government, foundations and communities.</li>
                <li>Explore sustainable models in design, fashion, textiles, fine arts and creative technologies that balance creativity, culture and ecological responsibility.</li>
                <li>Demonstrate AI and digital innovations that improve sustainability, inclusivity, cultural access and ethical governance.</li>
                <li>Position Indian Knowledge Systems as a living resource for global sustainability, wellbeing and ethical living.</li>
                <li>Advance creative education and research through interdisciplinary pedagogy, South to South partnerships and the Cumulus network.</li>
                <li>Encourage publication of selected papers, case studies and design led innovations into global discourse.</li>
              </ol>
            </div>

            {/* 6 Outcomes & Who Should Attend */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ background: "#ffffff", borderRadius: "18px", padding: "2rem", border: "1px solid #e0ddd7", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--primary-color)", fontSize: "1.4rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <i className="fa-solid fa-clipboard-check" style={{ color: "var(--accent-color)" }}></i> Concrete Conference Outcomes
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-main)", fontSize: "0.92rem", lineHeight: 1.55 }}>
                  <li style={{ display: "flex", gap: "10px" }}><i className="fa-solid fa-check" style={{ color: "var(--accent-color)", marginTop: "4px" }}></i> <span>7 tracks of peer-reviewed research with Scopus-indexed proceedings carrying an ISBN.</span></li>
                  <li style={{ display: "flex", gap: "10px" }}><i className="fa-solid fa-check" style={{ color: "var(--accent-color)", marginTop: "4px" }}></i> <span>Selected papers considered for Scopus-indexed journal publication and edited volume.</span></li>
                  <li style={{ display: "flex", gap: "10px" }}><i className="fa-solid fa-check" style={{ color: "var(--accent-color)", marginTop: "4px" }}></i> <span>A standing Global Advisory Board constituted with Cumulus and international members.</span></li>
                  <li style={{ display: "flex", gap: "10px" }}><i className="fa-solid fa-check" style={{ color: "var(--accent-color)", marginTop: "4px" }}></i> <span>Documented cross-faculty collaboration among Design, Fine Arts, and Liberal Arts.</span></li>
                  <li style={{ display: "flex", gap: "10px" }}><i className="fa-solid fa-check" style={{ color: "var(--accent-color)", marginTop: "4px" }}></i> <span>New institutional linkages with invited international partners and Cumulus member institutions.</span></li>
                  <li style={{ display: "flex", gap: "10px" }}><i className="fa-solid fa-check" style={{ color: "var(--accent-color)", marginTop: "4px" }}></i> <span>Student outcomes: poster presentations, exhibitions, performances, awards, and certification.</span></li>
                </ul>
              </div>

              <div style={{ background: "#f8fcfb", borderRadius: "18px", padding: "1.8rem 2rem", borderLeft: "4px solid var(--accent-color)" }}>
                <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--primary-color)", fontSize: "1.2rem", marginBottom: "10px" }}>
                  <i className="fa-solid fa-users" style={{ color: "var(--accent-color)", marginRight: "8px" }}></i> Who Should Attend
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-light)", lineHeight: 1.6, margin: 0 }}>
                  <strong>Academics &amp; Researchers:</strong> in design, fine arts, humanities, AI, education, policy and wellbeing.<br />
                  <strong>Practitioners:</strong> in design, creative industries, visual arts, media and cultural heritage.<br />
                  <strong>Leaders &amp; Students:</strong> policymakers, foundations, civil society organisations, industry leaders and postgraduate scholars.
                </p>
              </div>
            </div>
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
