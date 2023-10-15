const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.remove("hidden");
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(ele => observer.observe(ele));