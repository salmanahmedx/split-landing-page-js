const sections = document.querySelectorAll(".section")
const button = document.querySelector("button")

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

