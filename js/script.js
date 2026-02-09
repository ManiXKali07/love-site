/* ---------- PAGE NAVIGATION ---------- */
function goPage(page) {
  window.location.href = page;
}

/* ---------- NO BUTTON MOVEMENT ---------- */
function moveNo() {
  const btn = document.getElementById("noBtn");
  if (!btn) return;

  btn.style.position = "absolute";

  const x = Math.random() * 70 + 10;
  const y = Math.random() * 70 + 10;

  btn.style.left = x + "%";
  btn.style.top = y + "%";
}

/* ---------- MEMORY SLIDER (PAGE 3) ---------- */
let index = 0;

const memories = [
  { src: "images/slide1.jpg", text: "Our first meet" },
  { src: "images/slide2.jpg", text: "First selfie" },
  { src: "images/slide3.jpg", text: "Our love memory" },
  { src: "images/slide4.jpg", text: "My 💕" },
  { src: "images/slide5.jpg", text: "My 🫂 soul • My heartbeat 🫀" }
];

function nextMoment() {
  const img = document.getElementById("momentImg");
  const caption = document.getElementById("caption");

  if (!img || !caption) return;

  index++;

  if (index < memories.length) {
    img.style.animation = "none";
    img.offsetHeight; // reset animation
    img.style.animation = "slideIn 0.6s ease";

    img.src = memories[index].src;
    caption.innerText = memories[index].text;
  } else {
    window.location.href = "page4.html";
  }
}
function submitLetter() {
  const letterBox = document.getElementById("letter");
  const error = document.getElementById("error");
  const finalLetter = document.getElementById("finalLetter");

  const text = letterBox.value.trim();

  if (text === "") {
    error.innerText = "Please write your love first 💕";
    return;
  }

  error.innerText = "";
  finalLetter.innerText = "";

  let index = 0;

  const typingInterval = setInterval(() => {
    finalLetter.innerText += text.charAt(index);
    index++;

    if (index >= text.length) {
      clearInterval(typingInterval);

      // Redirect after typing finishes
      setTimeout(() => {
        window.location.href = "page6.html";
      }, 2000);
    }
  }, 60); // typing speed
}
