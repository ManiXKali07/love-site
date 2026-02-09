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

// ---------- LOVE LETTER LOGIC (PAGE 5) ----------
// ---------- PAGE 5 LOVE LETTER (FINAL FIX) ----------
let isFirstTry = true;

function submitLetter() {
  const letter = document.getElementById("letter").value.trim();
  const error = document.getElementById("error");
  const finalLetter = document.getElementById("finalLetter");

  if (isFirstTry) {
    error.innerText = "Oops 😅 Something went wrong, try again ❤️";
    finalLetter.innerText = "";
    isFirstTry = false;
    return;
  }

  if (letter === "") {
    error.innerText = "Please write your love first 💕";
    return;
  }

  error.innerText = "";
  finalLetter.innerText = letter;
}
