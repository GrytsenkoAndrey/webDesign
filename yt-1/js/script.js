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

// account page
const loginSpan = document.querySelectorAll('.account-page .form-container span')[0],
    registerSpan = document.querySelectorAll('.account-page .form-container span')[1],
    loginForm = document.querySelector('#login-form'),
    registerForm = document.querySelector('#register-form'),
    indicator = document.querySelector('#indicator');

if (loginSpan && loginForm && registerSpan && registerForm && indicator) {
    loginSpan.onclick = () => {
        registerForm.style.transform = 'translateX(300px)';
        loginForm.style.transform = 'translateX(300px)';
        indicator.style.transform = 'translateX(0px)';
    }
    registerSpan.onclick = () => {
        registerForm.style.transform = 'translateX(0px)';
        loginForm.style.transform = 'translateX(0px)';
        indicator.style.transform = 'translateX(100px)';
    }
}