const copyButton = document.getElementById("copyButton");

if (copyButton) {
    copyButton.addEventListener("click", () => {
        const codeAsText = "emilulinjohansson.arbete@gmail.com";
        navigator.clipboard.writeText(decodeURIComponent(codeAsText));
        window.alert("Email copied to clipboard!");
    });
}

const bg = document.querySelector(".bg");
const bgLayer = document.querySelector(".bg-layer");

if (bg && bgLayer) {
    window.addEventListener("pointermove", (e) => {
        const rect = bg.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

        const moveX = offsetX * 40;
        const moveY = offsetY * 40;

        bgLayer.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.12)`;
    });
}

const hero = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');

if (hero) {
    new IntersectionObserver(([entry]) => {
        navbar.classList.toggle('show-brand', !entry.isIntersecting);
    }, { rootMargin: '-120px 0px 0px 0px' }).observe(hero);
}


const cards = document.querySelectorAll('.projectdisplay');

const cardObserver = new IntersectionObserver((entries, observer) => {
    entries
        .filter(entry => entry.isIntersecting)
        .forEach((entry, i) => {
            entry.target.style.setProperty('--delay', `${i * 0.15}s`);
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        });
}, { threshold: 0.15 });

cards.forEach(card => cardObserver.observe(card));