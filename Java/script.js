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

  <!-- 切り替えスクリプト -->
  <script>
  document.addEventListener('DOMContentLoaded', () => {
      const sliderBtns = document.querySelectorAll('.slider-btn');
      const sliders = document.querySelectorAll('.plan-slider');
  
      sliderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // ボタンのアクティブ切り替え
          sliderBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // スライダー表示の切り替え
          sliders.forEach(s => s.classList.remove('active'));
          document.getElementById(btn.dataset.target).classList.add('active');
        });
      });
  
      // 初期表示をトリガー
      const initial = document.querySelector('.slider-btn.active');
      if (initial) initial.click();
    });
  </script>

  // 4) FAQ アコーディオン
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => item.classList.toggle('active'));
  });
});
</script>


  // 3) トレーナー紹介スライダー
    const trainerCards = document.querySelectorAll('.trainer-card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const trainerCount = document.getElementById('trainer-count');
    
    let currentIndex = 0;
    const total = trainerCards.length;
    

    
    // 初期表示
    function showTrainer(index) {
      // 全カード非表示
      trainerCards.forEach(card => {
        card.classList.remove('active');
      });
      // index のカードのみ表示
      trainerCards[index].classList.add('active');
      // カウンター更新 (1-based 表記)
      trainerCount.textContent = `${index + 1} / ${total}`;
    }
  if (prevBtn && nextBtn && total > 0) {
    prevBtn.onclick = () => showTrainer(idx = (idx-1+total)%total);
    nextBtn.onclick = () => showTrainer(idx = (idx+1)%total);
    showTrainer(idx);
  }

  // 4) FAQ アコーディオン
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    q.addEventListener('click', () => item.classList.toggle('active'));
    });
  });