/* ==========================================================================
   DISHA 2027 - 3D Scroll-Driven Speaker Orbit Showcase Engine
   ========================================================================== */

const speakersData = [
    {
        id: 1,
        name: "Eija Salmi FRSA",
        designation: "Secretary General",
        institution: "Cumulus Association · International Association of Universities & Colleges of Art, Design and Media",
        tag: "KEYNOTE SPEAKER",
        image: "Eija Salmi FRSA.JPG",
        cutout: "speaker_cutouts/Eija Salmi FRSA.png"
    },
    {
        id: 2,
        name: "Dr. Anil Sinha",
        designation: "Former Executive Director & Senior Faculty",
        institution: "National Institute of Design (NID), Ahmedabad",
        tag: "DESIGN PEDAGOGY & LEADERSHIP",
        image: "Dr Anil Sinha.jpg",
        cutout: "speaker_cutouts/Dr Anil Sinha.png"
    },
    {
        id: 3,
        name: "Dr. Anuradha Choudry",
        designation: "Coordinator, IKS Division & Associate Professor",
        institution: "Ministry of Education, Govt. of India · IIT Kharagpur",
        tag: "INDIAN KNOWLEDGE SYSTEMS",
        image: "Dr. Anuradha Choudry.jpg",
        cutout: "speaker_cutouts/Dr. Anuradha Choudry.png"
    },
    {
        id: 4,
        name: "Dr. S. Arulchelvan",
        designation: "Director & Professor",
        institution: "Educational Multimedia Research Centre (EMRC), Anna University",
        tag: "MULTIMEDIA & DIGITAL COMMUNICATION",
        image: "Dr. S. Arulchelvan.jpg",
        cutout: "speaker_cutouts/Dr. S. Arulchelvan.png"
    },
    {
        id: 5,
        name: "Dr. Swapna Mishra",
        designation: "Director & Dean",
        institution: "Parul Institute of Design & Fine Arts, Parul University",
        tag: "CONFERENCE CHAIR",
        image: "Dr. Swapna Mishra.jpeg",
        cutout: "speaker_cutouts/Dr. Swapna Mishra.png"
    },
    {
        id: 6,
        name: "Prof. Dr. Anjali Karolia (Retd)",
        designation: "Former Dean & Craft Heritage Specialist",
        institution: "Faculty of Family and Community Sciences, MSU Baroda",
        tag: "TEXTILE HERITAGE & CRAFT",
        image: "Prof. Dr. Anjali Karolia (Retd).jpg",
        cutout: "speaker_cutouts/Prof. Dr. Anjali Karolia (Retd).png"
    },
    {
        id: 7,
        name: "Dr. M.M. Hundekar",
        designation: "Former Principal & Senior Academician",
        institution: "School of Fashion & Textile Technology",
        tag: "SUSTAINABLE FASHION INNOVATION",
        image: "IMG-Dr. M.M. Hundekar.jpg",
        cutout: "speaker_cutouts/IMG-Dr. M.M. Hundekar.png"
    },
    {
        id: 8,
        name: "Dr. Vahini Aravind",
        designation: "Associate Professor & Lead Researcher",
        institution: "Parul Institute of Design, Parul University",
        tag: "SUSTAINABLE DESIGN METHODOLOGY",
        image: "Dr. Vahini Aravind.jpg",
        cutout: "speaker_cutouts/Dr. Vahini Aravind.png"
    },
    {
        id: 9,
        name: "Subhanish Malhotra",
        designation: "Dean & Head of Innovation",
        institution: "Parul Institute of Design, Parul University",
        tag: "INDUSTRIAL DESIGN & INNOVATION",
        image: "Subhanish Malhotra.png",
        cutout: "speaker_cutouts/Subhanish Malhotra.png"
    }
];

// Organic vertical shifts for 9 speakers to keep the orbit lively and editorial
const yOrganicOffsets = [-15, 18, -12, 22, -18, 12, -24, 10, -14];

// Global state variables
let autoRotateAngle = 0;
let activeFlippedIndex = -1;
let isAnimationTickerActive = false;

document.addEventListener("DOMContentLoaded", () => {
    measureNavbar();
    init3DSpeakerOrbit();
    renderFinalGrid();

    const urlParams = new URLSearchParams(window.location.search);
    const scrollParam = urlParams.get("scroll");
    if (scrollParam) {
        window.scrollTo(0, parseInt(scrollParam, 10));
    }
});

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

    // Set scroll wrapper height to 500vh for generous, smooth scroll distance
    scrollWrapper.style.height = "500vh";

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

    // Continuous Animation & Scroll Ticker
    function renderFrame() {
        const wrapperRect = scrollWrapper.getBoundingClientRect();
        const stageWidth = stage.clientWidth;
        const stageHeight = stage.clientHeight;
        const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;

        if (totalScrollable <= 0) return;

        let scrolled = Math.max(0, Math.min(totalScrollable, -wrapperRect.top));
        const progress = scrolled / totalScrollable;

        // Calculate Orbit Radius dynamically based on viewport dimensions
        const isMobile = stageWidth <= 600;
        const isTablet = stageWidth > 600 && stageWidth <= 1100;

        // Dynamic Orbit Radii (X and Y independent radii)
        // Ensures speaker cutouts revolve around the central "Speakers" heading with a 60px–100px gap
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

        // Advance continuous auto-rotation if any speakers are in complete orbit
        // Speed slows down to 0 if a speaker card is flipped to allow easy reading
        const isFlipped = activeFlippedIndex !== -1;
        const autoSpeed = isFlipped ? 0 : 0.08; 
        autoRotateAngle = (autoRotateAngle + autoSpeed) % 360;

        const cards = ringContainer.querySelectorAll(".speaker-orbit-item");
        let currentActiveIdx = 0;
        let highestEntranceProgress = 0;

        speakersData.forEach((_, i) => {
            const card = cards[i];
            if (!card) return;

            // Sequential Entrance Windows (0.0 to 0.80)
            const startProgress = i * 0.08;
            const endProgress = startProgress + 0.15;

            // Angle around 360 deg circle
            const baseAngleDeg = i * (360 / 9) - 90;
            // Total angle combining base angle + continuous auto-rotation
            const currentAngleDeg = baseAngleDeg + autoRotateAngle;
            const rad = (currentAngleDeg * Math.PI) / 180;

            // Target Orbit Position in 3D Space (centered around exact title center)
            const targetX = Math.cos(rad) * orbitRadiusX;
            const targetY = Math.sin(rad) * orbitRadiusY + (yOrganicOffsets[i] * 0.25);
            const targetZ = Math.sin(rad) * 120; // Depth into/out of screen

            if (progress < startProgress) {
                // Initial State: NOT visible, positioned off-screen to the RIGHT
                card.style.opacity = "0";
                card.style.visibility = "hidden";
                card.style.pointerEvents = "none";
            } else if (progress >= startProgress && progress < endProgress) {
                // Entrance Phase: Moving from RIGHT edge to orbit position
                card.style.visibility = "visible";
                card.style.pointerEvents = "auto";

                const rawT = (progress - startProgress) / (endProgress - startProgress);
                const t = cubicOut(Math.min(1, Math.max(0, rawT)));

                if (rawT > highestEntranceProgress) {
                    highestEntranceProgress = rawT;
                    currentActiveIdx = i;
                }

                // Entrance trajectory starting from right edge
                const startX = stageWidth * 0.5 + (isMobile ? 180 : 380);
                const startY = targetY;
                const startZ = -180;

                const currX = startX + (targetX - startX) * t;
                const currY = startY + (targetY - startY) * t;
                const currZ = startZ + (targetZ - startZ) * t;

                const opacity = Math.min(1, t * 1.2);
                const scale = 0.65 + (1.0 - 0.65) * t;

                // Apply 3D Transform
                card.style.opacity = opacity.toFixed(3);
                card.style.zIndex = Math.round(100 + currZ);
                card.style.transform = `translate3d(${currX.toFixed(1)}px, ${currY.toFixed(1)}px, ${currZ.toFixed(1)}px) scale(${scale.toFixed(3)})`;
            } else {
                // Full Orbit Phase: Continuously rotating around central title
                card.style.visibility = "visible";
                card.style.pointerEvents = "auto";
                card.style.opacity = "1";

                if (i >= currentActiveIdx) {
                    currentActiveIdx = i;
                }

                // Depth scaling: Items closer to viewer (z > 0) are larger; background items slightly smaller
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

        requestAnimationFrame(renderFrame);
    }

    // Start continuous ticker loop
    requestAnimationFrame(renderFrame);
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

    const startProgress = index * 0.08;
    const targetProgress = startProgress + 0.06;
    const targetScroll = absoluteTop + targetProgress * totalScrollable;

    window.scrollTo({
        top: targetScroll,
        behavior: "smooth"
    });
}

/* --------------------------------------------------------------------------
   Render Final Overview Section Grid: EXACT MANDATORY 5 TOP + 4 BOTTOM GRID
   -------------------------------------------------------------------------- */
function renderFinalGrid() {
    const gridContainer = document.getElementById("final-grid-container");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    // Create Row 1 (5 Speakers)
    const rowTop = document.createElement("div");
    rowTop.className = "grid-row-5";

    // Create Row 2 (4 Speakers - Centered)
    const rowBottom = document.createElement("div");
    rowBottom.className = "grid-row-4";

    speakersData.forEach((speaker, idx) => {
        const numStr = String(idx + 1).padStart(2, "0");

        const card = document.createElement("div");
        card.className = "final-speaker-card";
        card.innerHTML = `
            <div class="final-card-img-wrap">
                <img src="${speaker.image}" alt="${speaker.name}" class="final-card-img" loading="lazy">
            </div>
            <div class="final-card-body">
                <div class="final-card-number">${numStr}</div>
                <h3 class="final-card-name">${speaker.name}</h3>
                <div class="final-card-role">${speaker.designation}</div>
                <div class="final-card-inst">${speaker.institution}</div>
            </div>
        `;

        if (idx < 5) {
            rowTop.appendChild(card);
        } else {
            rowBottom.appendChild(card);
        }
    });

    gridContainer.appendChild(rowTop);
    gridContainer.appendChild(rowBottom);
}
