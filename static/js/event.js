let observer = new IntersectionObserver((entries) => {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            element.target.parentElement.lastElementChild.style.opacity = "1";
            if (window.innerWidth > 850) {
                element.target.parentElement.lastElementChild.style.transform = "translateX(0px)";
            }
            else {
                element.target.parentElement.lastElementChild.style.transform = "translateY(-300px)";
            }
            element.target.parentElement.lastElementChild.style.transition = "all 1s ease";
        }
        else {
            element.target.parentElement.lastElementChild.style.opacity = "0";
            if (window.innerWidth > 850) {
                element.target.parentElement.lastElementChild.style.transform = "translateX(-350px)";
            }
            else {
                element.target.parentElement.lastElementChild.style.transform = "translateY(-550px)";
            }
            // element.target.parentElement.lastElementChild.style.transform = "translateX(-350px)";
            element.target.parentElement.lastElementChild.style.transition = "all 0.5s ease";


        }
    })
});

const item = document.getElementsByClassName('event');
for (let i = 0; i < item.length; i++) {
    observer.observe(item[i].firstElementChild)
}