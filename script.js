var main_logo = document.querySelector('.logo'); // Main Logo
var nav_bar = document.querySelector('.nav_bar'); // Nav Bar
var vr_image = document.querySelector('.vr_image-image'); // VR Section Image
var vr_paragraph = document.querySelector('.vr_paragraph'); // VR Section Paragarph
var nav_mobile_button = document.querySelector('.mobile_button');
var nav_mobile_button_icon = document.querySelector('mobile_button_icon');

var mobile_res_check = function () {
    if(window.screen.width < 500)
        return true;
    else
        return false;
}

var replace_vr_image = function () {
    vr_image.src = 'images/mobile/image-interactive.jpg'
}

var replace_vr_paragraph = function () {
    vr_paragraph.innerHTML = `
    Founded in 2011, Loppstudios has benn production world-class
    virtual reality progject for some of the best companies around the
    globe. Our award-winning creations have transformed
    buisnesses throught digial experiences that bind to their brand.
    `
}

var replace_to_mobile_pictures = function () {
    var i;
    var temp;
    var numstring;
    for (i=1; i < 9; i++) {
        numstring = i.toString();
        temp = document.querySelector('.item_'.concat(numstring));
        temp.style
    }

}

var add_logo_position_fixed = function() {
    main_logo.classList.toggle("toggle_fixed");
}

var init = function () {

    if(mobile_res_check()) {
        replace_vr_image();
        replace_vr_paragraph();
        replace_to_mobile_pictures();
    }

    nav_mobile_button.addEventListener("click", add_logo_position_fixed);
    nav_mobile_button_icon.addEventListener("click", add_logo_position_fixed);

}

init();