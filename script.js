const video = document.getElementById("bg-video");
const navItems = document.querySelectorAll(".bottom-links li[data-index]");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const videos = [
  "insight.mp4",
  "festivals.mp4",
  "foods.mp4",
  "dances.mp4",
  "music.mp4"
];

let currentIndex = 0;

function switchVideo(index) {
  currentIndex = index;
  video.src = videos[index];
  video.play();

  navItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    switchVideo(index);
  });
});

nextBtn.addEventListener("click", () => {
  const nextIndex = (currentIndex + 1) % videos.length;
  switchVideo(nextIndex);
});

prevBtn.addEventListener("click", () => {
  const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
  switchVideo(prevIndex);
});

video.addEventListener("ended", () => {
  const nextIndex = (currentIndex + 1) % videos.length;
  switchVideo(nextIndex);
});
const destinations = [
  { name: "DELHI", image: "delhi.png", info: "Explore rich Mughal heritage and buzzing markets in the heart of India." },
  { name: "RAJASTHAN", image: "rajasthan.jpg", info: "Land of kings, forts, desert safaris, and colorful festivals." },
  { name: "KERALA", image: "kerela.jpg", info: "Backwaters, beaches, and Ayurvedic bliss in God’s own country." },
  { name: "GOA", image: "goa.jpg", info: "Beaches, parties, and Portuguese architecture." }
];

let currentDestIndex = 0;
const destinationSection = document.querySelector(".destinations");
const stateName = document.getElementById("stateName");
const infoText = document.querySelector(".description");
const infoBtn = document.querySelector(".info-icon");
const prevDest = document.getElementById("prevDest");
const nextDest = document.getElementById("nextDest");

function showDestination(index) {
  const dest = destinations[index];
  destinationSection.style.backgroundImage = `url(${dest.image})`;
  stateName.textContent = dest.name;
  infoText.textContent = dest.info;
}

prevDest.addEventListener("click", () => {
  currentDestIndex = (currentDestIndex - 1 + destinations.length) % destinations.length;
  showDestination(currentDestIndex);
});

nextDest.addEventListener("click", () => {
  currentDestIndex = (currentDestIndex + 1) % destinations.length;
  showDestination(currentDestIndex);
});

showDestination(currentDestIndex);
