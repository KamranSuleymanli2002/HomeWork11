function changeStyle() {
    var input_width_val = document.getElementById('width').value;
    var input_heigth_val = document.getElementById('height').value;
    var input_Color_val = document.getElementById('Color').value;
    var position = document.getElementById('position').value;
    var top = document.getElementById('T').value;
    var left = document.getElementById('L').value;
    var right = document.getElementById('R').value;
    var border = document.getElementById('border').value;
    var Image = document.getElementById('Image').value;
    var transition = document.getElementById('transition').value;

    document.getElementById('box').style.width = input_width_val;
    document.getElementById('box').style.height = input_heigth_val;
    document.getElementById('box').style.backgroundColor = input_Color_val;
    document.getElementById('box').style.position = position;
    document.getElementById('box').style.top = top;
    document.getElementById('box').style.left = left;
    document.getElementById('box').style.right = right;
    document.getElementById('box').style.border = border;
    document.getElementById('box').style.backgroundImage = Image;
    document.getElementById('box').style.transition = transition; }