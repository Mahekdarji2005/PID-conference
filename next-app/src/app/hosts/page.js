export const metadata = {
  title: 'The Hosts - DISHA 2027 | Parul University',
};

export default function HostsPage() {
  return (
    <div className="hosts-page-container">
      {/* Page Hero */}
      <header className="hosts-hero">
        <span className="section-tag">DISHA 2027 &middot; CONFERENCE LEADERSHIP</span>
        <h1>The Hosts</h1>
        <p>Conference leadership, patrons and advisory committees</p>
      </header>

      {/* 01 CHIEF PATRONS */}
      <section className="hosts-section">
        <div className="hosts-section-header first-section">
          <h2 className="hosts-section-title">Chief Patrons</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/devanshusir_cutout.png" alt="Dr. Devanshu Patel" className="patron-img" style={{ objectPosition: 'center 10%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Chief Patron</span>
              <h3 className="patron-name">Dr. Devanshu Patel</h3>
              <p className="patron-designation">President</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/geetikamam_cutout.png" alt="Dr. Geetika Madan Patel" className="patron-img" style={{ objectPosition: 'center 15%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Chief Patron</span>
              <h3 className="patron-name">Dr. Geetika Madan Patel</h3>
              <p className="patron-designation">Vice President (Quality, Research &amp; Health Sciences) and Medical Director</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/parulmam_cutout.png" alt="Dr. Parul Patel" className="patron-img" style={{ objectPosition: 'center 8px' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Chief Patron</span>
              <h3 className="patron-name">Dr. Parul Patel</h3>
              <p className="patron-designation">Vice President (Student Affairs and General Administration)</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/komalmam_cutout.png" alt="Dr. Komal Patel" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Chief Patron</span>
              <h3 className="patron-name">Dr. Komal Patel</h3>
              <p className="patron-designation">Vice President (Medical and Paramedical Health Sciences)</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 PATRONS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Patrons</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/Prof.-Dr.-K.N.-Madhusoodanan_cutout.png" alt="Prof. (Dr.) K. N. Madhusoodanan" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Patron</span>
              <h3 className="patron-name">Prof. (Dr.) K. N. Madhusoodanan</h3>
              <p className="patron-designation">Provost</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/Dr.-Kunjal-Sinha_cutout.png" alt="Dr. Kunjal Sinha" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Patron</span>
              <h3 className="patron-name">Dr. Kunjal Sinha</h3>
              <p className="patron-designation">Pro Vice Chancellor</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Patron</span>
              <h3 className="patron-name">Mr. Gurucharan Singh</h3>
              <p className="patron-designation">Pro Vice Chancellor (Training, Placement and Skills)</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/manish-pandya.png" alt="Prof. Manish Pandya" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Patron</span>
              <h3 className="patron-name">Prof. Manish Pandya</h3>
              <p className="patron-designation">Registrar</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Patron</span>
              <h3 className="patron-name">Dr. Rohit Goyal</h3>
              <p className="patron-designation">Dean of Academics</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Patron</span>
              <h3 className="patron-name">Mr. Dhruvil Shah</h3>
              <p className="patron-designation">Chief Executive Officer</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CO PATRONS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Co Patrons</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Co-Patron</span>
              <h3 className="patron-name">Dr. Anand Joshi</h3>
              <p className="patron-designation">Director, Research and Development Cell</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Co-Patron</span>
              <h3 className="patron-name">Dr. Babita Chaubey</h3>
              <p className="patron-designation">Campus Director</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Co-Patron</span>
              <h3 className="patron-name">Dr. Bhavesh Mevada</h3>
              <p className="patron-designation">Director, Learning and Academic Enrichment Program (LAEP) and Consultancy Cell</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Co-Patron</span>
              <h3 className="patron-name">Prof. (Dr.) Richa Mishra</h3>
              <p className="patron-designation">Director, SCOPE (Scientific Communication, Outreach and Public Engagement)</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Co-Patron</span>
              <h3 className="patron-name">Prof. (Dr.) Preeti Nair</h3>
              <p className="patron-designation">Director, Center for International Relations and Research (CIRR)</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul University</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 ORGANISING CHAIRS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Organising Chairs</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Prof. Bhaskar Mitra</h3>
              <p className="patron-designation">Dean and Director</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Dr. Jayram Poduval</h3>
              <p className="patron-designation">Dean and Director</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Fine Arts</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Dr. Rajinder Kaur</h3>
              <p className="patron-designation">Dean and Director</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Liberal Arts</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/Palak Patel.JPG" alt="Ms. Palak Patel" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Ms. Palak Patel</h3>
              <p className="patron-designation">Vice Principal</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design &amp; Fine Arts</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/Ms. Dhvani Thakkar.JPG" alt="Ms. Dhvani Thakkar" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Ms. Dhvani Thakkar</h3>
              <p className="patron-designation">Director-Admissions &amp; Outreach</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/Dr. Saravanan Kannappan.jpg" alt="Dr. Saravanan Kannappan" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Dr. Saravanan Kannappan</h3>
              <p className="patron-designation">HoD-Academics</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 CONFERENCE CONVENERS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Conference Conveners</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/dhara vinod parmar.JPG" alt="Ms. Dhara Vinod Parmar" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Convener</span>
              <h3 className="patron-name">Ms. Dhara Vinod Parmar</h3>
              <p className="patron-designation">Faculty Member</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/host/anand bhargav.JPG" alt="Mr. Anand Bhargava" className="patron-img" />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Co-Convener</span>
              <h3 className="patron-name">Mr. Anand Bhargava</h3>
              <p className="patron-designation">Faculty Member</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 INTERNATIONAL ADVISORY BOARD */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">International Advisory Board</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img
                src="/Speaker_images/Eija Salmi FRSA.JPG"
                alt="Ms. Eija Salmi FRSA"
                className="patron-img"
                style={{ objectPosition: 'center 52%' }}
              />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">International Advisory Board</span>
              <h3 className="patron-name">Ms. Eija Salmi FRSA</h3>
              <p className="patron-designation">Secretary General</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Cumulus Association, Finland</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img
                src="/international/Dr. Antara Haldar.png"
                alt="Dr. Antara Haldar"
                className="patron-img"
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">International Advisory Board</span>
              <h3 className="patron-name">Dr. Antara Haldar</h3>
              <p className="patron-designation">
                Professor, University of Cambridge<br />
                Harvard University, Stanford University
              </p>
              <p className="patron-institution" style={{ display: 'block', textAlign: 'center' }}>
                <i className="fa-solid fa-book-open" style={{ marginRight: '6px' }}></i>
                <span>Author of <em>EVERYMAN</em> (Simon &amp; Schuster) &middot; Columnist, Project Syndicate</span>
              </p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img
                src="/international/Frida Dahlquist.jpg"
                alt="Ms. Frida Dahlquist"
                className="patron-img"
                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
              />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">International Advisory Board</span>
              <h3 className="patron-name">Ms. Frida Dahlquist</h3>
              <p className="patron-designation">General Manager, H&amp;M HOME</p>
              <p className="patron-institution"><i className="fa-solid fa-location-dot"></i> Stockholm, Sweden</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img
                src="/international/Gaurav Mahana.jpg"
                alt="Mr. Gaurav Mahna"
                className="patron-img nab-member-img"
                style={{ '--zoom': 2.8, '--pos-x': '46%', '--pos-y': '13%', '--shift-y': '10%' }}
              />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">International Advisory Board</span>
              <h3 className="patron-name">Mr. Gaurav Mahna</h3>
              <p className="patron-designation">Vice President, South Asia, KGS Sourcing Ltd.</p>
              <p className="patron-institution"><i className="fa-solid fa-location-dot"></i> Gurugram, India</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper awaiting-photo">
              <div className="patron-img-placeholder">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">International Advisory Board</span>
              <h3 className="patron-name">Ms. Gagan Bansal</h3>
              <p className="patron-designation">Country Manager, Bangladesh, India &amp; Pakistan, LC Waikiki</p>
              <p className="patron-institution"><i className="fa-solid fa-location-dot"></i> Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper awaiting-photo">
              <div className="patron-img-placeholder">
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">International Advisory Board</span>
              <h3 className="patron-name">Mr. Manish Chawla</h3>
              <p className="patron-designation">Global Supply Chain Manager, H&amp;M Lifestyle Brands, H&amp;M</p>
              <p className="patron-institution"><i className="fa-solid fa-location-dot"></i> Hong Kong</p>
            </div>
          </div>
        </div>

        {/* Invited International Partner Institutions */}
        <div style={{ maxWidth: '1120px', margin: '35px auto 0', background: '#ffffff', borderRadius: '16px', padding: '24px 30px', border: '1px solid #e0ddd7', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', fontSize: '1.15rem', marginBottom: '8px' }}>
            Representatives of Invited Partner Institutions <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>(Subject to Confirmation)</span>
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.6 }}>
            Victoria University of Wellington &middot; Birmingham City University &middot; NABA &middot; Coll&egrave;ge de Paris &middot; Nottingham Trent University
          </p>
        </div>
      </section>

      {/* 07 NATIONAL ADVISORY BOARD */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">National Advisory Board</h2>
        </div>
        <div className="patrons-grid">
          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Arvind_Mishra.jpg" alt="Mr. Arvind Mishra" className="patron-img nab-member-img" style={{ '--zoom': 1.75, '--pos-x': '50%', '--pos-y': '26%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Arvind Mishra</h3>
              <p className="patron-designation">Scientific Assistant</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Space Applications Centre (SAC), ISRO, Ahmedabad</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Dr_Jonalee_Das.jpg" alt="Dr. Jonalee Bajpai" className="patron-img nab-member-img" style={{ '--zoom': 1.9, '--pos-x': '52%', '--pos-y': '27%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Dr. Jonalee Bajpai</h3>
              <p className="patron-designation">Director, NIFT Raebareli; Professor</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> NIFT Bengaluru</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Somaditya_Banerjee.jpg" alt="Mr. Somaditya Banerjee" className="patron-img nab-member-img" style={{ '--zoom': 1.75, '--pos-x': '50%', '--pos-y': '29%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Somaditya Banerjee</h3>
              <p className="patron-designation">Industry Consultant; Former Experience Design Director</p>
              <p className="patron-institution"><i className="fa-solid fa-briefcase"></i> McKinsey &amp; Company</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Ms_Indira_Basu.jpg" alt="Ms. Indira Basu" className="patron-img nab-member-img" style={{ '--zoom': 1.85, '--pos-x': '55%', '--pos-y': '30%', '--shift-x': '-31%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Ms. Indira Basu</h3>
              <p className="patron-designation">Head, Content, EdTech Business</p>
              <p className="patron-institution"><i className="fa-solid fa-building"></i> TCS iON, Tata Consultancy Services</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Aamir_Abdullah.jpg" alt="Mr. Aamir Abdullah" className="patron-img nab-member-img" style={{ '--zoom': 2.7, '--pos-x': '53%', '--pos-y': '27%', '--shift-x': '-30%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Aamir Abdullah</h3>
              <p className="patron-designation">Head of Department, Film and Media</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Amity University Gurgaon</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Amitabha_Singh.jpg" alt="Mr. Amitabha Singh" className="patron-img nab-member-img" style={{ '--zoom': 1.65, '--pos-x': '50%', '--pos-y': '30%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Amitabha Singh</h3>
              <p className="patron-designation">Filmmaker &amp; Cinematographer; Director</p>
              <p className="patron-institution"><i className="fa-solid fa-film"></i> Xebec Films Pvt. Ltd. and CineVidya</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Mitresh_Sharma.jpg" alt="Mr. Mitresh Sharma" className="patron-img nab-member-img" style={{ '--zoom': 2.7, '--pos-x': '50%', '--pos-y': '31%', '--shift-x': '-31%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Mitresh Sharma</h3>
              <p className="patron-designation">Founder</p>
              <p className="patron-institution"><i className="fa-solid fa-seedling"></i> First Bud Organics</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Ms_Amrita_Madan.jpg" alt="Ar. Amrita Madan" className="patron-img nab-member-img" style={{ '--zoom': 2.7, '--pos-x': '50%', '--pos-y': '32%', '--shift-x': '-29%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Ar. Amrita Madan</h3>
              <p className="patron-designation">Founding Partner &amp; Principal Architect</p>
              <p className="patron-institution"><i className="fa-solid fa-compass-drafting"></i> Atelier Anonyme Design</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Chintan_Oza.jpg" alt="Mr. Chintan Oza" className="patron-img nab-member-img" style={{ '--zoom': 2.7, '--pos-x': '58%', '--pos-y': '30%', '--shift-x': '-31%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Chintan Oza</h3>
              <p className="patron-designation">Head of Sales &amp; Business Development</p>
              <p className="patron-institution"><i className="fa-solid fa-store"></i> Craftroots</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Amit_Khamar.jpg" alt="Mr. Amit Khamar" className="patron-img nab-member-img" style={{ '--zoom': 2.8, '--pos-x': '57%', '--pos-y': '33%', '--shift-x': '-31%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Amit Khamar</h3>
              <p className="patron-designation">People Management Head &amp; EA to CMD</p>
              <p className="patron-institution"><i className="fa-solid fa-shirt"></i> Jadeblue Lifestyle India Ltd.</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Ms_Bela_Rajgopalan.jpg" alt="Ms. Bela Kothari Rajagopalan" className="patron-img nab-member-img" style={{ '--zoom': 1.85, '--pos-x': '50%', '--pos-y': '26%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Ms. Bela Kothari Rajagopalan</h3>
              <p className="patron-designation">Graphic Designer &amp; Educator</p>
              <p className="patron-institution"><i className="fa-solid fa-pen-nib"></i> Pictogram Communication Design</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Anil_Saini.jpg" alt="Mr. Anil Saini" className="patron-img nab-member-img" style={{ '--zoom': 1.9, '--pos-x': '50%', '--pos-y': '24%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Anil Saini</h3>
              <p className="patron-designation">Design Leader &amp; Former Director</p>
              <p className="patron-institution"><i className="fa-solid fa-car"></i> General Motors Design Studio</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Dr_Arupa_Lahiry.jpg" alt="Dr. Arupa Lahiry" className="patron-img nab-member-img" style={{ '--zoom': 1.9, '--pos-x': '56%', '--pos-y': '27%', '--shift-x': '-32%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Dr. Arupa Lahiry</h3>
              <p className="patron-designation">Regional Director; Ustad Bismillah Khan Yuva Puraskar Awardee</p>
              <p className="patron-institution"><i className="fa-solid fa-landmark"></i> IGNCA, Ministry of Culture, Govt. of India</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Alex_Nyembo.jpg" alt="Mr. Alex Nyembo" className="patron-img nab-member-img" style={{ '--zoom': 2.7, '--pos-x': '54%', '--pos-y': '29%', '--shift-x': '-30%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Alex Nyembo</h3>
              <p className="patron-designation">Architect, Educator &amp; Researcher</p>
              <p className="patron-institution"><i className="fa-solid fa-compass-drafting"></i> Sustainable &amp; Bioclimatic Architecture</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Mr_Shamy_Jacob.jpg" alt="Mr. Shamy Jacob" className="patron-img nab-member-img" style={{ '--zoom': 2.8, '--pos-x': '60%', '--pos-y': '28%', '--shift-x': '-15%', '--shift-y': '-10%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Mr. Shamy Jacob</h3>
              <p className="patron-designation">Design Thinking &amp; Innovation Leader</p>
              <p className="patron-institution"><i className="fa-solid fa-lightbulb"></i> Circular Design &amp; Sustainability</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Prof_Rajat_Bhattacharya.jpg" alt="Prof. Rajat Bhattacharya" className="patron-img nab-member-img" style={{ '--zoom': 2.8, '--pos-x': '50%', '--pos-y': '32%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Prof. Rajat Bhattacharya</h3>
              <p className="patron-designation">Advisor</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>

          <div className="patron-card">
            <div className="patron-img-wrapper">
              <img src="/advisory_board/Dr_Kamlesh_Jha.jpg" alt="Dr. Kamlesh Jha" className="patron-img nab-member-img" style={{ '--zoom': 1.6, '--pos-x': '50%', '--pos-y': '30%' }} />
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">National Advisory Board</span>
              <h3 className="patron-name">Dr. Kamlesh Jha</h3>
              <p className="patron-designation">Advisor</p>
              <p className="patron-institution"><i className="fa-solid fa-hospital"></i> AIIMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 ACADEMIC CONVENERS & SCIENTIFIC REVIEW COMMITTEE */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Academic Conveners &amp; Scientific Review Committee</h2>
        </div>
        <div className="scientific-grid">
          <div className="scientific-card">
            <h4>Dr. Saravanan Kannappan (Lead)</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. Shruti Tiwari</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. Jyoti Rani</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. Vandana Gupta</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Ms. Tarushikha Shaktawat</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
        </div>
      </section>

      {/* 09 COORDINATORS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Coordinators</h2>
        </div>
        <div className="scientific-grid">
          <div className="scientific-card">
            <h4>Dr. V. M. Sarvanan</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Rechab Londhe</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Dhananjay Bisht</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Anurodh</h4>
          </div>
          <div className="scientific-card">
            <h4>Mr. Firoz Khan</h4>
          </div>
          <div className="scientific-card">
            <h4>Ms. Tarushikha Shaktawat</h4>
          </div>
          <div className="scientific-card">
            <h4>Mr. Rohit Chandwaskar</h4>
          </div>
        </div>
      </section>


      {/* REVIEW PROCESS NOTE */}
      <div className="review-process-box">
        <h4>REVIEW PROCESS</h4>
        <p>All submissions are reviewed double blind. Reviewers are drawn from the committee above and from the international pool of subject experts invited through the Cumulus network.</p>
      </div>
    </div>
  );
}
