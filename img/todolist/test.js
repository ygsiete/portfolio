
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      });

      const hiddenSections = document.querySelectorAll(".hidden-section");
      hiddenSections.forEach((section) => observer.observe(section));

      document.addEventListener("dragstart", function (e) {
        e.preventDefault();
      }); // prevent default drag

      document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navbar_links").classList.toggle("active");
  });
});

//Skills
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-progress");

  bars.forEach(b => b.style.width = "0"); // 保證初始為 0

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const bar = entry.target;
      const num = bar.closest(".skill").querySelector(".skill-num");
      const target = parseInt(bar.dataset.width, 10);

      // 動畫填充
      requestAnimationFrame(() => {
        bar.style.width = target + "%";
      });

      // 百分比數字淡入
      if (num) {
        num.textContent = target + "%";
        num.classList.add("show");
      }

      obs.unobserve(bar);
    });
  }, { threshold: 0.3 });

  bars.forEach(b => io.observe(b));
});
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-progress");

  bars.forEach(b => b.style.width = "0"); // 初始清零

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const bar = entry.target;
      const num = bar.closest(".skill").querySelector(".skill-num");
      const target = parseInt(bar.dataset.width, 10);

      requestAnimationFrame(() => {
        bar.style.width = target + "%";
      });

      if (num) {
        num.textContent = target + "%";
        num.classList.add("show");
      }

      obs.unobserve(bar);
    });
  }, { threshold: 0.3 });

  bars.forEach(b => io.observe(b));
});

