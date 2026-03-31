// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Gallery Data
const galleryData = [
    { img: "gallery/oil8.jpeg", title: "Sun Heart Oil Pouch Roll", type: "4 Colour Flexo", desc: "Crispy snacks printed roll with vibrant contrast" },
    { img: "gallery/paneer.jpeg", title: "Milky Bliss Paneer Pouch Roll", type: "4 Colour Rotogravure", desc: "High-durability chemical packaging" },
    { img: "gallery/milk1.jpeg", title: "Bramha Milk Pouch Roll", type: "2 Colour CI Flexo", desc: "Masala & spice packaging, high clarity" },
    { img: "gallery/basundi.jpeg", title: "Milky Bliss Basundi Roll", type: "4 Colour Rotogravure", desc: "Premium pet food packaging" },
    { img: "gallery/lassi.jpeg", title: "Milky Bliss Lassi Pouch Roll", type: "4 Colour Rotogravure", desc: "Juice & beverage sleeves" },
    { img: "gallery/oil5.jpeg", title: "Shrihira Oil pouch ", type: "2 Colour Flexo", desc: "Medicine strip packaging" },
    { img: "gallery/oil6.jpeg", title: "Taj Oil pouch", type: "4 Colour Premium", desc: "Airtight coffee bags roll" },
    { img: "gallery/oil7.jpeg", title: "Kalbhairav oil pouch ", type: "2 Colour Flexo", desc: "Heavy-duty freezer rolls" },
    { img: "gallery/amrakhand1.jpeg", title: "Milky Bliss Amrakhand ", type: "2 Colour", desc: "Edible oil packaging with high barrier" },
    { img: "gallery/shrikhand.jpeg", title: "Milky Bliss Shrikhand", type: "4 Colour", desc: "Fresh milk pouch printing" },
    { img: "gallery/oil10.jpeg", title: "KSB Gold Oil pouch", type: "4 Colour", desc: "Crispy namkeen packaging" },
    { img: "gallery/oil9.jpeg", title: "Sun heart oil pouch", type: "2 Colour Flexo", desc: "Washing powder pouch roll" }
];

function renderGallery() {
    const container = document.getElementById('galleryGridContainer');
    if (container) {
        container.innerHTML = '';
        galleryData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.innerHTML = `
                <img class="gallery-img" src="${item.img}?auto=compress&cs=tinysrgb&w=800" alt="${item.title}" loading="lazy">
                <div class="gallery-info">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                    <span class="gallery-badge"><i class="fas fa-print"></i> ${item.type}</span>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

// Section Switching
const sections = {
    home: document.getElementById('home'),
    about: document.getElementById('about'),
    machinery: document.getElementById('machinery'),
    gallery: document.getElementById('gallery'),
    contact: document.getElementById('contact')
};

function showSection(sectionId) {
    Object.values(sections).forEach(section => {
        if (section) section.classList.remove('active');
    });
    if (sections[sectionId]) {
        sections[sectionId].classList.add('active');
        if (sectionId === 'gallery') renderGallery();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.querySelectorAll('[data-section]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const section = el.getAttribute('data-section');
        if (section && sections[section]) showSection(section);
    });
});

AOS.init({ duration: 800, once: true, offset: 100 });
renderGallery();

if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (sections[hash]) showSection(hash);
}