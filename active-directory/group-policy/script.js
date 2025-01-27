document.addEventListener("DOMContentLoaded", function () {
    // Create a dark mode toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    document.body.appendChild(toggleButton);

    // Dark mode toggle event
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") 
            ? "Light Mode" 
            : "Dark Mode";
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Create a floating button to update Group Policy
    const updateButton = document.createElement("button");
    updateButton.textContent = "Force Group Policy Update";
    updateButton.style.position = "fixed";
    updateButton.style.bottom = "20px";
    updateButton.style.right = "20px";
    updateButton.style.zIndex = "1000";
    document.body.appendChild(updateButton);

    // Alert to remind users about Group Policy Update
    updateButton.addEventListener("click", function () {
        alert("Run 'gpupdate /force' in PowerShell to apply Group Policy changes.");
    });
});
