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

/*1st Video */
var banner_Video = document.getElementById('bannerVideo');
var unmuteButton = document.getElementById('unmuteButton');
var unmuteImage = unmuteButton.querySelector('img');

unmuteButton.addEventListener('click', function() {
  if (banner_Video.muted) {
    banner_Video.muted = false;
    banner_Video.play();
    unmuteImage.style.opacity = '0';
    // Change the button image to a 'mute' icon if you have one
    // unmuteButton.querySelector('img').src = 'assets/mute-icon.png';
  } else {
    banner_Video.muted = true;
    unmuteImage.style.opacity = '.75';
    // Change the button image back to the 'unmute' icon
    // unmuteButton.querySelector('img').src = 'assets/unmute-icon.png';
  }
});
var ctaButtons = document.querySelectorAll('.button-cta');
var seeDemoButton = document.getElementById('see-demo');

ctaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        ttq.track('Buy Now', {
            content_id: 'get_it_now_all',
            content_name: 'All Buy Now Buttons'
            // Add more parameters if needed
        });
    });
});
seeDemoButton.addEventListener('click', function() {
  ttq.track('See Demo', {
      content_id: 'see_demo',
      content_name: 'See Demo Button'
      // Add more parameters if needed
  });
});

});