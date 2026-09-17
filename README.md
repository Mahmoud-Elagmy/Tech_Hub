# Tech Hub

A modern, responsive web application designed for hardware enthusiasts and students to explore computer system architecture, browse detailed laptop specifications, and perform side-by-side component comparisons.

![Tech Hub Banner](https://img.shields.io/badge/Status-Active-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Key Features

* **System Architecture Agenda:** An exhaustive reference guide detailing core PC components (CPU, GPU, Motherboard, RAM, Storage, Battery, and Chassis/Materials). Includes critical technical specifications, deep-dive explanations, and recommended use cases tailored for engineering, coding, and gaming workloads.
* **Dynamic Laptop Filtering:** Real-time brand filtering integrated with a dynamic price threshold filter, allowing users to effortlessly narrow down models by budget and manufacturer without reloading the page.
* **Comparison Engine:** A persistent comparison tool powered by browser `localStorage`. Users can queue up to 3 laptops simultaneously, track selection limits, and inspect comparative metrics.
* **Interactive Modal Inspector:** Clicking any hardware or laptop card triggers a full-screen detailed view popup displaying deep specifications such as core counts, VRAM bandwidth, display color gamuts, port selections, and physical weight.
* **Optimized Mobile UX:** Custom touch-action handlers removing default mobile tap highlights and ensuring a smooth, fluid experience across smartphones, tablets, and desktop displays.

---

## Tech Stack

* **Markup:** Semantic HTML5
* **Styling:** Custom CSS3 (Flexbox/Grid architecture), Normalize.css, and Bootstrap 5 Utility classes for modular spacing and layout helpers.
* **Icons:** Font Awesome 6 and Bootstrap Icons
* **Scripting:** Vanilla JavaScript (ES6+), leveraging DOM manipulation, event delegation, and `localStorage` state management.

---

## Project Structure

```text
├── CSS/
│   ├── agenda.css      # Component agenda layout and typography styles
│   ├── master.css      # Global variables, reset, and core layout rules
│   ├── all.min.css     # Font Awesome icon stylesheet
│   └── normalize.css   # Cross-browser CSS normalization
├── assets/             # Hardware product imagery and vector graphics
├── agenda.html         # System architecture & component breakdown view
├── index.html          # Main laptop catalog and filtering interface
├── compare.html        # Side-by-side hardware comparison view
└── agenda.js           # Filtering, UI state, and storage synchronization logic
