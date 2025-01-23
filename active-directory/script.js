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
            // Add more section contents as needed
        };

        content.innerHTML = sectionContent[section] || 
            '<p>Section content not available. Please select another topic.</p>';
    }
});