document.addEventListener("DOMContentLoaded", function () {
    // Azure Services Data
    const services = [
        { name: "Virtual Machines", description: "Create and manage VMs in the cloud." },
        { name: "App Services", description: "Host and manage web applications." },
        { name: "SQL Database", description: "Manage SQL databases in the cloud." },
        { name: "Azure Kubernetes Service (AKS)", description: "Deploy containerized applications with Kubernetes." },
        { name: "Azure Functions", description: "Run event-driven serverless code." },
        { name: "Azure DevOps", description: "CI/CD pipelines, repositories, and agile tools." },
        { name: "Azure Active Directory (Azure AD)", description: "Identity and access management service." },
        { name: "Azure Cosmos DB", description: "Globally distributed, multi-model NoSQL database." },
        { name: "Azure AI Services", description: "Machine learning and artificial intelligence capabilities." },
        { name: "Azure Firewall", description: "Cloud-native network security filtering service." },
        { name: "Azure Sentinel", description: "Cloud-native SIEM for threat intelligence." },
        { name: "Azure Monitor", description: "Observability, logging, and performance monitoring." },
        { name: "Azure Backup", description: "Cloud-based backup for disaster recovery." },
        { name: "Azure Bastion", description: "Secure RDP/SSH access to VMs." }
    ];

    // Generate Table Rows
    const tableBody = document.getElementById("services-table");

    services.forEach(service => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${service.name}</td><td>${service.description}</td>`;
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
