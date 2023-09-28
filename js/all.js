// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      autoplay: {
      delay: 3000,
      },

      // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    });
    
});



// ToTop BTN
const backToTopBtn = document.getElementById('backToTopBtn');

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

// ToTop BTN 換顏色
// Function to change button color when scrolling
function updateButtonColor() {
  if (window.scrollY > 1800) {
    backToTopBtn.classList.remove('bg-blue-300', 'text-white');
    backToTopBtn.classList.add('bg-white/50', 'text-white'); // Replace with desired color classes
  } else {
    backToTopBtn.classList.remove('bg-white/50', 'text-white');
    backToTopBtn.classList.add('bg-blue-300', 'text-white'); // Replace with initial color classes
  }
}

// Call the function on page load and when the user scrolls
updateButtonColor();
window.addEventListener('scroll', updateButtonColor);

// 顯示狀態
// Function to show/hide the button with a transition effect based on scroll position
function toggleButtonVisibility() {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove('hidden');
    backToTopBtn.classList.add('opacity-100');
  } else {
    backToTopBtn.classList.remove('opacity-100');
    // backToTopBtn.classList.add('hidden');
  }
}

// Call the function on page load and when the user scrolls
toggleButtonVisibility();
window.addEventListener('scroll', toggleButtonVisibility);