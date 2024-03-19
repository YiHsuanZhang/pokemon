// document.querySelector('.toggle-btn').addEventListener('click', function() {
//     var rightBody = document.querySelector('.right_body');
//     if (rightBody.style.display === 'block') {
//         rightBody.style.display = 'none';
//     } else {
//         rightBody.style.display = 'block';
//     }
// });

var toggleHbtn = document.getElementsByClassName('toggle-header-btn');
var i;

for (i = 0; i < toggleHbtn.length; i++) {
    toggleHbtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var Newbox = this.parentNode.querySelector('.new_box');
        if (content.style.display === "block") {
            content.style.display = "none";
            Newbox.style.display = "none";
        } else {
            content.style.display = "block";
            Newbox.style.display = "block";
        }
    });
    // 初始状态设置
    if (i !== 0) {
        var content = toggleHbtn[i].nextElementSibling;
        var Newbox = toggleHbtn[i].parentNode.querySelector('.new_box');
        content.style.display = "none";
        Newbox.style.display = "none";
    } else { // 如果是第一个按钮，展开内容
        var content = toggleHbtn[i].nextElementSibling;
        var Newbox = toggleHbtn[i].parentNode.querySelector('.new_box');
        content.style.display = "block";
        Newbox.style.display = "block";
    }
}
