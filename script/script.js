const destinations = [
    {
        id: 1,
        name: "Grand Mosque of Cotabato",
        municipality: "Access via Border/Isulan",
        category: "Historical Site",
        image: "images/1.jpg",
        shortDesc: "A breathtaking architectural masterpiece with magnificent golden domes showcasing profound culture.",
        fullDesc: "The Sultan Haji Hassanal Bolkia Mosque features rich architectural details and grand golden domes, standing proudly as a structural hallmark in the region.",
        entranceFee: "Free Admission",
        openingHours: "6:00 AM - 7:00 PM",
        activities: "Cultural photography, architectural tours, silent prayer.",
        bestTime: "Late afternoons. Modest clothing covering shoulders and knees is strictly required."
    },
    {
        id: 2,
        name: "Marguez Beach Resort",
        municipality: "Kalamansig",
        category: "Beach",
        image: "images/2.jpg",
        shortDesc: "Pristine sandy shorelines facing the calm Celebes Sea, lined with relaxing tropical coconut trees.",
        fullDesc: "A beautiful coastal destination in Kalamansig. Features fine gray-to-white sands and clear turquoise waters, perfect for family camping and beach sports.",
        entranceFee: "PHP 50.00",
        openingHours: "Open 24/7",
        activities: "Swimming, beach volleyball, cottage camping, sunset viewing.",
        bestTime: "March to May during the peak summer dry season."
    },
    {
        id: 3,
        name: "Panigan Underground River and Cave",
        municipality: "Esperanza",
        category: "Adventure",
        image: "images/3.JPG",
        shortDesc: "An exhilarating eco-tourism river cave system decorated with ancient hanging stalactites.",
        fullDesc: "Panigan River offers stalactite-filled subterranean passages, natural cold water pools, and incredible bat populations for thrill-seeking explorers.",
        entranceFee: "PHP 150.00 (With local guide)",
        openingHours: "8:00 AM - 4:00 PM",
        activities: "Spelunking, trail trekking, bat-watching.",
        bestTime: "Dry months. Avoid scheduling trips immediately after heavy monsoons."
    },
    {
        id: 4,
        name: "Bansada Mountain Peak",
        municipality: "Bagumbayan",
        category: "Mountain",
        image: "images/4.jpg",
        shortDesc: "Scenic elevated ridge viewing point offering breathtaking lookouts over rolling green crop fields.",
        fullDesc: "Bansada Peak provides sweeping 360-degree views of Bagumbayan's agricultural valley and a regular early morning sea-of-clouds experience.",
        entranceFee: "PHP 30.00",
        openingHours: "5:00 AM - 6:00 PM",
        activities: "Cloud chasing, photography, light hiking.",
        bestTime: "5:30 AM to catch the sunrise breaking over the low mountain mist clouds."
    },
    {
        id: 5,
        name: "Liguasan Marsh Eco-Reserve",
        municipality: "Lutayan Border",
        category: "Historical Site",
        image: "images/5.jpg",
        shortDesc: "An immense wetland habitat teeming with endemic birds and peaceful river scenery.",
        fullDesc: "A vast wetland sanctuary critically vital to local biodiversity. It serves as an organic migration point for unique wild avian species.",
        entranceFee: "PHP 100.00 Conservation Fee",
        openingHours: "7:00 AM - 5:00 PM",
        activities: "Bird watching, guided riverboat tours, ecological photography.",
        bestTime: "Cool early mornings from November to February."
    },
    {
        id: 6,
        name: "Kapingnat Waterfalls",
        municipality: "Senator Ninoy Aquino",
        category: "Waterfall",
        image: "images/6.jpg",
        shortDesc: "A multi-tiered refreshing waterfall hidden beautifully inside deep mountain forests.",
        fullDesc: "A beautiful multi-tiered natural cascade flowing into a relaxing catchbasin surrounded by wild lush forestry.",
        entranceFee: "PHP 40.00",
        openingHours: "8:00 AM - 4:30 PM",
        activities: "Trekking, cold spring swimming, forest picnics.",
        bestTime: "September through January when the forest streams look rich and full."
    },
    {
        id: 7,
        name: "Balot Island Group",
        municipality: "Kalamansig",
        category: "Island",
        image: "images/7.jpg",
        shortDesc: "An offshore group of islands containing crystal clear waters and untouched coral reefs.",
        fullDesc: "A brilliant string of islands offering pristine snorkeling reefs, distinct coral ecosystems, and serene beaches.",
        entranceFee: "PHP 200.00 Boat Hire Share",
        openingHours: "6:00 AM - 5:00 PM",
        activities: "Island hopping, snorkeling, coral photography.",
        bestTime: "Summer periods when the marine tides are predictable and smooth."
    },
    {
        id: 8,
        name: "Lebak Coastal Shoreline",
        municipality: "Lebak",
        category: "Beach",
        image: "images/8.jpg",
        shortDesc: "An extensive volcanic gray sand beach famous for its spectacular sunset coast views.",
        fullDesc: "Famous for wide volcanic stretches of unique gray sand and panoramic views of sunsets slipping over the Celebes Sea.",
        entranceFee: "Free",
        openingHours: "24 Hours Accessible",
        activities: "Beachcombing, sunset watching, eating local seaside street foods.",
        bestTime: "5:00 PM to catch the beautiful golden sunset lines."
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const isDestinationsPage = document.getElementById("destinationGrid");
    const isGalleryPage = document.getElementById("galleryContainer");
    const isInquiryPage = document.getElementById("bookingForm");

    if (isDestinationsPage) {
        displayDestinations(destinations);
        setupFilters();
        document.getElementById("searchInput").addEventListener("input", handleSearch);
    }
    if (isGalleryPage) {
        generateGallery();
    }
    if (isInquiryPage) {
        setupInquiryDropdown();
        document.getElementById("bookingForm").addEventListener("submit", validateForm);
    }
});

function displayDestinations(items) {
    const grid = document.getElementById("destinationGrid");
    grid.innerHTML = "";
    if(items.length === 0) {
        grid.innerHTML = `<p class="text-center w-100 py-4 text-muted">No destinations match your filters.</p>`;
        return;
    }
    items.forEach(dest => {
        grid.innerHTML += `
            <div class="col animate-fade-in">
                <div class="card h-100 shadow-sm border-0 overflow-hidden rounded-4 card-hover-effect">
                    <img src="${dest.image}" class="card-img-top dest-card-img" alt="${dest.name}">
                    <div class="card-body d-flex flex-column p-3">
                        <span class="badge bg-success align-self-start mb-2">${dest.category}</span>
                        <h5 class="fw-bold text-dark text-truncate mb-1">${dest.name}</h5>
                        <p class="small text-muted mb-2"><i class="bi bi-geo-alt me-1"></i>${dest.municipality}</p>
                        <p class="small text-secondary card-desc mb-3">${dest.shortDesc}</p>
                        <button class="btn btn-outline-success btn-sm mt-auto w-100 py-2 fw-bold" onclick="openDetailsModal(${dest.id})">View Details</button>
                    </div>
                </div>
            </div>`;
    });
}

function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            executeFiltering();
        });
    });
}

function handleSearch() { executeFiltering(); }

function executeFiltering() {
    const searchVal = document.getElementById("searchInput").value.toLowerCase();
    const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");

    const filtered = destinations.filter(d => {
        const matchesSearch = d.name.toLowerCase().includes(searchVal) || d.municipality.toLowerCase().includes(searchVal);
        const matchesCategory = (activeFilter === "All") || (d.category === activeFilter);
        return matchesSearch && matchesCategory;
    });
    displayDestinations(filtered);
}


function openDetailsModal(id) {
    const dest = destinations.find(d => d.id === id);
    if(!dest) return;
    document.getElementById("modalTitle").innerText = dest.name;
    document.getElementById("modalImage").src = dest.image;
    document.getElementById("modalDestName").innerText = dest.name;
    document.getElementById("modalCategory").innerText = dest.category;
    document.getElementById("modalLocation").innerText = dest.municipality;
    document.getElementById("modalFullDesc").innerText = dest.fullDesc;
    document.getElementById("modalEntrance").innerText = dest.entranceFee;
    document.getElementById("modalHours").innerText = dest.openingHours;
    document.getElementById("modalActivities").innerText = dest.activities;
    document.getElementById("modalBestTime").innerText = dest.bestTime;

    localStorage.setItem("selectedTrip", dest.name);

    new bootstrap.Modal(document.getElementById('detailsModal')).show();
}

const galleryImages = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.JPG",
    "images/capitol.jpg",
    "images/bird.jpg",
    "images/mountain.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/bansadayaw.JPG",
    "images/birdfestival.jpg",
    "images/hamungaya.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/kanduli.jpg",
    "images/capitol.jpg",
    "images/kalimudan.jpg",
    "images/kalilang.jpg",
    "images/hero.jpg",
    "images/hinabyog.JPG",
    "images/hinugyaw.jpg",
    "images/kalamatansayan.jpg",
    "images/pastil.jpg",
    "images/tinagtag.jpg",
    "images/kape.jpg",
    "images/beef.jpg",
    "images/kawayan.jpg",
    "images/talakudong.jpg",
    "images/birdfestival.jpg",
    "images/hamungaya.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/kanduli.jpg",
    "images/capitol.jpg",
    "images/kalimudan.jpg",
    "images/kalilang.jpg",

];

let currentLightboxIndex = 0;

function generateGallery() {
    const container = document.getElementById("galleryContainer");
    
    if (!container) return; 

    container.innerHTML = "";

    galleryImages.forEach((imgUrl, index) => {
        container.innerHTML += `
            <div class="col">
                <img src="${imgUrl}" alt="Sultan Kudarat Gallery Image ${index + 1}" class="img-fluid rounded gallery-item shadow-sm" onclick="openLightbox(${index})">
            </div>`;
    });

    const prevBtn = document.getElementById("prevLightBtn");
    const nextBtn = document.getElementById("nextLightBtn");

    if (prevBtn) prevBtn.addEventListener("click", () => navigateLightbox(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => navigateLightbox(1));
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightboxImg = document.getElementById("lightboxImage");
    
    if (lightboxImg) {
        lightboxImg.src = galleryImages[currentLightboxIndex];
        
        const lightboxModalElement = document.getElementById('lightboxModal');
        if (lightboxModalElement) {
            const modalInstance = bootstrap.Modal.getInstance(lightboxModalElement) || new bootstrap.Modal(lightboxModalElement);
            modalInstance.show();
        }
    }
}

function navigateLightbox(dir) {
    currentLightboxIndex += dir;
    
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = galleryImages.length - 1;
    }
    if (currentLightboxIndex >= galleryImages.length) {
        currentLightboxIndex = 0;
    }
    
    const lightboxImg = document.getElementById("lightboxImage");
    if (lightboxImg) {
        lightboxImg.src = galleryImages[currentLightboxIndex];
    }
}

document.addEventListener("DOMContentLoaded", generateGallery);

function setupInquiryDropdown() {
    const select = document.getElementById("targetDestination");
    destinations.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d.name;
        opt.innerText = `${d.name} (${d.municipality})`;
        select.appendChild(opt);
    });

    const cachedTrip = localStorage.getItem("selectedTrip");
    if (cachedTrip) {
        select.value = cachedTrip;
        localStorage.removeItem("selectedTrip");
    }
}

function validateForm(e) {
    e.preventDefault();
    let isValid = true;
    document.querySelectorAll(".error-msg").forEach(el => el.style.display = "none");
    document.querySelectorAll(".form-control, .form-select").forEach(el => el.classList.remove("is-invalid"));

    const name = document.getElementById("fullName");
    if(name.value.trim() === "") { showError("fullName", "nameError"); isValid = false; }

    const email = document.getElementById("email");

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { showError("email", "emailError"); isValid = false; }

    const contact = document.getElementById("contactNum");
    if(!/^[0-9]+$/.test(contact.value.trim())) { showError("contactNum", "contactError"); isValid = false; }

    if(document.getElementById("targetDestination").value === "") { showError("targetDestination", "destinationError"); isValid = false; }
    if(document.getElementById("travelDate").value === "") { showError("travelDate", "dateError"); isValid = false; }
    if(parseInt(document.getElementById("visitorCount").value) < 1) { showError("visitorCount", "visitorError"); isValid = false; }
    if(document.getElementById("message").value.trim() === "") { showError("message", "messageError"); isValid = false; }

    if(isValid) {
        alert("Inquiry submitted successfully!");
        document.getElementById("bookingForm").reset();
    }
}

function showError(inputId, errorId) {
    document.getElementById(inputId).classList.add("is-invalid");
    document.getElementById(errorId).style.display = "block";
}
