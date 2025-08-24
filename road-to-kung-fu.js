document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".work-image");
  const showcase = document.querySelector(".showcase");
  const video = document.getElementById("kungFu");

  // Expansion logic
  boxes.forEach(box => {
    box.addEventListener("click", (e) => {
      const isExpanded = box.classList.contains("expanded");

      // Reset all states first
      boxes.forEach(b => b.classList.remove("expanded"));
      showcase.classList.remove("green-expanded", "purple-expanded");

      // Handle pink box (contains video) - both expand and play/pause
      if (box.classList.contains("pink")) {
        const video = box.querySelector("video");
        
        if (isExpanded) {
          // If already expanded, collapse and pause video
          if (video && !video.paused) {
            video.pause();
            console.log("Video paused and pink box collapsed");
          }
          return; // collapse by not adding expanded class back
        } else {
          // If not expanded, expand and play video
          box.classList.add("expanded");
          if (video) {
            video.play().then(() => {
              console.log("Video started playing and pink box expanded");
            }).catch((error) => {
              console.error("Error playing video:", error);
            });
          }
          return; // no special layout needed for pink
        }
      }

      // Handle other boxes (green/purple) - only expansion
      if (isExpanded) return; // collapse if same box clicked

      // Expand new box
      box.classList.add("expanded");

      if (window.innerWidth > 768) {
        if (box.classList.contains("green")) {
          showcase.classList.add("green-expanded");
        } else if (box.classList.contains("purple")) {
          showcase.classList.add("purple-expanded");
        }
      }
    });
  });

  // Click outside to collapse
  document.addEventListener("click", function(e) {
    if (!showcase.contains(e.target)) {
      boxes.forEach(b => b.classList.remove("expanded"));
      showcase.classList.remove("green-expanded", "purple-expanded");
    }
  });

  // Reset on resize
  window.addEventListener("resize", function() {
    if (window.innerWidth <= 768) {
      showcase.classList.remove("green-expanded", "purple-expanded");
    }
  });
});