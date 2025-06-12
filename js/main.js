document.addEventListener("DOMContentLoaded", function () {
  // Вставка CSS-анимаций
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-3px); }
      50% { transform: translateX(3px); }
      75% { transform: translateX(-3px); }
      100% { transform: translateX(0); }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    @keyframes bounceJump {
      0%   { transform: translateY(0); }
      30%  { transform: translateY(-10px); }
      50%  { transform: translateY(0); }
      70%  { transform: translateY(-5px); }
      100% { transform: translateY(0); }
    }
    @keyframes glowFlash {
      0% { text-shadow: 0 0 0 transparent; color: white; }
      50% { text-shadow: 0 0 10px #fff700; color: #fff700; }
      100% { text-shadow: 0 0 0 transparent; color: white; }
    }
    @keyframes orbit {
      0%   { transform: translate(0, 0); }
      25%  { transform: translate(4px, -4px); }
      50%  { transform: translate(0, -6px); }
      75%  { transform: translate(-4px, -4px); }
      100% { transform: translate(0, 0); }
    }
  `;
  document.head.appendChild(style);

 // Бургер-меню
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
  });

  // Selects (Choices.js)
  const element1 = document.querySelector(".select__country");
  const element2 = document.querySelector(".select__participants");
  if (element1) new Choices(element1, { searchEnabled: false, itemSelectText: "" });
  if (element2) new Choices(element2, { searchEnabled: false, itemSelectText: "" });

  // Галерея (LightGallery)
  const gallery = document.getElementById("gallery");
  if (gallery) {
    lightGallery(gallery, {
      controls: true,
      download: false,
      thumbnail: true,
      plugins: [lgAutoplay, lgThumbnail],
    });
  }

  // Анимация логотипа
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.transform = "translateX(-200px)";
    logo.style.opacity = 0;
    setTimeout(() => {
      logo.style.transition = "all 0.8s ease-out";
      logo.style.transform = "translateX(0)";
      logo.style.opacity = 1;
    }, 300);
  }
  const h1 = document.querySelector(".first__title");
  if (h1) {
    h1.style.opacity = 0;
    h1.style.transform = "translateY(30px)";
    setTimeout(() => {
      h1.style.transition = "all 1s ease-out";
      h1.style.opacity = 1;
      h1.style.transform = "translateY(0)";
    }, 500);
  }

  // Эффекты для пунктов меню
  const menuItems = document.querySelectorAll(".menu__item");
  const effects = ["translateY(-5px)", "translateY(-10px)", "rotate(3deg)", "scale(1.1)", "skewX(5deg)", "translateX(5px)"];
  menuItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      item.style.transition = "transform 0.3s ease";
      item.style.transform = effects[index % effects.length];
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "none";
    });
  });

  // Соцсети: Telegram, Skype, VK
  const tg = document.querySelector(".telegram");
  const skype = document.querySelector(".skype");
  const vk = document.querySelector(".vk");

  if (tg) {
    tg.addEventListener("mouseenter", () => tg.style.animation = "shake 0.5s");
    tg.addEventListener("animationend", () => tg.style.animation = "");
  }

  if (skype) {
    skype.addEventListener("mouseenter", () => {
      skype.style.transition = "transform 0.5s ease";
      skype.style.transform = "rotate(360deg)";
    });
    skype.addEventListener("mouseleave", () => skype.style.transform = "none");
  }

  if (vk) {
    vk.addEventListener("mouseenter", () => vk.style.animation = "pulse 1s infinite");
    vk.addEventListener("mouseleave", () => vk.style.animation = "");
  }

  // Кнопка "Консультация"
  const consultBtn = document.querySelector(".start__link");
  if (consultBtn) {
    consultBtn.addEventListener("mouseenter", () => consultBtn.style.animation = "bounceJump 0.6s ease");
    consultBtn.addEventListener("animationend", () => consultBtn.style.animation = "");
  }

  // Фото-отчёт (разные эффекты)
  const photoItems = document.querySelectorAll(".photoalbom__photo img");
  const photoEffects = [
    "translateY(60px) scale(0.8) rotate(-5deg)",
    "translateX(-60px) scale(1.1) rotate(3deg)",
    "translateY(-60px) scale(0.9) rotate(7deg)",
    "translateX(60px) scale(1.05) rotate(-7deg)",
    "translateY(40px) scale(0.95) rotate(4deg)",
    "translateX(-40px) scale(1.1) rotate(-4deg)"
  ];

  photoItems.forEach((img, index) => {
    img.style.opacity = 0;
    img.style.transform = photoEffects[index % photoEffects.length];
    img.style.transition = `all 0.8s ease-out ${index * 100}ms`;
  });

  const photoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "none";
        photoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  photoItems.forEach(img => photoObserver.observe(img));

  // Подвал: "Прогулки в горы летом"
  const summerHike = document.querySelector('.services__menu__item-text[href*="летом"]');
  if (summerHike) {
    summerHike.addEventListener("mouseenter", () => summerHike.style.animation = "glowFlash 0.6s ease");
    summerHike.addEventListener("animationend", () => summerHike.style.animation = "");
  }

  // Подвал: "Поездка в Африку"
  const africaTrip = document.querySelector('.services__menu__item-text[href*="Африку"]');
  if (africaTrip) {
    africaTrip.addEventListener("mouseenter", () => africaTrip.style.animation = "orbit 0.6s ease");
    africaTrip.addEventListener("animationend", () => africaTrip.style.animation = "");
  }

  // Подвал: Номер телефона (анимация набора)
  const phone = document.querySelector(".company__phone");
  if (phone) {
    const originalText = phone.textContent;
    phone.addEventListener("mouseenter", () => {
      const chars = originalText.trim().split("");
      phone.textContent = "";
      chars.forEach((ch, i) => {
        setTimeout(() => {
          phone.textContent += ch;
        }, i * 50);
      });
    });
    phone.addEventListener("mouseleave", () => {
      setTimeout(() => phone.textContent = originalText, 500);
    });
  }
});
