//slider
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
theme