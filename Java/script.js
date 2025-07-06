// スムーズスクロール（アンカーリンク用）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observerによるフェードインアニメーション
const animatedElements = document.querySelectorAll(
  ".content-section, .service-item, .trainer-box, .testimonial-item"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(element => {
  element.style.opacity = 0;
  element.style.transform = "translateY(50px)";
  observer.observe(element);
});

// パララックス効果：各セクションの背景位置をスクロールに合わせて更新
window.addEventListener("scroll", function () {
  const scrollPos = window.pageYOffset;
  document.querySelectorAll(".content-section").forEach(section => {
    section.style.backgroundPositionY = `${scrollPos * 0.5}px`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

// 3) トレーナー紹介スライダー
const trainerCards = document.querySelectorAll('.trainer-card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trainerCount = document.getElementById('trainer-count');
let idx = 0, total = trainerCards.length;
function showTrainer(i) {
  trainerCards.forEach(c => c.classList.remove('active'));
  trainerCards[i].classList.add('active');
  if (trainerCount) trainerCount.textContent = `${i+1} / ${total}`;
}
if (prevBtn && nextBtn && total > 0) {
  prevBtn.onclick = () => showTrainer(idx = (idx-1+total)%total);
  nextBtn.onclick = () => showTrainer(idx = (idx+1)%total);
  showTrainer(idx);
}


document.addEventListener('DOMContentLoaded', () => {
  // FAQアコーディオン
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});
  
 