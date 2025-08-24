const chars = document.querySelectorAll(".char");
let currentChar = 0;

function showChar(index) {
  chars.forEach((c, i) => {
    c.classList.toggle("active", i === index);
  });
}

// attach listeners to all arrows
document.querySelectorAll(".arrow.left").forEach(btn => {
  btn.addEventListener("click", () => {
    currentChar = (currentChar - 1 + chars.length) % chars.length;
    showChar(currentChar);
  });
});

document.querySelectorAll(".arrow.right").forEach(btn => {
  btn.addEventListener("click", () => {
    currentChar = (currentChar + 1) % chars.length;
    showChar(currentChar);
  });
});

// initial
showChar(currentChar);
