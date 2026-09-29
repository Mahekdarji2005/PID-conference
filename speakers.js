/* ==========================================================================
   DISHA 2027 - Dynamic Floating Speaker Showcase Engine
   ========================================================================== */

const speakersData = [
    {
        id: 1,
        name: "Eija Salmi FRSA",
        designation: "Secretary General",
        institution: "Cumulus Association · International Association of Universities & Colleges of Art, Design and Media",
        tag: "KEYNOTE SPEAKER",
        image: "Eija Salmi FRSA.JPG"
    },
    {
        id: 2,
        name: "Dr. Anil Sinha",
        designation: "Former Executive Director & Senior Faculty",
        institution: "National Institute of Design (NID), Ahmedabad",
        tag: "DESIGN PEDAGOGY & LEADERSHIP",
        image: "Dr Anil Sinha.jpg"
    },
    {
        id: 3,
        name: "Dr. Anuradha Choudry",
        designation: "Coordinator, IKS Division & Associate Professor",
        institution: "Ministry of Education, Govt. of India · IIT Kharagpur",
        tag: "INDIAN KNOWLEDGE SYSTEMS",
        image: "Dr. Anuradha Choudry.jpg"
    },
    {
        id: 4,
        name: "Dr. S. Arulchelvan",
        designation: "Director & Professor",
        institution: "Educational Multimedia Research Centre (EMRC), Anna University",
        tag: "MULTIMEDIA & DIGITAL COMMUNICATION",
        image: "Dr. S. Arulchelvan.jpg"
    },
    {
        id: 5,
        name: "Dr. Swapna Mishra",
        designation: "Director & Dean",
        institution: "Parul Institute of Design & Fine Arts, Parul University",
        tag: "CONFERENCE CHAIR",
        image: "Dr. Swapna Mishra.jpeg"
    },
    {
        id: 6,
        name: "Prof. Dr. Anjali Karolia (Retd)",
        designation: "Former Dean & Craft Heritage Specialist",
        institution: "Faculty of Family and Community Sciences, MSU Baroda",
        tag: "TEXTILE HERITAGE & CRAFT",
        image: "Prof. Dr. Anjali Karolia (Retd).jpg"
    },
    {
        id: 7,
        name: "Dr. M.M. Hundekar",
        designation: "Former Principal & Senior Academician",
        institution: "School of Fashion & Textile Technology",
        tag: "SUSTAINABLE FASHION INNOVATION",
        image: "IMG-Dr. M.M. Hundekar.jpg"
    },
    {
        id: 8,
        name: "Dr. Vahini Aravind",
        designation: "Associate Professor & Lead Researcher",
        institution: "Parul Institute of Design, Parul University",
        tag: "SUSTAINABLE DESIGN METHODOLOGY",
        image: "Dr. Vahini Aravind.jpg"
    },
    {
        id: 9,
        name: "Subhanish Malhotra",
        designation: "Dean & Head of Innovation",
        institution: "Parul Institute of Design, Parul University",
        tag: "INDUSTRIAL DESIGN & INNOVATION",
        image: "Subhanish Malhotra.png"
    }
];

/* Floating Trajectory Configurations for all 9 speakers around central title */
const floatingConfigs = [
    {
        // 01: Eija Salmi FRSA (Top-Left floating)
        startProgress: 0.00,
        endProgress: 0.28,
        startX: 4,
        startY: 10,
        endX: 12,
        endY: 22,
        startScale: 0.92,
        endScale: 1.04,
        zIndex: 12,
        widthPx: 270
    },
    {
        // 02: Dr. Anil Sinha (Center-Right overlapping title)
        startProgress: 0.06,
        endProgress: 0.34,
        startX: 54,
        startY: 20,
        endX: 60,
        endY: 10,
        startScale: 0.95,
        endScale: 1.06,
        zIndex: 15,
        widthPx: 290
    },
    {
        // 03: Dr. Anuradha Choudry (Bottom-Left)
        startProgress: 0.16,
        endProgress: 0.44,
        startX: 16,
        startY: 54,
        endX: 10,
        endY: 42,
        startScale: 0.90,
        endScale: 1.02,
        zIndex: 11,
        widthPx: 260
    },
    {
        // 04: Dr. S. Arulchelvan (Bottom-Right)
        startProgress: 0.26,
        endProgress: 0.54,
        startX: 62,
        startY: 48,
        endX: 68,
        endY: 36,
        startScale: 0.92,
        endScale: 1.04,
        zIndex: 14,
        widthPx: 280
    },
    {
        // 05: Dr. Swapna Mishra (Center Hero overlapping title)
        startProgress: 0.38,
        endProgress: 0.66,
        startX: 35,
        startY: 14,
        endX: 28,
        endY: 28,
        startScale: 0.96,
        endScale: 1.08,
        zIndex: 16,
        widthPx: 310
    },
    {
        // 06: Prof. Dr. Anjali Karolia (Mid-Left floating up)
        startProgress: 0.48,
        endProgress: 0.76,
        startX: 6,
        startY: 26,
        endX: 12,
        endY: 12,
        startScale: 0.90,
        endScale: 1.02,
        zIndex: 12,
        widthPx: 270
    },
    {
        // 07: Dr. M.M. Hundekar (Top-Right floating down)
        startProgress: 0.58,
        endProgress: 0.86,
        startX: 60,
        startY: 16,
        endX: 54,
        endY: 30,
        startScale: 0.94,
        endScale: 1.04,
        zIndex: 14,
        widthPx: 280
    },
    {
        // 08: Dr. Vahini Aravind (Bottom-Left floating up)
        startProgress: 0.68,
        endProgress: 0.94,
        startX: 20,
        startY: 50,
        endX: 26,
        endY: 38,
        startScale: 0.90,
        endScale: 1.02,
        zIndex: 13,
        widthPx: 260
    },
    {
        // 09: Subhanish Malhotra (Center-Right floating up)
        startProgress: 0.76,
        endProgress: 0.98,
        startX: 50,
        startY: 42,
        endX: 56,
        endY: 20,
        startScale: 0.95,
        endScale: 1.06,
        zIndex: 15,
        widthPx: 290
    }
];

document.addEventListener("DOMContentLoaded", () => {
    measureNavbar();
    initFloatingShowcase();
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

/* Initialize Floating Scroll Stage */
function initFloatingShowcase() {
    const scrollWrapper = document.getElementById("speakers-scroll-wrapper");
    const stage = document.getElementById("speakers-sticky-stage");
    const container = document.getElementById("floating-speakers-container");
    const numDisplay = document.getElementById("current-speaker-num");
    const progressFill = document.getElementById("progress-fill-bar");
    const dotsContainer = document.getElementById("speaker-dots");

    if (!scrollWrapper || !container) return;

    // Set scroll wrapper total height (~450vh for smooth scroll space)
    scrollWrapper.style.height = "450vh";

    // Build Floating Speaker Cards
    container.innerHTML = "";
    if (dotsContainer) dotsContainer.innerHTML = "";

    speakersData.forEach((speaker, idx) => {
        const config = floatingConfigs[idx];

        // Create card element
        const card = document.createElement("div");
        card.className = "floating-speaker-card";
        card.dataset.index = idx;
        card.style.zIndex = config.zIndex;
        card.style.width = `${config.widthPx}px`;

        card.innerHTML = `
            <div class="floating-card-inner">
                <div class="floating-card-image-wrap">
                    <img src="${speaker.image}" alt="${speaker.name}" class="floating-card-image" loading="${idx < 2 ? 'eager' : 'lazy'}">
                </div>
                <div class="floating-card-meta">
                    <div class="floating-speaker-name">${speaker.name}</div>
                    <div class="floating-speaker-role">(${speaker.designation.split('&')[0].trim()})</div>
                </div>
            </div>
        `;

        container.appendChild(card);

        // Build side navigation dot
        if (dotsContainer) {
            const dot = document.createElement("div");
            dot.className = `dot-item ${idx === 0 ? 'active' : ''}`;
            dot.dataset.index = idx;
            dot.title = speaker.name;
            dot.addEventListener("click", () => scrollToSpeaker(idx));
            dotsContainer.appendChild(dot);
        }
    });

    let ticking = false;

    function updateStage() {
        const wrapperRect = scrollWrapper.getBoundingClientRect();
        const stageHeight = stage.clientHeight;
        const stageWidth = stage.clientWidth;
        const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;
        if (totalScrollable <= 0) return;

        const urlParams = new URLSearchParams(window.location.search);
        let overrideScroll = urlParams.get("scroll");
        if (!overrideScroll && window.location.hash.startsWith("#scroll")) {
            overrideScroll = window.location.hash.replace("#scroll", "");
        }

        let scrolled = Math.max(0, Math.min(totalScrollable, -wrapperRect.top));
        if (overrideScroll && window.pageYOffset === 0) {
            scrolled = Math.max(0, Math.min(totalScrollable, parseInt(overrideScroll, 10)));
        }

        const progress = scrolled / totalScrollable;

        const cards = container.querySelectorAll(".floating-speaker-card");
        let activeSpeakerIndex = 0;
        let maxOpacityIndex = 0;
        let maxOpacityValue = 0;

        speakersData.forEach((speaker, idx) => {
            const config = floatingConfigs[idx];
            const card = cards[idx];
            if (!card) return;

            if (progress < config.startProgress || progress > config.endProgress) {
                card.style.opacity = "0";
                card.style.visibility = "hidden";
            } else {
                card.style.visibility = "visible";

                const range = config.endProgress - config.startProgress;
                const localProgress = (progress - config.startProgress) / range;

                // Opacity curve: fade in over first 20%, stay 100%, fade out over last 20%
                const fadeIn = Math.min(1, localProgress / 0.20);
                const fadeOut = Math.min(1, (1 - localProgress) / 0.20);
                const opacity = Math.min(fadeIn, fadeOut);

                if (opacity > maxOpacityValue) {
                    maxOpacityValue = opacity;
                    maxOpacityIndex = idx;
                }

                // Position interpolation (% of stage dimensions)
                const isMobile = window.innerWidth <= 600;
                const startX = isMobile ? Math.min(config.startX, 20) : config.startX;
                const endX = isMobile ? Math.min(config.endX, 30) : config.endX;

                const currXPercent = startX + (endX - startX) * localProgress;
                const currYPercent = config.startY + (config.endY - config.startY) * localProgress;

                const posX = (currXPercent / 100) * stageWidth;
                const posY = (currYPercent / 100) * stageHeight;

                const scale = config.startScale + (config.endScale - config.startScale) * localProgress;

                card.style.opacity = opacity.toFixed(3);
                card.style.transform = `translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
            }
        });

        // Update progress bar & navigation UI
        activeSpeakerIndex = maxOpacityIndex;

        if (numDisplay) {
            numDisplay.textContent = String(activeSpeakerIndex + 1).padStart(2, "0");
        }

        if (progressFill) {
            progressFill.style.height = `${(progress * 100).toFixed(1)}%`;
        }

        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll(".dot-item");
            dots.forEach((dot, i) => {
                if (i === activeSpeakerIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateStage);
            ticking = true;
        }
    }

    function scrollToSpeaker(index) {
        const config = floatingConfigs[index];
        const wrapperRect = scrollWrapper.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + wrapperRect.top;
        const totalScrollable = scrollWrapper.clientHeight - window.innerHeight;
        const targetProgress = config.startProgress + (config.endProgress - config.startProgress) * 0.4;
        const targetScroll = absoluteTop + targetProgress * totalScrollable;

        window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
        measureNavbar();
        onScroll();
    }, { passive: true });

    updateStage();
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
            // Top row gets speakers 01, 02, 03, 04, 05
            rowTop.appendChild(card);
        } else {
            // Bottom row gets speakers 06, 07, 08, 09
            rowBottom.appendChild(card);
        }
    });

    gridContainer.appendChild(rowTop);
    gridContainer.appendChild(rowBottom);
}
