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
