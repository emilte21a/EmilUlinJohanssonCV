// document.getElementById('aboutSection').addEventListener('click', function () {
//     moveToSection('aboutSectionContent');
// });
// document.getElementById('projectSection').addEventListener('click', function () {
//     moveToSection('projectSectionContent');
// });


function moveToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 200;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });


    } else {
        console.error('Section not found:', sectionId);
    }
}

