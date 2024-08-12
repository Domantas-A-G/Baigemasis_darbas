document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-images img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Perėjimas prie kito paveikslėlio
        showImage(currentIndex);
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Perėjimas prie ankstesnio paveikslėlio
        showImage(currentIndex);
    }

    rightArrow.addEventListener('click', nextImage);
    leftArrow.addEventListener('click', previousImage);

    setInterval(nextImage, 8000); // Automatiškai keisti paveikslėlius kas 8 sekundes
});
