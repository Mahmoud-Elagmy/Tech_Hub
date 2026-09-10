const laptopsData = [
    // ==========================================
    // ASUS
    // ==========================================
    {
        id: "asus-tuf-a15", brand: "Asus", name: "TUF Gaming A15 (FA507)", image: "assets/asustuf.webp",
        price: "EGP 58,000", priceVal: 58000,
        cpu: "AMD Ryzen 7 7735HS (8 Cores / 16 Threads)", cpuPower: 78,
        gpu: "RTX 4060 8GB (140W | AV1 Encode)", gpuPower: 82,
        ram: "16GB DDR5 4800MHz", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 64GB)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "15.6 FHD 144Hz (62% sRGB, Adaptive-Sync)", displayScore: 144,
        battery: "90Wh", batteryVal: 90,
        ports: "USB4, 1x Type-C, 2x USB-A, HDMI 2.1 FRL",
        weight: "2.20 kg", weightVal: 2.2,
        material: "Aluminum display lid with high-durability polycarbonate plastic base",
        hiddenNotes: ["The 140W GPU TGP means it squeezes every drop of performance out of the RTX 4060.", "Features Advanced Optimus to switch graphics without rebooting."],
        problems: ["The base 144Hz screen only covers ~62% sRGB (45% NTSC) and maxes out at 250 nits brightness, making colors look washed out.", "Cooling fans exceed 52dB on 'Turbo' mode, which is uncomfortably loud without a headset."],
        useCases: ["1080p AAA Gaming", "Engineering Students", "Budget 3D rendering"],
        specDetails: {
            cpu: "Features 8 Performance Cores on the Zen 3+ architecture. Excellent for heavy multitasking and running virtual machines simultaneously.",
            gpu: "Features Nvidia's 8th Gen NVENC encoder with AV1 hardware encoding, allowing for ultra-high-quality Twitch/YouTube streaming at low bitrates.",
            ram: "DDR5 at 4800MHz is standard but upgradeable up to 64GB across two SODIMM slots.",
            storage: "Has a secondary empty PCIe Gen 4 slot, making future storage upgrades incredibly cheap and easy.",
            display: "Color gamut is very poor. It cannot accurately display neon reds or deep blues. Not suitable for professional video or photo editors.",
            battery: "Because of the efficient AMD processor, this massive 90Wh battery can easily yield 8-9 hours of YouTube playback."
        }
    },
    {
        id: "asus-rog-g14", brand: "Asus", name: "ROG Zephyrus G14 (2024)", image: "assets/asusrog.webp",
        price: "EGP 85,000", priceVal: 85000,
        cpu: "AMD Ryzen 9 8945HS (8 Cores / 16 Threads + NPU)", cpuPower: 92,
        gpu: "RTX 4070 8GB (90W | AV1 Encode)", gpuPower: 86,
        ram: "32GB LPDDR5X 6400MHz", ramVal: 32,
        ramUpgrade: "0 slots (100% Soldered LPDDR5x, Non-upgradeable)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "14.0 3K OLED 120Hz (100% DCI-P3, G-Sync)", displayScore: 230,
        battery: "73Wh", batteryVal: 73,
        ports: "2x Type-C (100W PD), 2x USB-A, HDMI 2.1, MicroSD",
        weight: "1.50 kg", weightVal: 1.5,
        material: "Premium CNC-machined aluminum unibody",
        hiddenNotes: ["The 2024 redesign features a full CNC-machined aluminum unibody, rivaling the MacBook Pro.", "The OLED screen has a 0.2ms response time, eliminating ghosting."],
        problems: ["RAM is completely soldered to the motherboard; you cannot upgrade it later.", "The RTX 4070 is strictly limited to 90 Watts due to the thin chassis, limiting maximum framerates.", "Chassis gets hot to the touch directly above the keyboard."],
        useCases: ["Portable Content Creation", "University / Commuting", "Premium 1440p Gaming"],
        specDetails: {
            cpu: "Built on Zen 4 architecture with a dedicated XDNA NPU (Neural Processing Unit) for offline AI tasks like background blurring and local LLM execution.",
            gpu: "Though capped at 90W to prevent melting the thin chassis, it includes full 8th Gen NVENC support for content creators and streamers.",
            ram: "Ultra-fast 6400MHz memory speeds up CPU operations, but being permanently soldered is a major downside for longevity.",
            storage: "PCIe Gen 4 speeds provide 7000MB/s read speeds, minimizing load times for large Premiere Pro projects.",
            display: "A phenomenal OLED panel with 100% DCI-P3 color coverage (cinema standard) and true perfect blacks. Ideal for HDR grading.",
            battery: "73Wh pairs beautifully with the AMD processor, reliably delivering 7-8 hours of office work."
        }
    },
    {
        id: "asus-strix-g16", brand: "Asus", name: "ROG Strix G16", image: "assets/asusrogflow.webp",
        price: "EGP 78,000", priceVal: 78000,
        cpu: "Intel Core i7-13650HX (14 Cores: 6P+8E)", cpuPower: 90,
        gpu: "RTX 4060 8GB (140W | AV1 Encode)", gpuPower: 82,
        ram: "16GB DDR5 4800MHz", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 64GB)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "16.0 WUXGA 165Hz (100% sRGB, G-Sync)", displayScore: 175,
        battery: "90Wh", batteryVal: 90,
        ports: "Thunderbolt 4, 1x Type-C, 2x USB-A, HDMI 2.1, RJ45",
        weight: "2.50 kg", weightVal: 2.5,
        material: "Aluminum display lid with a rigid plastic chassis and keyboard deck",
        hiddenNotes: ["Uses Asus's 'Tri-Fan' technology to pull air directly across the motherboard.", "Features a MUX switch to bypass the integrated GPU for a 10% gaming performance boost."],
        problems: ["Notorious for 'Coil Whine' (a high-pitched electronic buzzing noise when the GPU is under load).", "Armoury Crate software is incredibly bloated and often causes system lag.", "Extremely bulky; the power brick itself weighs almost 1kg."],
        useCases: ["Desktop Replacement", "Hardcore Esports", "Heavy Code Compilation"],
        specDetails: {
            cpu: "The 'HX' suffix indicates a hybrid desktop-class processor. It utilizes 6 Performance cores for gaming and 8 Efficiency cores for background tasks (20 Threads total).",
            gpu: "Unleashed at 140 Watts, this is the absolute maximum performance threshold for Nvidia's mobile RTX 4060 chip. Includes AV1 encoding.",
            ram: "16GB is easily upgradeable to 32GB or 64GB by removing the plastic bottom panel.",
            storage: "Supports RAID 0 if you add a second NVMe drive for maximum possible data bandwidth.",
            display: "100% sRGB color gamut makes it great for web design and gaming. G-Sync prevents screen tearing physically at the hardware level.",
            battery: "90Wh is the legal flight limit, but the power-hungry Intel HX processor will kill the battery in under 4 hours off the charger."
        }
    },
    {
        id: "asus-zenbook-14", brand: "Asus", name: "Zenbook 14 OLED", image: "assets/asuszenbook.webp",
        price: "EGP 45,000", priceVal: 45000,
        cpu: "Intel Core Ultra 7 155H (16 Cores: 6P+8E+2LPE)", cpuPower: 82,
        gpu: "Intel Arc Graphics (Dual AV1 Codecs)", gpuPower: 38,
        ram: "16GB LPDDR5x 7467MHz", ramVal: 16,
        ramUpgrade: "0 slots (100% Soldered LPDDR5x, Non-upgradeable)",
        storage: "1TB PCIe 4.0 SSD", storageVal: 1024,
        display: "14.0 3K OLED 120Hz (100% DCI-P3, HDR 600)", displayScore: 210,
        battery: "75Wh", batteryVal: 75,
        ports: "2x Thunderbolt 4, 1x USB-A, HDMI 2.1, Audio Jack",
        weight: "1.20 kg", weightVal: 1.2,
        material: "All-metal aluminum alloy chassis",
        hiddenNotes: ["The trackpad doubles as a digital Number Pad when you press the top-right corner.", "Meets MIL-STD-810H military-grade toughness despite its thinness."],
        problems: ["Heavy fingerprint magnet; the lid constantly looks smudged.", "Lacks a dedicated GPU, so gaming is restricted to older titles or indie games.", "RAM is permanently soldered and cannot be upgraded."],
        useCases: ["Business Executives", "Graphic/UI Design", "Frequent Flyers"],
        specDetails: {
            cpu: "Meteor Lake architecture utilizes 2 specialized Low-Power E-Cores (LPE) to handle video playback and basic browsing without ever waking up the main processor.",
            gpu: "Intel Arc integrated graphics feature Dual AV1 Encode/Decode engines, outperforming older dedicated GPUs in Premiere Pro rendering times.",
            ram: "Mind-blowingly fast 7467MHz RAM is crucial for integrated graphics, which rely on system memory instead of VRAM.",
            storage: "Extremely fast boot times, waking from sleep in less than a second.",
            display: "100% DCI-P3 cinema-grade color gamut with 600-nits peak HDR brightness. Perfectly readable even outside in direct sunlight.",
            battery: "Incredible battery life lasting up to 12-14 hours of continuous typing and web browsing."
        }
    },
    {
        id: "asus-vivobook-16x", brand: "Asus", name: "Vivobook Pro 16X", image: "assets/asusvivobook.webp",
        price: "EGP 52,000", priceVal: 52000,
        cpu: "Intel Core i7-13700H (14 Cores: 6P+8E)", cpuPower: 85,
        gpu: "RTX 4050 6GB (65W | AV1 Encode)", gpuPower: 65,
        ram: "16GB DDR5", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 64GB)",
        storage: "1TB SSD", storageVal: 1024,
        display: "16.0 WUXGA 120Hz (100% sRGB)", displayScore: 130,
        battery: "70Wh", batteryVal: 70,
        ports: "Thunderbolt 4, Type-C, 2x USB-A, HDMI 2.1",
        weight: "1.9 kg", weightVal: 1.9,
        material: "Metal lid with high-quality plastic base",
        hiddenNotes: ["Features a physical 'DialPad' built into the trackpad for Adobe software.", "Great balance between a creator laptop and casual gaming."],
        problems: ["Speakers are downward-firing and sound muffled.", "The DialPad gimmick isn't supported by many non-Adobe apps."],
        useCases: ["Content creation (Premiere, Photoshop)", "Moderate gaming", "Engineering software (AutoCAD)"],
        specDetails: {
            cpu: "High-performance 'H' series CPU easily handles demanding creator workloads like exporting video across its 20 total threads.",
            gpu: "RTX 4050 uses Nvidia's Studio drivers, which provide massive stability boosts in creative apps. Includes AV1 codec support.",
            ram: "16GB provides a solid baseline for working with high-resolution imagery.",
            storage: "Large enough to store hundreds of raw photos and video clips.",
            display: "100% sRGB color gamut ensures that graphics and photos you design look accurate when published to the web.",
            battery: "70Wh is decent, providing around 6 hours of moderate use."
        }
    },

    // ==========================================
    // HP
    // ==========================================
    {
        id: "hp-15-fd1024ne", brand: "HP", name: "HP 15 Essential", image: "assets/hpfe.webp",
        price: "EGP 28,000", priceVal: 28000,
        cpu: "Intel Core Ultra 5 125H (14 Cores: 4P+8E+2LPE)", cpuPower: 72,
        gpu: "Intel Integrated (AV1 Decode)", gpuPower: 25,
        ram: "16GB RAM", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Upgradeable)",
        storage: "512GB NVMe SSD", storageVal: 512,
        display: "15.6 FHD TN (45% NTSC, No Sync)", displayScore: 60,
        battery: "41Wh", batteryVal: 41,
        ports: "1x Type-C (Data Only), 2x USB-A, HDMI 1.4",
        weight: "1.59 kg", weightVal: 1.59,
        material: "100% Post-consumer recycled plastic (Polycarbonate/ABS)",
        hiddenNotes: ["Perfect for university work and web development tasks.", "Great keyboard layout for developers."],
        problems: ["The screen uses an outdated TN panel instead of IPS, meaning colors wash out instantly if you look at it from an angle.", "The Type-C port does NOT support charging or connecting external monitors.", "41Wh battery is exceptionally small for a 15-inch chassis."],
        useCases: ["University studies", "Web development (HTML/CSS/JS)", "Running Linux/Ubuntu virtual machines"],
        specDetails: {
            cpu: "14-core hybrid architecture balances performance with excellent power management; perfect for running local web servers and compiling code.",
            gpu: "Features Intel QuickSync for fast video playback and AV1 decoding, but cannot play heavy 3D games.",
            ram: "16GB allows you to run a code editor, dozens of Chrome tabs, and local development tools simultaneously without lag.",
            storage: "NVMe SSD handles millions of small file reads/writes instantly, which is ideal for node_modules and Git repositories.",
            display: "TN panels suffer from horrible viewing angles and poor color reproduction (45% NTSC). Not recommended for visual art.",
            battery: "41Wh is basic; it relies on the CPU's efficiency to get through a few hours of classes."
        }
    },
    {
        id: "hp-victus-15", brand: "HP", name: "Victus 15 (2023)", image: "assets/hpvictus.webp",
        price: "EGP 40,000", priceVal: 40000,
        cpu: "Intel Core i5-13420H (8 Cores: 4P+4E)", cpuPower: 64,
        gpu: "RTX 3050 6GB (75W | NVENC Only)", gpuPower: 48,
        ram: "8GB DDR4 3200MHz", ramVal: 8,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 32GB)",
        storage: "512GB Gen4 SSD", storageVal: 512,
        display: "15.6 FHD 144Hz (45% NTSC)", displayScore: 144,
        battery: "70Wh", batteryVal: 70,
        ports: "1x Type-C, 2x USB-A, HDMI 2.1, RJ45",
        weight: "2.29 kg", weightVal: 2.29,
        material: "Textured matte plastic (Polycarbonate/ABS)",
        hiddenNotes: ["Upgraded 6GB VRAM variant of the 3050, which stutters far less than the older 4GB model.", "Clean, minimalist design hides the fact that it's a gaming laptop."],
        problems: ["Famous for severe screen wobble; the hinge design is weak, so the screen shakes when you type heavily.", "Only contains ONE single M.2 storage slot. To add more space, you must completely discard the original drive."],
        useCases: ["Entry-level Gaming", "Budget Video Editing", "Student Daily Driver"],
        specDetails: {
            cpu: "A solid 8-core mid-tier processor that won't bottleneck the entry-level GPU during gaming.",
            gpu: "Capped at 75W. Note: The RTX 30-series uses the older 7th Gen NVENC codec and lacks hardware AV1 encoding.",
            ram: "8GB is a severe limitation; it will cause stuttering if Discord, Chrome, and a game are open at once. Upgrading is mandatory.",
            storage: "512GB means you can only install about 3 or 4 large modern games before running out of room.",
            display: "144Hz provides a significant competitive advantage in fast-paced shooters, though colors are dull (45% NTSC).",
            battery: "70Wh provides average life, but gaming unplugged will still drain it in under 2 hours."
        }
    },
    {
        id: "hp-omen-16", brand: "HP", name: "Omen 16 (2023)", image: "assets/hpomen.webp",
        price: "EGP 72,000", priceVal: 72000,
        cpu: "Intel Core i7-13700HX (16 Cores: 8P+8E)", cpuPower: 95,
        gpu: "RTX 4060 8GB (130W | AV1 Encode)", gpuPower: 81,
        ram: "16GB DDR5 4800MHz", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 64GB)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "16.1 QHD 240Hz (100% sRGB, G-Sync)", displayScore: 280,
        battery: "83Wh", batteryVal: 83,
        ports: "2x Thunderbolt 4, 2x USB-A, HDMI 2.1, RJ45",
        weight: "2.35 kg", weightVal: 2.35,
        material: "Aluminum keyboard deck and lid with a plastic bottom panel",
        hiddenNotes: ["Ports are heavily concentrated on the rear of the chassis to keep desk cables hidden.", "Features a glass trackpad, which feels significantly smoother than the plastic one on the Victus."],
        problems: ["CRITICAL FLAW: Late 2023 models suffer from a widespread Hall-Sensor motherboard defect where the screen randomly goes black.", "HP Omen Gaming Hub forces background telemetry and bloatware."],
        useCases: ["High-Framerate 1440p Gaming", "Machine Learning Local Hosting", "3D Animation"],
        specDetails: {
            cpu: "The i7-13700HX features 16 true cores and 24 threads, acting as a powerhouse for CPU-bound games like Microsoft Flight Simulator.",
            gpu: "At 130W, this GPU is operating at peak efficiency, capable of pushing Ray Tracing in Cyberpunk 2077 with Frame Gen enabled.",
            ram: "DDR5 memory feeds the massive 24-thread CPU data fast enough to prevent CPU bottlenecks.",
            storage: "Top-tier Gen4 NVMe speeds ensure the operating system boots in literal seconds.",
            display: "240Hz is esports-grade. The 100% sRGB QHD resolution provides sharp, vibrant text for programming.",
            battery: "83Wh attempts to feed the extreme power draw, but expect only 3-4 hours of standard use."
        }
    },
    {
        id: "hp-pavilion-aero", brand: "HP", name: "Pavilion Aero 13", image: "assets/hppavilion.webp",
        price: "EGP 35,000", priceVal: 35000,
        cpu: "AMD Ryzen 5 8640U (6 Cores / 12 Threads)", cpuPower: 65,
        gpu: "Radeon 760M Graphics (AV1 Codec)", gpuPower: 30,
        ram: "16GB LPDDR5", ramVal: 16,
        ramUpgrade: "0 slots (Soldered onboard memory, Non-upgradeable)",
        storage: "512GB SSD", storageVal: 512,
        display: "13.3 WUXGA IPS (100% sRGB, 400-nits)", displayScore: 70,
        battery: "43Wh", batteryVal: 43,
        ports: "Type-C, 2x USB-A, HDMI 2.1",
        weight: "0.99 kg", weightVal: 0.99,
        material: "Ultra-light magnesium-aluminum alloy unibody",
        hiddenNotes: ["Weighs less than 1 kilogram! Extremely portable.", "The chassis is made of premium magnesium-aluminum alloy."],
        problems: ["13.3-inch screen can feel cramped for productivity tasks.", "No Thunderbolt port due to the AMD architecture."],
        useCases: ["Business travel", "Copywriting / Journalism", "Light school work"],
        specDetails: {
            cpu: "The 6-Core 'U' series processor prioritizes saving battery and keeping the laptop cool over raw power.",
            gpu: "Radeon 760M integrated graphics feature AMD's VCN 4.0 engine for hardware AV1 encoding, greatly accelerating video renders.",
            ram: "16GB ensures the laptop stays snappy even with dozens of browser tabs open.",
            storage: "Adequate space for a machine focused entirely on documents and cloud work.",
            display: "100% sRGB color gamut and 400 nits of brightness make this a phenomenal screen for outdoor use and color-accurate work.",
            battery: "43Wh is small, but the low-power CPU ensures you still get a full day's work out of it."
        }
    },

    // ==========================================
    // ACER
    // ==========================================
    {
        id: "acer-nitro-v15", brand: "Acer", name: "Nitro V 15", image: "assets/acernitro.webp",
        price: "EGP 42,000", priceVal: 42000,
        cpu: "Intel Core i5-13420H (8 Cores: 4P+4E)", cpuPower: 60,
        gpu: "RTX 4050 6GB (75W | AV1 Encode)", gpuPower: 66,
        ram: "16GB DDR5 5200MHz", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 32GB)",
        storage: "512GB Gen4 SSD", storageVal: 512,
        display: "15.6 FHD 144Hz (45% NTSC)", displayScore: 144,
        battery: "57Wh", batteryVal: 57,
        ports: "1x Thunderbolt 4, 3x USB-A, HDMI 2.1, RJ45",
        weight: "2.11 kg", weightVal: 2.11,
        material: "Standard textured plastic chassis",
        hiddenNotes: ["One of the most budget-friendly ways to get access to Nvidia's DLSS 3 Frame Generation technology.", "Thunderbolt 4 support is very rare at this low price point."],
        problems: ["Shares the exact same plastic chassis as the non-gaming Acer Aspire line, resulting in mediocre thermal cooling.", "Speakers fire directly downwards into the desk and lack any bass whatsoever.", "Keyboard only lights up in white, no RGB customization."],
        useCases: ["Budget Competitive Gaming", "High School / College Use", "Light 3D Modeling"],
        specDetails: {
            cpu: "Provides reliable 8-core performance for everyday tasks, though it lacks the core count for heavy video encoding.",
            gpu: "Despite being capped at 75W, the RTX 4050's architecture runs incredibly cool and efficiently and includes 8th Gen NVENC.",
            ram: "DDR5 at 5200MHz is surprisingly fast memory for a budget laptop.",
            storage: "Has a secondary empty slot for an additional NVMe SSD to solve the limiting 512GB storage capacity.",
            display: "Smooth motion for gaming, but color reproduction is poor (45% NTSC). Not meant for professional photography editing.",
            battery: "57Wh combined with the 'H' series processor means battery life is poor; roughly 3.5 hours off the wall."
        }
    },
    {
        id: "acer-helios-neo-16", brand: "Acer", name: "Predator Helios Neo 16", image: "assets/acerpredator.webp",
        price: "EGP 65,000", priceVal: 65000,
        cpu: "Intel Core i7-13700HX (16 Cores: 8P+8E)", cpuPower: 95,
        gpu: "RTX 4060 8GB (140W | AV1 Encode)", gpuPower: 82,
        ram: "16GB DDR5 4800MHz", ramVal: 16,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 64GB)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "16.0 WQXGA 165Hz (100% sRGB, G-Sync)", displayScore: 215,
        battery: "90Wh", batteryVal: 90,
        ports: "2x Thunderbolt 4, 3x USB-A, HDMI 2.1, MicroSD",
        weight: "2.60 kg", weightVal: 2.6,
        material: "Anodized aluminum display lid with heavy-duty plastic base",
        hiddenNotes: ["Uses liquid metal thermal paste applied at the factory for extreme, highly efficient CPU cooling.", "Features encrypted cyberpunk-style codes printed natively onto the outer lid."],
        problems: ["At 2.6kg (plus a massive 330W power brick), carrying this in a backpack daily will cause back strain.", "The 'PredatorSense' fan control software occasionally bugs out and gets stuck on high RPM.", "Aggressive 'Gamer' aesthetic looks unprofessional in corporate meetings."],
        useCases: ["Desktop Replacement", "Heavy Video Rendering (Premiere/DaVinci)", "High-End Streaming"],
        specDetails: {
            cpu: "Liquid metal cooling allows this powerful 16-core HX chip to boost up to 5.0GHz and stay there without thermal throttling.",
            gpu: "Runs at the maximum allowed 140 wattage, ensuring peak possible frame rates in extremely demanding titles. AV1 encode included.",
            ram: "Removable DDR5 modules allow upgrades up to a massive 64GB.",
            storage: "1TB Gen4 provides ultra-fast access to heavy game textures and 4K video files.",
            display: "WQXGA resolution and 500 nits of brightness deliver a shockingly bright, vividly color-accurate experience (100% sRGB) with G-Sync.",
            battery: "90Wh attempts to feed the power-hungry internals. Switch to integrated graphics to get around 5 hours of browsing."
        }
    },
    {
        id: "acer-aspire-5", brand: "Acer", name: "Aspire 5", image: "assets/aceraspire.webp",
        price: "EGP 24,000", priceVal: 24000,
        cpu: "Intel Core i5-1335U (10 Cores: 2P+8E)", cpuPower: 50,
        gpu: "Intel Iris Xe (QuickSync Decode)", gpuPower: 20,
        ram: "8GB DDR4", ramVal: 8,
        ramUpgrade: "1x Soldered + 1x SO-DIMM slot (Upgradeable up to 24GB)",
        storage: "512GB SSD", storageVal: 512,
        display: "15.6 FHD IPS (45% NTSC)", displayScore: 60,
        battery: "50Wh", batteryVal: 50,
        ports: "Thunderbolt 4, 2x USB-A, HDMI 2.1",
        weight: "1.77 kg", weightVal: 1.77,
        material: "Aluminum top cover (lid) with plastic bottom and keyboard frame",
        hiddenNotes: ["A staple for students on a budget.", "Very easy to open up and add a second RAM stick for better performance."],
        problems: ["Screen brightness is low, making it hard to use outdoors.", "Webcam quality is grainy and poor.", "8GB of RAM limits heavy multitasking."],
        useCases: ["Basic office work (Excel, Word)", "Web browsing", "Media streaming"],
        specDetails: {
            cpu: "10-Core power-efficient processor designed strictly for everyday desktop applications.",
            gpu: "Iris Xe is basic; enough for watching YouTube in 4K via Intel QuickSync, but completely unsuited for modern gaming.",
            ram: "8GB DDR4 is the bare minimum today; upgrading it is highly recommended.",
            storage: "512GB is plenty of space for documents, PDFs, and standard software.",
            display: "Standard 1080p IPS panel; decent viewing angles but lacks brightness and color range (45% NTSC).",
            battery: "50Wh paired with a low-power CPU results in respectable daily longevity."
        }
    },

    // ==========================================
    // LENOVO
    // ==========================================
    {
        id: "lenovo-loq-15", brand: "Lenovo", name: "LOQ 15IRX9 (2024)", image: "assets/lenovoloq.webp",
        price: "EGP 48,000", priceVal: 48000,
        cpu: "Intel Core i7-13650HX (14 Cores: 6P+8E)", cpuPower: 90,
        gpu: "RTX 3050 6GB (95W | NVENC Only)", gpuPower: 52,
        ram: "24GB DDR5 4800MHz", ramVal: 24,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 32GB)",
        storage: "512GB Gen4 SSD", storageVal: 512,
        display: "15.6 FHD 144Hz (100% sRGB, G-Sync)", displayScore: 144,
        battery: "60Wh", batteryVal: 60,
        ports: "1x Type-C (140W PD), 3x USB-A, HDMI 2.1, RJ45",
        weight: "2.38 kg", weightVal: 2.38,
        material: "PC-ABS plastic chassis with matte finish",
        hiddenNotes: ["The LA1 AI chip dynamically adjusts fan speeds and CPU/GPU power routing in real time for optimal FPS.", "Supports 140W USB-C charging, so you can leave the heavy brick at home and use a GaN charger."],
        problems: ["CRITICAL FLAW: Widespread global reports of the 2024 Intel HX motherboards dying entirely (DOA) due to power-delivery failures.", "Battery life is terrible due to the HX processor pairing with a small 60Wh battery."],
        useCases: ["Risk-tolerant Budget Gamers", "Programming Local Servers", "Heavy Multitasking"],
        specDetails: {
            cpu: "An unusually powerful 14-core processor for this price range, designed to brute-force CPU-heavy physics calculations.",
            gpu: "The 95W RTX 3050 is pushed to its absolute physical limits here, though it lacks hardware AV1 encoding.",
            ram: "24GB is an asymmetrical but highly practical setup, allowing heavy Docker container hosting and virtual machines.",
            storage: "Includes a second Gen 4 M.2 slot for cheap storage expansion.",
            display: "300 nits brightness and 100% sRGB color gamut make this an unexpectedly fantastic, color-accurate screen for the price.",
            battery: "Expect less than 3 hours of basic web browsing on battery power."
        }
    },
    {
        id: "lenovo-legion-pro-5i", brand: "Lenovo", name: "Legion Pro 5i Gen 8", image: "assets/lenovolegion.webp",
        price: "EGP 82,000", priceVal: 82000,
        cpu: "Intel Core i7-13700HX (16 Cores: 8P+8E)", cpuPower: 95,
        gpu: "RTX 4070 8GB (140W | AV1 Encode)", gpuPower: 90,
        ram: "32GB DDR5 5600MHz", ramVal: 32,
        ramUpgrade: "2x SO-DIMM slots (Both upgradeable, max 64GB)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "16.0 WQXGA 240Hz (100% sRGB, Dolby Vision, G-Sync)", displayScore: 280,
        battery: "80Wh", batteryVal: 80,
        ports: "2x Type-C (140W PD), 4x USB-A, HDMI 2.1, RJ45",
        weight: "2.55 kg", weightVal: 2.55,
        material: "Aluminum top cover (lid) with PC-ABS plastic bottom",
        hiddenNotes: ["Legion's ColdFront 5.0 cooling is widely considered the best thermal architecture in the industry right now.", "Extremely robust I/O ports mostly mapped to the back to keep your desk clean."],
        problems: ["Despite being a 'Pro' tier, Lenovo downgraded the trackpad to plastic instead of glass.", "Very heavy to transport.", "The fans emit a high-frequency whistle under extreme load."],
        useCases: ["Enthusiast PC Gaming", "Professional 3D Architecture", "VR Workloads"],
        specDetails: {
            cpu: "16 Cores and 24 Threads effortlessly handle extreme workloads like Blender rendering, video encoding, and heavy code compiling.",
            gpu: "A 140W RTX 4070 provides enough horsepower to play virtually any game at 1440p resolution on Ultra settings. Includes AV1 codec.",
            ram: "Extremely fast 5600MHz memory ensures 1% low framerates never drop, resulting in perfectly smooth gameplay.",
            storage: "1TB Gen4 provides ultra-fast access to massive game textures and video files.",
            display: "240Hz WQXGA is the gold standard: brilliantly bright (500 nits), highly accurate (100% sRGB), and blazing fast (3ms response).",
            battery: "80Wh capacity acts primarily as an Uninterruptible Power Supply (UPS); not intended for heavy unplugged use."
        }
    },
    {
        id: "lenovo-thinkpad-e14", brand: "Lenovo", name: "ThinkPad E14 Gen 5", image: "assets/lenovothink.webp",
        price: "EGP 42,000", priceVal: 42000,
        cpu: "Intel Core i7-1355U (10 Cores: 2P+8E)", cpuPower: 55,
        gpu: "Intel Iris Xe (QuickSync Decode)", gpuPower: 20,
        ram: "16GB DDR4 3200MHz", ramVal: 16,
        ramUpgrade: "1x Soldered + 1x SO-DIMM slot (Upgradeable up to 40GB)",
        storage: "512GB Opal2 SSD", storageVal: 512,
        display: "14.0 WUXGA IPS (45% NTSC)", displayScore: 70,
        battery: "57Wh", batteryVal: 57,
        ports: "1x Thunderbolt 4, 1x Type-C, 2x USB-A, HDMI 2.1, RJ45",
        weight: "1.43 kg", weightVal: 1.43,
        material: "Hybrid build: Aluminum top lid with a durable PC-ABS bottom",
        hiddenNotes: ["Keyboard is legendary; it provides deep 1.5mm travel and is arguably the best typing experience on any laptop.", "Includes physical privacy shutter on the webcam and dTPM 2.0 security chip."],
        problems: ["Industrial design looks utilitarian and dated to modern consumers.", "Display maxes out at 60Hz, feeling sluggish compared to modern 120Hz consumer screens.", "Audio from the speakers is tinny and quiet."],
        useCases: ["Software Engineering", "Corporate Business & Enterprise", "Heavy Copywriting"],
        specDetails: {
            cpu: "10-core chip strictly optimized for burst tasks (like loading massive Excel sheets) while keeping thermal output near zero.",
            gpu: "Handles basic external monitors and video calls smoothly, but completely fails at 3D rendering.",
            ram: "16GB is highly reliable for managing complex local database software and heavy browser research.",
            storage: "Opal2 SSD features hardware-level encryption to secure sensitive enterprise data.",
            display: "16:10 aspect ratio provides crucial vertical space for reading long blocks of text or code.",
            battery: "In a low-power business machine, 57Wh yields fantastic reliability for long boardroom meetings (8+ hours)."
        }
    },
    {
        id: "lenovo-yoga-pro-9i", brand: "Lenovo", name: "Yoga Pro 9i", image: "assets/lenovoyoga.webp",
        price: "EGP 95,000", priceVal: 95000,
        cpu: "Intel Core i9-13905H (14 Cores: 6P+8E)", cpuPower: 94,
        gpu: "RTX 4060 8GB (100W | AV1 Encode)", gpuPower: 75,
        ram: "32GB LPDDR5x 6400MHz", ramVal: 32,
        ramUpgrade: "0 slots (100% Soldered LPDDR5x, Non-upgradeable)",
        storage: "1TB Gen4 NVMe SSD", storageVal: 1024,
        display: "16.0 3.2K Mini LED 165Hz Touch (100% DCI-P3, HDR 1200)", displayScore: 255,
        battery: "75Wh", batteryVal: 75,
        ports: "1x Thunderbolt 4, 2x USB-A, HDMI 2.1, SD Card Reader",
        weight: "2.23 kg", weightVal: 2.23,
        material: "All-aluminum CNC unibody with MIL-STD-810H durability",
        hiddenNotes: ["A direct competitor to the MacBook Pro 16.", "The Mini LED screen has insanely deep blacks and high contrast for media viewing."],
        problems: ["Extremely expensive.", "Mini LED panels consume a lot of battery power, resulting in sub-par battery life for a 'Creator' laptop."],
        useCases: ["Professional Video Editing (Premiere, DaVinci)", "HDR Media Creation", "High-end content consumption"],
        specDetails: {
            cpu: "The 14-Core i9 processor blasts through rendering times and handles complex timelines effortlessly.",
            gpu: "RTX 4060 accelerates video encoding via hardware AV1 codecs and offers great gaming performance as a secondary benefit.",
            ram: "Ultra-fast LPDDR5x feeds data to the i9 instantly, but is permanently soldered.",
            storage: "Top-tier speeds required for editing massive 4K raw video files without lag.",
            display: "Mini LED technology hits a blinding 1200-nits peak brightness, capable of true HDR mastering across 100% DCI-P3 and Adobe RGB gamuts.",
            battery: "75Wh struggles to power the demanding i9 and the super-bright Mini LED screen simultaneously."
        }
    },
    {
        id: "lenovo-ideapad-slim-5", brand: "Lenovo", name: "IdeaPad Slim 5", image: "assets/lenovoidea.webp",
        price: "EGP 34,000", priceVal: 34000,
        cpu: "Intel Core i7-1355U (10 Cores: 2P+8E)", cpuPower: 55,
        gpu: "Intel Iris Xe (QuickSync Decode)", gpuPower: 20,
        ram: "16GB LPDDR5 5200MHz", ramVal: 16,
        ramUpgrade: "0 slots (100% Soldered LPDDR5, Non-upgradeable)",
        storage: "1TB Gen4 SSD", storageVal: 1024,
        display: "16.0 WUXGA OLED (100% DCI-P3, HDR 500)", displayScore: 120,
        battery: "56Wh", batteryVal: 56,
        ports: "2x Type-C, 2x USB-A, HDMI 1.4b, MicroSD",
        weight: "1.89 kg", weightVal: 1.89,
        material: "Full aluminum metal chassis (top and bottom)",
        hiddenNotes: ["The aluminum chassis feels much more premium than its price suggests.", "Great front-facing speakers positioned next to the keyboard."],
        problems: ["The HDMI port is an outdated 1.4b standard, which cannot output 4K at 60Hz to external monitors.", "RAM is soldered and cannot be upgraded."],
        useCases: ["Media viewing / Entertainment", "General productivity", "Light coding"],
        specDetails: {
            cpu: "An efficient 10-core i7 processor handles daily tasks smoothly while keeping fan noise to a minimum.",
            gpu: "Iris Xe easily drives the OLED screen for crisp UI rendering and hardware-accelerated video playback.",
            ram: "16GB of fast LPDDR5 ensures the laptop remains fast for years of everyday use.",
            storage: "1TB is very generous at this price point, providing room for thousands of photos and files.",
            display: "The OLED panel delivers stunning cinema-grade DCI-P3 colors and infinite contrast blacks, making movies look incredible.",
            battery: "56Wh provides solid all-day usage thanks to the low-power CPU."
        }
    }
];;
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
    else {
        compareBtn.classList.remove("active");
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
        let activeList = laptopsData.filter((l) => l.brand.toLowerCase() === selectd);
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
                let selectdLaptops = laptopsData.filter((l) => getSavedCompares().includes(l.id));

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