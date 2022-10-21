const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActivelist()
        slide.classList.add('active')
    })
}

function clearActivelist() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}