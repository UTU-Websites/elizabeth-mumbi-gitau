document.addEventListener('DOMContentLoaded', function() {
  var spinnerContainer = document.getElementById('spinner-container');
  var content = document.getElementById('content');

  window.addEventListener('load', function() {
    spinnerContainer.style.display = 'none';
    content.style.display = 'block';
  });
});

let lastScrollPosition = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    navbar.style.top = '-80px'; // Adjust for navbar height
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }

  lastScrollPosition = currentScrollPosition;
});
//img-dog
document.querySelectorAll('img').forEach((img) => {
  img.oncontextmenu = () => false; // Disable right-click context menu
  img.ondragstart = () => false;   // Disable drag

  // Prevent long-press context menu on mobile
  img.addEventListener('touchstart', (e) => {
      e.preventDefault(); // Prevent long press without affecting swipe
  });
});


//alert toast
document.addEventListener('DOMContentLoaded', function () {
  var pbnjToast = new bootstrap.Toast(document.getElementById('pbnjToast'), {
    delay: 10000 //seconds
  });
  pbnjToast.show();
});

//important notice
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Close all other sections
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this) {
        coll[j].classList.remove("active");
        coll[j].nextElementSibling.style.maxHeight = null;
      }
    }
    
    // Toggle the current section
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
});

document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".ayaBtn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var parentLi = this.closest('.aya-topic', 'p'); 
      var dots = parentLi.querySelector(".dots");
      var moreText = parentLi.querySelector(".more");
      
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        this.innerHTML = "Read More"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        this.innerHTML = "Read Less"; 
        moreText.style.display = "inline";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var toggleMapButton = document.querySelector(".toggleMap");
  var mapSection = document.querySelector("#collapseWidthExample");

  toggleMapButton.addEventListener("click", function() {
    if (mapSection.style.maxHeight === "0px" || mapSection.style.maxHeight === "") {
      // Expand the section
      mapSection.style.maxHeight = mapSection.scrollHeight + "px";
      this.innerHTML = '<img src="/images/google-map-icon.png" class="map-icon"> Hide Location Maps';
    } else {
      // Collapse the section
      mapSection.style.maxHeight = "0";
      this.innerHTML = '<img src="/images/google-map-icon.png" class="map-icon"> Other Location Maps';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const subheader = document.getElementById('dynamicSubheader');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const newText = entry.target.getAttribute('data-text');
        subheader.textContent = newText;
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
