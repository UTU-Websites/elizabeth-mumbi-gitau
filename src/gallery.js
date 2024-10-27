document.addEventListener('DOMContentLoaded', function() {
  var spinnerContainer = document.getElementById('spinner-container');
  var content = document.getElementById('content');

  window.addEventListener('load', function() {
    spinnerContainer.style.display = 'none';
    content.style.display = 'block';
  });
});


// JavaScript for Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.gallery img'); // Adjusted selector for gallery images
    const slideshowToggle = document.getElementById('slideshow-toggle');
    let currentImageIndex;
    let slideshowInterval;
    let isPlaying = false;

    // Open the lightbox with the selected image
    function openLightbox(index) {
        lightbox.classList.add('active');
        lightboxImg.src = images[index].src;
        currentImageIndex = index;
        updateToggleButton();
    }

    // Close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        stopSlideshow();
    }

    // Show the next image
    function showNextImage() {
        fadeOut(lightboxImg, () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            lightboxImg.src = images[currentImageIndex].src;
            fadeIn(lightboxImg);
        });
    }

    // Show the previous image
    function showPrevImage() {
        fadeOut(lightboxImg, () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentImageIndex].src;
            fadeIn(lightboxImg);
        });
    }

    // Fade out effect
    function fadeOut(element, callback) {
        element.style.opacity = 0; // Start with invisible
        setTimeout(() => {
            callback(); // Execute the callback function after the opacity transition
        }, 300); // Match this duration with your CSS transition duration
    }

    // Fade in effect
    function fadeIn(element) {
        element.style.opacity = 1; // Make it fully visible
    }

    // Start the slideshow
    function startSlideshow() {
        stopSlideshow();
        if (isPlaying) return;
        isPlaying = true;
        slideshowToggle.textContent = "Pause";
        slideshowInterval = setInterval(showNextImage, 7000); // Change image every 7 seconds
    }

    // Stop the slideshow
    function stopSlideshow() {
        clearInterval(slideshowInterval);
        isPlaying = false;
        slideshowToggle.textContent = "Play";
    }

    // Toggle the slideshow on button click
    function toggleSlideshow() {
        if (isPlaying) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    }

    // Update the slideshow toggle button text
    function updateToggleButton() {
        slideshowToggle.textContent = isPlaying ? "Pause" : "Play";
    }

    // Add click and touch event listeners to images
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
        
        // Prevent the default context menu on long-press and drag
        img.addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent right-click
        img.addEventListener('dragstart', (e) => e.preventDefault()); // Prevent dragging
        img.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch actions
            openLightbox(index); // Open lightbox on touch
        });
    });

    // Add event listeners for controls
    document.querySelector('.close').addEventListener('click', closeLightbox);
    document.querySelector('.next').addEventListener('click', showNextImage);
    document.querySelector('.prev').addEventListener('click', showPrevImage);
    slideshowToggle.addEventListener('click', toggleSlideshow);

    // Close lightbox on clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Prevent right-click and touch context menu in lightbox
    if (lightbox) { // Check if lightbox exists
        lightbox.addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent right-click
        lightbox.addEventListener('dragstart', (e) => e.preventDefault()); // Prevent dragging on lightbox image
    }
    
    // Touch handling for preventing long press
    let touchStartY = 0;
    let touchEndY = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });

    lightbox.addEventListener('touchmove', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        const touchDiff = touchStartY - touchEndY;

        // Allow scrolling if the user is not trying to open the lightbox
        if (Math.abs(touchDiff) > 10) { // Adjust the threshold as needed
            e.stopPropagation(); // Stop event propagation to prevent opening lightbox
        }
    });
});


