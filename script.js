const sections = document.querySelectorAll(".section")
const buttons = document.querySelectorAll(".button")
const section1 = document.querySelector(".section-1")
const section2 = document.querySelector(".section-2")
const back = document.querySelector(".back")

sections.forEach(section => {

    section.addEventListener("mouseenter", e => {
        let currSection = e.target;
        let sectionInfo = e.target.classList;

        if (sectionInfo.contains('section-1')) {
            currSection.style.minWidth = "75vw";

        }
        if (sectionInfo.contains('section-2')) {
            currSection.style.minWidth = "75vw";

        }

    })
})

sections.forEach(section => {

    section.addEventListener("mouseleave", e => {
        let sectionInfo = e.target.classList;
        let currSection = e.target;

        if (sectionInfo.contains('section-1')) {
            currSection.style.minWidth = "20vw";
        }
        if (sectionInfo.contains('section-2')) {
            currSection.style.minWidth = "20vw";
        }
    })
})

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const btnClass = e.target.classList;

        if (btnClass.contains('ios')) {
            section1.style.minWidth = '100vw'
            section2.style.minWidth = '0vw'
            section2.style.overflow = 'hidden'
        }

        if (btnClass.contains('android')) {
            section2.style.minWidth = '100vw'
            section1.style.minWidth = '0vw'
            section2.style.overflow = 'hidden'
        }
    })
})

back.addEventListener("click", e => {
    section1.style.minWidth = '20vw'
    section2.style.minWidth = '20vw'
})