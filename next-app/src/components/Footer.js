import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/logo/Parul_Institute_of_Design_Logo.png" alt="Parul Institute of Design" />
            <img src="/logo/Parul_University_white_Logo.png" alt="Parul University" />
          </div>
          <p className="footer-about">
            DISHA 2027 reframes the conversation around sustainability, creativity and civilisational knowledge, 
            convening experts across design, arts, and technology.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/#about">About Conference</Link></li>
            <li><Link href="/tracks">Tracks &amp; Panels</Link></li>
            <li><Link href="/speakers">Keynote Speakers</Link></li>
            <li><Link href="/schedule">Schedule</Link></li>
            <li><Link href="/important-dates">Important Dates</Link></li>
            <li><Link href="/call-for-papers">Call for Papers</Link></li>
            <li><Link href="/venue">Venue &amp; Location</Link></li>
          </ul>
        </div>
        
        <div className="footer-column footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p><i className="fa-solid fa-location-dot"></i> <span>Parul University, P.O. Limda, Ta. Waghodia, Vadodara, Gujarat, India - 391760</span></p>
          <p><i className="fa-solid fa-phone"></i> <span>+91 2668 260 312</span></p>
          <p><i className="fa-solid fa-envelope"></i> <span>info@paruluniversity.ac.in</span></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2027 DISHA Conference &middot; Parul University. All Rights Reserved.</p>
        <p className="developer-credit">Designed and Developed by <a href="https://www.linkedin.com/in/mahek-darji-521651303/" target="_blank" rel="noopener noreferrer">Mahek Darji <i className="fa-brands fa-linkedin"></i></a> and <a href="https://www.linkedin.com/in/nipun-kulshrestha-816604288/" target="_blank" rel="noopener noreferrer">Nipun Kulshrestha <i className="fa-brands fa-linkedin"></i></a></p>
      </div>
    </footer>
  );
}
