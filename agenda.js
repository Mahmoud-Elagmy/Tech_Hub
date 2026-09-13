let bck = document.querySelector(".back");

bck.onclick = () => {
    window.location.href = "index.html";
}

let cpu = document.querySelector(".cpu");
let gpu = document.querySelector(".gpu");
let ram = document.querySelector(".ram");
let storage = document.querySelector(".storage");
let motherboard = document.querySelector(".motherboard");
let battery = document.querySelector(".battery");
let material = document.querySelector(".material");

let sections = [cpu, gpu, motherboard, ram, storage, battery, material];
let specs = document.querySelectorAll(".specs");
let usages = document.querySelectorAll(".usages");

sections.forEach((section) => {
    section.children[0].onclick = () => {
        const wasActive = section.classList.contains("active");
        activate(section, sections.indexOf(section));
        if (!wasActive) {
            sections.forEach((sec) => {
                if (sec !== section) {
                    sec.classList.add("hidden");
                }
            });
        } else {
            sections.forEach((sec) => {
                sec.classList.remove("hidden");
            });
        }
    };
})

function activate(comp, idx) {
    if (comp.classList.contains("active")) {
        comp.classList.remove("active");
        specs[idx].style.display = "none";
        usages[idx].style.display = "none";
    }
    else {
        comp.classList.add("active");
        specs[idx].style.display = "flex";
        specs[idx].scrollIntoView({
            behavior: "smooth"
        });
        usages[idx].style.display = "flex";
    }
}

let lis = document.querySelectorAll(".usages ul:first-of-type li");
let lis2 = document.querySelectorAll(".usages ul:nth-of-type(2) li");


lis.forEach((li) => {
    li.onclick = () => {
        if (li.classList.contains("active")) {
            li.classList.remove("active");
            lis2[Array.from(lis).indexOf(li)].classList.remove("active");
            lis.forEach((l) => {
                l.classList.remove("hidden");
            });
            lis2.forEach((l) => {
                l.classList.remove("active");
            });
        }
        else {
            lis.forEach((l) => {
                l.classList.remove("active");
                l.classList.add("hidden");
            });
            lis2.forEach((l) => {
                l.classList.remove("active");
            })
            li.classList.add("active");
            li.classList.remove("hidden");
            lis2[Array.from(lis).indexOf(li)].classList.add("active");
        }
    }
})