document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.getElementById('content');

    sidebar.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'A') {
            event.preventDefault();
            const section = target.dataset.section;
            loadSection(section);
        }
    });

    function loadSection(section) {
        const sectionContent = {
            'active-directory': `
                <h2>Active Directory Overview</h2>
                <p>Active Directory is a directory service developed by Microsoft for Windows domain networks.</p>
                <p>It is the best solution or companies to manage a huge number of users</p>
            `,
            'windows-server': `
                <h2>Windows Server Fundamentals</h2>
                <p>Windows Server provides robust enterprise-level network services and infrastructure management.</p>
            `,
            'group-policy': `
                <h2>Group Policy Management</h2>
                <p>Group Policy is a feature of the Microsoft Windows NT family of operating systems that controls the working environment of user accounts and computer accounts.</p>
            `,
            'powershell': `
                <h2>PowerShell Scripting</h2>
                <p>PowerShell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language.</p>
            `,
            'dns': `
                <h2>DNS Management</h2>
                <p>The Domain Name System (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network.</p>
            `,
        };

        content.innerHTML = sectionContent[section] || 
            '<p>Section content not available. Please select another topic.</p>';
    }
});