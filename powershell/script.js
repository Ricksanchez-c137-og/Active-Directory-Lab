document.addEventListener("DOMContentLoaded", () => {
    const commandsData = [
      { command: "Get-Process", description: "Lists all running processes on the system." },
      { command: "Get-Service", description: "Displays all services or a particular service." },
      { command: "Get-ChildItem", description: "Lists files and directories (similar to 'dir' or 'ls')." },
      { command: "Set-ExecutionPolicy", description: "Controls the security level for script execution." },
      { command: "Invoke-WebRequest", description: "Performs web requests to a URL (useful for scraping or testing sites)." },
      { command: "Test-Connection", description: "Pings a host to check network connectivity (similar to 'ping' command)." },
      { command: "Get-EventLog", description: "Retrieves event logs from the local or remote machines." },
      { command: "Import-Module", description: "Loads a module into the current PowerShell session." },
      { command: "New-Item", description: "Creates a new file, folder, or registry key." },
      { command: "Stop-Process", description: "Terminates running processes by name or process ID." }
    ];
  
    const tableBody = document.getElementById("commands-table");
  
    // Dynamically populate the table
    commandsData.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.command}</td>
        <td>${item.description}</td>
      `;
      tableBody.appendChild(row);
    });
  
    // Optional: Add fade-in or scroll reveal effect for sections
    const fadeInSections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });
  
    fadeInSections.forEach(section => {
      section.style.opacity = 0;
      observer.observe(section);
    });
  });
  