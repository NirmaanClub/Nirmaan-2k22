let observer = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            element.target.firstElementChild.style.opacity = "1";
            if (window.innerWidth > 650) {
                element.target.firstElementChild.style.transform = "translateX(0px)";
            }
            else {
                element.target.firstElementChild.style.transform = "translateY(0px)";
            }
            element.target.firstElementChild.style.transition = "all 1s ease";
        }
        else {
            element.target.firstElementChild.style.opacity = "0";
            if (window.innerWidth > 650) {
                element.target.firstElementChild.style.transform = "translateX(-350px)";
            }
            else {
                element.target.firstElementChild.style.transform = "translateY(-100vh)";
            }
            element.target.firstElementChild.style.transition = "all 0.5s ease";
        }
    })
});

const item = document.getElementsByClassName('conti');
// item[0].parentElement.lastElementChild.lastElementChild
for (let i = 0; i < item.length; i++) {
    observer.observe(item[0])
}