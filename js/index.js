//Navbar
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav ul li a");
  const footer = document.getElementById("footer");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop - 60 &&
        pageYOffset < sectionTop + sectionHeight - 60
      ) {
        current = section.getAttribute("id");
      }
    });

    // Check if the footer is in view
    const footerTop = footer.offsetTop;
    const footerHeight = footer.clientHeight;
    if (pageYOffset + window.innerHeight >= footerTop + footerHeight - 60) {
      current = "footer";
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current && link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

//FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      // Toggle active class
      this.classList.toggle("active");

      // Toggle the answer visibility
      const answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

//Events
document.addEventListener("DOMContentLoaded", function () {
  // Slick Carousel Initialization
  $(".carousel-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    dots: true,
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//Testimonial
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".testimonial-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // Remove active class and hide overlays and descriptions
      cards.forEach((c) => {
        c.classList.remove("active");
        c.querySelector(".overlay").style.opacity = 0;
        c.querySelector(".overlay").style.visibility = "hidden";
        c.querySelector(".description").style.opacity = 0;
        c.querySelector(".description").style.visibility = "hidden";
      });

      // If the card was not active, activate it
      if (!isActive) {
        this.classList.add("active");
        this.querySelector(".overlay").style.opacity = 1;
        this.querySelector(".overlay").style.visibility = "visible";
        this.querySelector(".description").style.opacity = 1;
        this.querySelector(".description").style.visibility = "visible";
      }
    });
  });
});
