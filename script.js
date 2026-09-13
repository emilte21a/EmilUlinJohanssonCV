const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", (e) => {
    const codeAsText = "emilulinjohansson.arbete@gmail.com";
    navigator.clipboard.writeText(decodeURIComponent(codeAsText));
});

