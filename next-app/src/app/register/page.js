export const metadata = {
  title: 'Registration Details - DISHA 2027 | Parul University',
};

export default function RegisterPage() {
  return (
    <>
      <style>{`
        .register-section {
            padding: 80px 5%;
            min-height: 60vh;
        }
        .register-container {
            max-width: 1000px;
            margin: 0 auto;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.05);
            padding: 50px;
        }
        .register-title {
            font-family: var(--font-heading);
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            text-align: center;
        }
        .register-desc {
            text-align: center;
            text-align-last: center;
            -webkit-text-align-last: center;
            color: var(--text-light);
            margin-bottom: 40px;
            font-size: 1.1rem;
        }
        
        .pricing-table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            background-color: #fff;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .pricing-table th, .pricing-table td {
            padding: 24px;
            text-align: center;
            border: 1px solid #e0e0e0;
        }
        .pricing-table th {
            background-color: var(--primary-color);
            color: #fff;
            font-weight: 700;
            font-family: var(--font-heading);
            font-size: 1.1rem;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
        .pricing-table td {
            background-color: #ffffff;
            color: var(--text-main);
            font-family: var(--font-body);
        }
        .pricing-table td:first-child {
            text-align: left;
            font-weight: 600;
            color: var(--primary-color);
            font-size: 1.1rem;
        }
        
        .flip-btn-container {
            background-color: transparent;
            perspective: 1000px;
            display: inline-block;
            width: 160px;
            height: 52px;
            text-decoration: none;
        }
        .flip-btn-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
            transform-style: preserve-3d;
        }
        .flip-btn-container:hover .flip-btn-inner {
            transform: rotateX(180deg);
        }
        .flip-btn-front, .flip-btn-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            font-size: 1.05rem;
            font-weight: 700;
            white-space: nowrap;
        }
        .flip-btn-front {
            background-color: var(--accent-color);
            color: #ffffff;
            box-shadow: 0 4px 10px rgba(181, 71, 40, 0.2);
        }
        .flip-btn-back {
            background-color: #9c3b20;
            color: #ffffff;
            transform: rotateX(180deg);
            box-shadow: 0 6px 15px rgba(181, 71, 40, 0.3);
            border: 2px solid var(--accent-color);
        }
      `}</style>
      <main className="register-section">
        <div className="register-container">
          <h1 className="register-title">Registration Details</h1>
          <p className="register-desc">Please find the registration fee details for the conference below.</p>
          
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Per Paper</th>
                <th>Per Poster</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Professional</td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">INR 3,000</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">INR 3,000</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Academic</td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">INR 2,000</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">INR 2,000</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Student</td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">INR 1,000</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">INR 1,000</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td>International (Professional or Student)</td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">USD 50</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
                <td>
                  <a href="#" className="flip-btn-container">
                    <div className="flip-btn-inner">
                      <div className="flip-btn-front">USD 50</div>
                      <div className="flip-btn-back">Pay Now</div>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
