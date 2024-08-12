document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const image = item.querySelector('.image');
        const content = item.querySelector('.content');

        image.addEventListener('click', () => {
            content.classList.toggle('show');
        });
    });
});

