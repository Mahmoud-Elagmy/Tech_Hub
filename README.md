<div align="center">

# 💻 Tech Hub

**An interactive system architecture guide and advanced hardware comparison engine.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg?style=for-the-badge)](https://github.com/your-username/tech-hub/pulls)

[Live Demo](https://mahmoud-elagmy.github.io/Tech_Hub) · [Report Bug](https://github.com/mahmoud-elagmy/Tech_Hub/issues) · [Request Feature](https://github.com/mahmoud-elagmy/Tech_Hub/issues)

</div>

---

## 🚀 About the Project

**Tech Hub** is a frontend web application designed for hardware enthusiasts, computer science students, and PC builders. It serves two primary functions:
1. **An Educational Agenda:** Deep-diving into the foundational components of modern computing (CPU, GPU, RAM, NVMe, etc.).
2. **A Hardware Catalog & Comparison Tool:** Allowing users to dynamically filter high-end laptops by brand and price, and compare up to three devices side-by-side using persistent local storage.

---

## ✨ Key Features

* **Advanced Dynamic Filtering:** Seamlessly filter the hardware database by manufacturer (Asus, HP, Acer, Lenovo, Dell, MSI, Apple) and strict pricing thresholds without reloading the DOM.
* **Persistent Comparison Engine:** Add or remove up to 3 laptops to a custom comparison view. State is managed via `localStorage`, ensuring data persists across browser sessions and page reloads.
* **Interactive Modal Inspector:** Clicking any hardware card dynamically mounts a detailed overlay displaying core counts, VRAM limits, color gamuts (sRGB/DCI-P3), and I/O ports.
* **Educational Hardware Agenda:** A dedicated curriculum section explaining the architectural roles and recommended real-world use cases for specific components (e.g., distinguishing between Video Encoding workloads and 3D Rasterization).
* **Responsive & Mobile-Optimized:** Built with native CSS Flexbox/Grid and custom `-webkit-tap-highlight-color` fixes to ensure a flawless experience on touch devices.

---

## 🛠 Tech Stack

This project is built purely with vanilla web technologies to ensure maximum performance and zero dependency bloat.

* **Frontend Structure:** Semantic `HTML5`
* **Styling & Layout:** Custom `CSS3`, `Normalize.css`, CSS Variables for theming, and specific `Bootstrap 5` utility classes (`bootstrap-utilities.min.css`) for grid alignment.
* **Icons & Assets:** `Font Awesome 6` (CDN) and optimized inline `SVGs` for flawless scaling.
* **Logic & State:** Vanilla `JavaScript` (ES6+), DOM Manipulation, and Browser `localStorage` API.

---

## 📂 Project Architecture

```text
tech-hub/
├── CSS/
│   ├── agenda.css        # Specific layouts for the hardware curriculum
│   ├── master.css        # Global CSS variables, reset, and core UI styles
│   ├── all.min.css       # Localized Font Awesome styling
│   └── normalize.css     # Cross-browser rendering consistency
├── assets/               # Product webp images and vector graphics
├── JS/
│   └── agenda.js         # Core logic: Filtering, modals, and comparison state
├── index.html            # Primary catalog and filtering dashboard
├── agenda.html           # Hardware component educational breakdown
└── compare.html          # Custom grid rendering selected devices side-by-side
