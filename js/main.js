// var slides = document.querySelectorAll(".slider_block");
//
// var sec = document.querySelector('.slider_sec');
// var currentSlide = 0;
// var intervalId;

// function goToSlide(slideIndex) {
//     slides[currentSlide].classList.remove("active");
//     console.log(slides[slideIndex], slides[currentSlide])
//     setTimeout(function() {
//         let currentSlidev2 = currentSlide
//         if (currentSlide == 0) {
//             currentSlidev2 = 3;
//         }
//         console.log(slides[slideIndex], slides[currentSlidev2 - 1], currentSlidev2)
//         slides[currentSlidev2 - 1].insertAdjacentElement("beforebegin", slides[slideIndex]);
//         slides[slideIndex].classList.add("active");
//     }, 300);
//     currentSlide = slideIndex;
// }

// function goTo(slideIndex) {
//     slides.forEach(function(element) {
//         element.classList.remove('active');
//     });
//     slides[slideIndex].classList.add('active');
//     // if (currentSlide == 0) {
//     //     currentSlide = 1
//     // }
//     // slides[currentSlide].classList.remove("active");
//     // console.log(slides[slideIndex], currentSlide)
//     // let currentSlidev2 = currentSlide
//     // if (currentSlide == 0) {
//     //     currentSlidev2 = 3;
//     // }
//     // console.log(slides[slideIndex], slides[currentSlidev2], currentSlidev2)
//     // slides[currentSlidev2].insertAdjacentElement("beforebegin", slides[slideIndex]);
//     // slides[slideIndex].classList.add("active");
//     // currentSlide = slideIndex;
// }

// function nextSlide() {
//     var nextSlideIndex = (currentSlide + 1) % slides.length;
//     lines[currentSlide].classList.remove('active');
//     lines[nextSlideIndex].classList.add('active');
//     goToSlide(nextSlideIndex);
// }


// intervalId = setInterval(nextSlide, 5000);


// lines.forEach(function(button, index) {
//     button.addEventListener('click', function() {
//         lines.forEach(function(element) {
//             element.classList.remove('active');
//         });
//         button.classList.add('active');
//         console.log(index)
//         goTo(index);
//         clearInterval(intervalId);
//         // setTimeout(intervalId = setInterval(nextSlide, 5000), 5000);
//     });
// });


//theme
const blocks = ["accept_cryptocurrencies_sec", "anonymous_payments", "payment_statistics", "real_time_block", "one_click_block", "send_coins_block"];
const sources = ["Cryptocurrencies", "Anonymous payments", "Stats", "Real-timeexchange", "One click to start", "Send coins to users"]

if (localStorage.theme == 'black') {
    setTheme("_dark", "moon")
} else if (localStorage.theme == 'white') {} else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("_dark", "moon")
    }
}

document.querySelector('.theme_btn').addEventListener('click', function() {
    if (document.querySelector('body').classList.contains("black")) {
        setTheme("", "sun")
        localStorage.setItem("theme", "white");
    } else {
        setTheme("_dark", "moon")
        localStorage.setItem("theme", "black");
    }
});

function setTheme(theme, mode) {
    if (theme == "_dark") {
        document.querySelector('body').classList.add('black');
    } else {
        document.querySelector('body').classList.remove('black');
    }
    document.querySelector('.top_phone').src = `./img/phone${theme}.png`;
    document.querySelector('.theme_btn use').setAttribute("xlink:href", `./img/mode.svg#${mode}`);
    blocks.forEach((block, index) => {
        document.querySelector(`.${block} source`).src = `./video/${sources[index] + theme}.mp4`;
        document.querySelector(`.${block} video`).load();
    });
}



//slider
var lines = document.querySelectorAll('.slider_btns .line');
const sliderLine = document.querySelector('.slider_sec');
var intervalId = setInterval(nextSlide, 4500);

lines.forEach(function(button, index) {
    button.addEventListener('click', function() {
        lines.forEach(function(element) {
            element.classList.remove('active');
        });
        button.classList.add('active');
        toggle(index);
        clearInterval(intervalId);
        setTimeout(intervalId = setInterval(nextSlide, 4500), 4500);
    });
});

function toggle(index) {
    var slides = document.querySelector(".slider_block").clientHeight;
    lines.forEach(function(element) {
        element.classList.remove('active');
    });
    var blockheight = window.getComputedStyle(sliderLine).getPropertyValue('height');
    if (blockheight == "595px") {
        console.log("mob");
        switch (index) {
            case 0:
                sliderLine.style.top = `0px`;
                lines[0].classList.add('active');
                break;
            case 1:
                sliderLine.style.top = `-${slides}px`;
                lines[1].classList.add('active');
                break;
            case 2:
                sliderLine.style.top = `-${slides+slides}px`;
                lines[2].classList.add('active');
                break;
            default:
                break;
        }
    } else {
        switch (index) {
            case 0:
                sliderLine.style.top = `${slides}px`;
                lines[0].classList.add('active');
                break;
            case 1:
                sliderLine.style.top = `0px`;
                lines[1].classList.add('active');
                break;
            case 2:
                sliderLine.style.top = `-${slides}px`;
                lines[2].classList.add('active');
                break;
            default:
                break;
        }
    }
}

function nextSlide() {
    var topValue = window.getComputedStyle(sliderLine).getPropertyValue('top');
    var blockheight = window.getComputedStyle(sliderLine).getPropertyValue('height');

    console.log(topValue, topValue.substring(0, 2))
    if (blockheight == "595px") {
        switch (topValue.substring(0, 2)) {
            case "-5":
                toggle(2)
                break;
            case "0p":
                toggle(1)
                break;
            case "-1":
                toggle(0)
                break;
            default:
                break;
        }
    } else {
        switch (topValue[0, 2]) {
            case "-":
                toggle(0)
                break;
            case "0":
                toggle(2)
                break;
            default:
                toggle(1)
                break;
        }
    }

}