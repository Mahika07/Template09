function readmore(element) {
    let projectContent = element.closest('.project_content');
    let details = projectContent.querySelector('.project_details');
    let plusIcon = projectContent.querySelector('.fa-plus');
    let minusIcon = projectContent.querySelector('.fa-minus');
    let project_icon = projectContent.querySelector('.project_icons');

    details.style.display = 'block';
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
    project_icon.style.opacity = '1';
}

function readless(element) {
    let projectContent = element.closest('.project_content');
    let details = projectContent.querySelector('.project_details');
    let plusIcon = projectContent.querySelector('.fa-plus');
    let minusIcon = projectContent.querySelector('.fa-minus');
    let project_icon = projectContent.querySelector('.project_icons');

    details.style.display = 'none';
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
    project_icon.style.opacity = '0';
}
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})
