// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Initialize AOS with fixed settings to ensure visibility
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    disable: false,
    startEvent: "DOMContentLoaded",
    offset: 120,
  });

  // Force AOS refresh after a short delay to ensure all elements are visible
  setTimeout(function () {
    AOS.refresh();
  }, 500);

  // Loader
  window.addEventListener("load", function () {
    setTimeout(function () {
      const loader = document.getElementById("loader");
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.style.display = "none";

        // Animate hero content after loader is gone
        gsap.to("#heroContent", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      }, 300);
    }, 600);
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("nav");

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu
      nav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");

      // Scroll to section
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 70,
          },
          ease: "power2.inOut",
        });
      }
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

    // Show success message
    alert(
      "Terima kasih! Permintaan pemesanan Anda telah diterima. Tim kami akan segera menghubungi Anda."
    );

    // Reset form
    bookingForm.reset();
  });

  // GSAP Animations

  // Hero Parallax Effect
  gsap.to("#parallaxBg", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 10,
    ease: "none",
  });

  gsap.to("#parallaxCircle", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 150,
    x: -50,
    rotation: 180,
    ease: "none",
  });

  gsap.to("#parallaxSquare", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: -100,
    x: 50,
    rotation: -180,
    ease: "none",
  });

  // Section Headers Animation - Ensure they're visible
  gsap.utils.toArray(".section-header").forEach((header) => {
    gsap.set(header, { opacity: 1, y: 0 });

    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 70,
      duration: 0.8,
      onComplete: function () {
        gsap.set(header, { clearProps: "all" });
      },
    });
  });

  // Smooth scroll for all anchor links with class scroll-link
  document.querySelectorAll(".scroll-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 70,
          },
          ease: "power2.inOut",
        });
      }
    });
  });

  // Detect touch devices and optimize animations
  if ("ontouchstart" in window) {
    document.body.classList.add("touch-device");

    // Optimize animations for mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Simpler animations for mobile
      ScrollTrigger.config({
        limitCallbacks: true,
      });
    }
  }

  // Make sure all section headers are visible
  document.querySelectorAll(".section-header h2").forEach((header) => {
    header.style.opacity = "1";
  });
});
