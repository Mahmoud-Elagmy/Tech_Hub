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
    <img src="${l.image}" alt="${l.name}">
    <h2>${l.name}</h2>
    <p>${l.brand}</p>
    <p class="price">${l.price}</p>
    <div class="item cpu"><span>CPU: </span><span>${l.cpu}</span><span>?</span><span>${l.specDetails.cpu}</span></div>
    <div class="item gpu"><span>GPU: </span><span>${l.gpu}</span><span>?</span><span>${l.specDetails.gpu}</span></div>
    <div class="item ram"><span>RAM: </span><span>${l.ram}</span><span>?</span><span>${l.specDetails.ram}</span></div>
    <div class="item storage"><span>Storage: </span><span>${l.storage}</span><span>?</span><span>${l.specDetails.storage}</span></div>
    <div class="item dis"><span>Display: </span><span>${l.display}</span><span>?</span><span>${l.specDetails.display}</span></div>
    <div class="item batt"><span>Battery: </span><span>${l.battery}</span><span>?</span><span>${l.specDetails.battery}</span></div>
    <div class="item"><span>Ports: </span><span>${l.ports}</span></div>
    <div class="item weight"><span>Weight: </span><span>${l.weight}</span></div>
    <div class="item"><span>Use Cases: </span><span>${l.useCases.join("<br><br>")}</span></div>
    <div class="item"><span>Problems: </span><span>${l.problems.join("<br><br>")}</span></div>
    </div>
    `).join("");
};

let icons = document.querySelectorAll(".item span:nth-child(3)");

let text = document.querySelectorAll(".item span:nth-child(4)");

for (let i of icons) {
    i.onclick = () => {
        i.classList.toggle("active");
    }
}

let col1 = grid.children[0];
let col2 = grid.children[1];
let col3 = grid.children[2];

for (let i = 0; i < col1.children.length; ++i) {
    let el = col1.children[i];
    if (el.classList.contains("price")) {
        let p1 = objs[0].priceVal;
        let p2 = objs[1].priceVal;
        let p3 = objs[2].priceVal;
        if (p1 <= p2 && p1 <= p3) {
            el.style.color = "green";
            if (p1 == p2) {
                col2.children[i].style.color = "green";
            }
            if (p1 == p3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (p2 <= p1 && p2 <= p3) {
            col2.children[i].style.color = "green";
            if (p2 == p1) {
                el.children[i].style.color = "green";
            }
            if (p2 == p3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (p3 <= p1 && p3 <= p2) {
            col3.children[i].style.color = "green";
            if (p3 == p1) {
                el.children[i].style.color = "green";
            }
            if (p3 == p2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("weight")) {
        let w1 = objs[0].weightVal;
        let w2 = objs[1].weightVal;
        let w3 = objs[2].weightVal;
        if (w1 <= w2 && w1 <= w3) {
            el.style.color = "green";
            if (w1 == w2) {
                col2.children[i].style.color = "green";
            }
            if (w1 == w3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (w2 <= w1 && w2 <= w3) {
            col2.children[i].style.color = "green";
            if (w2 == w1) {
                el.children[i].style.color = "green";
            }
            if (w2 == w3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (w3 <= w1 && w3 <= w2) {
            col3.children[i].style.color = "green";
            if (w3 == w1) {
                el.children[i].style.color = "green";
            }
            if (w3 == w2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("storage")) {
        let s1 = objs[0].storageVal;
        let s2 = objs[1].storageVal;
        let s3 = objs[2].storageVal;
        if (s1 >= s2 && s1 >= s3) {
            el.style.color = "green";
            if (s1 == s2) {
                col2.children[i].style.color = "green";
            }
            if (s1 == s3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (s2 >= s1 && s2 >= s3) {
            col2.children[i].style.color = "green";
            if (s2 == s1) {
                el.children[i].style.color = "green";
            }
            if (s2 == s3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (s3 >= s1 && s3 >= s2) {
            col3.children[i].style.color = "green";
            if (s3 == s1) {
                el.children[i].style.color = "green";
            }
            if (s3 == s2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("dis")) {
        let d1 = objs[0].displayScore;
        let d2 = objs[1].displayScore;
        let d3 = objs[2].displayScore;
        if (d1 >= d2 && d1 >= d3) {
            el.style.color = "green";
            if (d1 == d2) {
                col2.children[i].style.color = "green";
            }
            if (d1 == d3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (d2 >= d1 && d2 >= d3) {
            col2.children[i].style.color = "green";
            if (d2 == d1) {
                el.children[i].style.color = "green";
            }
            if (d2 == d3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (d3 >= d1 && d3 >= d2) {
            col3.children[i].style.color = "green";
            if (d3 == d1) {
                el.children[i].style.color = "green";
            }
            if (d3 == d2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("ram")) {
        let r1 = objs[0].ramVal;
        let r2 = objs[1].ramVal;
        let r3 = objs[2].ramVal;
        if (r1 >= r2 && r1 >= r3) {
            el.style.color = "green";
            if (r1 == r2) {
                col2.children[i].style.color = "green";
            }
            if (r1 == r3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (r2 >= r1 && r2 >= r3) {
            col2.children[i].style.color = "green";
            if (r2 == r1) {
                el.children[i].style.color = "green";
            }
            if (r2 == r3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (r3 >= r1 && r3 >= r2) {
            col3.children[i].style.color = "green";
            if (r3 == r1) {
                el.children[i].style.color = "green";
            }
            if (r3 == r2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("cpu")) {
        let c1 = objs[0].cpuPower;
        let c2 = objs[1].cpuPower;
        let c3 = objs[2].cpuPower;
        if (c1 >= c2 && c1 >= c3) {
            el.style.color = "green";
            if (c1 == c2) {
                col2.children[i].style.color = "green";
            }
            if (c1 == c3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (c2 >= c1 && c2 >= c3) {
            col2.children[i].style.color = "green";
            if (c2 == c1) {
                el.children[i].style.color = "green";
            }
            if (c2 == c3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (c3 >= c1 && c3 >= c2) {
            col3.children[i].style.color = "green";
            if (c3 == c1) {
                el.children[i].style.color = "green";
            }
            if (c3 == c2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("gpu")) {
        let g1 = objs[0].gpuPower;
        let g2 = objs[1].gpuPower;
        let g3 = objs[2].gpuPower;
        if (g1 >= g2 && g1 >= g3) {
            el.style.color = "green";
            if (g1 == g2) {
                col2.children[i].style.color = "green";
            }
            if (g1 == g3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (g2 >= g1 && g2 >= g3) {
            col2.children[i].style.color = "green";
            if (g2 == g1) {
                el.children[i].style.color = "green";
            }
            if (g2 == g3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (g3 >= g1 && g3 >= g2) {
            col3.children[i].style.color = "green";
            if (g3 == g1) {
                el.children[i].style.color = "green";
            }
            if (g3 == g2) {
                col2.children[i].style.color = "green";
            }
        }
    }
    else if (el.classList.contains("batt")) {
        let b1 = objs[0].batteryVal;
        let b2 = objs[1].batteryVal;
        let b3 = objs[2].batteryVal;
        if (b1 >= b2 && b1 >= b3) {
            el.style.color = "green";
            if (b1 == b2) {
                col2.children[i].style.color = "green";
            }
            if (b1 == b3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (b2 >= b1 && b2 >= b3) {
            col2.children[i].style.color = "green";
            if (b2 == b1) {
                el.children[i].style.color = "green";
            }
            if (b2 == b3) {
                col3.children[i].style.color = "green";
            }
        }
        else if (b3 >= b1 && b3 >= b2) {
            col3.children[i].style.color = "green";
            if (b3 == b1) {
                el.children[i].style.color = "green";
            }
            if (b3 == b2) {
                col2.children[i].style.color = "green";
            }
        }
    }
}

