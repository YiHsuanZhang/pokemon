document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.toggle-header-btn');
    const content = document.querySelector('.content');
    const newBox = document.querySelector('.new_box');

    toggleBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        content.classList.toggle("hidden");
        newBox.classList.toggle("hidden");
    });
});