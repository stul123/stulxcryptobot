var slides = document.querySelectorAll(".slider_block");
var lines = document.querySelectorAll('.slider_btns .line');
var sec = document.querySelector('.slider_sec');
var currentSlide = 0;
var intervalId;

function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove("active");
    console.log(slides[slideIndex], slides[currentSlide])
    setTimeout(function() {
        let currentSlidev2 = currentSlide
        if (currentSlide == 0) {
            currentSlidev2 = 3;
        }
        console.log(slides[slideIndex], slides[currentSlidev2 - 1], currentSlidev2)
        slides[currentSlidev2 - 1].insertAdjacentElement("beforebegin", slides[slideIndex]);
        slides[slideIndex].classList.add("active");
    }, 300);
    currentSlide = slideIndex;
}

function goTo(slideIndex) {
    slides.forEach(function(element) {
        element.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
    // if (currentSlide == 0) {
    //     currentSlide = 1
    // }
    // slides[currentSlide].classList.remove("active");
    // console.log(slides[slideIndex], currentSlide)
    // let currentSlidev2 = currentSlide
    // if (currentSlide == 0) {
    //     currentSlidev2 = 3;
    // }
    // console.log(slides[slideIndex], slides[currentSlidev2], currentSlidev2)
    // slides[currentSlidev2].insertAdjacentElement("beforebegin", slides[slideIndex]);
    // slides[slideIndex].classList.add("active");
    // currentSlide = slideIndex;
}

function nextSlide() {
    var nextSlideIndex = (currentSlide + 1) % slides.length;
    lines[currentSlide].classList.remove('active');
    lines[nextSlideIndex].classList.add('active');
    goToSlide(nextSlideIndex);
}


// intervalId = setInterval(nextSlide, 5000);


lines.forEach(function(button, index) {
    button.addEventListener('click', function() {
        lines.forEach(function(element) {
            element.classList.remove('active');
        });
        button.classList.add('active');
        console.log(index)
        goTo(index);
        clearInterval(intervalId);
        // setTimeout(intervalId = setInterval(nextSlide, 5000), 5000);
    });
});


//theme

if (localStorage.theme == 'black') {
    setBlackTheme();
} else if (localStorage.theme == 'white') {} else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setBlackTheme();
    }
}
document.querySelector('.theme_btn').addEventListener('click', function() {
    if (document.querySelector('body').classList.contains("black")) {
        setWhiteTheme();
        localStorage.setItem("theme", "white");
    } else {
        setBlackTheme();
        localStorage.setItem("theme", "black");
    }
});

function setBlackTheme() {
    document.querySelector('body').classList.add('black');
    document.querySelector('.theme_btn img').src = './img/mode_black.svg';
    document.querySelector('.top_phone').src = './img/phone_black.png';
    document.querySelector('.populare img').src = './img/photo-bots_black.png';
    document.querySelector('.accept_cryptocurrencies_sec source').src = './video/Cryptocurrencies_dark.mp4';
    document.querySelector('.accept_cryptocurrencies_sec video').load();
    document.querySelector('.anonymous_payments source').src = './video/Anonymous payments_dark.mp4';
    document.querySelector('.anonymous_payments video').load();
    document.querySelector('.payment_statistics source').src = './video/Stats_dark.mp4';
    document.querySelector('.payment_statistics video').load();
    document.querySelector('.real_time_block source').src = './video/Real-timeexchange_dark.mp4';
    document.querySelector('.real_time_block video').load();
    document.querySelector('.one_click_block source').src = './video/One click to start_dark.mp4';
    document.querySelector('.one_click_block video').load();
    document.querySelector('.send_coins_block source').src = './video/Send coins to users_dark.mp4';
    document.querySelector('.send_coins_block video').load();
}

function setWhiteTheme() {
    document.querySelector('body').classList.remove('black');
    document.querySelector('.theme_btn img').src = './img/mode.svg';
    document.querySelector('.top_phone').src = './img/phone.png';
    document.querySelector('.populare img').src = './img/photo-bots.png';
    document.querySelector('.accept_cryptocurrencies_sec source').src = './video/Cryptocurrencies.mp4';
    document.querySelector('.accept_cryptocurrencies_sec video').load();
    document.querySelector('.anonymous_payments source').src = './video/Anonymous payments.mp4';
    document.querySelector('.anonymous_payments video').load();
    document.querySelector('.payment_statistics source').src = './video/Stats.mp4';
    document.querySelector('.payment_statistics video').load();
    document.querySelector('.real_time_block source').src = './video/Real-timeexchange.mp4';
    document.querySelector('.real_time_block video').load();
    document.querySelector('.one_click_block source').src = './video/One click to start.mp4';
    document.querySelector('.one_click_block video').load();
    document.querySelector('.send_coins_block source').src = './video/Send coins to users.mp4';
    document.querySelector('.send_coins_block video').load();
}