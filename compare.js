const specDictionary = {
    cpu: "Central Processing Unit: The 'brain' of the laptop. More cores and a higher clock speed (GHz) mean it can process complex code and heavy applications much faster.",
    gpu: "Graphics Processing Unit: Handles rendering images, video, and 3D graphics. Essential for gaming, video editing, and rendering CSS/WebGL animations.",
    ram: "Random Access Memory: The short-term memory. 8GB is basic, 16GB is the sweet spot for multitasking and coding, and 32GB+ is for heavy virtualization or 4K editing.",
    storage: "Where your files and OS live. NVMe M.2 SSDs are the modern standard, offering blazing fast boot times compared to older HDDs.",
    display: "The screen. Hz (Hertz) determines how smooth motion looks (144Hz is great for gaming). IPS panels offer the best color accuracy and viewing angles.",
    battery: "Measured in Wh (Watt-hours). A higher number means a larger physical battery, though high-end GPUs will drain it much faster.",
    ports: "The physical connections available for external monitors, mice, keyboards, and fast data transfer (like Thunderbolt or USB-C).",
    weight: "Portability factor. Anything under 1.5kg is considered highly portable (ultrabook), while gaming rigs usually sit between 2.2kg and 3kg."
};



let objs = JSON.parse(localStorage.getItem("objs")) || [];

let grid = document.querySelector(".compare");

grid.style.gridTemplateColumns = `repeat(${objs.length}, minmax(200px, 1fr))`;

if (objs.length == 0) {
    grid.innerHTML = `<h2>Nothing to compare</h2>`;
}

else {
    grid.innerHTML = objs.map((l) => `
    <div class="col">
    <button type="button" class="remove">Remove</button>
    <p class="id" style="display: none">${l.id}</p>
    <img src="${l.image}" alt="${l.name}">
    <h2>${l.name}</h2>
    <p>${l.brand}</p>
    <p class="price">${l.price}</p>
    <div class="item cpu"><span>CPU: </span><span>${l.cpu}</span><span>?</span><span>${l.specDetails.cpu}</span></div>
    <div class="item gpu"><span>GPU: </span><span>${l.gpu}</span><span>?</span><span>${l.specDetails.gpu}</span></div>
    <div class="item ram"><span>RAM: </span><span>${l.ram}</span><span>?</span><span>${l.specDetails.ram}</span></div>
    <div class="item"><span>RAM Upgrade: </span><span>${l.ramUpgrade}</span></div>
    <div class="item storage"><span>Storage: </span><span>${l.storage}</span><span>?</span><span>${l.specDetails.storage}</span></div>
    <div class="item dis"><span>Display: </span><span>${l.display}</span><span>?</span><span>${l.specDetails.display}</span></div>
    <div class="item batt"><span>Battery: </span><span>${l.battery}</span><span>?</span><span>${l.specDetails.battery}</span></div>
    <div class="item"><span>Ports: </span><span>${l.ports}</span></div>
    <div class="item weight"><span>Weight: </span><span>${l.weight}</span></div>
    <div class="item"><span>Use Cases: </span><span>${l.useCases.join("<br><br>")}</span></div>
    <div class="item"><span>Problems: </span><span>${l.problems.join("<br><br>")}</span></div>
    <div class="item"><span>Notes:</span><span>${l.hiddenNotes.join("<br><br>")}</span></div>
    </div>
    `).join("");
};

let remove = document.querySelectorAll(".remove");

for (let r of remove) {
    r.onclick = () => {
        r.parentElement.remove();
        let objs = JSON.parse(localStorage.getItem("objs"));
        for (let o of objs) {
            if (o.name == r.parentElement.querySelector("h2").textContent) {
                objs.splice(objs.indexOf(o), 1);
                localStorage.setItem("objs", JSON.stringify(objs));
            }
        }
        let comps = JSON.parse(localStorage.getItem("compare"));
        for (let c of comps) {
            if (c == r.parentElement.querySelector(".id").textContent) {
                comps.splice(comps.indexOf(c), 1);
                localStorage.setItem("compare", JSON.stringify(comps));
            }
        }
        window.location.reload();
    }
}

let icons = document.querySelectorAll(".item span:nth-child(3)");

for (let i of icons) {
    let time;
    i.onclick = () => {
        let par = i.parentElement;
        let c = i.closest(".col");
        if (i.classList.contains("active")) {
            clearTimeout(time);
            i.classList.remove("active");
            par.style.zIndex = "";
            c.style.zIndex = "";
            return;
        }
        icons.forEach((icon) => {
            if (icon !== i && icon.classList.contains("active")) {
                icon.classList.remove("active");
                icon.parentElement.style.zIndex = "";
                icon.closest(".col").style.zIndex = "";
            }
        });
        clearTimeout(time);
        i.classList.add("active");
        par.style.zIndex = "999";
        c.style.zIndex = "999";
        time = setTimeout(() => {
            i.classList.remove("active");
            par.style.zIndex = "";
            c.style.zIndex = "";
        }, 4000);
    };
};

let col1 = grid.children[0];
let col2 = grid.children[1];
let col3 = grid.children[2];

// Give empty objects extreme defaults so they don't accidentally win the math conditions
if (!objs[0]) objs[0] = { priceVal: Infinity, weightVal: Infinity, storageVal: -1, displayScore: -1, ramVal: -1, cpuPower: -1, gpuPower: -1, batteryVal: -1 };
if (!objs[1]) objs[1] = { priceVal: Infinity, weightVal: Infinity, storageVal: -1, displayScore: -1, ramVal: -1, cpuPower: -1, gpuPower: -1, batteryVal: -1 };
if (!objs[2]) objs[2] = { priceVal: Infinity, weightVal: Infinity, storageVal: -1, displayScore: -1, ramVal: -1, cpuPower: -1, gpuPower: -1, batteryVal: -1 };

function compare(el1, el2, el3, type, values) {
    const nums = values.map((value) => Number(value) || 0);
    let minValue;
    if (type == "price" || type == "weight") minValue = Math.min(...nums);
    else minValue = Math.max(...nums);
    [el1, el2, el3].forEach((el, index) => {
        if (!el) return;
        el.style.color = nums[index] === minValue ? "green" : "";
    });
};

if (col1) {
    for (let i = 0; i < col1.children.length; ++i) {
        let el1 = col1 ? col1.children[i] : null;
        let el2 = col2 ? col2.children[i] : null;
        let el3 = col3 ? col3.children[i] : null;

        if (!el1) continue;

        if (el1.classList.contains("price")) {
            compare(el1, el2, el3, "price", [objs[0]?.priceVal ?? Infinity, objs[1]?.priceVal ?? Infinity, objs[2]?.priceVal ?? Infinity]);
        }
        else if (el1.classList.contains("weight")) {
            compare(el1, el2, el3, "weight", [objs[0]?.weightVal ?? Infinity, objs[1]?.weightVal ?? Infinity, objs[2]?.weightVal ?? Infinity]);
        }
        else if (el1.classList.contains("storage")) {
            compare(el1, el2, el3, "storage", [objs[0]?.storageVal ?? -1, objs[1]?.storageVal ?? -1, objs[2]?.storageVal ?? -1]);
        }
        else if (el1.classList.contains("dis")) {
            compare(el1, el2, el3, "display", [objs[0]?.displayScore ?? -1, objs[1]?.displayScore ?? -1, objs[2]?.displayScore ?? -1]);
        }
        else if (el1.classList.contains("ram")) {
            compare(el1, el2, el3, "ram", [objs[0]?.ramVal ?? -1, objs[1]?.ramVal ?? -1, objs[2]?.ramVal ?? -1]);
        }
        else if (el1.classList.contains("cpu")) {
            compare(el1, el2, el3, "cpu", [objs[0]?.cpuPower ?? -1, objs[1]?.cpuPower ?? -1, objs[2]?.cpuPower ?? -1]);
        }
        else if (el1.classList.contains("gpu")) {
            compare(el1, el2, el3, "gpu", [objs[0]?.gpuPower ?? -1, objs[1]?.gpuPower ?? -1, objs[2]?.gpuPower ?? -1]);
        }
        else if (el1.classList.contains("batt")) {
            compare(el1, el2, el3, "battery", [objs[0]?.batteryVal ?? -1, objs[1]?.batteryVal ?? -1, objs[2]?.batteryVal ?? -1]);
        }
    }
}

let backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
    window.location.href = "laptops.html";
});
