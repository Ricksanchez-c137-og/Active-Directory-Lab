document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect for sections
    const fadeInElements = document.querySelectorAll(".fade-in");
    
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Download button effect
    const downloadBtn = document.querySelector(".download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#ff5722";
            this.style.transform = "scale(1.1)";
        });
        
        downloadBtn.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#007bff";
            this.style.transform = "scale(1)";
        });
    }
});
