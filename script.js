document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('nav a');
    var sections = document.querySelectorAll('.sections');
   

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



