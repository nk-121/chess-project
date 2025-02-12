window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY;
    let header = document.querySelector(".header");
    let profileContainer = document.querySelector(".profile-container");
    let profileImg = document.querySelector(".profile-container img");

    let opacityValue = Math.max(1 - scrollValue / 300, 0); // Fade out at 300px scroll

    header.style.opacity = opacityValue;
    profileContainer.style.opacity = opacityValue;
    profileImg.style.opacity = opacityValue;

    // Move profile pic upwards slightly
    profileContainer.style.transform = `translateY(${Math.min(scrollValue / 5, 40)}px)`;
});
