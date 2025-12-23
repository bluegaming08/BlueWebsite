// Elements
const startBtn = document.getElementById("startBtn");
const logos = document.getElementById("logos");
const gamesIcon = document.getElementById("gamesIcon");
const center = document.getElementById("centerContent");
const tabs = document.getElementById("topTabs");
const tooltip = document.getElementById("tooltip");
const statsIcon = document.getElementById("statsIcon");
const statsOverlay = document.getElementById("statsOverlay");
const clickSound = document.getElementById("clickSound");

const mainTab = document.getElementById("mainProjects");
const sideTab = document.getElementById("sideProjects");
const tabUnderline = document.getElementById("tabUnderline");

const discordIcon = document.getElementById("discordIcon");
const xIcon = document.getElementById("xIcon");

function updateUnderline(tab) {
  const rect = tab.getBoundingClientRect();
  const parentRect = tab.parentElement.getBoundingClientRect();
  tabUnderline.style.left = (rect.left - parentRect.left) + "px";
  tabUnderline.style.width = rect.width + "px";
}

mainTab.addEventListener("click", () => updateUnderline(mainTab));
sideTab.addEventListener("click", () => updateUnderline(sideTab));

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

startBtn.addEventListener("click", () => {
  playClick();
  startBtn.classList.add("fade-out");
  gamesIcon.classList.add("fade-out");
  statsIcon.classList.add("fade-out");
  setTimeout(() => logos.classList.add("show"), 400);
});

gamesIcon.addEventListener("click", () => {
  playClick();
  center.classList.add("fade-all");
  setTimeout(() => tabs.classList.add("show"), 500);
});

statsIcon.addEventListener("click", () => {
  playClick();
  center.classList.add("fade-all");
  setTimeout(() => statsOverlay.classList.add("show"), 400);
});

gamesIcon.addEventListener("mouseenter", () => {
  tooltip.textContent = "My Projects (still in works)";
  tooltip.classList.add("show");
});
gamesIcon.addEventListener("mouseleave", () => tooltip.classList.remove("show"));
gamesIcon.addEventListener("mousemove", e => {
  tooltip.style.left = e.clientX + 18 + "px";
  tooltip.style.top = e.clientY + 18 + "px";
});

statsIcon.addEventListener("mouseenter", () => {
  tooltip.textContent = "See Website Statistics";
  tooltip.classList.add("show");
});
statsIcon.addEventListener("mouseleave", () => tooltip.classList.remove("show"));
statsIcon.addEventListener("mousemove", e => {
  tooltip.style.left = e.clientX + 18 + "px";
  tooltip.style.top = e.clientY + 18 + "px";
});

discordIcon.addEventListener("click", () => {
  window.open("https://discord.gg/DmEPAb3NFU", "_blank");
});
xIcon.addEventListener("click", () => {
  window.open("https://x.com/bluewuztaken", "_blank");
});
