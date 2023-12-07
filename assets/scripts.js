document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggleButton = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");
    const arrowIcon = item.querySelector(".arrow-icon");
    const header = item.querySelector(".faq-header"); // Use .faq-header

    // Modify the click event listener
    header.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-content").style.maxHeight = "0px";
          otherItem.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
        }
      });

      if (content.style.maxHeight !== "1000px") {
        content.style.maxHeight = "1000px";
        arrowIcon.style.transform = "rotate(180deg)";
    } else {
        content.style.maxHeight = "0px";
        arrowIcon.style.transform = "rotate(0deg)";
    }
    });
  });

/* Video */
const video = document.getElementById('my-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    video.controls = true;
  } else {
    video.pause();
    video.controls = false;
  }
});

video.addEventListener('play', () => {
  playButton.style.display = 'none';
});

video.addEventListener('pause', () => {
  playButton.style.display = 'block';
});
});