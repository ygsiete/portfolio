//網頁浮現效果
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));

//typewriter effect
const h1 = document.querySelector('.about_title');
const text = "HELLO, I AM HSI !";
let index = 0;
let deleting = false;

// 初始化文字
h1.textContent = "";

function typeWriter() {
  if (!deleting) {
    // 加字
    h1.textContent = text.slice(0, index + 1);
    index++;
    if (index === text.length) {
      deleting = true;
      setTimeout(typeWriter, 1000); // 完整文字停 1 秒
      return;
    }
    setTimeout(typeWriter, 150); // 加字速度 150ms
  } else {
    // 刪字
    h1.textContent = text.slice(0, index - 1);
    index--;
    if (index === 0) {
      deleting = false;
      setTimeout(typeWriter, 500); // 清空後停 0.5 秒
      return;
    }
    setTimeout(typeWriter, 100); // 刪字速度
  }
}

// 開始打字
typeWriter();


// navbar animation
window.addEventListener('scroll', function() { 
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
const dots = document.querySelectorAll('.skill-dot');

function animateDots() {
  dots.forEach(dot => {
    const rect = dot.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      const progress = dot.getAttribute('data-progress');
      dot.style.left = progress + '%';  // 依 data-progress 移動
    }
  });
}

window.addEventListener('scroll', animateDots);


window.addEventListener('scroll', animateSkills);




