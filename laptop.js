const laptopsData = {
    // ==========================================
    // ASUS
    // ==========================================
    asus: [
        {
            id: "asus-tuf-a15", brand: "Asus", name: "TUF Gaming A15", image: "/assets/asustuf.webp",
            price: "EGP 58,000", priceVal: 58000,
            cpu: "AMD Ryzen 7 7735HS", cpuPower: 78,
            gpu: "RTX 4060 8GB", gpuPower: 80,
            ram: "16GB DDR5", ramVal: 16,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "15.6 FHD 144Hz", displayScore: 144,
            battery: "90Wh", batteryVal: 90,
            ports: "USB4, Type-C, 2x USB-A, HDMI 2.1",
            weight: "2.2 kg", weightVal: 2.2,
            hiddenNotes: ["The 90Wh battery is massive for a gaming laptop.", "Military-grade durability makes it great for travel."],
            problems: ["Screen color accuracy (sRGB) is too low for professional photo/video editing.", "Cooling fans get very loud on 'Turbo' mode."],
            useCases: ["1080p AAA Gaming", "Budget 3D rendering", "Computer Science student workloads"],
            specDetails: {
                cpu: "8 cores / 16 threads provide high efficiency and multitasking power without draining the battery instantly.",
                gpu: "The RTX 4060 can utilize DLSS 3 for high frame rates in modern titles.",
                ram: "DDR5 memory speeds up CPU processing times significantly compared to older DDR4.",
                storage: "1TB provides ample space for 10+ modern large-scale games.",
                display: "144Hz is essential for esports titles like Valorant or CS2 for smooth visual feedback.",
                battery: "90Wh is incredibly large, allowing for 8+ hours of light web browsing despite being a gaming laptop."
            }
        },
        {
            id: "asus-rog-g14", brand: "Asus", name: "ROG Zephyrus G14", image: "/assets/asusrog.webp",
            price: "EGP 85,000", priceVal: 85000,
            cpu: "AMD Ryzen 9 7940HS", cpuPower: 90,
            gpu: "RTX 4070 8GB", gpuPower: 90,
            ram: "32GB DDR5", ramVal: 32,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "14.0 QHD+ 165Hz Nebula", displayScore: 205,
            battery: "76Wh", batteryVal: 76,
            ports: "2x Type-C, 2x USB-A, HDMI 2.1, MicroSD",
            weight: "1.65 kg", weightVal: 1.65,
            hiddenNotes: ["One of the most powerful 14-inch laptops in the world.", "The AniMe Matrix display on the lid drains battery; turn it off when unplugged."],
            problems: ["Chassis gets noticeably hot above the keyboard during intensive tasks.", "Very expensive compared to larger 15-inch models with the same specs."],
            useCases: ["Portable heavy gaming", "Content creation on the go", "Professional software development"],
            specDetails: {
                cpu: "Ryzen 9 is a top-tier processor built for heavy lifting like local server hosting and compiling massive codebases.",
                gpu: "RTX 4070 in a 14-inch chassis allows for 1440p gaming, which is rare for its size.",
                ram: "32GB guarantees you can run Docker, multiple IDEs, and heavy browser tabs simultaneously without slowing down.",
                storage: "Gen4 SSD speeds mean practically zero loading times for games and software.",
                display: "The Nebula QHD+ display offers extreme color accuracy, perfect for graphic designers.",
                battery: "76Wh is perfectly optimized with the AMD chip for excellent all-day battery life."
            }
        },
        {
            id: "asus-strix-g16", brand: "Asus", name: "ROG Strix G16", image: "/assets/asusrogflow.webp",
            price: "EGP 78,000", priceVal: 78000,
            cpu: "Intel Core i7-13650HX", cpuPower: 90,
            gpu: "RTX 4060 8GB", gpuPower: 80,
            ram: "16GB DDR5", ramVal: 16,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "16.0 FHD+ 165Hz", displayScore: 175,
            battery: "90Wh", batteryVal: 90,
            ports: "Thunderbolt 4, Type-C, 2x USB-A, HDMI 2.1",
            weight: "2.5 kg", weightVal: 2.5,
            hiddenNotes: ["Features a unique third cooling fan inside.", "Heavy RGB styling targeting hardcore gamers."],
            problems: ["At 2.5kg, it is bulky and heavy to carry to classes daily.", "Intel 'HX' processors consume a lot of power, hurting battery life."],
            useCases: ["Desktop replacement", "Hardcore gaming sessions", "Video editing"],
            specDetails: {
                cpu: "The 'HX' suffix means this is essentially a desktop processor put into a laptop, offering raw, uncompromised speed.",
                gpu: "Paired with a high-wattage power limit, this RTX 4060 outperforms thinner laptops with the same GPU.",
                ram: "16GB is easily upgradeable to 32GB if you decide to get into heavier 4K video editing.",
                storage: "Includes a second blank M.2 slot to easily add more storage later.",
                display: "16:10 aspect ratio gives you more vertical space, which is great for reading code and timelines.",
                battery: "90Wh is large, but mostly acts as a buffer because the CPU/GPU drain it so quickly."
            }
        },
        {
            id: "asus-zenbook-14", brand: "Asus", name: "Zenbook 14 OLED", image: "/assets/asuszenbook.webp",
            price: "EGP 45,000", priceVal: 45000,
            cpu: "Intel Core Ultra 7 155H", cpuPower: 82,
            gpu: "Intel Arc Graphics", gpuPower: 35,
            ram: "16GB LPDDR5x", ramVal: 16,
            storage: "1TB SSD", storageVal: 1024,
            display: "14.0 3K OLED 120Hz", displayScore: 210,
            battery: "75Wh", batteryVal: 75,
            ports: "2x Thunderbolt 4, 1x USB-A, HDMI 2.1",
            weight: "1.2 kg", weightVal: 1.2,
            hiddenNotes: ["The OLED screen is absolutely gorgeous for web design.", "RAM is soldered to the motherboard and cannot be upgraded later."],
            problems: ["No dedicated GPU, so it struggles with heavy 3D games.", "Glossy OLED screen causes severe reflections in bright rooms."],
            useCases: ["UI/UX Design", "Media consumption", "Frequent traveling and business"],
            specDetails: {
                cpu: "The Core Ultra series includes an NPU (Neural Processing Unit) to handle AI tasks efficiently.",
                gpu: "Intel Arc is an integrated graphics chip; great for 4K video playback but weak for modern gaming.",
                ram: "LPDDR5x means 'Low Power'; it saves battery but is permanently soldered to the board.",
                storage: "Fast storage ensures rapid boot and wake-from-sleep times.",
                display: "3K OLED provides perfect, infinite blacks and brilliant contrast. Essential for design work.",
                battery: "75Wh in a lightweight laptop results in phenomenal battery life (often 10+ hours)."
            }
        },
        {
            id: "asus-vivobook-16x", brand: "Asus", name: "Vivobook Pro 16X", image: "/assets/asusvivobook.webp",
            price: "EGP 52,000", priceVal: 52000,
            cpu: "Intel Core i7-13700H", cpuPower: 85,
            gpu: "RTX 4050 6GB", gpuPower: 65,
            ram: "16GB DDR5", ramVal: 16,
            storage: "1TB SSD", storageVal: 1024,
            display: "16.0 WUXGA 120Hz", displayScore: 130,
            battery: "70Wh", batteryVal: 70,
            ports: "Thunderbolt 4, Type-C, 2x USB-A, HDMI 2.1",
            weight: "1.9 kg", weightVal: 1.9,
            hiddenNotes: ["Features a physical 'DialPad' built into the trackpad for Adobe software.", "Great balance between a creator laptop and casual gaming."],
            problems: ["Speakers are downward-firing and sound muffled.", "The DialPad gimmick isn't supported by many non-Adobe apps."],
            useCases: ["Content creation (Premiere, Photoshop)", "Moderate gaming", "Engineering software (AutoCAD)"],
            specDetails: {
                cpu: "High-performance 'H' series CPU easily handles demanding creator workloads like exporting video.",
                gpu: "RTX 4050 uses Nvidia's Studio drivers, which provide massive stability boosts in creative apps.",
                ram: "16GB provides a solid baseline for working with high-resolution imagery.",
                storage: "Large enough to store hundreds of raw photos and video clips.",
                display: "WUXGA is slightly higher than 1080p, giving a bit more detail for creative timelines.",
                battery: "70Wh is decent, providing around 6 hours of moderate use."
            }
        }
    ],

    // ==========================================
    // HP
    // ==========================================
    hp: [
        {
            id: "hp-15-fd1024ne", brand: "HP", name: "HP 15-fd1024ne", image: "/assets/hpfe.webp",
            price: "EGP 28,000", priceVal: 28000,
            cpu: "Intel Core Ultra 5 125H", cpuPower: 72,
            gpu: "Intel Integrated", gpuPower: 25,
            ram: "16GB RAM", ramVal: 16,
            storage: "512GB NVMe SSD", storageVal: 512,
            display: "15.6 FHD Anti-glare", displayScore: 60,
            battery: "41Wh", batteryVal: 41,
            ports: "1x Type-C, 2x USB-A, HDMI",
            weight: "1.59 kg", weightVal: 1.59,
            hiddenNotes: ["Perfect for university work and web development tasks.", "Great keyboard layout for developers."],
            problems: ["The plastic chassis can feel cheap and flexes under pressure.", "The 41Wh battery is relatively small, requiring you to carry the charger on long days.", "Cannot play heavy AAA games due to the lack of a dedicated GPU."],
            useCases: ["University studies", "Web development (HTML/CSS/JS)", "Competitive programming (C++)", "Running Linux/Ubuntu virtual machines"],
            specDetails: {
                cpu: "Core Ultra 5 balances performance with excellent power management; perfect for running local web servers and compiling code.",
                gpu: "Integrated graphics save battery and keep the laptop cool, suitable for browsing and coding environments.",
                ram: "16GB allows you to run a code editor, dozens of Chrome tabs, and local development tools simultaneously without lag.",
                storage: "NVMe SSD handles millions of small file reads/writes instantly, which is ideal for node_modules and Git repositories.",
                display: "Anti-glare coating prevents eye strain during late-night coding sessions.",
                battery: "41Wh is basic; it relies on the CPU's efficiency to get through a few hours of classes."
            }
        },
        {
            id: "hp-victus-15", brand: "HP", name: "Victus 15", image: "/assets/hpvictus.webp",
            price: "EGP 40,000", priceVal: 40000,
            cpu: "Intel Core i5-13420H", cpuPower: 60,
            gpu: "RTX 3050 6GB", gpuPower: 50,
            ram: "8GB DDR4", ramVal: 8,
            storage: "512GB SSD", storageVal: 512,
            display: "15.6 FHD 144Hz", displayScore: 144,
            battery: "70Wh", batteryVal: 70,
            ports: "Type-C, 2x USB-A, HDMI 2.1, RJ45",
            weight: "2.29 kg", weightVal: 2.29,
            hiddenNotes: ["HP's entry-level gaming line. Replaced the old Pavilion Gaming series.", "Screen wobbles slightly if typing heavily."],
            problems: ["8GB RAM is no longer enough for modern gaming; requires an immediate upgrade.", "The hinge design allows the screen to wobble noticeably when typing."],
            useCases: ["Entry-level gaming", "Esports (League of Legends, Valorant)", "Budget multitasking"],
            specDetails: {
                cpu: "A solid mid-range CPU that won't bottleneck the entry-level GPU.",
                gpu: "The 6GB version of the RTX 3050 handles medium settings on newer games smoothly.",
                ram: "8GB is a severe limitation; it will cause stuttering if Discord, Chrome, and a game are open at once.",
                storage: "512GB fills up extremely fast with today's 100GB+ game sizes.",
                display: "144Hz provides a significant competitive advantage in fast-paced shooters.",
                battery: "70Wh provides average life, but gaming unplugged will still drain it in under 2 hours."
            }
        },
        {
            id: "hp-omen-16", brand: "HP", name: "Omen 16", image: "/assets/hpomen.webp",
            price: "EGP 72,000", priceVal: 72000,
            cpu: "Intel Core i7-13700HX", cpuPower: 95,
            gpu: "RTX 4060 8GB", gpuPower: 80,
            ram: "16GB DDR5", ramVal: 16,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "16.1 QHD 240Hz", displayScore: 280,
            battery: "83Wh", batteryVal: 83,
            ports: "2x Thunderbolt 4, 2x USB-A, HDMI 2.1, RJ45",
            weight: "2.35 kg", weightVal: 2.35,
            hiddenNotes: ["Excellent, minimalist design that doesn't scream 'gamer'.", "The Omen Gaming Hub software is quite heavy on system resources."],
            problems: ["HP Omen software is known to be buggy and bloated.", "The trackpad often feels unresponsive compared to the premium price tag."],
            useCases: ["High-framerate 1440p gaming", "Software engineering", "3D Modeling"],
            specDetails: {
                cpu: "The i7-HX series provides massive compute power for rendering physics and compiling complex software.",
                gpu: "RTX 4060 paired with a QHD screen offers sharp, vibrant visuals for single-player RPGs.",
                ram: "DDR5 memory ensures data is fed to the powerful CPU as fast as possible.",
                storage: "Gen4 speeds drastically reduce load screens in heavily modded games.",
                display: "240Hz refresh rate is near-professional grade for competitive gaming.",
                battery: "83Wh helps offset the heavy power draw of the high-end components."
            }
        },
        {
            id: "hp-pavilion-aero", brand: "HP", name: "Pavilion Aero 13", image: "/assets/hppavilion.webp",
            price: "EGP 35,000", priceVal: 35000,
            cpu: "AMD Ryzen 5 8640U", cpuPower: 65,
            gpu: "Radeon Graphics", gpuPower: 30,
            ram: "16GB LPDDR5", ramVal: 16,
            storage: "512GB SSD", storageVal: 512,
            display: "13.3 WUXGA IPS", displayScore: 70,
            battery: "43Wh", batteryVal: 43,
            ports: "Type-C, 2x USB-A, HDMI 2.1",
            weight: "0.99 kg", weightVal: 0.99,
            hiddenNotes: ["Weighs less than 1 kilogram! Extremely portable.", "The chassis is made of magnesium-aluminum alloy."],
            problems: ["13.3-inch screen can feel cramped for productivity tasks.", "No Thunderbolt port due to the AMD architecture."],
            useCases: ["Business travel", "Copywriting / Journalism", "Light school work"],
            specDetails: {
                cpu: "The 'U' series processor prioritizes saving battery and keeping the laptop cool over raw power.",
                gpu: "Radeon integrated graphics can handle basic photo editing but will struggle with video rendering.",
                ram: "16GB ensures the laptop stays snappy even with dozens of browser tabs open.",
                storage: "Adequate space for a machine focused entirely on documents and cloud work.",
                display: "IPS technology ensures colors look accurate from any viewing angle.",
                battery: "43Wh is small, but the low-power CPU ensures you still get a full day's work out of it."
            }
        }
    ],

    // ==========================================
    // ACER
    // ==========================================
    acer: [
        {
            id: "acer-nitro-v15", brand: "Acer", name: "Nitro V 15", image: "/assets/acernitro.webp",
            price: "EGP 42,000", priceVal: 42000,
            cpu: "Intel Core i5-13420H", cpuPower: 60,
            gpu: "RTX 4050 6GB", gpuPower: 65,
            ram: "16GB DDR5", ramVal: 16,
            storage: "512GB Gen4 SSD", storageVal: 512,
            display: "15.6 FHD 144Hz", displayScore: 144,
            battery: "57Wh", batteryVal: 57,
            ports: "Type-C (Thunderbolt 4), 3x USB-A, HDMI 2.1, RJ45",
            weight: "2.11 kg", weightVal: 2.11,
            hiddenNotes: ["Incredible value for an RTX 40-series GPU.", "The speakers are quite weak; headphones are recommended."],
            problems: ["Cooling fans whine loudly during gaming.", "Keyboard backlighting is usually single-color, lacking RGB customization.", "Speakers lack bass entirely."],
            useCases: ["Budget gaming", "High school / College student daily driver"],
            specDetails: {
                cpu: "Provides reliable performance for everyday tasks and won't bottleneck the GPU.",
                gpu: "RTX 4050 allows access to Frame Generation, making unplayable games suddenly run smoothly.",
                ram: "16GB DDR5 is excellent value at this price point, keeping the system future-proof.",
                storage: "Fast read/write speeds, though 512GB limits how many large games you can install.",
                display: "Basic 144Hz panel; smooth motion, but color accuracy is lacking for professional art.",
                battery: "57Wh means you will need to stay plugged into the wall most of the day."
            }
        },
        {
            id: "acer-helios-neo-16", brand: "Acer", name: "Predator Helios Neo 16", image: "/assets/acerpredator.webp",
            price: "EGP 65,000", priceVal: 65000,
            cpu: "Intel Core i7-13700HX", cpuPower: 95,
            gpu: "RTX 4060 8GB", gpuPower: 80,
            ram: "16GB DDR5", ramVal: 16,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "16.0 WQXGA 165Hz", displayScore: 205,
            battery: "90Wh", batteryVal: 90,
            ports: "2x Thunderbolt 4, 3x USB-A, HDMI 2.1, MicroSD",
            weight: "2.6 kg", weightVal: 2.6,
            hiddenNotes: ["Uses liquid metal thermal paste on the CPU for extreme cooling.", "The chassis features encrypted codes printed on the lid for aesthetic flair."],
            problems: ["Extremely heavy and thick power brick.", "The 'Gamer' aesthetic is very loud and might look unprofessional in an office."],
            useCases: ["High-end gaming", "Heavy rendering tasks", "Streaming"],
            specDetails: {
                cpu: "Liquid metal cooling allows this powerful HX chip to boost higher and longer than competitors.",
                gpu: "Runs at the maximum allowed wattage for an RTX 4060, ensuring peak possible performance.",
                ram: "Fast memory ensures stable 1% low frame rates (less stuttering in games).",
                storage: "1TB provides a comfortable buffer for heavy games and recorded video files.",
                display: "WQXGA provides a massive upgrade in sharpness over 1080p, looking crisp and vibrant.",
                battery: "90Wh attempts to feed the power-hungry internals, providing acceptable browsing time."
            }
        },
        {
            id: "acer-aspire-5", brand: "Acer", name: "Aspire 5", image: "/assets/aceraspire.webp",
            price: "EGP 24,000", priceVal: 24000,
            cpu: "Intel Core i5-1335U", cpuPower: 50,
            gpu: "Intel Iris Xe", gpuPower: 20,
            ram: "8GB DDR4", ramVal: 8,
            storage: "512GB SSD", storageVal: 512,
            display: "15.6 FHD IPS", displayScore: 60,
            battery: "50Wh", batteryVal: 50,
            ports: "Thunderbolt 4, 2x USB-A, HDMI 2.1",
            weight: "1.77 kg", weightVal: 1.77,
            hiddenNotes: ["A staple for students on a budget.", "Very easy to open up and add a second RAM stick for better performance."],
            problems: ["Screen brightness is low, making it hard to use outdoors.", "Webcam quality is grainy and poor.", "8GB of RAM limits heavy multitasking."],
            useCases: ["Basic office work (Excel, Word)", "Web browsing", "Media streaming"],
            specDetails: {
                cpu: "Power-efficient processor designed strictly for everyday desktop applications.",
                gpu: "Iris Xe is basic; enough for watching YouTube in 4K, but completely unsuited for modern gaming.",
                ram: "8GB DDR4 is the bare minimum today; upgrading it is highly recommended.",
                storage: "512GB is plenty of space for documents, PDFs, and standard software.",
                display: "Standard 1080p IPS panel; decent viewing angles but lacks brightness.",
                battery: "50Wh paired with a low-power CPU results in respectable daily longevity."
            }
        }
    ],

    // ==========================================
    // LENOVO
    // ==========================================
    lenovo: [
        {
            id: "lenovo-loq-15", brand: "Lenovo", name: "LOQ 15IRX9", image: "/assets/lenovoloq.webp",
            price: "EGP 48,000", priceVal: 48000,
            cpu: "Intel Core i7-13650HX", cpuPower: 90,
            gpu: "RTX 3050 6GB", gpuPower: 50,
            ram: "24GB DDR5", ramVal: 24,
            storage: "512GB Gen4 SSD", storageVal: 512,
            display: "15.6 FHD 144Hz", displayScore: 144,
            battery: "60Wh", batteryVal: 60,
            ports: "Type-C (140W PD), 3x USB-A, HDMI 2.1, RJ45",
            weight: "2.38 kg", weightVal: 2.38,
            hiddenNotes: ["Lenovo's new budget brand, replacing the IdeaPad Gaming 3.", "Supports 140W charging via USB-C, so you don't always need the heavy power brick."],
            problems: ["The screen has poor color gamut coverage (often 45% NTSC), making colors look washed out.", "Battery life is quite poor due to the Intel HX processor."],
            useCases: ["Budget esports gaming", "Programming", "Heavy multitasking"],
            specDetails: {
                cpu: "An incredibly powerful CPU for this price range, making it a great machine for CPU-heavy tasks like compiling code.",
                gpu: "The RTX 3050 is aging, but the 6GB variant holds up well for medium graphics settings.",
                ram: "24GB is an unusual configuration, but offers fantastic headroom for running multiple virtual machines.",
                storage: "Fast PCIe Gen 4 storage makes Windows extremely snappy and responsive.",
                display: "144Hz ensures competitive games feel smooth, even if the colors aren't vibrant.",
                battery: "60Wh struggles to keep the HX processor running for long; expect 3-4 hours of basic use."
            }
        },
        {
            id: "lenovo-legion-pro-5i", brand: "Lenovo", name: "Legion Pro 5i", image: "/assets/lenovolegion.webp",
            price: "EGP 82,000", priceVal: 82000,
            cpu: "Intel Core i7-13700HX", cpuPower: 95,
            gpu: "RTX 4070 8GB", gpuPower: 90,
            ram: "32GB DDR5", ramVal: 32,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "16.0 WQXGA 240Hz", displayScore: 280,
            battery: "80Wh", batteryVal: 80,
            ports: "2x Type-C, 4x USB-A, HDMI 2.1, RJ45",
            weight: "2.55 kg", weightVal: 2.55,
            hiddenNotes: ["Has all of its heavy ports mapped to the back, keeping your desk wire-free.", "One of the best thermal cooling designs in its class."],
            problems: ["Heavy and cumbersome to travel with.", "Trackpad is placed awkwardly to the left and is prone to accidental palm touches."],
            useCases: ["Enthusiast gaming", "VR workloads", "Professional video and 3D rendering"],
            specDetails: {
                cpu: "A massive multi-core beast that easily handles extreme workloads like Blender rendering and video encoding.",
                gpu: "RTX 4070 powers through almost any game at 1440p resolution with high framerates.",
                ram: "32GB guarantees you never encounter out-of-memory errors while working on complex projects.",
                storage: "1TB Gen4 provides ultra-fast access to massive game textures and video files.",
                display: "240Hz WQXGA is the gold standard for gaming displays: sharp, vivid, and incredibly fast.",
                battery: "80Wh is large, but this machine prioritizes raw performance over battery life."
            }
        },
        {
            id: "lenovo-thinkpad-e14", brand: "Lenovo", name: "ThinkPad E14 Gen 5", image: "/assets/lenovothink.webp",
            price: "EGP 42,000", priceVal: 42000,
            cpu: "Intel Core i7-1355U", cpuPower: 55,
            gpu: "Intel Iris Xe", gpuPower: 20,
            ram: "16GB DDR4", ramVal: 16,
            storage: "512GB SSD", storageVal: 512,
            display: "14.0 WUXGA IPS", displayScore: 70,
            battery: "57Wh", batteryVal: 57,
            ports: "Thunderbolt 4, Type-C, 2x USB-A, HDMI 2.1, RJ45",
            weight: "1.43 kg", weightVal: 1.43,
            hiddenNotes: ["The keyboard is legendary; arguably the best typing experience on a laptop.", "Features the iconic red TrackPoint nub in the center of the keyboard."],
            problems: ["Design looks outdated and utilitarian to some.", "The display maxes out at 60Hz, feeling slower compared to modern 120Hz screens.", "Speakers are very quiet."],
            useCases: ["Programming / Coding", "Enterprise / Corporate work", "Heavy data entry"],
            specDetails: {
                cpu: "Optimized for burst tasks like opening massive spreadsheets or compiling small applications.",
                gpu: "Iris Xe handles basic external monitor outputs, but isn't meant for 3D tasks.",
                ram: "16GB DDR4 is stable and reliable for heavy multi-tab web research and office applications.",
                storage: "Secure, fast storage suitable for handling sensitive enterprise data.",
                display: "WUXGA provides a taller 16:10 aspect ratio, allowing you to see more lines of code at once.",
                battery: "57Wh in a business machine yields excellent reliability for long boardroom meetings."
            }
        },
        {
            id: "lenovo-yoga-pro-9i", brand: "Lenovo", name: "Yoga Pro 9i", image: "/assets/lenovoyoga.webp",
            price: "EGP 95,000", priceVal: 95000,
            cpu: "Intel Core i9-13905H", cpuPower: 94,
            gpu: "RTX 4060 8GB", gpuPower: 80,
            ram: "32GB LPDDR5x", ramVal: 32,
            storage: "1TB Gen4 SSD", storageVal: 1024,
            display: "16.0 3.2K Mini LED 165Hz Touch", displayScore: 255,
            battery: "75Wh", batteryVal: 75,
            ports: "Thunderbolt 4, 2x USB-A, HDMI 2.1, SD Card",
            weight: "2.23 kg", weightVal: 2.23,
            hiddenNotes: ["A direct competitor to the MacBook Pro 16.", "The Mini LED screen has insanely deep blacks and high contrast for media viewing."],
            problems: ["Extremely expensive.", "Mini LED panels consume a lot of battery power, resulting in sub-par battery life for a 'Creator' laptop."],
            useCases: ["Professional Video Editing (Premiere, DaVinci)", "HDR Media Creation", "High-end content consumption"],
            specDetails: {
                cpu: "The i9 processor blasts through rendering times and handles complex timelines effortlessly.",
                gpu: "RTX 4060 accelerates video encoding and offers great gaming performance as a secondary benefit.",
                ram: "Ultra-fast LPDDR5x feeds data to the i9 instantly, but is permanently soldered.",
                storage: "Top-tier speeds required for editing massive 4K raw video files without lag.",
                display: "Mini LED technology offers peak brightness capable of true HDR editing, far surpassing standard IPS.",
                battery: "75Wh struggles to power the demanding i9 and the super-bright Mini LED screen simultaneously."
            }
        },
        {
            id: "lenovo-ideapad-slim-5", brand: "Lenovo", name: "IdeaPad Slim 5", image: "/assets/lenovoidea.webp",
            price: "EGP 34,000", priceVal: 34000,
            cpu: "Intel Core i7-1355U", cpuPower: 55,
            gpu: "Intel Iris Xe", gpuPower: 20,
            ram: "16GB LPDDR5", ramVal: 16,
            storage: "1TB SSD", storageVal: 1024,
            display: "16.0 WUXGA OLED", displayScore: 120,
            battery: "56Wh", batteryVal: 56,
            ports: "2x Type-C, 2x USB-A, HDMI 1.4b, MicroSD",
            weight: "1.89 kg", weightVal: 1.89,
            hiddenNotes: ["The aluminum chassis feels much more premium than its price suggests.", "Great front-facing speakers positioned next to the keyboard."],
            problems: ["The HDMI port is an outdated 1.4b standard, which cannot output 4K at 60Hz to external monitors.", "RAM is soldered and cannot be upgraded."],
            useCases: ["Media viewing / Entertainment", "General productivity", "Light coding"],
            specDetails: {
                cpu: "An efficient i7 processor handles daily tasks smoothly while keeping fan noise to a minimum.",
                gpu: "Iris Xe easily drives the OLED screen for crisp UI rendering and video playback.",
                ram: "16GB of fast LPDDR5 ensures the laptop remains fast for years of everyday use.",
                storage: "1TB is very generous at this price point, providing room for thousands of photos and files.",
                display: "The OLED panel delivers stunning colors and deep blacks, making movies look incredible.",
                battery: "56Wh provides solid all-day usage thanks to the low-power CPU."
            }
        }
    ]
};
let box = document.querySelectorAll(".box");
let list = document.querySelector(".list");
let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popupcontent");
let close = document.querySelector(".close");
let error = document.querySelector(".error");
let compareBtn = document.querySelector(".compare");


function getSavedCompares() {
    return JSON.parse(window.localStorage.getItem("compare")) || [];
}

function updateSavedCompares() {
    if (getSavedCompares().length > 0) {
        compareBtn.classList.toggle("active", getSavedCompares().length > 0);
        compareBtn.textContent = `Compare (${getSavedCompares().length})`;
    }
}


function update(btn, state) {
    if (state) {
        btn.style.backgroundColor = "#21262D";
        btn.style.color = "#F0F6FC"
        btn.textContent = "Added to compare \u2714";
    }
    else {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.textContent = "Compare";
    }
}

updateSavedCompares();

if (close) {
    close.addEventListener("click", () => {
        popup.classList.remove("active");
        document.body.style.overflow = "auto";
    });
}

if (popup) {
    popup.addEventListener("click", () => {
        popup.classList.remove("active");
    });
}

if (compareBtn) {
    compareBtn.onclick = () => {
        window.location.href = "compare.html";
    }
}

box.forEach((b) => {
    b.addEventListener("click", () => {
        box.forEach((bx) => {
            bx.classList.remove("active");
        })

        b.classList.add("active");
        let selectd = b.children[1].textContent.toLowerCase();
        let activeList = laptopsData[selectd];
        list.innerHTML = ``;

        for (let i of activeList) {
            let { id, brand, name, image } = i;
            let card = document.createElement("div");
            card.classList.add("box");
            card.innerHTML = `
            <img src="${image}" alt="${name}">
            <h2>${name}</h2>
            <p>Brand: ${brand}</p>
            <button type="button" class="cmp">Compare</button>
            `;
            card.onclick = (e) => {
                if (!e.target.classList.contains("cmp")) {
                    let left = popupContent.children[0];
                    let right = popupContent.children[1];
                    left.innerHTML = `<img src="${i.image}" alt="${i.name}">`
                    right.innerHTML = `
                    <h2>${i.name}</h2>
                    <p><strong>Brand:</strong> ${i.brand}</p>
                <p><strong>Price:</strong> ${i.price || "N/A"}</p>
                <p><strong>CPU:</strong> ${i.cpu || "N/A"}</p>
                <p><strong>GPU:</strong> ${i.gpu || "N/A"}</p>
                <p><strong>RAM:</strong> ${i.ram || "N/A"}</p>
                <p><strong>Storage:</strong> ${i.storage || "N/A"}</p>
                <p><strong>Display:</strong> ${i.display || "N/A"}</p>
                <p><strong>Battery:</strong> ${i.battery || "N/A"}</p>
                <p><strong>Ports:</strong> ${i.ports || "N/A"}</p>
                <p><strong>Weight:</strong> ${i.weight || "N/A"}</p>
                `;
                    popup.classList.add("active");
                    document.body.style.overflow = "hidden";
                }
            };

            let cmp = card.children[3];
            update(cmp, getSavedCompares().includes(id));
            cmp.onmouseenter = () => {
                if (getSavedCompares().includes(id)) {
                    cmp.style.backgroundColor = "#F0F6FC";
                    cmp.style.color = "#21262D";
                    cmp.textContent = "Remove from compare \u2716";
                }
            };

            cmp.onmouseleave = () => {
                if (getSavedCompares().includes(id)) {
                    update(cmp, getSavedCompares().includes(id));
                }
            };
            cmp.onclick = (e) => {
                e.stopPropagation();
                let savedCompares = getSavedCompares();
                console.log(savedCompares);
                let idx = savedCompares.indexOf(id);
                if (idx !== -1) {
                    savedCompares.splice(idx, 1);
                    window.localStorage.setItem("compare", JSON.stringify(savedCompares));
                    update(cmp, false);
                    updateSavedCompares();
                }
                else {
                    if (savedCompares.length >= 3) {
                        if (error) {
                            error.classList.add("active");
                            error.scrollIntoView(
                                {
                                    behavior: "smooth"
                                }
                            );
                            setTimeout(() => {
                                error.classList.remove("active");
                            }, 3000);
                        }
                    }
                    else {
                        savedCompares.push(id);
                        window.localStorage.setItem("compare", JSON.stringify(savedCompares));
                        update(cmp, true);
                        updateSavedCompares();
                    }
                }
                let allLaptops = Object.values(laptopsData).flat();

                let selectdLaptops = allLaptops.filter((l) => getSavedCompares().includes(l.id));

                window.localStorage.setItem("objs", JSON.stringify(selectdLaptops));
            }
            list.appendChild(card);
        }
        list.scrollIntoView({
            behavior: "smooth"
        })
    });
});

let backBtn = document.querySelector(".back");


backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});



