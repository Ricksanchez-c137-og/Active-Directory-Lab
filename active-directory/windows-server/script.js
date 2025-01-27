document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle Button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") 
            ? "Light Mode" 
            : "Dark Mode";
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Collapsible Sections
    document.querySelectorAll("h2, h3").forEach(header => {
        header.style.cursor = "pointer";
        header.addEventListener("click", function () {
            let nextElement = this.nextElementSibling;
            while (nextElement && nextElement.tagName !== "H2" && nextElement.tagName !== "H3") {
                nextElement.style.display = nextElement.style.display === "none" ? "block" : "none";
                nextElement = nextElement.nextElementSibling;
            }
        });
    });

    // Floating Button to Force Group Policy Update
    const updateButton = document.createElement("button");
    updateButton.textContent = "Force Group Policy Update";
    updateButton.classList.add("floating-button");
    document.body.appendChild(updateButton);

    updateButton.addEventListener("click", function () {
        alert("Run 'gpupdate /force' in PowerShell to apply Group Policy changes.");
    });
});
