var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// 自動切換圖片
var slideInterval = setInterval(function () {
    plusSlides(1);
}, 3000); // 每3秒切換一次

// 清除計時器
function pauseSlide() {
    clearInterval(slideInterval);
}

// 繼續自動切換
function resumeSlide() {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 10000);
}
