/* ==========================================================================
   DISHA 2027 - SDG Showcase Card Stack Engine
   ========================================================================== */

const sdgData = [
    { id: 1, title: "No Poverty", image: "sdg/sdg-01.svg" },
    { id: 2, title: "Zero Hunger", image: "sdg/sdg-02.svg" },
    { id: 3, title: "Good Health & Well-Being", image: "sdg/sdg-03.svg" },
    { id: 4, title: "Quality Education", image: "sdg/sdg-04.svg" },
    { id: 5, title: "Gender Equality", image: "sdg/sdg-05.svg" },
    { id: 6, title: "Clean Water & Sanitation", image: "sdg/sdg-06.svg" },
    { id: 7, title: "Affordable & Clean Energy", image: "sdg/sdg-07.svg" },
    { id: 8, title: "Decent Work & Economic Growth", image: "sdg/sdg-08.svg" },
    { id: 9, title: "Industry, Innovation & Infrastructure", image: "sdg/sdg-09.svg" },
    { id: 10, title: "Reduced Inequalities", image: "sdg/sdg-10.svg" },
    { id: 11, title: "Sustainable Cities & Communities", image: "sdg/sdg-11.svg" },
    { id: 12, title: "Responsible Consumption & Production", image: "sdg/sdg-12.svg" },
    { id: 13, title: "Climate Action", image: "sdg/sdg-13.svg" },
    { id: 14, title: "Life Below Water", image: "sdg/sdg-14.svg" },
    { id: 15, title: "Life on Land", image: "sdg/sdg-15.svg" },
    { id: 16, title: "Peace, Justice & Strong Institutions", image: "sdg/sdg-16.svg" },
    { id: 17, title: "Partnerships for the Goals", image: "sdg/sdg-17.svg" }
];

document.addEventListener("DOMContentLoaded", () => {
    initSDGCardStack();
});

function initSDGCardStack() {
    const stackContainer = document.getElementById("sdg-card-stack");
    const counterDisplay = document.getElementById("sdg-counter-num");
    const prevBtn = document.getElementById("sdg-prev-btn");
    const nextBtn = document.getElementById("sdg-next-btn");

    if (!stackContainer) return;

    let currentIndex = 0;
    const totalSDGs = sdgData.length;
    let isAnimating = false;

    function renderStack() {
        stackContainer.innerHTML = "";

        // Render top 3 visible cards in 3D depth stack
        for (let i = 0; i < 3; i++) {
            const dataIndex = (currentIndex + i) % totalSDGs;
            const sdg = sdgData[dataIndex];

            const card = document.createElement("div");
            card.className = "sdg-card";
            card.dataset.stackPos = i;

            card.innerHTML = `
                <img src="${sdg.image}" alt="SDG ${String(sdg.id).padStart(2, '0')} - ${sdg.title}" class="sdg-logo-img" loading="eager" />
            `;

            // Style position in 3D stack
            if (i === 0) {
                card.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
                card.style.zIndex = "3";
                card.style.opacity = "1";
            } else if (i === 1) {
                card.style.transform = "translate3d(14px, -10px, -15px) rotate(3deg) scale(0.94)";
                card.style.zIndex = "2";
                card.style.opacity = "0.85";
            } else if (i === 2) {
                card.style.transform = "translate3d(28px, -20px, -30px) rotate(-2.5deg) scale(0.88)";
                card.style.zIndex = "1";
                card.style.opacity = "0.65";
            }

            stackContainer.appendChild(card);
        }

        if (counterDisplay) {
            const currentSDG = sdgData[currentIndex];
            counterDisplay.textContent = `${String(currentSDG.id).padStart(2, '0')} / ${totalSDGs}`;
        }
    }

    function nextCard() {
        if (isAnimating) return;
        isAnimating = true;

        const topCard = stackContainer.querySelector('.sdg-card[data-stack-pos="0"]');
        if (topCard) {
            topCard.style.transition = "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease";
            topCard.style.transform = "translate3d(120px, 15px, 0) rotate(12deg) scale(0.9)";
            topCard.style.opacity = "0";
        }

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % totalSDGs;
            renderStack();
            isAnimating = false;
        }, 240);
    }

    function prevCard() {
        if (isAnimating) return;
        isAnimating = true;

        currentIndex = (currentIndex - 1 + totalSDGs) % totalSDGs;
        renderStack();

        const topCard = stackContainer.querySelector('.sdg-card[data-stack-pos="0"]');
        if (topCard) {
            topCard.style.transition = "none";
            topCard.style.transform = "translate3d(-120px, 15px, 0) rotate(-12deg) scale(0.9)";
            topCard.style.opacity = "0";

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    topCard.style.transition = "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease";
                    topCard.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
                    topCard.style.opacity = "1";
                    setTimeout(() => {
                        isAnimating = false;
                    }, 350);
                });
            });
        } else {
            isAnimating = false;
        }
    }

    if (nextBtn) nextBtn.addEventListener("click", () => {
        resetAutoTimer();
        nextCard();
    });

    if (prevBtn) prevBtn.addEventListener("click", () => {
        resetAutoTimer();
        prevCard();
    });

    // Auto cycle every 4 seconds
    let autoTimer = setInterval(nextCard, 4000);

    function resetAutoTimer() {
        clearInterval(autoTimer);
        autoTimer = setInterval(nextCard, 4000);
    }

    const showcaseContainer = document.querySelector(".sdg-showcase-container");
    if (showcaseContainer) {
        showcaseContainer.addEventListener("mouseenter", () => clearInterval(autoTimer));
        showcaseContainer.addEventListener("mouseleave", () => resetAutoTimer());
    }

    renderStack();
}
