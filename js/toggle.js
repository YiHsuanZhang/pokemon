document.querySelector('.toggle-btn').addEventListener('click', function() {
    var rightBody = document.querySelector('.right_body');
    if (rightBody.style.display === 'block') {
        rightBody.style.display = 'none';
    } else {
        rightBody.style.display = 'block';
    }
});