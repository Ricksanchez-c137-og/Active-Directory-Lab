document.querySelectorAll("h2, h3").forEach(header => {
    header.addEventListener("click", function () {
        let nextElement = this.nextElementSibling;
        while (nextElement && nextElement.tagName !== "H2" && nextElement.tagName !== "H3") {
            nextElement.style.display = nextElement.style.display === "none" ? "block" : "none";
            nextElement = nextElement.nextElementSibling;
        }
    });
});
