//js/main.js//
var slider_img=document.querySelector('.slider-img');
var images=['images (1).jpg','images (bu).jpg','images (c).jpg','images(d).jpg'];
//var images=['images (2).jpg','images (3).jpg','images (4).jpg','images (5).jpg'];
var i=0;//current image index

function prev(){
    if(i <= 0) i=images.length;
    i--;
    return setImg();
}

function next() {
    if(i>=images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src','images/' +images[i]);
}