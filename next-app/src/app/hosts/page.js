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
              <img src="/host/devanshusir_cutout.png" alt="Dr. Devanshu Patel" className="patron-img" />
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
              <img src="/host/geetikamam_cutout.png" alt="Dr. Geetika Madan Patel" className="patron-img" />
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
              <img src="/host/parulmam_cutout.png" alt="Dr. Parul Patel" className="patron-img" />
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
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
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
              <p className="patron-designation">Director, LAEP and Consultancy Cell</p>
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
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Ms. Palak Patel</h3>
              <p className="patron-designation">Vice Principal</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design &amp; Fine Arts</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Ms. Dhvani Thakkar</h3>
              <p className="patron-designation">Head, Outreach</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Organising Chair</span>
              <h3 className="patron-name">Dr. K. Sarvanan</h3>
              <p className="patron-designation">Head of Department (Academics)</p>
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
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Convener</span>
              <h3 className="patron-name">Ms. Dhara Vinod Parmar</h3>
              <p className="patron-designation">Faculty Member</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
          <div className="patron-card">
            <div className="patron-img-wrapper black-placeholder">
              <div className="patron-img placeholder-black"></div>
            </div>
            <div className="patron-card-body">
              <span className="patron-role-tag">Convener</span>
              <h3 className="patron-name">Mr. Anand Bhargava</h3>
              <p className="patron-designation">Faculty Member</p>
              <p className="patron-institution"><i className="fa-solid fa-building-columns"></i> Parul Institute of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 ACADEMIC CONVENERS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Academic Conveners</h2>
        </div>
        <div className="scientific-grid">
          <div className="scientific-card">
            <h4>Dr. Shruti Tiwari</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. K. Sarvanan</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. Dhananjay Bisht</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. Rechab Londhe</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
          <div className="scientific-card">
            <h4>Dr. Jyoti Rani</h4>
            <p className="academic-convener-inst">Parul Institute of Design</p>
          </div>
        </div>
        <div className="pending-note">
          (Nominations from PIFA, PILA — yet to be confirmed)
        </div>
      </section>

      {/* 07 COORDINATORS */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Coordinators</h2>
        </div>
        <div className="scientific-grid">
          <div className="scientific-card">
            <h4>Dr. Anurodh</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Vandana Gupta</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. V. M. Sarvanan</h4>
          </div>
          <div className="scientific-card">
            <h4>Mr. Firoz</h4>
          </div>
        </div>
        <div className="pending-note">
          (Nominations from PIFA, PILA — yet to be confirmed)
        </div>
      </section>

      {/* 08 INTERNATIONAL ADVISORY COMMITTEE */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">International Advisory Committee</h2>
        </div>
        <div className="committee-grid-3">
          <div className="committee-card editorial">
            <span className="committee-num">01</span>
            <div className="committee-info">
              <h3>Ms. Eija Salmi FRSA</h3>
              <p>Secretary General, Cumulus Association, Finland</p>
            </div>
          </div>
          <div className="committee-card editorial">
            <span className="committee-num">02</span>
            <div className="committee-info">
              <h3>Prof. Dr. Lorenzo Imbesi</h3>
              <p>President, Cumulus Association, Sapienza University of Rome, Italy</p>
            </div>
          </div>
          <div className="committee-card editorial">
            <span className="committee-num">03</span>
            <div className="committee-info">
              <h3>Dr. Dolly Daou</h3>
              <p>Design researcher and academic leader, Australia and France</p>
            </div>
          </div>
        </div>
        <div className="pending-note">
          Additional members and institutional representatives will be announced following confirmation.
        </div>
      </section>

      {/* 09 ADVISORY COMMITTEE */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Advisory Committee</h2>
        </div>
        <div className="committee-grid-3">
          <div className="committee-card">
            <span className="committee-num">01</span>
            <div className="committee-info">
              <h3>Prof. Rajat Bhattacharya</h3>
              <p>Advisor &middot; Parul Institute of Design</p>
            </div>
          </div>
          <div className="committee-card">
            <span className="committee-num">02</span>
            <div className="committee-info">
              <h3>Mr. Vashishth Upadhyay</h3>
              <p>Advisor &middot; Parul Institute of Design</p>
            </div>
          </div>
          <div className="committee-card">
            <span className="committee-num">03</span>
            <div className="committee-info">
              <h3>Dr. Kamlesh Jha</h3>
              <p>Advisor, AIIMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 SCIENTIFIC & REVIEW COMMITTEE */}
      <section className="hosts-section">
        <div className="hosts-section-header">
          <h2 className="hosts-section-title">Scientific &amp; Review Committee</h2>
        </div>
        <div className="scientific-grid">
          <div className="scientific-card">
            <h4>Dr. Shruti Tiwari</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Jyoti Rani</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Vandana Gupta</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. V. M. Sarvanan</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Rechab</h4>
          </div>
          <div className="scientific-card">
            <h4>Dr. Dhananjay Bisht</h4>
          </div>
        </div>
        <div className="pending-note">
          Additional representatives from Parul Institute of Fine Arts and Parul Institute of Liberal Arts will be nominated.
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
