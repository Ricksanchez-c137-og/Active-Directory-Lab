// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// Dynamic Content Loader
function loadContent(topic) {
    const content = document.getElementById("content");

    const topics = {
        azure: {
            title: "Microsoft Azure - Cloud Computing",
            description: "Learn about cloud computing, virtual machines, networking, and deploying applications on Microsoft's cloud platform."
        },
        bash: {
            title: "Bash Scripting - Automate Everything",
            description: "Master shell scripting for automation, security, and penetration testing in Linux environments."
        },
        c: {
            title: "C Programming - The Mother of All Languages",
            description: "Understand the fundamentals of C and its role in cybersecurity, exploit development, and operating system programming."
        },
        git: {
            title: "Git & GitHub - Version Control",
            description: "Learn Git for source code management and GitHub for collaboration on open-source projects."
        },
        linux: {
            title: "Linux - The Hacker's OS",
            description: "Get familiar with Linux commands, security configurations, and ethical hacking tools."
        },
        networking: {
            title: "Networking - The Backbone of the Internet",
            description: "Study TCP/IP, firewalls, proxies, VPNs, and networking fundamentals used in cybersecurity."
        },
        powershell: {
            title: "PowerShell - Windows Automation",
            description: "Explore PowerShell scripting for Windows system administration and penetration testing."
        },
        reverse_engineering: {
            title: "Reverse Engineering - Understanding Malware",
            description: "Learn how to analyze binaries, disassemble code, and understand malware behavior."
        },
        siem: {
            title: "SIEM & Security Monitoring",
            description: "Get into Security Information and Event Management (SIEM) to detect and respond to cyber threats."
        }
    };

    if (topics[topic]) {
        content.innerHTML = `<h2>${topics[topic].title}</h2><p>${topics[topic].description}</p>`;
    } else {
        content.innerHTML = "<h2>Error</h2><p>Topic not found.</p>";
    }
}
