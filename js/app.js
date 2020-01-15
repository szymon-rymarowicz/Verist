
// onclick="menu_open()"
// onclick="menu_close()"

// const media = window.matchMedia("(min-width: 769px)");
//
// if (media.matches) {
//     document.querySelector(".cross").style.display = "none";
//     document.querySelector(".menu_hamburger").style.display = "none";
//     document.querySelector("nav").style.display = "block"
// }
//
// else {
//     function menu_open() {
//         document.querySelector(".menu_hamburger").style.display = "none";
//         document.querySelector(".cross").style.display = "block";
//         document.querySelector("nav").style.display = "block";
//     }
//
//     function menu_close() {
//         document.querySelector(".menu_hamburger").style.display = "block";
//         document.querySelector(".cross").style.display = "none";
//         document.querySelector("nav").style.display = "none";
//     }
// }


// function scrollTo(element) {
//     window.scroll({
//         behavior: 'smooth',
//         left: 0,
//         top: element.offsetTop + 350
//     });
// }
//
//     let navigationLinks = document.querySelectorAll('.top-bar .navigation__link');
//
//
//
// navigationLinks.forEach(link => link.addEventListener('click', function (e) {
//
//     var section = document.querySelector(`${e.target.hash}`);
//
//     console.log(section);
//
//     scrollTo(section)
//
// }));


document.addEventListener('DOMContentLoaded', (event) => {



const scrollFunction = () => {

    let link = document.querySelectorAll(".navigation__link");
    let topBar = document.querySelector(".top-bar");
    if (window.pageYOffset > topBar.offsetTop) {
        topBar.classList.add("top-bar--navigation-scroll");
        for (let i = 0; i < link.length; i++ ) {
            link[i].classList.add("paragraph--white");
        }

    } else {
        topBar.classList.remove("top-bar--navigation-scroll");
        for (let i = 0; i < link.length; i++ ) {
            link[i].classList.remove("paragraph--white");
        }
    }
}


    window.addEventListener('scroll', scrollFunction);
});

