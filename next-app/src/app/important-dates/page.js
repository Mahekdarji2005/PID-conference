export const metadata = {
  title: 'Important Dates - DISHA 2027 | Parul University',
};

export default function ImportantDatesPage() {
  return (
    <>
      <style>{`
        .dates-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 70px 5% 30px;
        }

        .dates-hero .section-tag {
            color: #a83c27 !important;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-size: 0.85rem;
            display: inline-block;
            margin-bottom: 20px;
            background: #fff5f3;
            padding: 8px 18px;
            border-radius: 20px;
            width: fit-content;
        }

        .dates-hero-title {
            font-family: var(--font-heading);
            font-size: 3.5rem;
            color: #002f4b;
            margin: 0 0 25px 0;
            position: relative;
            display: inline-block;
            text-align: center;
        }

        .dates-hero-title::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: #a83c27;
            border-radius: 2px;
        }

        .dates-hero-subtitle {
            font-size: 1.15rem;
            color: #555555;
            max-width: 680px;
            margin: 10px auto 0;
            line-height: 1.6;
            text-align: center;
        }

        .dates-section {
            padding: 40px 5% 90px;
            background: transparent;
            min-height: auto;
            position: relative;
            z-index: 2;
        }

        .dates-container {
            max-width: 1100px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            z-index: 2;
        }

        .timeline {
            position: relative;
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px 0;
            z-index: 2;
        }

        .timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 3px;
            background: #a83c27;
            transform: translateX(-50%);
            border-radius: 2px;
            z-index: 1;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 50px;
            min-height: 70px;
            display: flex;
            align-items: center;
            opacity: 1;
            z-index: 2;
        }

        .timeline-item:last-child {
            margin-bottom: 0;
        }

        .timeline-item.left,
        .timeline-item:nth-child(odd) {
            width: 50%;
            margin-right: 50%;
            margin-left: 0;
            justify-content: flex-end;
            text-align: right;
        }

        .timeline-item.right,
        .timeline-item:nth-child(even) {
            width: 50%;
            margin-left: 50%;
            margin-right: 0;
            justify-content: flex-start;
            text-align: left;
        }

        .branch-line {
            position: absolute;
            top: 50%;
            height: 2px;
            background: #a83c27;
            transform: translateY(-50%);
            z-index: 2;
        }

        .timeline-dot {
            position: absolute;
            top: 50%;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #fff;
            border: 3.5px solid #a83c27;
            box-shadow: 0 0 0 4px rgba(168, 60, 39, 0.15);
            transition: all 0.3s ease;
            z-index: 4;
        }

        .timeline-item:hover .timeline-dot {
            background: #a83c27;
            box-shadow: 0 0 0 8px rgba(168, 60, 39, 0.25);
        }

        .timeline-item.left .branch-line,
        .timeline-item:nth-child(odd) .branch-line {
            right: 0;
            left: auto;
            width: 45px;
        }

        .timeline-item.left .timeline-dot,
        .timeline-item:nth-child(odd) .timeline-dot {
            right: 0;
            left: auto;
            transform: translate(50%, -50%);
        }

        .timeline-item.left:hover .timeline-dot,
        .timeline-item:nth-child(odd):hover .timeline-dot {
            transform: translate(50%, -50%) scale(1.25);
        }

        .timeline-item.left .timeline-content,
        .timeline-item:nth-child(odd) .timeline-content {
            margin-right: 55px;
            margin-left: auto;
            max-width: 380px;
            text-align: right;
        }

        .timeline-item.right .branch-line,
        .timeline-item:nth-child(even) .branch-line {
            left: 0;
            right: auto;
            width: 45px;
        }

        .timeline-item.right .timeline-dot,
        .timeline-item:nth-child(even) .timeline-dot {
            left: 0;
            right: auto;
            transform: translate(-50%, -50%);
        }

        .timeline-item.right:hover .timeline-dot,
        .timeline-item:nth-child(even):hover .timeline-dot {
            transform: translate(-50%, -50%) scale(1.25);
        }

        .timeline-item.right .timeline-content,
        .timeline-item:nth-child(even) .timeline-content {
            margin-left: 55px;
            margin-right: auto;
            max-width: 380px;
            text-align: left;
        }

        .timeline-content {
            background: transparent;
            padding: 6px 12px;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 3;
        }

        .timeline-item:hover .timeline-content {
            transform: translateY(-2px);
        }

        .timeline-date {
            font-size: 0.95rem;
            color: #a83c27;
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 6px;
            text-transform: uppercase;
        }

        .timeline-event {
            font-size: 1.55rem;
            color: #002f4b;
            font-weight: 600;
            font-family: var(--font-heading);
            line-height: 1.3;
        }

        @media (max-width: 768px) {
            .timeline {
                max-width: 100%;
                padding: 15px 0;
            }

            .timeline::before {
                left: 20px;
                transform: none;
            }

            .timeline-item {
                margin-bottom: 40px;
            }

            .timeline-item.left,
            .timeline-item.right,
            .timeline-item:nth-child(odd),
            .timeline-item:nth-child(even) {
                width: 100%;
                margin-left: 0;
                margin-right: 0;
                justify-content: flex-start;
                text-align: left;
            }

            .timeline-item.left .branch-line,
            .timeline-item.right .branch-line,
            .timeline-item:nth-child(odd) .branch-line,
            .timeline-item:nth-child(even) .branch-line {
                left: 20px;
                right: auto;
                width: 25px;
            }

            .timeline-item.left .timeline-dot,
            .timeline-item.right .timeline-dot,
            .timeline-item:nth-child(odd) .timeline-dot,
            .timeline-item:nth-child(even) .timeline-dot {
                left: 20px;
                right: auto;
                transform: translate(-50%, -50%);
            }

            .timeline-item.left:hover .timeline-dot,
            .timeline-item.right:hover .timeline-dot,
            .timeline-item:nth-child(odd):hover .timeline-dot,
            .timeline-item:nth-child(even):hover .timeline-dot {
                transform: translate(-50%, -50%) scale(1.25);
            }

            .timeline-item.left .timeline-content,
            .timeline-item.right .timeline-content,
            .timeline-item:nth-child(odd) .timeline-content,
            .timeline-item:nth-child(even) .timeline-content {
                margin-left: 45px;
                margin-right: 0;
                max-width: calc(100% - 55px);
                text-align: left;
            }
        }
      `}</style>

      {/* Hero Header */}
      <section className="dates-hero">
        <span className="section-tag">TIMELINE &amp; DEADLINES</span>
        <h1 className="dates-hero-title">IMPORTANT DATES</h1>
        <p className="dates-hero-subtitle">Key Deadlines and Milestones for DISHA 2027</p>
      </section>

      {/* Main Content: Timeline */}
      <main>
        <section className="dates-section">
          <div className="dates-container">
            <div className="timeline" id="timeline">
              <div className="timeline-item left">
                <div className="branch-line"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">31 October 2026</div>
                  <div className="timeline-event">Abstract submission (both calls)</div>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="branch-line"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">15 November 2026</div>
                  <div className="timeline-event">Notification of acceptance</div>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="branch-line"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">1 November &ndash; 31 December 2026</div>
                  <div className="timeline-event">Registration window</div>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="branch-line"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">31 December 2026</div>
                  <div className="timeline-event">Full paper submission</div>
                </div>
              </div>

              <div className="timeline-item left">
                <div className="branch-line"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">31 December 2026</div>
                  <div className="timeline-event">Poster, proposal and final materials</div>
                </div>
              </div>

              <div className="timeline-item right">
                <div className="branch-line"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">22 &ndash; 23 January 2027</div>
                  <div className="timeline-event">Conference</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
