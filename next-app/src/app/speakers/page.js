"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const expertSpeakersData = [
  {
    id: 1,
    name: "Dr. Anil Sinha",
    designation: "Former Executive Director & Senior Faculty",
    institution: "National Institute of Design (NID), Ahmedabad",
    tag: "DESIGN PEDAGOGY & LEADERSHIP",
    image: "/Speaker_images/Dr Anil Sinha.jpg",
    cutout: "/speaker_cutouts/Dr Anil Sinha.png",
  },
  {
    id: 2,
    name: "Dr. Anuradha Choudry",
    designation: "Coordinator, IKS Division & Associate Professor",
    institution: "Ministry of Education, Govt. of India · IIT Kharagpur",
    tag: "INDIAN KNOWLEDGE SYSTEMS",
    image: "/Speaker_images/Dr. Anuradha Choudry.jpg",
    cutout: "/speaker_cutouts/Dr. Anuradha Choudry.png",
  },
  {
    id: 3,
    name: "Dr. S. Arulchelvan",
    designation: "Director & Professor",
    institution: "Educational Multimedia Research Centre (EMRC), Anna University",
    tag: "MULTIMEDIA & DIGITAL COMMUNICATION",
    image: "/Speaker_images/Dr. S. Arulchelvan.jpg",
    cutout: "/speaker_cutouts/Dr. S. Arulchelvan.png",
  },
  {
    id: 4,
    name: "Dr. Swapna Mishra",
    designation: "Director & Dean",
    institution: "Parul Institute of Design & Fine Arts, Parul University",
    tag: "CONFERENCE CHAIR",
    image: "/Speaker_images/Dr. Swapna Mishra.jpeg",
    cutout: "/speaker_cutouts/Dr. Swapna Mishra.png",
  },
  {
    id: 5,
    name: "Prof. Dr. Anjali Karolia (Retd)",
    designation: "Former Dean & Craft Heritage Specialist",
    institution: "Faculty of Family and Community Sciences, MSU Baroda",
    tag: "TEXTILE HERITAGE & CRAFT",
    image: "/Speaker_images/Prof. Dr. Anjali Karolia (Retd).jpg",
    cutout: "/speaker_cutouts/Prof. Dr. Anjali Karolia (Retd).png",
  },
  {
    id: 6,
    name: "Dr. M.M. Hundekar",
    designation: "Former Principal & Senior Academician",
    institution: "School of Fashion & Textile Technology",
    tag: "SUSTAINABLE FASHION INNOVATION",
    image: "/Speaker_images/IMG-Dr. M.M. Hundekar.jpg",
    cutout: "/speaker_cutouts/IMG-Dr. M.M. Hundekar.png",
  },
  {
    id: 7,
    name: "Dr. Vahini Aravind",
    designation: "Associate Professor & Lead Researcher",
    institution: "Parul Institute of Design, Parul University",
    tag: "SUSTAINABLE DESIGN METHODOLOGY",
    image: "/Speaker_images/Dr. Vahini Aravind.jpg",
    cutout: "/speaker_cutouts/Dr. Vahini Aravind.png",
  },
  {
    id: 8,
    name: "Subhanish Malhotra",
    designation: "Dean & Head of Innovation",
    institution: "Parul Institute of Design, Parul University",
    tag: "INDUSTRIAL DESIGN & INNOVATION",
    image: "/Speaker_images/Subhanish Malhotra.png",
    cutout: "/speaker_cutouts/Subhanish Malhotra.png",
  },
];

const KEYNOTE_DATA = [
  {
    name: "Prof. Dr. Lorenzo Imbesi",
    role: "KEYNOTE SPEAKER I",
    bio: "President, Cumulus Association. Full Professor and Director, Sapienza Design Research, Sapienza University of Rome, Italy.",
    image: "/Speaker_images/Lorenzo_Imbesi.jpg",
    fallback: "LI",
  },
  {
    name: "Dr. Dolly Daou",
    role: "KEYNOTE SPEAKER II",
    bio: "Design researcher, educator and academic leader in transdisciplinary design education, with leadership roles across Australia, Europe, China and the Middle East.",
    image: "/Speaker_images/Dolly_Daou.jpg",
    fallback: "DD",
  },
  {
    name: "Ms. Eija Salmi FRSA",
    role: "GUEST OF HONOUR",
    bio: "Secretary General, Cumulus Association, Finland.",
    image: "/Speaker_images/Eija Salmi FRSA.JPG",
    fallback: "ES",
  },
];

const yOrganicOffsets = [-15, 18, -12, 22, -18, 12, -24, 10];

function cubicOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function SpeakersPage() {
  const [currentKeynoteIndex, setCurrentKeynoteIndex] = useState(0);
  const [activeFlippedIndex, setActiveFlippedIndex] = useState(-1);
  const [currentActiveSpeaker, setCurrentActiveSpeaker] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollWrapperRef = useRef(null);
  const stageRef = useRef(null);
  const ringContainerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("speakers-page");
    return () => {
      document.body.classList.remove("speakers-page");
    };
  }, []);

  // Handle keynote slide transition details
  const currentKeynote = KEYNOTE_DATA[currentKeynoteIndex];

  // 3D Orbit Scroll calculation
  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    const stage = stageRef.current;
    const ringContainer = ringContainerRef.current;

    if (!scrollWrapper || !stage || !ringContainer) return;

    scrollWrapper.style.height = "300vh";

    let isTicking = false;

    const updateOrbitStage = () => {
      const wrapperRect = scrollWrapper.getBoundingClientRect();
      const stageWidth = stage.clientWidth;
      const stageHeight = stage.clientHeight;
      const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      let scrolled = Math.max(0, Math.min(totalScrollable, -wrapperRect.top));
      const progress = scrolled / totalScrollable;
      setScrollProgress(progress);

      const isMobile = stageWidth <= 600;
      const isTablet = stageWidth > 600 && stageWidth <= 1100;

      const orbitRadiusX = isMobile
        ? Math.max(140, Math.min(stageWidth * 0.42, 200))
        : isTablet
        ? Math.max(300, Math.min(stageWidth * 0.4, 440))
        : Math.max(400, Math.min(stageWidth * 0.4, 560));

      const orbitRadiusY = isMobile
        ? Math.max(150, Math.min(stageHeight * 0.36, 230))
        : isTablet
        ? Math.max(200, Math.min(stageHeight * 0.34, 270))
        : Math.max(240, Math.min(stageHeight * 0.34, 300));

      const cards = ringContainer.querySelectorAll(".speaker-orbit-item");
      let currentActiveIdx = 0;
      let highestEntranceProgress = 0;

      expertSpeakersData.forEach((_, i) => {
        const card = cards[i];
        if (!card) return;

        const startProgress = i * 0.1;
        const endProgress = startProgress + 0.18;

        const baseAngleDeg = i * (360 / expertSpeakersData.length) - 90;
        const rad = (baseAngleDeg * Math.PI) / 180;

        const targetX = Math.cos(rad) * orbitRadiusX;
        const targetY = Math.sin(rad) * orbitRadiusY + yOrganicOffsets[i] * 0.25;
        const targetZ = Math.sin(rad) * 120;

        if (progress < startProgress) {
          card.style.opacity = "0";
          card.style.visibility = "hidden";
          card.style.pointerEvents = "none";
        } else if (progress >= startProgress && progress < endProgress) {
          card.style.visibility = "visible";
          card.style.pointerEvents = "auto";

          const rawT = (progress - startProgress) / (endProgress - startProgress);
          const t = cubicOut(Math.min(1, Math.max(0, rawT)));

          if (rawT > highestEntranceProgress) {
            highestEntranceProgress = rawT;
            currentActiveIdx = i;
          }

          const startX = stageWidth * 0.5 + (isMobile ? 180 : 380);
          const startY = targetY;
          const startZ = -180;

          const currX = startX + (targetX - startX) * t;
          const currY = startY + (targetY - startY) * t;
          const currZ = startZ + (targetZ - startZ) * t;

          const opacity = Math.min(1, t * 1.2);
          const scale = 0.65 + (1.0 - 0.65) * t;

          card.style.opacity = opacity.toFixed(3);
          card.style.zIndex = Math.round(100 + currZ);
          card.style.transform = `translate3d(${currX.toFixed(1)}px, ${currY.toFixed(1)}px, ${currZ.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        } else {
          card.style.visibility = "visible";
          card.style.pointerEvents = "auto";

          if (i >= currentActiveIdx) {
            currentActiveIdx = i;
          }

          const maxZ = 120;
          const depthScale = 0.88 + ((targetZ + maxZ) / (maxZ * 2)) * 0.22;
          const depthOpacity = 0.82 + ((targetZ + maxZ) / (maxZ * 2)) * 0.18;

          card.style.opacity = depthOpacity.toFixed(3);
          card.style.zIndex = Math.round(100 + targetZ);
          card.style.transform = `translate3d(${targetX.toFixed(1)}px, ${targetY.toFixed(1)}px, ${targetZ.toFixed(1)}px) scale(${depthScale.toFixed(3)})`;
        }
      });

      setCurrentActiveSpeaker(currentActiveIdx);
    };

    const handleScrollOrResize = () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          updateOrbitStage();
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    updateOrbitStage();

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  const scrollToSpeaker = (index) => {
    const scrollWrapper = scrollWrapperRef.current;
    if (!scrollWrapper) return;

    const wrapperRect = scrollWrapper.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + wrapperRect.top;
    const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;

    const startProgress = index * 0.1;
    const targetProgress = Math.min(1, startProgress + 0.06);
    const targetScroll = absoluteTop + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const toggleSpeakerFlip = (index) => {
    if (activeFlippedIndex === index) {
      setActiveFlippedIndex(-1);
    } else {
      setActiveFlippedIndex(index);
    }
  };

  const DIRECTORY_GROUPS = [
    {
      title: "Guest of Honour",
      people: [
        {
          name: "Ms. Eija Salmi FRSA",
          designation: "Guest of Honour & Secretary General",
          institution: "Cumulus Association · International Association of Universities & Colleges of Art, Design and Media",
          tag: "GUEST OF HONOUR",
          image: "/Speaker_images/Eija Salmi FRSA.JPG",
        },
      ],
    },
    {
      title: "Keynote Speakers",
      people: [
        {
          name: "Prof. Dr. Lorenzo Imbesi",
          designation: "Keynote Speaker I & President, Cumulus Association",
          institution: "Sapienza Design Research, Sapienza University of Rome, Italy",
          tag: "KEYNOTE",
          image: "/Speaker_images/Lorenzo_Imbesi.jpg",
        },
        {
          name: "Dr. Dolly Daou",
          designation: "Keynote Speaker II & Lead Design Researcher",
          institution: "Transdisciplinary Design Leadership (Australia, Europe, Asia)",
          tag: "KEYNOTE",
          image: "/Speaker_images/Dolly_Daou.jpg",
        },
      ],
    },
    {
      title: "Expert Speakers",
      people: expertSpeakersData.map((s, idx) => ({
        name: s.name,
        designation: s.designation,
        institution: s.institution,
        tag: `EXPERT ${String(idx + 1).padStart(2, "0")}`,
        image: s.image,
      })),
    },
  ];

  let overallCardNumber = 1;

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Intro Opening Hero Section */}
      <section className="speakers-intro">
        <span className="intro-tag">DISHA 2027 &middot; INTERNATIONAL CONFERENCE</span>
        <h1 className="intro-title">
          MEET THE VOICES<br />
          <span>SHAPING THE CONVERSATION</span>
        </h1>
        <div className="intro-scroll-hint">
          <span>SCROLL DOWN TO REVEAL THE SPEAKERS</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Keynotes & Guest of Honour 3D Perspective Carousel Section */}
      <section className="keynotes-section" id="keynotes-section">
        <div className="keynotes-header">
          <span className="keynotes-tag">DISHA 2027 &middot; FEATURED LEADERSHIP</span>
          <h2 className="keynotes-title">Keynotes &amp; Guest of Honour</h2>
          <div className="keynotes-title-accent"></div>
        </div>

        <div className="perspective-carousel-wrapper">
          <button
            className="carousel-nav-btn prev-btn"
            id="keynote-prev-btn"
            aria-label="Previous Keynote"
            onClick={() =>
              setCurrentKeynoteIndex((prev) => (prev - 1 + KEYNOTE_DATA.length) % KEYNOTE_DATA.length)
            }
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="perspective-stage" id="perspective-stage">
            {KEYNOTE_DATA.map((k, idx) => {
              let posClass = "";
              const total = KEYNOTE_DATA.length;
              if (idx === currentKeynoteIndex) {
                posClass = "pos-center active";
              } else if (idx === (currentKeynoteIndex - 1 + total) % total) {
                posClass = "pos-left left";
              } else if (idx === (currentKeynoteIndex + 1) % total) {
                posClass = "pos-right right";
              }

              return (
                <div
                  key={idx}
                  className={`perspective-card ${posClass}`}
                  data-index={idx}
                  onClick={() => setCurrentKeynoteIndex(idx)}
                >
                  <div className="card-photo-wrapper">
                    <div className="card-avatar-fallback">{k.fallback}</div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={k.image}
                      alt={k.name}
                      className="card-photo"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.previousElementSibling) {
                          e.currentTarget.previousElementSibling.style.display = "flex";
                        }
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="carousel-nav-btn next-btn"
            id="keynote-next-btn"
            aria-label="Next Keynote"
            onClick={() => setCurrentKeynoteIndex((prev) => (prev + 1) % KEYNOTE_DATA.length)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Active Keynote Details Box */}
        <div className="keynote-details-box" id="keynote-details-box">
          <span className="keynote-role-badge">{currentKeynote.role}</span>
          <h3 className="keynote-speaker-name">{currentKeynote.name}</h3>
          <p className="keynote-speaker-bio">{currentKeynote.bio}</p>
        </div>

        {/* Pagination Indicator Dots */}
        <div className="carousel-dots-container" id="keynote-carousel-dots">
          {KEYNOTE_DATA.map((_, idx) => (
            <button
              key={idx}
              className={`dot-btn ${idx === currentKeynoteIndex ? "active" : ""}`}
              onClick={() => setCurrentKeynoteIndex(idx)}
              aria-label={`Go to Keynote ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Main Scroll-Driven 3D Speaker Orbit Showcase Stage */}
      <div className="speakers-scroll-wrapper" id="speakers-scroll-wrapper" ref={scrollWrapperRef}>
        <div className="speakers-sticky-stage" id="speakers-sticky-stage" ref={stageRef}>
          {/* Central Anchored Heading */}
          <div className="central-anchor-container" id="central-anchor">
            <div className="stage-scroll-prompt">
              <span>SCROLL DOWN TO REVEAL ORBIT</span>
              <div className="prompt-line"></div>
            </div>
            <h1 className="central-title">Expert Speakers</h1>
            <p className="central-subtitle">22 &amp; 23 JANUARY 2027 &middot; PARUL UNIVERSITY</p>
          </div>

          {/* 3D Speaker Orbit Stage Viewport */}
          <div className="orbit-stage-viewport" id="orbit-stage-viewport">
            <div className="orbit-ring-container" id="orbit-ring-container" ref={ringContainerRef}>
              {expertSpeakersData.map((speaker, idx) => {
                const numStr = String(idx + 1).padStart(2, "0");
                const isFlipped = activeFlippedIndex === idx;

                return (
                  <div
                    key={speaker.id}
                    className={`speaker-orbit-item ${isFlipped ? "is-flipped" : ""}`}
                    data-index={idx}
                    role="button"
                    tabIndex={0}
                    aria-label={`Speaker ${numStr}: ${speaker.name}. Click to view details.`}
                    aria-expanded={isFlipped}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSpeakerFlip(idx);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleSpeakerFlip(idx);
                      }
                    }}
                  >
                    <div className="speaker-card-flipper">
                      {/* Front Side: Transparent Person Cutout */}
                      <div className="card-face card-front">
                        <div className="cutout-wrapper">
                          <span className="speaker-num-badge">{numStr}</span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={speaker.cutout}
                            alt={speaker.name}
                            className="speaker-cutout-img"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = speaker.image;
                            }}
                          />
                        </div>
                        <div className="speaker-name-tag">{speaker.name}</div>
                      </div>

                      {/* Back Side: Detailed Speaker Information Card */}
                      <div className="card-face card-back">
                        <div className="card-back-header">
                          <span className="card-back-number">{numStr}</span>
                          <span className="card-back-tag">{speaker.tag}</span>
                        </div>
                        <h3 className="card-back-name">{speaker.name}</h3>
                        <p className="card-back-role">{speaker.designation}</p>
                        <p className="card-back-inst">{speaker.institution}</p>
                        <button
                          type="button"
                          className="flip-back-btn"
                          aria-label="Flip back to cutout view"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSpeakerFlip(idx);
                          }}
                        >
                          <i className="fa-solid fa-rotate-left"></i> Flip back
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Progress Indicator Navigation */}
      <div className="right-progress-nav" id="right-progress-nav">
        <div className="current-speaker-num" id="current-speaker-num">
          {String(currentActiveSpeaker + 1).padStart(2, "0")}
        </div>
        <div className="progress-track-line">
          <div
            className="progress-fill-bar"
            id="progress-fill-bar"
            style={{ height: `${(scrollProgress * 100).toFixed(1)}%` }}
          ></div>
        </div>
        <div className="total-speakers-count" id="total-speakers-count">/ 08</div>
        <div className="speaker-dots" id="speaker-dots">
          {expertSpeakersData.map((s, idx) => (
            <div
              key={idx}
              className={`dot-item ${idx === currentActiveSpeaker ? "active" : ""}`}
              data-index={idx}
              title={`${String(idx + 1).padStart(2, "0")}. ${s.name}`}
              onClick={() => scrollToSpeaker(idx)}
            ></div>
          ))}
        </div>
      </div>

      {/* Final Section: Mandatory Speaker Overview Grid */}
      <section className="final-overview-section" id="final-overview">
        <div className="overview-header">
          <span className="overview-tag">DISHA 2027 &middot; INTERNATIONAL DELEGATES</span>
          <h2 className="overview-title">All Speakers</h2>
          <p className="overview-subtitle">
            Convening experts across Design, Sustainability, Fine Arts, and Knowledge Systems
          </p>
        </div>

        <div className="speakers-grid-container" id="final-grid-container">
          {DIRECTORY_GROUPS.map((group, gIdx) => (
            <div key={gIdx} className="directory-group">
              <h3 className="directory-group-title">{group.title}</h3>
              <div className="directory-grid-auto">
                {group.people.map((person, pIdx) => {
                  const numStr = String(overallCardNumber++).padStart(2, "0");
                  return (
                    <div key={pIdx} className="final-speaker-card">
                      <div className="final-card-img-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={person.image}
                          alt={person.name}
                          className="final-card-img"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/logo/Design logo.jpg";
                          }}
                        />
                      </div>
                      <div className="final-card-body">
                        <div className="final-card-number">{person.tag || numStr}</div>
                        <h3 className="final-card-name">{person.name}</h3>
                        <div className="final-card-role">{person.designation}</div>
                        <div className="final-card-inst">{person.institution}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
