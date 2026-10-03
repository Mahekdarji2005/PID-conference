/* ==========================================================================
   DISHA 2027 - 3D Scroll-Driven Speaker Orbit Showcase Engine
   ========================================================================== */

const expertSpeakersData = [
    {
        id: 1,
        name: "Dr. Anil Sinha",
        designation: "Former Executive Director & Senior Faculty",
        institution: "National Institute of Design (NID), Ahmedabad",
        tag: "DESIGN PEDAGOGY & LEADERSHIP",
        image: "Speaker_images/Dr Anil Sinha.jpg",
        cutout: "speaker_cutouts/Dr Anil Sinha.png"
    },
    {
        id: 2,
        name: "Dr. Anuradha Choudry",
        designation: "Coordinator, IKS Division & Associate Professor",
        institution: "Ministry of Education, Govt. of India · IIT Kharagpur",
        tag: "INDIAN KNOWLEDGE SYSTEMS",
        image: "Speaker_images/Dr. Anuradha Choudry.jpg",
        cutout: "speaker_cutouts/Dr. Anuradha Choudry.png"
    },
    {
        id: 3,
        name: "Dr. S. Arulchelvan",
        designation: "Director & Professor",
        institution: "Educational Multimedia Research Centre (EMRC), Anna University",
        tag: "MULTIMEDIA & DIGITAL COMMUNICATION",
        image: "Speaker_images/Dr. S. Arulchelvan.jpg",
        cutout: "speaker_cutouts/Dr. S. Arulchelvan.png"
    },
    {
        id: 4,
        name: "Dr. Swapna Mishra",
        designation: "Director & Dean",
        institution: "Parul Institute of Design & Fine Arts, Parul University",
        tag: "CONFERENCE CHAIR",
        image: "Speaker_images/Dr. Swapna Mishra.jpeg",
        cutout: "speaker_cutouts/Dr. Swapna Mishra.png"
    },
    {
        id: 5,
        name: "Prof. Dr. Anjali Karolia (Retd)",
        designation: "Former Dean & Craft Heritage Specialist",
        institution: "Faculty of Family and Community Sciences, MSU Baroda",
        tag: "TEXTILE HERITAGE & CRAFT",
        image: "Speaker_images/Prof. Dr. Anjali Karolia (Retd).jpg",
        cutout: "speaker_cutouts/Prof. Dr. Anjali Karolia (Retd).png"
    },
    {
        id: 6,
        name: "Dr. M.M. Hundekar",
        designation: "Former Principal & Senior Academician",
        institution: "School of Fashion & Textile Technology",
        tag: "SUSTAINABLE FASHION INNOVATION",
        image: "Speaker_images/IMG-Dr. M.M. Hundekar.jpg",
        cutout: "speaker_cutouts/IMG-Dr. M.M. Hundekar.png"
    },
    {
        id: 7,
        name: "Dr. Vahini Aravind",
        designation: "Associate Professor & Lead Researcher",
        institution: "Parul Institute of Design, Parul University",
        tag: "SUSTAINABLE DESIGN METHODOLOGY",
        image: "Speaker_images/Dr. Vahini Aravind.jpg",
        cutout: "speaker_cutouts/Dr. Vahini Aravind.png"
    },
    {
        id: 8,
        name: "Subhanish Malhotra",
        designation: "Dean & Head of Innovation",
        institution: "Parul Institute of Design, Parul University",
        tag: "INDUSTRIAL DESIGN & INNOVATION",
        image: "Speaker_images/Subhanish Malhotra.png",
        cutout: "speaker_cutouts/Subhanish Malhotra.png"
    }
];

const speakersData = expertSpeakersData;

// Organic vertical shifts for 8 Expert Speakers to keep the orbit lively and editorial
const yOrganicOffsets = [-15, 18, -12, 22, -18, 12, -24, 10];

// Global state variables
let autoRotateAngle = 0;
let activeFlippedIndex = -1;
let isAnimationTickerActive = false;

document.addEventListener("DOMContentLoaded", () => {
    measureNavbar();
    initNavbarToggle();
    initKeynoteCarousel();
    init3DSpeakerOrbit();
    renderFinalGrid();

    const urlParams = new URLSearchParams(window.location.search);
    const scrollParam = urlParams.get("scroll");
    if (scrollParam) {
        window.scrollTo(0, parseInt(scrollParam, 10));
    }
});

/* Mobile Navbar Toggle */
function initNavbarToggle() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

/* Measure sticky navbar height dynamically */
function measureNavbar() {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const navHeight = navbar.offsetHeight;
        document.documentElement.style.setProperty("--navbar-height", `${navHeight}px`);
    }
}

window.addEventListener("resize", measureNavbar);

/* Ease cubic function for smooth entrance interpolation */
function cubicOut(t) {
    return 1 - Math.pow(1 - t, 3);
}

/* Initialize 3D Speaker Orbit Stage */
function init3DSpeakerOrbit() {
    const scrollWrapper = document.getElementById("speakers-scroll-wrapper");
    const stage = document.getElementById("speakers-sticky-stage");
    const ringContainer = document.getElementById("orbit-ring-container");
    const numDisplay = document.getElementById("current-speaker-num");
    const progressFill = document.getElementById("progress-fill-bar");
    const dotsContainer = document.getElementById("speaker-dots");

    if (!scrollWrapper || !ringContainer || !stage) return;

    // Set scroll wrapper height to 300vh for a responsive, smooth sequential reveal
    scrollWrapper.style.height = "300vh";

    // Build 3D Speaker Cards
    ringContainer.innerHTML = "";
    if (dotsContainer) dotsContainer.innerHTML = "";

    speakersData.forEach((speaker, idx) => {
        const numStr = String(idx + 1).padStart(2, "0");

        const item = document.createElement("div");
        item.className = "speaker-orbit-item";
        item.dataset.index = idx;
        item.setAttribute("role", "button");
        item.setAttribute("tabindex", "0");
        item.setAttribute("aria-label", `Speaker ${numStr}: ${speaker.name}. Click to view details.`);
        item.setAttribute("aria-expanded", "false");

        item.innerHTML = `
            <div class="speaker-card-flipper">
                <!-- Front Side: Transparent Person Cutout -->
                <div class="card-face card-front">
                    <div class="cutout-wrapper">
                        <span class="speaker-num-badge">${numStr}</span>
                        <img src="${speaker.cutout}" alt="${speaker.name}" class="speaker-cutout-img" 
                             onerror="this.onerror=null; this.src='${speaker.image}';" loading="${idx < 2 ? 'eager' : 'lazy'}">
                    </div>
                    <div class="speaker-name-tag">${speaker.name}</div>
                </div>

                <!-- Back Side: Detailed Speaker Information Card -->
                <div class="card-face card-back">
                    <div class="card-back-header">
                        <span class="card-back-number">${numStr}</span>
                        <span class="card-back-tag">${speaker.tag}</span>
                    </div>
                    <h3 class="card-back-name">${speaker.name}</h3>
                    <p class="card-back-role">${speaker.designation}</p>
                    <p class="card-back-inst">${speaker.institution}</p>
                    <button type="button" class="flip-back-btn" aria-label="Flip back to cutout view">
                        <i class="fa-solid fa-rotate-left"></i> Flip back
                    </button>
                </div>
            </div>
        `;

        // Click to flip card interaction
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleSpeakerFlip(idx);
        });

        item.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleSpeakerFlip(idx);
            }
        });

        ringContainer.appendChild(item);

        // Build side navigation dots
        if (dotsContainer) {
            const dot = document.createElement("div");
            dot.className = `dot-item ${idx === 0 ? 'active' : ''}`;
            dot.dataset.index = idx;
            dot.title = `${numStr}. ${speaker.name}`;
            dot.addEventListener("click", () => scrollToSpeaker(idx));
            dotsContainer.appendChild(dot);
        }
    });

    // Close flipped card if user clicks anywhere outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".speaker-orbit-item") && activeFlippedIndex !== -1) {
            toggleSpeakerFlip(activeFlippedIndex);
        }
    });

    // Scroll-Driven Sequential Reveal Engine (Zero Revolving / Rotation)
    function updateOrbitStage() {
        const wrapperRect = scrollWrapper.getBoundingClientRect();
        const stageWidth = stage.clientWidth;
        const stageHeight = stage.clientHeight;
        const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;

        if (totalScrollable <= 0) return;

        let scrolled = Math.max(0, Math.min(totalScrollable, -wrapperRect.top));
        const progress = scrolled / totalScrollable;

        // Dynamic Orbit Radii (X and Y independent radii)
        const isMobile = stageWidth <= 600;
        const isTablet = stageWidth > 600 && stageWidth <= 1100;

        const orbitRadiusX = isMobile
            ? Math.max(140, Math.min(stageWidth * 0.42, 200))
            : isTablet
                ? Math.max(300, Math.min(stageWidth * 0.40, 440))
                : Math.max(400, Math.min(stageWidth * 0.40, 560));

        const orbitRadiusY = isMobile
            ? Math.max(150, Math.min(stageHeight * 0.36, 230))
            : isTablet
                ? Math.max(200, Math.min(stageHeight * 0.34, 270))
                : Math.max(240, Math.min(stageHeight * 0.34, 300));

        const cards = ringContainer.querySelectorAll(".speaker-orbit-item");
        let currentActiveIdx = 0;
        let highestEntranceProgress = 0;

        speakersData.forEach((_, i) => {
            const card = cards[i];
            if (!card) return;

            // Sequential Entrance Windows (0.0 to 0.85)
            const startProgress = i * 0.10;
            const endProgress = startProgress + 0.18;

            // Static circular positions (equal 45 deg intervals around central title, 0 rotation)
            const baseAngleDeg = i * (360 / speakersData.length) - 90;
            const rad = (baseAngleDeg * Math.PI) / 180;

            const targetX = Math.cos(rad) * orbitRadiusX;
            const targetY = Math.sin(rad) * orbitRadiusY + (yOrganicOffsets[i] * 0.25);
            const targetZ = Math.sin(rad) * 120; // Depth into/out of screen

            if (progress < startProgress) {
                // Not yet revealed: Hidden off-screen
                card.style.opacity = "0";
                card.style.visibility = "hidden";
                card.style.pointerEvents = "none";
            } else if (progress >= startProgress && progress < endProgress) {
                // Reveal Entrance Phase: Moving into position as user scrolls
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
                // Fully Settled Phase: Static layout position
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

        // Update Side Navigation & Progress Bar
        if (numDisplay) {
            numDisplay.textContent = String(currentActiveIdx + 1).padStart(2, "0");
        }

        if (progressFill) {
            progressFill.style.height = `${(progress * 100).toFixed(1)}%`;
        }

        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll(".dot-item");
            dots.forEach((dot, idx) => {
                if (idx === currentActiveIdx) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }
    }

    // Scroll & Resize Event Handling
    let isTicking = false;
    function handleScrollOrResize() {
        if (!isTicking) {
            requestAnimationFrame(() => {
                updateOrbitStage();
                isTicking = false;
            });
            isTicking = true;
        }
    }

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    // Initial render call
    updateOrbitStage();
}

/* Toggle Flip card state */
function toggleSpeakerFlip(index) {
    const items = document.querySelectorAll(".speaker-orbit-item");
    const targetItem = items[index];
    if (!targetItem) return;

    const isCurrentlyFlipped = targetItem.classList.contains("is-flipped");

    // Close any previously opened speaker card first
    items.forEach((item, i) => {
        if (i !== index && item.classList.contains("is-flipped")) {
            item.classList.remove("is-flipped");
            item.setAttribute("aria-expanded", "false");
        }
    });

    if (isCurrentlyFlipped) {
        targetItem.classList.remove("is-flipped");
        targetItem.setAttribute("aria-expanded", "false");
        activeFlippedIndex = -1;
    } else {
        targetItem.classList.add("is-flipped");
        targetItem.setAttribute("aria-expanded", "true");
        activeFlippedIndex = index;
    }
}

/* Smooth Scroll to Speaker Entrance Threshold */
function scrollToSpeaker(index) {
    const scrollWrapper = document.getElementById("speakers-scroll-wrapper");
    if (!scrollWrapper) return;

    const wrapperRect = scrollWrapper.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + wrapperRect.top;
    const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;

    const startProgress = index * 0.10;
    const targetProgress = Math.min(1, startProgress + 0.06);
    const targetScroll = absoluteTop + targetProgress * totalScrollable;

    window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
    });
}

/* --------------------------------------------------------------------------
   Render Final Directory Overview: Guest of Honour, Keynote Speakers, Expert Speakers
   -------------------------------------------------------------------------- */
function renderFinalGrid() {
    const gridContainer = document.getElementById("final-grid-container");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    const DIRECTORY_GROUPS = [
        {
            title: "Guest of Honour",
            people: [
                {
                    name: "Ms. Eija Salmi FRSA",
                    designation: "Guest of Honour & Secretary General",
                    institution: "Cumulus Association · International Association of Universities & Colleges of Art, Design and Media",
                    tag: "GUEST OF HONOUR",
                    image: "Speaker_images/Eija Salmi FRSA.JPG"
                }
            ]
        },
        {
            title: "Keynote Speakers",
            people: [
                {
                    name: "Prof. Dr. Lorenzo Imbesi",
                    designation: "Keynote Speaker I & President, Cumulus Association",
                    institution: "Sapienza Design Research, Sapienza University of Rome, Italy",
                    tag: "KEYNOTE",
                    image: "Speaker_images/Lorenzo_Imbesi.jpg"
                },
                {
                    name: "Dr. Dolly Daou",
                    designation: "Keynote Speaker II & Lead Design Researcher",
                    institution: "Transdisciplinary Design Leadership (Australia, Europe, Asia)",
                    tag: "KEYNOTE",
                    image: "Speaker_images/Dolly_Daou.jpg"
                }
            ]
        },
        {
            title: "Expert Speakers",
            people: expertSpeakersData.map((s, idx) => ({
                name: s.name,
                designation: s.designation,
                institution: s.institution,
                tag: `EXPERT ${String(idx + 1).padStart(2, "0")}`,
                image: s.image
            }))
        }
    ];

    let overallCardNumber = 1;

    DIRECTORY_GROUPS.forEach((group) => {
        const groupEl = document.createElement("div");
        groupEl.className = "directory-group";

        const titleEl = document.createElement("h3");
        titleEl.className = "directory-group-title";
        titleEl.textContent = group.title;
        groupEl.appendChild(titleEl);

        const gridEl = document.createElement("div");
        gridEl.className = "directory-grid-auto";

        group.people.forEach((person) => {
            const numStr = String(overallCardNumber++).padStart(2, "0");
            const card = document.createElement("div");
            card.className = "final-speaker-card";
            card.innerHTML = `
                <div class="final-card-img-wrap">
                    <img src="${person.image}" alt="${person.name}" class="final-card-img" loading="lazy" onerror="this.onerror=null; this.src='logo/Design logo.jpg';">
                </div>
                <div class="final-card-body">
                    <div class="final-card-number">${person.tag || numStr}</div>
                    <h3 class="final-card-name">${person.name}</h3>
                    <div class="final-card-role">${person.designation}</div>
                    <div class="final-card-inst">${person.institution}</div>
                </div>
            `;
            gridEl.appendChild(card);
        });

        groupEl.appendChild(gridEl);
        gridContainer.appendChild(groupEl);
    });
}

/* ==========================================================================
   Keynotes & Guest of Honour 3D Perspective Carousel Engine
   ========================================================================== */
const KEYNOTE_DATA = [
    {
        name: "Prof. Dr. Lorenzo Imbesi",
        role: "KEYNOTE SPEAKER I",
        bio: "President, Cumulus Association. Full Professor and Director, Sapienza Design Research, Sapienza University of Rome, Italy."
    },
    {
        name: "Dr. Dolly Daou",
        role: "KEYNOTE SPEAKER II",
        bio: "Design researcher, educator and academic leader in transdisciplinary design education, with leadership roles across Australia, Europe, China and the Middle East."
    },
    {
        name: "Ms. Eija Salmi FRSA",
        role: "GUEST OF HONOUR",
        bio: "Secretary General, Cumulus Association, Finland."
    }
];

let currentKeynoteIndex = 0;

function initKeynoteCarousel() {
    const stage = document.getElementById("perspective-stage");
    const prevBtn = document.getElementById("keynote-prev-btn");
    const nextBtn = document.getElementById("keynote-next-btn");
    const dots = document.querySelectorAll(".carousel-dots-container .dot-btn");

    if (!stage) return;

    // Attach click listeners to cards
    const cards = stage.querySelectorAll(".perspective-card");
    cards.forEach((card, idx) => {
        card.addEventListener("click", () => {
            if (currentKeynoteIndex !== idx) {
                currentKeynoteIndex = idx;
                updateKeynoteCarousel();
            }
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentKeynoteIndex = (currentKeynoteIndex - 1 + KEYNOTE_DATA.length) % KEYNOTE_DATA.length;
            updateKeynoteCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentKeynoteIndex = (currentKeynoteIndex + 1) % KEYNOTE_DATA.length;
            updateKeynoteCarousel();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            currentKeynoteIndex = idx;
            updateKeynoteCarousel();
        });
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    stage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 40) {
            currentKeynoteIndex = (currentKeynoteIndex + 1) % KEYNOTE_DATA.length;
            updateKeynoteCarousel();
        } else if (touchEndX - touchStartX > 40) {
            currentKeynoteIndex = (currentKeynoteIndex - 1 + KEYNOTE_DATA.length) % KEYNOTE_DATA.length;
            updateKeynoteCarousel();
        }
    }, { passive: true });

    updateKeynoteCarousel();
}

function updateKeynoteCarousel() {
    const cards = document.querySelectorAll(".perspective-card");
    const roleBadge = document.getElementById("keynote-role-badge");
    const nameEl = document.getElementById("keynote-speaker-name");
    const bioEl = document.getElementById("keynote-speaker-bio");
    const detailsBox = document.getElementById("keynote-details-box");
    const dots = document.querySelectorAll(".carousel-dots-container .dot-btn");
    const total = KEYNOTE_DATA.length;

    if (!cards.length) return;

    cards.forEach((card, idx) => {
        card.classList.remove("pos-center", "pos-left", "pos-right", "active", "left", "right");
        if (idx === currentKeynoteIndex) {
            card.classList.add("pos-center");
        } else if (idx === (currentKeynoteIndex - 1 + total) % total) {
            card.classList.add("pos-left");
        } else if (idx === (currentKeynoteIndex + 1) % total) {
            card.classList.add("pos-right");
        }
    });

    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentKeynoteIndex);
    });

    // Update active details with smooth fade
    if (detailsBox) {
        detailsBox.style.opacity = "0";
        detailsBox.style.transform = "translateY(8px)";
        setTimeout(() => {
            const data = KEYNOTE_DATA[currentKeynoteIndex];
            if (roleBadge) roleBadge.textContent = data.role;
            if (nameEl) nameEl.textContent = data.name;
            if (bioEl) bioEl.textContent = data.bio;
            detailsBox.style.opacity = "1";
            detailsBox.style.transform = "translateY(0)";
        }, 180);
    }
}
