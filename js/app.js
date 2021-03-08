
// //? nav

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let navPosition = window.scrollY > 0;
    nav.classList.toggle('nav-scroll', navPosition);
})

//? nav scrollColor
// const sections = document.querySelectorAll('section');
// const scrollColor = document.querySelector('.scroll-color');
// const reds = ["#bf211e", "#bf211e", "#bf211e", "#bf211e", "#bf211e"];

// const options = {
//     threshold: 0.7
// };

// let observer = new IntersectionObserver(navCheck, options);

// function navCheck(entries) {
//     entries.forEach(entry => {
//         // console.log(entry);
//         const className = entry.target.className;
//         console.log(className)
//         const activeAnchor = document.querySelector(`[data-page=${className}]`);
//         const redIndex = entry.target.getAttribute('data-index');
//         const coords = activeAnchor.getBoundingClientRect();
//         const direction = {
//             height: coords.height,
//             width: coords.width,
//             top: coords.top,
//             left: coords.left
//         };
//         if (entry.isIntersecting) {
//             scrollColor.style.setProperty("left", `${direction.left}px`);
//             scrollColor.style.setProperty("top", `${direction.top}px`);
//             scrollColor.style.setProperty("width", `${direction.width}px`);
//             scrollColor.style.setProperty("height", `${direction.height}px`);
//         }
//     });
// }

// sections.forEach(section => {
//     observer.observe(section);
// })

//? go to top

window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scroll-top');
    scroll.classList.toggle("active", window.scrollY > 100)
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
//? text appear

function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introText1 = document.querySelector('.intro-text1');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1;

    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }
    if (introPosition < screenPosition) {
        introText1.classList.add('intro-appear');
    }
}
window.addEventListener('scroll', scrollAppear);

//? home2

const btnBox1 = document.getElementById("btn-box-1");
const btnBox2 = document.getElementById("btn-box-2");
const btnBox3 = document.getElementById("btn-box-3");
const btnBox4 = document.getElementById("btn-box-4");

function btn1() {
    btnBox1.classList.remove("onclick");
    btnBox2.classList.remove("onclick");
    btnBox3.classList.remove("onclick");
    btnBox4.classList.add("onclick");
}
function btn2() {
    btnBox1.classList.remove("onclick");
    btnBox2.classList.remove("onclick");
    btnBox4.classList.remove("onclick");
    btnBox3.classList.add("onclick");
}
function btn3() {
    btnBox1.classList.remove("onclick");
    btnBox3.classList.remove("onclick");
    btnBox4.classList.remove("onclick");
    btnBox2.classList.add("onclick");
}
function back() {
    btnBox1.classList.add("onclick");
    btnBox2.classList.remove("onclick");
    btnBox3.classList.remove("onclick");
    btnBox4.classList.remove("onclick");
}

function btnT() {
    btnBox1.classList.add("onclick");
    btnBox2.classList.remove("onclick");
    alert('You have Successfully Reserved The Table')
}
function btnR() {
    btnBox1.classList.add("onclick");
    btnBox3.classList.remove("onclick");
    alert('You have Successfully Booked The Room')
}
function btnF() {
    btnBox1.classList.add("onclick");
    btnBox4.classList.remove("onclick");
    alert('You have Successfully Ordered The Food')
}

//? loader

const loader = document.querySelector('.loader-wrapper');
const main = document.querySelector('.main-content');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

init();


//? color change animation

const bg = document.getElementById('services-container')
const bg1 = document.getElementById('image-wrapper')
function bgChanger() {
    if (this.scrollY > this.innerHeight / 0.9) {
        bg.classList.add('bg-color-change')
    }
    else {
        bg.classList.remove('bg-color-change')

    }
}
function bgChanger1() {
    if (this.scrollY > this.innerHeight / 0.218) {
        bg1.classList.add('bg-color-change')
    }
    else {
        bg1.classList.remove('bg-color-change')

    }
}

window.addEventListener('scroll', bgChanger);
window.addEventListener('scroll', bgChanger1);



//? responsive nav
const navMobSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    const navTitle = document.querySelector('.nav-title')
    //* Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('mob-nav-active');
        navTitle.classList.toggle('nav-title-res')
        //* Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`
            }
        });
        //* burger animation
        burger.classList.toggle('nav-res-toggle')
    })

}

navMobSlide()