const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

const profilePicInput = document.getElementById('profilePicInput');
const profilePicPreview = document.getElementById('profilePicPreview');

profilePicInput.addEventListener('change', (event) => {


    setTimeout(() => {
        console.log("lenovo")
    }, 2000);




    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profilePicPreview.src = reader.result;
            profilePicPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});



