document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4, // Adjust this value as needed
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        if (entry.target.classList.contains("about-section") || entry.target.classList.contains("services-section")) {
          entry.target.classList.add("animate-on-scroll", "up");
        }
        if (entry.target.classList.contains("contact-section")) {
          entry.target.classList.add("animate-on-scroll", "appear");
        }
        observer.unobserve(entry.target); // Stop observing after the animation is applied
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(".about-section, .services-section, .contact-section");
  elementsToAnimate.forEach((element) => {
    element.classList.add("hidden"); // Add hidden class initially
    observer.observe(element);
  });
});
