document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    document.body.appendChild(toggleButton);
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") 
            ? "Light Mode" 
            : "Dark Mode";
    });
});
