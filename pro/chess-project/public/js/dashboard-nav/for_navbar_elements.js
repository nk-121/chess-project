document.addEventListener("DOMContentLoaded", () => {
    function loadPage(event, url) {
        event.preventDefault(); // Prevent default link behavior
        document.getElementById("content-frame").src = url; // Load the page in iframe
    }

    // Attach event listeners to navbar links
    document.getElementById("growth-tracking").addEventListener("click", (event) => loadPage(event, "/growth-tracking"));
    document.getElementById("tournaments").addEventListener("click", (event) => loadPage(event, "/tournaments"));
    document.getElementById("manage-subscription").addEventListener("click", (event) => loadPage(event, "/subscription"));
    document.getElementById("ecommerce-store").addEventListener("click", (event) => loadPage(event, "/ecommerce-store"));
     document.getElementById("homepage").addEventListener("click", (event) => loadPage(event, "/home"));
});
