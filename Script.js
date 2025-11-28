const depthText = document.getElementById("depthText");

const pixelsPerMeter = 10;

window.addEventListener("scroll", () => {
    const depthMeters = Math.floor(window.scrollY / pixelsPerMeter);
    depthText.textContent = `${depthMeters} METERS DEEP`;
});
