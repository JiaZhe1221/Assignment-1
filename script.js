document.getElementById('navbar').addEventListener('click', function () {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.hero-image');
const totalImages = images.length;

function rotateImages() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateHeroImages();
}

function updateHeroImages() {
    const translateValue = -currentImageIndex * 100 + '%';
    document.querySelector('.hero-images').style.transform = 'translateX(' + translateValue + ')';
}

function changeImage(index) {
    currentImageIndex = index;
    updateHeroImages();
}

setInterval(rotateImages, 5000);

function playOnPlatform(platformLink) {
    window.open(platformLink, '_blank');
}

const videoUrls = [
    'https://www.youtube.com/embed/iQhKe0q7nqs',
    'https://www.youtube.com/embed/y_NrR7dmBiI',
    'https://www.youtube.com/embed/XKuL5xaKZHM',
];

let currentVideoIndex = 0;

function changeVideo(direction) {
    currentVideoIndex += direction;

    if (currentVideoIndex < 0) {
        currentVideoIndex = videoUrls.length - 1;
    } else if (currentVideoIndex >= videoUrls.length) {
        currentVideoIndex = 0;
    }

    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrls[currentVideoIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    const eventDetails = [
        { date: "Wed, 22 Nov, 2023", time: "12:00 am", country: "Paris, France", venue: "Zenith Paris - La Villette" },
        { date: "Sat, 2 Dec, 2023", time: "8:00 pm", country: "New Territories, Hong Kong", venue: "AsiaWorld-Expo" },
        { date: "Sat, 23 Dec, 2023", time: "8:00 pm", country: "Kuala Lumpur, Malaysia", venue: "Axiata Arena Bukit Jalil" },
        { date: "Sun, 24 Dec, 2023", time: "8:00 pm", country: "Kuala Lumpur, Malaysia", venue: "Axiata Arena Bukit Jalil" },
        { date: "Mon, 25 Dec, 2023", time: "11:00 am", country: "Kuala Lumpur, Malaysia", venue: "Axiata Arena Bukit Jalil" },
        { date: "Sat, 6 Jan, 2024", time: "8:00 pm", country: "Singapore", venue: "Singapore Indoor Stadium" },
        { date: "Sun, 7 Jan, 2024", time: "7:00 pm", country: "Singapore", venue: "Singapore Indoor Stadium" },
    ];

    populateEventTable(eventDetails);
});

function populateEventTable(eventDetails) {
    const tableBody = document.querySelector("#events-table tbody");

    eventDetails.forEach((event) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.date}</td>
            <td>${event.time}</td>
            <td>${event.country}</td>
            <td>${event.venue}</td>
        `;
        tableBody.appendChild(row);
    });
}
