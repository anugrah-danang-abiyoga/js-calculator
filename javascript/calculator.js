document.addEventListener('DOMContentLoaded', start)

var inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {
    var pushBtn = obj.innerHTML;

    if (pushed == '=') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (pushed == 'AC') {
        inputLabel.innerHTML = '0';
    } else {
        if (inputLabel.innerHTML = '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}