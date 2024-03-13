document.addEventListener("DOMContentLoaded", function () {
    const toggleBtns = document.querySelectorAll('.toggle-header-btn');
    
    toggleBtns.forEach(function(toggleBtn, index) {
        const content = toggleBtn.parentNode.querySelector('.content');
        const newBox = toggleBtn.parentNode.querySelector('.new_box');
        
        if (index !== 0) {
            content.classList.add("hidden");
            newBox.classList.add("hidden");
        } else {
            toggleBtn.classList.add('active');
        }
        
        toggleBtn.addEventListener('click', function () {
            toggleBtns.forEach(function(btn, i) {
                if (i !== index) {
                    const otherContent = btn.parentNode.querySelector('.content');
                    const otherNewBox = btn.parentNode.querySelector('.new_box');
                    btn.classList.remove('active');
                    otherContent.classList.add("hidden");
                    otherNewBox.classList.add("hidden");
                }
            });
            
            this.classList.toggle('active');
            content.classList.toggle("hidden");
            newBox.classList.toggle("hidden");
        });
    });
});