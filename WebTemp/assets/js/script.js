window.addEventListener('load', function () {

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
  // Attach event listeners to buttons
  document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
  document.querySelector('.next').addEventListener('click', () => plusSlides(1));

  // Swiper initialization function
  function initializeSwiper(selector, config) {
      return new Swiper(selector, config);
  }

  // Common Swiper configurations
  const commonConfig = {
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      mousewheel: true,
      keyboard: true,
  };

  // Specific Swiper configurations
  const swipers = [
      {
          selector: ".blog-slider .mySwiper",
          config: {
              slidesPerView: 1,
              spaceBetween: 5,
              breakpoints: {
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  730: { slidesPerView: 2, spaceBetween: 40 },
                  1024: { slidesPerView: 3, spaceBetween: 50 },
              },
          },
      },
      {
          selector: ".brands .mySwiper",
          config: {
              slidesPerView: 1,
              spaceBetween: 30,
              breakpoints: {
                  320: { slidesPerView: 3, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 40 },
                  1024: { slidesPerView: 4, spaceBetween: 50 },
              },
              simulateTouch: false,
              allowTouchMove: false,
          },
      },
      {
          selector: ".project-slider .mySwiper",
          config: {
              slidesPerView: 1,
              spaceBetween: 30,
              navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  426: { slidesPerView: 2, spaceBetween: 20 },
                  676: { slidesPerView: 3, spaceBetween: 30 },
                  769: { slidesPerView: 2, spaceBetween: 40 },
                  1100: { slidesPerView: 3, spaceBetween: 50 },
              },
          },
      },
      {
          selector: ".services-slider .mySwiper",
          config: {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  550: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 40 },
                  1024: { slidesPerView: 3, spaceBetween: 50 },
              },
          },
      },
      {
          selector: ".team-slider .mySwiper",
          config: {
              slidesPerView: 1,
              spaceBetween: 20,
              breakpoints: {
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  500: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 50 },
              },
          },
      },
  ];

  // Initialize all Swiper instances
  swipers.forEach(swiper => {
      initializeSwiper(swiper.selector, { ...commonConfig, ...swiper.config });
  });

  // Contact visibility toggling function
  function toggleContactVisibility() {
      const contactDiv = document.querySelector('.contact-parent');
      const linksDiv = document.querySelector('.links-div');
      const logoDiv = document.querySelector('.logo-div');
      const container = document.querySelector('.container');
      const scrollThreshold = 600;
      const screenWidthThreshold = 980;

      if (window.innerWidth > screenWidthThreshold) {
          if (window.scrollY > scrollThreshold) {
              contactDiv.style.display = 'none';
              logoDiv.style.height = '80px';
              linksDiv.style.height = '80px';
              container.style.position = 'fixed';
              logoDiv.style.boxShadow = '2px 2px 2px lightgrey';
          } else {
              linksDiv.style.height = '135px';
              container.style.position = 'static';
              logoDiv.style.height = '135px';
              contactDiv.style.display = 'flex';
              logoDiv.style.boxShadow = 'none';
          }
      } else {
          linksDiv.style.height = '135px';
          container.style.position = 'static';
          logoDiv.style.height = '135px';
          contactDiv.style.display = 'flex';
          logoDiv.style.boxShadow = 'none';
      }
  }

  // Event listeners for contact visibility
  window.addEventListener('load', toggleContactVisibility);
  window.addEventListener('scroll', toggleContactVisibility);
  window.addEventListener('resize', toggleContactVisibility);

  // Prevent default behavior for all links
  document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
      });
  });

  // Navbar toggle
  document.querySelector('.navbar-btn').addEventListener('click', () => {
      document.querySelector('.links-container').classList.toggle('nav-active');
  });

  // Number animation
  const numbers = [
      { element: document.getElementById('number1'), start: 0, max: 286 },
      { element: document.getElementById('number2'), start: 0, max: 435 },
      { element: document.getElementById('number3'), start: 0, max: 652 },
      { element: document.getElementById('number4'), start: 0, max: 740 },
  ];

  function updateNumber(index) {
      const numberData = numbers[index];
      const { element, start, max } = numberData;

      if (start <= max) {
          element.textContent = start;
          numberData.start = start + 1;
          setTimeout(() => updateNumber(index), 20);
      }
  }

  function startIfVisible(entries) {
      if (entries[0].isIntersecting) {
          for (let i = 0; i < numbers.length; i++) {
              updateNumber(i);
          }
      }
  }

  // Create Intersection Observers for each number element
  numbers.forEach((numberData) => {
      const { element } = numberData;
      const observer = new IntersectionObserver(startIfVisible);
      observer.observe(element);
  });

  toggleContactVisibility(); // Initial call
});






