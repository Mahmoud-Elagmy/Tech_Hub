let li = document.querySelectorAll("nav ul li");
function activeLink() {
    for (let l of li.values()) {
        l.addEventListener("mouseenter", () => {
            l.classList.add("active");
        });
        l.addEventListener("mouseleave", () => {
            l.classList.remove("active");
        });
    }
};

activeLink();

function showMenu() {

    li[3].onclick = () => {
        li[3].classList.toggle("clicked");
    }
};

showMenu();

window.addEventListener("scroll", () => {
    if (li[3].classList) {
        li[3].classList.remove("clicked");
    }
}, { passive: true });

window.onclick = (e) => {
    if (!li[3].contains(e.target)) {
        li[3].classList.remove("clicked");
    }
    if (!burgerMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        burgerMenu.classList.remove("active");
    }
}

let burgerBtn = document.querySelector(".burger-menu");
let burgerMenu = document.querySelector(".menu");

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
});

let imgLap = document.querySelectorAll(".laptops .image img");
let imgPc = document.querySelectorAll(".pc .image img");
function images(img) {
    if (img.length === 0) return;
    let cnt = 0;
    setInterval(() => {
        img[cnt].classList.remove("active");
        cnt = (cnt + 1) % img.length;
        img[cnt].classList.add("active");
    }, 5000);
};

images(imgLap);
images(imgPc);

let hr = document.querySelectorAll("hr");

let Lap = document.querySelector(".laptops");
let Pc = document.querySelector(".pc");
let about = document.querySelector(".about");

let sections = [Lap, Pc, about];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let idx = sections.indexOf(entry.target);
        if (idx === -1 || !hr[idx]) return;
        if (entry.isIntersecting) {
            hr[idx].classList.add("active");
        }
    });
}, {
    threshold: 0.5
});

sections.forEach((section) => {
    observer.observe(section);
});

let upBtn = document.querySelector(".up");

let time = 0;
window.addEventListener("scroll", () => {
    if (time) return;

    time = setTimeout(() => {
        time = 0;
        if (window.scrollY > 100) {
            upBtn.classList.add("active");
        }
        else {
            upBtn.classList.remove("active");
        }
    }, 100);
});

upBtn.onclick = () => {
    window.scrollTo(0, 0);
}