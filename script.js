let menuOpenBtn = document.querySelector('#menu-open-btn')
let menuCloseBtn = document.querySelector('#menu-close-btn')
let menu = document.querySelector('.side-menu')

menuOpenBtn.onclick = () => { menuToggle(false, menu) }
menuCloseBtn.onclick = () => { menuToggle(true, menu) }

function menuToggle(isActive, htmlElem){
    if(isActive == true){
        htmlElem.classList.remove('menu-active')
        document.body.style.overflow = 'auto'
    } else{
        htmlElem.classList.add('menu-active')
        document.body.style.overflow = 'hidden'
    }
}
