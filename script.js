document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('nav a');
  var sections = document.querySelectorAll('.sections');
  var backToTopBtn = document.getElementById("backToTopBtn");
  var biohref = document.getElementById("biohref");
  const searchForm = document.querySelector('form');
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });

  navLinks.forEach(function (link, index) {
    link.addEventListener('click', function () {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove('active');
      });

      sections.forEach(function (section) {
        section.style.display = 'none';
      });

      this.classList.add('active');
      sections[index].style.display = 'block';
    });
  });


 
});



