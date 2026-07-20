// =========================
// Typing Animation
// =========================

const text = [
    "BCA  Student",
    "Web Developer",
    "Java Programmer",
    "Data Science Learner",
    "Cloud Enthusiast"
];

let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".home-content h2");


function typeEffect(){

    if(charIndex < text[index].length){

        typingElement.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}


function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(typeEffect,500);

    }

}


typeEffect();






const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("header nav a");


window.onscroll = () => {


    sections.forEach(sec => {


        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");



        if(top >= offset && top < offset + height){


            navLinks.forEach(link => {


                link.classList.remove("active");


                document
                .querySelector(
                'header nav a[href*=' + id + ']'
                )
                .classList.add("active");


            });


        }


    });


};





document.querySelectorAll('a[href^="#"]')
.forEach(anchor =>{


    anchor.addEventListener("click",function(e){


        e.preventDefault();


        document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});






const revealElements =
document.querySelectorAll(
".skill-box, .project-card, .education-box"
);



window.addEventListener("scroll",()=>{


    revealElements.forEach(element=>{


        let windowHeight =
        window.innerHeight;


        let elementTop =
        element.getBoundingClientRect().top;



        if(elementTop < windowHeight - 100){


            element.style.opacity="1";

            element.style.transform="translateY(0)";


        }


    });


});







const year =
document.querySelector("footer p");


if(year){

    year.innerHTML =
    "© " + new Date().getFullYear()
    + " Karthihai Selvan | All Rights Reserved";

}