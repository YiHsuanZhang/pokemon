// 定義圖片數組
var images = [];

var folderPath = '../img/TOP09/images/';

// 圖片數量
var numberOfImages = 90;

// 循環生成圖片路徑
for (var i = 1; i <= numberOfImages; i++) {
  images.push(folderPath + 'cc' + i + '.png');
}

// 當頁面加載完成時觸發的函數
window.onload = function() {
  var elements = document.querySelectorAll('.images_ch img');
  var usedIndices = []; // 用來存放已經使用過的圖片索引

  // 對每個元素應用隨機的背景圖片和動畫
  elements.forEach(function(img) {
    var randomIndex;
    
    do {
      randomIndex = Math.floor(Math.random() * images.length); // 隨機選擇一個索引
    } while (usedIndices.includes(randomIndex)); // 如果這個索引已經被使用過，則重新選擇
    
    usedIndices.push(randomIndex); // 將這個索引添加到已使用的列表中
    img.src = images[randomIndex]; // 將圖片路徑設置為隨機選擇的圖片路徑
    img.style.animationName = 'fix_pokemon';
    img.style.animationDuration = '1.5s';
    img.style.animationFillMode = 'both';
  });
};