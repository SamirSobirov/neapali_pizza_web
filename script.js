document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})







// const toogleMenu = () => {
//     const burgerMenu = document.querySelector(".menu_icon");
//     const src = burgerMenu.getAttribute('src');
//     const iconName = src === 'burger_menu_logo_png' ?
//         'close.png'
//         :
//         'burger_menu_logo_png'

    


//         burgerMenu.setAttribute(
//             'src',
//          iconName
//         );

// const menu = document.querySelector('menu');

//             menu.classList.toogle(
//                 'menu--mobile'
//             );
//  };

//  console.log(iconName);