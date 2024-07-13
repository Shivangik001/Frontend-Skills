
const btn = document.querySelector(".copy-btn");

btn.addEventListener("click", function () {
    copyContent();
})
const text = document.querySelector(".copy-link").innerHTML;
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text);
        alert("Content is copied to the clip-board");
    } catch (err) {
        console.error("Failed to copy:" + err);
    }
}
