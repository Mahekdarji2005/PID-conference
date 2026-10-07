'use client';

import { useState } from 'react';

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <style>{`
        .schedule-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 70px 5% 30px;
        }

        .schedule-hero .section-tag {
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

        .schedule-title {
            font-family: var(--font-heading);
            font-size: 3.5rem;
            color: #002f4b;
            margin: 0 0 25px 0;
            position: relative;
            display: inline-block;
            text-align: center;
        }

        .schedule-title::after {
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

        .schedule-subtitle {
            font-size: 1.15rem;
            color: #555555;
            max-width: 680px;
            margin: 10px auto 0;
            line-height: 1.6;
            text-align: center;
        }

        .day-tabs {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin: 40px 0 45px;
            flex-wrap: wrap;
        }

        .day-tab-btn {
            background: #ffffff;
            border: 2px solid rgba(0, 47, 75, 0.15);
            color: #002f4b;
            font-size: 0.95rem;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .day-tab-btn:hover {
            border-color: #a83c27;
            color: #a83c27;
            transform: translateY(-2px);
        }

        .day-tab-btn.active {
            background: #002f4b;
            color: #ffffff;
            border-color: #002f4b;
            box-shadow: 0 4px 15px rgba(0, 47, 75, 0.2);
        }

        .day-block {
            max-width: 950px;
            margin: 0 auto 60px;
            padding: 0 20px;
        }

        .day-header {
            background: linear-gradient(135deg, #002f4b 0%, #1a4968 100%);
            color: #ffffff;
            padding: 18px 28px;
            border-radius: 14px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 47, 75, 0.15);
        }

        .day-header h2 {
            font-family: var(--font-heading);
            font-size: 1.45rem;
            margin: 0;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .day-header h2 i {
            color: #ffb7a8;
        }

        .day-date-tag {
            font-size: 0.88rem;
            background: rgba(255, 255, 255, 0.15);
            padding: 6px 14px;
            border-radius: 20px;
            font-weight: 500;
        }

        .schedule-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .schedule-card {
            background: #ffffff;
            border-radius: 12px;
            padding: 20px 24px;
            display: grid;
            grid-template-columns: 140px 1fr 190px;
            align-items: center;
            gap: 20px;
            border-left: 4px solid #002f4b;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
            transition: all 0.3s ease;
        }

        .schedule-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .schedule-card.highlight {
            border-left-color: #a83c27;
            background: #fffdfc;
        }

        .schedule-card.break {
            border-left-color: #7b8e9b;
            background: #f9fbfd;
        }

        .schedule-time {
            font-size: 0.95rem;
            font-weight: 700;
            color: #a83c27;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .schedule-time i {
            font-size: 0.9rem;
            color: #a83c27;
        }

        .schedule-details {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .schedule-type-badge {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #a83c27;
            margin-bottom: 2px;
        }

        .schedule-session-title {
            font-size: 1.08rem;
            font-weight: 600;
            color: #002f4b;
            line-height: 1.45;
        }

        .schedule-venue {
            font-size: 0.88rem;
            color: #555555;
            background: #f2f5f8;
            padding: 7px 14px;
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            max-width: 190px;
            box-sizing: border-box;
            justify-self: end;
            align-self: center;
            text-align: center;
            white-space: normal;
            line-height: 1.35;
        }

        .schedule-venue i {
            color: #a83c27;
        }

        @media (max-width: 850px) {
            .schedule-card {
                grid-template-columns: 110px 1fr 160px;
                gap: 12px;
                padding: 16px;
            }

            .schedule-venue {
                width: 100%;
                max-width: 160px;
                justify-self: end;
                align-self: center;
                text-align: center;
                margin-top: 0;
                white-space: normal;
                line-height: 1.3;
                font-size: 0.84rem;
                padding: 6px 10px;
            }

            .schedule-title {
                font-size: 2.5rem;
            }
        }

        @media (max-width: 580px) {
            .schedule-card {
                display: grid;
                grid-template-columns: 1fr 135px;
                grid-template-areas:
                    "time time"
                    "details venue";
                gap: 10px 12px;
                padding: 16px;
                align-items: center;
            }

            .schedule-time {
                grid-area: time;
            }

            .schedule-details {
                grid-area: details;
            }

            .schedule-venue {
                grid-area: venue;
                width: 100%;
                max-width: 135px;
                justify-self: end;
                align-self: center;
                margin-top: 0;
                font-size: 0.8rem;
                padding: 5px 8px;
                text-align: center;
                white-space: normal;
                line-height: 1.3;
            }
        }
      `}</style>

      <section className="schedule-hero">
        <span className="section-tag">PROGRAMME OVERVIEW</span>
        <h1 className="schedule-title">SCHEDULE</h1>
        <p className="schedule-subtitle">Two Days of Ideas, Dialogue and Creative Exchange</p>
      </section>

      <div className="day-tabs">
        <button
          className={`day-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <i className="fa-solid fa-layer-group"></i> All Programme
        </button>
        <button
          className={`day-tab-btn ${activeTab === 'day1' ? 'active' : ''}`}
          onClick={() => setActiveTab('day1')}
        >
          <i className="fa-regular fa-calendar-days"></i> Day 1 (22 Jan)
        </button>
        <button
          className={`day-tab-btn ${activeTab === 'day2' ? 'active' : ''}`}
          onClick={() => setActiveTab('day2')}
        >
          <i className="fa-regular fa-calendar-days"></i> Day 2 (23 Jan)
        </button>
      </div>

      <main>
        {/* DAY 1 BLOCK */}
        {(activeTab === 'all' || activeTab === 'day1') && (
          <div className="day-block" id="day1-block">
            <div className="day-header">
              <h2><i className="fa-solid fa-calendar-day"></i> DAY 1 &middot; Friday, 22 January 2027</h2>
              <span className="day-date-tag">Friday, 22 Jan 2027</span>
            </div>

            <div className="schedule-list">
              <div className="schedule-card break">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 09:00 to 10:00</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Registration &amp; Breakfast</span>
                  <div className="schedule-session-title">Registration, distribution of kits and breakfast</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 10:00 to 10:45</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Inaugural Session</span>
                  <div className="schedule-session-title">Inaugural session, lamp lighting and welcome remarks; acknowledgement of Cumulus endorsement</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 10:45 to 11:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Keynote Address</span>
                  <div className="schedule-session-title">Keynote 1: Prof. Dr. Lorenzo Imbesi</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium</div>
              </div>

              <div className="schedule-card">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 11:30 to 13:15</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Paper Presentations</span>
                  <div className="schedule-session-title">Parallel paper presentations</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card break">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 13:15 to 14:00</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Lunch Break</span>
                  <div className="schedule-session-title">Lunch</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID / Indian Salt</div>
              </div>

              <div className="schedule-card">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 14:00 to 15:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Workshops &amp; Sessions</span>
                  <div className="schedule-session-title">Parallel paper sessions continued, and Call for Proposals workshops and demonstrations</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 15:30 to 16:15</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Panel Discussion</span>
                  <div className="schedule-session-title">Panel: Design, the arts and civilisational identity in a global century</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium</div>
              </div>

              <div className="schedule-card">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 16:15 to 17:15</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Exhibition &amp; Posters</span>
                  <div className="schedule-session-title">Poster presentations, and fine arts and craft exhibition</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card break">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 17:15 to 17:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Networking Break</span>
                  <div className="schedule-session-title">High tea</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 17:30 to 18:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Cultural Showcase</span>
                  <div className="schedule-session-title">Cultural evening: performing arts showcase in music, dance and theatre</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID / Amphitheatre</div>
              </div>
            </div>
          </div>
        )}

        {/* DAY 2 BLOCK */}
        {(activeTab === 'all' || activeTab === 'day2') && (
          <div className="day-block" id="day2-block">
            <div className="day-header">
              <h2><i className="fa-solid fa-calendar-day"></i> DAY 2 &middot; Saturday, 23 January 2027</h2>
              <span className="day-date-tag">Saturday, 23 Jan 2027</span>
            </div>

            <div className="schedule-list">
              <div className="schedule-card break">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 09:00 to 09:45</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Breakfast</span>
                  <div className="schedule-session-title">Breakfast</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 09:45 to 10:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Keynote Address</span>
                  <div className="schedule-session-title">Keynote 2: Dr. Dolly Daou</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium / OSCAR</div>
              </div>

              <div className="schedule-card">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 10:30 to 12:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Paper Presentations</span>
                  <div className="schedule-session-title">Parallel paper presentations, Tracks 4, 5, 6 and 7</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 12:30 to 13:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Interactive Workshop</span>
                  <div className="schedule-session-title">Design and arts charrette: designing for a civilisational future (workshop)</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card break">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 13:30 to 14:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Lunch Break</span>
                  <div className="schedule-session-title">Lunch</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID / Indian Salt</div>
              </div>

              <div className="schedule-card">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 14:30 to 15:30</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Paper &amp; Proposal Sessions</span>
                  <div className="schedule-session-title">Parallel paper sessions continued, and Call for Proposals sessions</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: PID</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 15:30 to 16:15</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Panel Discussion</span>
                  <div className="schedule-session-title">Panel: Healing, knowledge and cultural diplomacy, India’s global contribution</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 16:15 to 17:00</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Posters &amp; Awards</span>
                  <div className="schedule-session-title">Poster presentations and awards</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium</div>
              </div>

              <div className="schedule-card highlight">
                <div className="schedule-time"><i className="fa-regular fa-clock"></i> 17:00 to 17:45</div>
                <div className="schedule-details">
                  <span className="schedule-type-badge">Valedictory Ceremony</span>
                  <div className="schedule-session-title">Valedictory function, Cumulus Design Declaration reflection and announcement of winners</div>
                </div>
                <div className="schedule-venue"><i className="fa-solid fa-location-dot"></i> Venue: Central Auditorium</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
