document.addEventListener("DOMContentLoaded", function () {
    const pokeMoreNumber = document.querySelector('.poke-number-header');
    pokeMoreNumber.style.backgroundImage = "url('../img/TOP09/sort_close_bg.png')";
    const colorBoxes = document.querySelectorAll('.color_box');

    function countSelected() {
        let selectedCount = 0; // 初始化已选中的数量为0
        colorBoxes.forEach(function (colorBox) {
            const checkbox = colorBox.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                selectedCount++;
            }
        });
        return selectedCount;
    }

    function updateColorBoxStyles() {
        const selectedCount = countSelected();

        colorBoxes.forEach(function (colorBox) {
            const checkbox = colorBox.querySelector('input[type="checkbox"]');
            const label = colorBox.querySelector('label');

            if (checkbox.checked) {
                colorBox.style.backgroundColor = getComputedStyle(colorBox).color;
                colorBox.classList.add("checked");
                label.style.color = "#000000"; // 文字颜色改为黑色
            } else {
                colorBox.style.backgroundColor = "transparent";
                colorBox.classList.remove("checked");
                label.style.color = getComputedStyle(colorBox).color; // 文字颜色改为默认值
            }

            // 如果已选中的状态为两个以上，则将其他未选中状态的文字和边框颜色改为灰色
            if (selectedCount >= 2 && !checkbox.checked) {
                colorBox.style.borderColor = "gray";
                label.style.color = "gray";
            } else {
                colorBox.style.borderColor = ""; // 恢复边框颜色为默认值
            }
        });
    }

    colorBoxes.forEach(function (colorBox) {
        const checkbox = colorBox.querySelector('input[type="checkbox"]');

        colorBox.addEventListener("click", function () {
            const selectedCount = countSelected();

            // 如果已选中的状态为两个以上，则取消当前选中状态
            if (selectedCount >= 2) {
                checkbox.checked = false;
            } else {
                // 切换复选框的选中状态
                checkbox.checked = !checkbox.checked;
            }

            // 更新颜色框的样式
            updateColorBoxStyles();

            // 更新已选中数量的显示
            const newSelectedCount = countSelected();
        });
    });
});


function rotateBackground() {
    var selectElement = document.querySelector('.select-wrapper');
    var isOpen = selectElement.getAttribute('data-open');

    if (isOpen === 'true') {
        selectElement.style.backgroundImage = 'url(../img/TOP09/icon_arrow.png)';
    } else {
        selectElement.style.backgroundImage = 'url(../img/TOP09/icon_arrow_upside_down.png)';
    }

    selectElement.setAttribute('data-open', isOpen === 'true' ? 'false' : 'true');
}


// 获取起始滑动条和结束滑动条的元素
var fromSlider = document.getElementById('fromSlider');
var toSlider = document.getElementById('toSlider');

// 获取起始数字文本和结束数字文本的元素
var fromInputText = document.getElementById('fromInputText');
var toInputText = document.getElementById('toInputText');

// 定义函数来更新数字文本的值
function updateText(element, value) {
    element.textContent = value;
}

// 监听起始滑动条的输入事件，并更新起始数字文本的值
fromSlider.oninput = function () {
    if (parseInt(this.value) < parseInt(toSlider.value)) {
        updateText(fromInputText, this.value);
    }
    else if (parseInt(this.value) > parseInt(toSlider.value)) {
        updateText(toInputText, this.value);
    }
    else if (parseInt(this.value) == parseInt(toSlider.value)) {
        updateText(toInputText, this.value);
        updateText(fromInputText, this.value);
    }
};

// 监听结束滑动条的输入事件，并更新结束数字文本的值
toSlider.oninput = function () {
    if (parseInt(this.value) > parseInt(fromSlider.value)) {
        updateText(toInputText, this.value);
    }
    else if (parseInt(this.value) < parseInt(fromSlider.value)) {
        updateText(fromInputText, this.value);
    }
    else if (parseInt(this.value) == parseInt(fromSlider.value)) {
        updateText(fromInputText, this.value);
        updateText(toInputText, this.value);
    }
};


document.addEventListener("DOMContentLoaded", function () {
    // 隱藏初始狀態下要隱藏的元素
    document.querySelector('.pokemon-more-search_close').style.display = 'block';
    document.querySelector('.pokemon_list_sub').style.backgroundImage = 'none';
    document.querySelector('.pokemon_search').style.display = 'none';

    // 添加點擊事件監聽器
    document.querySelector('.pokemon-more-search_close').addEventListener('click', function () {
        // 切換元素的顯示狀態
        document.querySelector('.pokemon-more-search_close').style.display = 'none';
        document.querySelector('.pokemon_list_sub').style.backgroundImage = 'url(../img/TOP09/advance_search_open_bg.png)';
        document.querySelector('.pokemon_search').style.display = 'block';

        // 添加或刪除 .moved 類
        document.querySelector('.poke-number-header').classList.toggle('moved');
    });

    // 添加點擊事件監聽器
    document.querySelector('.more_close').addEventListener('click', function () {
        // 切換元素的顯示狀態
        document.querySelector('.pokemon-more-search_close').style.display = 'block';
        document.querySelector('.pokemon_list_sub').style.backgroundImage = 'none';
        document.querySelector('.pokemon_search').style.display = 'none';

        // 添加或刪除 .moved 類
        document.querySelector('.poke-number-header').classList.toggle('moved');
    });

    // 第二個事件監聽器不再需要，因為添加到了第一個事件監聽器中
});


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.poke-number-header');
    const body = document.querySelector('.poke-number-body');

    header.addEventListener('click', function () {
        body.classList.toggle('expanded');
        // 切换背景图片
        if (body.classList.contains('expanded')) {
            header.style.backgroundImage = "url('../img/TOP09/sort_open_bg.png')";
        } else {
            header.style.backgroundImage = "url('../img/TOP09/sort_close_bg.png')";
        }
    });
});
