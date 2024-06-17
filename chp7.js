// document.addEventListener('DOMContentLoaded', function() {
//     const navbarToggle = document.getElementById('navbarToggle');
//     const navbarMenu = document.getElementById('navbarMenu');

//     navbarToggle.addEventListener('click', function() {
//         toggleMenu();
//     });

//     window.addEventListener('resize', function() {
//         handleResize();
//     });

//     document.addEventListener('click', function(event) {
//         closeMenuOnClickOutside(event);
//     });

//     function toggleMenu() {
//         navbarMenu.classList.toggle('show');
//     }

//     function handleResize() {
//         if (window.innerWidth > 768) {
//             navbarMenu.classList.remove('show');
//         }
//     }

//     function closeMenuOnClickOutside(event) {
//         if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
//             navbarMenu.classList.remove('show');
//         }
//     }

//     function highlightCurrentPage() {
//         const navLinks = document.querySelectorAll('.navbar-item a');
//         navLinks.forEach(link => {
//             if (link.href === window.location.href) {
//                 link.classList.add('active');
//             }
//         });
//     }

//     function scrollToSection() {
//         const links = document.querySelectorAll('.navbar-item a');
//         links.forEach(link => {
//             link.addEventListener('click', function(event) {
//                 event.preventDefault();
//                 const section = document.querySelector(this.getAttribute('href'));
//                 section.scrollIntoView({ behavior: 'smooth' });
//             });
//         });
//     }

//     highlightCurrentPage();f
//     scrollToSection();
// });


let id =document.getElementsByTagName("navbar")[1].firstElementChild.style.backgoundcolor="red"
