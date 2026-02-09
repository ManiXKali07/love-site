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
  { src: "images/slide5.jpg", text: "My 🫂 soul • My heartbeat 🫀 • My 🫂🫶🏻" }
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

/* ---------- LOVE LETTER LOGIC (PAGE 5) ---------- */
let submitCount = 0;

function submitLetter() {
  const letterBox = document.getElementById("letter");
  const error = document.getElementById("error");
  const finalText = document.getElementById("finalLetter");

  if (!letterBox || !error || !finalText) return;

  submitCount++;

  if (submitCount === 1) {
    error.innerText = "Oops 😅 Try again with more love!";
    finalText.innerText = "";
  } else {
    error.innerText = "";
    finalText.innerText = letterBox.value;
  }
}
