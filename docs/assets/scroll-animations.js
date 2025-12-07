// Simple IntersectionObserver-based scroll reveal
(function () {
  if (!("IntersectionObserver" in window)) {
    // Fallback: just show everything
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
