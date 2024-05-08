document.addEventListener('DOMContentLoaded', function() {
    let navButton = document.getElementById('btn');
    const fadeInElements = document.querySelectorAll(".fade-in-top");
    const fadeInElementsLeft = document.querySelectorAll(".fade-in-left");
    const fadeInElementsRight = document.querySelectorAll(".fade-in-right");
  
  
      const button = document.getElementById("btn");
      const menuToggleHidden = document.querySelector(".menu_toggle_hidden");
    
      button.addEventListener("click", function() {
        menuToggleHidden.classList.toggle("menu_toggle_block");
        menuToggleHidden.classList.toggle("menu_toggle_hidden");
        console.log('Clicked');
      });
  
    
  
    // Function to check fade in for elements
    function checkFadeIn(elements) {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const triggerHeight = window.innerHeight * 0.8; // Adjust the percentage as needed
  
        if (rect.top < triggerHeight && rect.bottom >= 0) {
          element.classList.add("in-view");
        } else {
          element.classList.remove("in-view");
        }
      });
    }
  
    // Event listeners for scroll and resize
    window.addEventListener("scroll", function() {
      checkFadeIn(fadeInElements);
      checkFadeIn(fadeInElementsLeft);
    });
  
    window.addEventListener("resize", function() {
      checkFadeIn(fadeInElements);
      checkFadeIn(fadeInElementsLeft);
    });
  
    window.addEventListener("resize", function() {
      checkFadeIn(fadeInElements);
      checkFadeIn(fadeInElementsRight);
    });
  
    // Initial check when the page is loaded
    checkFadeIn(fadeInElements);
    checkFadeIn(fadeInElementsLeft);
    checkFadeIn(fadeInElementsRight);
  });
  