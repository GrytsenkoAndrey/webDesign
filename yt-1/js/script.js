// header - menu
const menuItems = document.querySelector('#menuItems');
menuItems.style.maxHeight = "0px";

function menutoggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}

// product single
const prodImages = document.querySelectorAll('.small-img-col img'),
    productImg = document.querySelector('#product-img');
if (productImg && prodImages) {
    prodImages.forEach(image => {
        image.addEventListener('click', () => {
            productImg.setAttribute('src', image.getAttribute('src'));
        });
    });
}
