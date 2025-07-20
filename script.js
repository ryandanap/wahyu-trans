// Preload critical images
function preloadImages() {
  const images = [
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize AOS with optimized settings
function initAOS() {
  AOS.init({
    duration: 600, // Shorter duration for faster animations
    easing: "ease-out",
    once: true, // Only animate once
    offset: 50, // Smaller offset to trigger earlier
    delay: 0, // No delay by default
    disable: "mobile", // Disable on mobile for better performance
  });
}

// Loading animation
document.addEventListener("DOMContentLoaded", function () {
  preloadImages();

  // Hide loader after a short time
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      // Initialize AOS after loader is hidden
      initAOS();
    }, 300);
  }, 600); // Show loader for less time
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.getElementById("nav");
mobileMenuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
  mobileMenuBtn.innerHTML = nav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Testimonial slider functionality
const testimonialContainer = document.getElementById("testimonialContainer");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let currentIndex = 0;
const totalSlides = testimonialDots.length;

// Function to update the slider position
function updateSlider(index) {
  // Update the transform to show the correct slide
  testimonialContainer.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  // Update current index
  currentIndex = index;
}

// Dot navigation
testimonialDots.forEach((dot) => {
  dot.addEventListener("click", function () {
    const index = parseInt(this.getAttribute("data-index"));
    updateSlider(index);
  });
});

// Touch swipe functionality
let touchStartX = 0;
let touchEndX = 0;

testimonialContainer.addEventListener(
  "touchstart",
  function (e) {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true }
);

testimonialContainer.addEventListener(
  "touchend",
  function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  },
  { passive: true }
);

function handleSwipe() {
  const swipeThreshold = 50; // Minimum distance to be considered a swipe

  if (touchEndX < touchStartX - swipeThreshold) {
    // Swipe left - show next slide
    let newIndex = currentIndex + 1;
    if (newIndex >= totalSlides) newIndex = 0;
    updateSlider(newIndex);
  }

  if (touchEndX > touchStartX + swipeThreshold) {
    // Swipe right - show previous slide
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = totalSlides - 1;
    updateSlider(newIndex);
  }
}

// Mouse drag functionality for desktop
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;

testimonialContainer.addEventListener("mousedown", function (e) {
  isDragging = true;
  startPos = e.clientX;
  testimonialContainer.style.cursor = "grabbing";
  testimonialContainer.style.transition = "none";
  e.preventDefault();
});

window.addEventListener("mouseup", function () {
  if (!isDragging) return;

  isDragging = false;
  testimonialContainer.style.cursor = "grab";
  testimonialContainer.style.transition = "transform 0.5s ease";

  const movedBy = startPos - currentTranslate;

  if (movedBy > 100) {
    // Moved left significantly - show next slide
    let newIndex = currentIndex + 1;
    if (newIndex >= totalSlides) newIndex = 0;
    updateSlider(newIndex);
  } else if (movedBy < -100) {
    // Moved right significantly - show previous slide
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = totalSlides - 1;
    updateSlider(newIndex);
  } else {
    // Not moved enough - stay on current slide
    updateSlider(currentIndex);
  }
});

window.addEventListener("mousemove", function (e) {
  if (!isDragging) return;

  currentTranslate = e.clientX;
  const diff = startPos - currentTranslate;
  const translateX =
    -(currentIndex * 100) - (diff / testimonialContainer.offsetWidth) * 100;

  // Limit the drag to the next/previous slide only
  if (
    translateX > -((currentIndex + 1) * 100) &&
    translateX < -(currentIndex - 1) * 100
  ) {
    testimonialContainer.style.transform = `translateX(${translateX}%)`;
  }
});

// Auto-advance the slider every 5 seconds
let sliderInterval = setInterval(function () {
  let newIndex = currentIndex + 1;
  if (newIndex >= totalSlides) newIndex = 0;
  updateSlider(newIndex);
}, 5000);

// Pause auto-advance when user interacts with the slider
testimonialContainer.addEventListener("mouseenter", function () {
  clearInterval(sliderInterval);
});

testimonialContainer.addEventListener("mouseleave", function () {
  sliderInterval = setInterval(function () {
    let newIndex = currentIndex + 1;
    if (newIndex >= totalSlides) newIndex = 0;
    updateSlider(newIndex);
  }, 5000);
});

// Form submission
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;

  if (!name || !email || !phone || !service) {
    alert("Mohon lengkapi semua field yang diperlukan.");
    return;
  }

  // Show success message (in real app, you'd send this to a server)
  alert(
    "Terima kasih! Permintaan pemesanan Anda telah diterima. Tim kami akan segera menghubungi Anda."
  );
  bookingForm.reset();
});

// Adjust header padding for fixed header
function adjustHeaderPadding() {
  const headerHeight = document.querySelector("header").offsetHeight;
  document.body.style.paddingTop = headerHeight + "px";
}

window.addEventListener("load", adjustHeaderPadding);
window.addEventListener("resize", adjustHeaderPadding);

// Keyboard navigation for testimonials
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = totalSlides - 1;
    updateSlider(newIndex);
  } else if (e.key === "ArrowRight") {
    let newIndex = currentIndex + 1;
    if (newIndex >= totalSlides) newIndex = 0;
    updateSlider(newIndex);
  }
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'961ee8cf66972df9',t:'MTc1Mjk3NzI5My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
