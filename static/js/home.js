let leftbtn = document.getElementById('left');
let rightbtn = document.getElementById('right');
let fest = document.getElementsByClassName('mained');

console.log(leftbtn)
let count = 1;
fest[count].style.display = 'flex';

let timeinterval = setInterval(right, 5000);

leftbtn.addEventListener('click', left)
function left() {
    fest[count].style.display = 'none';
    count--;
    if (count >= 0) {
        fest[count].style.display = 'flex';
    }
    else {
        count = 2;
        fest[count].style.display = 'flex';
    }
}
rightbtn.addEventListener('click', right)
function right() {
    fest[count].style.display = 'none';
    count++;
    if (count <= 2) {
        fest[count].style.display = 'flex';
    }
    else {
        count = 0;
        fest[count].style.display = 'flex';
    }
}