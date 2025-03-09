// // public/js/home.js

// document.addEventListener("DOMContentLoaded", () => {
//     // Slideshow functionality
//     let slideIndex = 0;
//     const slides = document.querySelectorAll(".slide");
//     function showSlides() {
//         slides.forEach(slide => slide.style.display = "none");
//         slideIndex++;
//         if (slideIndex > slides.length) { slideIndex = 1; }
//         slides[slideIndex - 1].style.display = "block";
//         setTimeout(showSlides, 3000);
//     }
//     showSlides();

//     // Scroll animation for statistics section
//     const stats = document.querySelectorAll(".stat-component");
//     function revealStats() {
//         stats.forEach(stat => {
//             const rect = stat.getBoundingClientRect();
//             if (rect.top < window.innerHeight * 0.9) {
//                 stat.classList.add("show");
//             }
//         });
//     }
//     window.addEventListener("scroll", revealStats);
//     revealStats();

//     // Ensure footer loads at the bottom of the page
//     const footer = document.querySelector("footer");
//     function adjustFooter() {
//         if (document.body.offsetHeight < window.innerHeight) {
//             footer.style.position = "absolute";
//             footer.style.bottom = "0";
//             footer.style.width = "100%";
//         } else {
//             footer.style.position = "relative";
//         }
//     }
//     adjustFooter();
//     window.addEventListener("resize", adjustFooter);
// });
// public/js/home.js

document.addEventListener("DOMContentLoaded", () => {
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

    // Scroll animation for statistics section
    const stats = document.querySelectorAll(".stat-component");
    function revealStats() {
        stats.forEach((stat, index) => {
            const rect = stat.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                stat.classList.add("show");
                // Apply alternating class for left/right alignment
                if (index % 2 === 0) {
                    stat.classList.add("even");
                } 
            }
        });
    }
    window.addEventListener("scroll", revealStats);
    revealStats();

    // Ensure footer loads at the bottom of the page
    const footer = document.querySelector("footer");
    function adjustFooter() {
        if (document.body.offsetHeight < window.innerHeight) {
            footer.style.position = "absolute";
            footer.style.bottom = "0";
            footer.style.width = "100%";
        } else {
            footer.style.position = "relative";
        }
    }
    adjustFooter();
    window.addEventListener("resize", adjustFooter);
});

