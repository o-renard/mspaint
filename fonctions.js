function get_picture(){
    var input = document.querySelector('input');
    input.addEventListener('change', open_picture);
}


function open_picture(){
    var draw = document.querySelector('.draw');
    var input = document.querySelector('input');
    var my_file = input.files;
    var image = document.createElement('img');
    draw.appendChild(image);
    image.style.maxWidth = "100%";
    image.style.maxHeight = "100%";
    image.src = window.URL.createObjectURL(my_file[0]);
}

function show_download(){
    document.getElementById("download").style.display = "block";
}

function hidden_download(){
    document.getElementById("download").style.display = "none";
}

function hidden_RGB(){
    document.getElementById("RGB").style.display = "none";
}

function show_RGB(){
    document.getElementById("RGB").style.display = "block";
}