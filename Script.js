const depth = document.getElementById("depth");
const depthName = document.getElementById("depthName");

const depthNickname = document.getElementById("depthNickname");
const facts = document.getElementById("facts");

const pixelsPerMeter = 100;

window.addEventListener("scroll", () => {
    const depthMeters = Math.floor(window.scrollY / pixelsPerMeter);
    depth.textContent = `${depthMeters} METERS DEEP`;

if (depthMeters < 200) {
    depthName.textContent = "Epipealagic Zone"
    depthNickname.textContent = "The Sunlit Zone"

    facts.textContent = "The ocean's surface layer is called the sunlit zone. \
    Since water rapidly absorbs light, sunlight can reach only the upper roughly 200 meters \
    (about 656 feet)."
}
else if (depthMeters < 1000){
    depthName.textContent = "Mesopelagic Zone"
    depthNickname.textContent = "The Twilight Zone"

    facts.textContent = "This dim layer lies below the sunlit waters, where only faint, filtered light remains.\
    It extends from about 200 to 1,000 meters, too dark for photosynthesis but still home to many migratory animals."
}
else if (depthMeters < 4000){
    depthName.textContent = "Bathypelagic Zone"
    depthNickname.textContent = "The Midnight Zone"

    facts.textContent = "Completely lightless, this zone spans roughly 1,000 to 4,000 meters.\
     Creatures here rely on bioluminescence and adapted senses to survive in cold, high-pressure darkness."
}
else if (depthMeters < 6000){
    depthName.textContent = "Abyssopelagic Zone"
    depthNickname.textContent = "The Abyssal Zone"

    facts.textContent = "Found from about 4,000 to 6,000 meters deep, this region is near-freezing and pitch-black, with crushing pressure.\
    Life persists sparsely on the deep seafloor."
}
else if (depthMeters < 11000){
    depthName.textContent = "Hadalpelagic Zone"
    depthNickname.textContent = "The Trenches"

    facts.textContent = "This extreme realm includes trenches and deep channels below 6,000 meters.\
     It is the most pressurized part of the ocean, where only highly specialized organisms can endure."
}
});
