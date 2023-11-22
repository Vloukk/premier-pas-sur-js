const slides = [
    {
      "image":"slide1.jpg",
      "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      "image":"slide2.jpg",
      "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      "image":"slide3.jpg",
      "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      "image":"slide4.png",
      "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];

  const bannerImg = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p'); // Sélectionne le <p> dans #banner
  const dots = document.querySelectorAll('.dots .dot'); // Sélectionne tous les dots
  let currentIndex = 0;
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateBanner();
    updateDots();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateBanner();
    updateDots();
  }
  
  function updateBanner() {
    const currentSlide = slides[currentIndex];
    const image = currentSlide.image;
    const tagLineContent = currentSlide.tagLine;
  
    bannerImg.src = "./assets/images/slideshow/" + image;
    tagLine.innerHTML = tagLineContent;
  }
  
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
          dot.classList.add('dot_selected'); // Ajoute la classe dot_selected pour le dot actif
      } else {
          dot.classList.remove('dot_selected');
      }
    });
  }
  
  // Initial setup
  updateBanner();
  updateDots();