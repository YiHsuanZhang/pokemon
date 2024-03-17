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
