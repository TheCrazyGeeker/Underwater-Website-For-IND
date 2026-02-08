const toggleBtn = document.getElementById('themeToggle');

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  toggleBtn.textContent = "☀";
}

// Theme toggle button
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  toggleBtn.textContent = isLight ? "☀" : "⏾";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const scrollBox = document.getElementById("animationScroll");

// elements to update
const depth = document.getElementById("depth");
const depthName = document.getElementById("depthName");
const depthNickname = document.getElementById("depthNickname");
const facts = document.getElementById("facts");

const pixelsPerMeter = 100;


if (scrollBox) {
  scrollBox.addEventListener("scroll", () => {
    const fill = document.getElementById("progressFill");
    const depthMeters = Math.floor(scrollBox.scrollTop / pixelsPerMeter);
    depth.textContent = `${depthMeters} METERS DEEP`;
    progress = (depthMeters / 10894) * 100;
    progressBar.style.height = progress + "%";


    if (depthMeters < 200) {
      depthName.textContent = "Epipelagic Zone";
      depthNickname.textContent = "The Sunlit Zone";
      depthNickname.style.color = "#ffffff";
      facts.textContent = "The ocean's surface layer where sunlight still penetrates, down to about 200 meters.";
    } else if (depthMeters < 1000) {
      depthName.textContent = "Mesopelagic Zone";
      depthNickname.textContent = "The Twilight Zone";
      depthNickname.style.color = "#aaaaff";
      facts.textContent = "Only faint, filtered light remains between 200 and 1,000 meters.";
    } else if (depthMeters < 4000) {
      depthName.textContent = "Bathypelagic Zone";
      depthNickname.textContent = "The Midnight Zone";
      depthNickname.style.color = "#7777ff";
      facts.textContent = "Completely dark between 1,000 and 4,000 meters.";
    } else if (depthMeters < 6000) {
      depthName.textContent = "Abyssopelagic Zone";
      depthNickname.textContent = "The Abyssal Zone";
      depthNickname.style.color = "#5555ff";
      facts.textContent = "Near-freezing temperatures and crushing pressure from 4,000–6,000 meters.";
    } else {
      depthName.textContent = "Hadalpelagic Zone";
      depthNickname.textContent = "The Trenches";
      depthNickname.style.color = "#0000ff";
      facts.textContent = "Below 6,000 meters extreme pressure and the deepest ocean trenches on Earth.";
    }
  });
} else {
  console.warn("animationScroll element not found");
}

// progress bar click to scroll
const progressContainer = document.getElementById("progressBarContainer");
const animationScroll = document.getElementById("animationScroll");

progressContainer.addEventListener("click", (event) => {
  const rect = progressContainer.getBoundingClientRect();
  const y = event.clientY - rect.top;          // click position inside bar
  const percent = y / rect.height;             // 0–1 range

  const maxScroll = animationScroll.scrollHeight - animationScroll.clientHeight;
  const targetY = percent * maxScroll;         // convert % to scroll distance

  animationScroll.scrollTo({
    top: targetY,
    behavior: "smooth"
  });
});




















