document.addEventListener("DOMContentLoaded", function () {
    // OSI Model Data
    const osiLayers = [
        { layer: "7. Application", function: "Provides network services to end-users (e.g., HTTP, FTP)." },
        { layer: "6. Presentation", function: "Formats and encrypts data (e.g., ASCII, JPEG)." },
        { layer: "5. Session", function: "Manages sessions between devices (e.g., authentication)." },
        { layer: "4. Transport", function: "Ensures reliable transmission via TCP/UDP." },
        { layer: "3. Network", function: "Handles routing with IP addresses." },
        { layer: "2. Data Link", function: "Transfers data over local networks (MAC addressing)." },
        { layer: "1. Physical", function: "Transmits raw data as electrical or radio signals." },
    ];

    // Generate Table Rows
    const tableBody = document.getElementById("osi-table");

    osiLayers.forEach(layer => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${layer.layer}</td><td>${layer.function}</td>`;
        tableBody.appendChild(row);
    });

    // Scroll Reveal Effect
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.2 });

    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        observer.observe(element);
    });
});
