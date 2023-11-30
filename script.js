document.getElementById('mobile-nav').addEventListener('click', function () {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('navbar').addEventListener('click', function () {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

// Array of image sources
var imageSources = [
    "images/xzq(1).jpeg",
    "images/xzq(2).jpeg",
    "images/xzq(3).jpeg",
    "images/xzq(4).jpeg",
];

var currentIndex = 0;
var imageElement = document.querySelector(".hero-image");
var buttons = document.querySelectorAll(".image-button");

// Function to set the initial state of the buttons
function setInitialButtonState() {
    buttons.forEach(button => button.classList.remove('active'));
    buttons[currentIndex].classList.add('active');
}

// Function to change the image
function changeImage(index) {
    if (index >= 0 && index < imageSources.length) {
        currentIndex = index;

        // Add this line to hide the current image before transitioning
        imageElement.style.opacity = 0;

        // Remove the 'active' class from all buttons
        buttons.forEach(button => button.classList.remove('active'));

        setTimeout(function() {
            imageElement.src = imageSources[currentIndex];

            // Add this line to smoothly transition the new image
            imageElement.style.transition = "opacity 1s ease-in-out";
            imageElement.style.opacity = 1;

            // Add the 'active' class to the clicked button
            buttons[currentIndex].classList.add('active');
        }, 500); // Wait for 0.5 seconds to allow the previous image to fade out before transitioning the new image
    }
}

// Set the initial state of the buttons when the page loads
document.addEventListener("DOMContentLoaded", setInitialButtonState);

// Function to automatically change the image every 5 seconds
function autoChangeImage() {
    setInterval(function() {
        currentIndex = (currentIndex + 1) % imageSources.length;
        changeImage(currentIndex);
    }, 5000); // Change image every 5000 milliseconds (5 seconds)
}

  
// Call the autoChangeImage function when the page loads
document.addEventListener("DOMContentLoaded", autoChangeImage);

function playOnPlatform(url) {
    // Open the provided URL in a new tab/window
    window.open(url, '_blank');
}

var currentSongIndex = 0;
var songPlayers = document.querySelectorAll('.song-player');

function toggleAudio(audioID) {
    var audio = document.getElementById(audioID);
    var image = document.getElementById(`image${audioID.charAt(audioID.length - 1)}`);

    if (audio.paused) {
        audio.play();
        image.classList.add('fade-out');
    } else {
        audio.pause();
        audio.currentTime = 0;
        image.classList.remove('fade-out');
    }

    // Reset animation and show image when the audio finishes playing
    audio.addEventListener('ended', function () {
        image.classList.remove('fade-out');
    });
}


function changeSong(direction) {
    songPlayers[currentSongIndex].style.display = 'none';
    currentSongIndex += direction;

    if (currentSongIndex < 0) {
        currentSongIndex = songPlayers.length - 1;
    } else if (currentSongIndex >= songPlayers.length) {
        currentSongIndex = 0;
    }

    songPlayers[currentSongIndex].style.display = 'flex';
}

// Show the first song player initially
if (window.location.pathname.includes("index.html")) {
    // Your index.html specific code

    // Show the first song player initially
    songPlayers[currentSongIndex].style.display = 'flex';
}


const videoUrls = [
    'https://www.youtube.com/embed/iQhKe0q7nqs',
    'https://www.youtube.com/embed/y_NrR7dmBiI',
    'https://www.youtube.com/embed/XKuL5xaKZHM',
    'https://www.youtube.com/embed/4p9kZT7dGQA?list=PLHhCK-1ELevCi2C8ezPfUX-kSg7B70BoI',
    'https://www.youtube.com/embed/0SkZebcmRJA?list=PLHhCK-1ELevDWYkkutb8B3wyXr2-oZul-',
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

//app
function openPopup() {
    document.getElementById("appPopup").style.display = "flex";
}

// Function to close the pop-up
function closePopup() {
    document.getElementById("appPopup").style.display = "none";
}

// Event listener to close the pop-up when clicking outside of it
window.onclick = function (event) {
    var popup = document.getElementById("appPopup");
    if (event.target === popup) {
        closePopup();
    }
};

function toggleMobileSidebar() {
    // Toggle the visibility of your mobile sidebar or perform any other actions
    var mobileSidebar = document.getElementById('mobile-sidebar');
    if (mobileSidebar.style.display === 'none') {
        mobileSidebar.style.display = 'block';
        mobileSidebar.style.animationName = 'swipe-in';
    } else {
        mobileSidebar.style.animationName = 'swipe-out';
        setTimeout(() => {
            mobileSidebar.style.display = 'none'
        }, 500)

    }
}

function detectDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Redirect to the Android app store link
        var downloadConfirmed = confirm("Download the Joker Xue App")
        if (downloadConfirmed){
            window.location.href = "https://static01-joker.taihe.com/0206/M00/00/00/jokerxue-JokerXue-download-release.apk";

        }
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirect to the iOS app store link
        window.location.href = "https://apps.apple.com/my/app/joker-xue-%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%AE%98%E6%96%B9app/id1454333288";
    } else {
        var downloadConfirmed = confirm("Download the Joker Xue App")
        if (downloadConfirmed){
            window.location.href = "https://static01-joker.taihe.com/0206/M00/00/00/jokerxue-JokerXue-download-release.apk";

        }    }
}

// Add a click event listener to your app button
var appButton = document.querySelector(".app-mobile"); // replace with the actual class or ID of your app button
appButton.addEventListener("click", detectDevice);



//create account
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        // Check if the username is already taken
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(u => u.username === username);

        if (existingUser) {
            alert('Username already exists. Please choose another one.');
        } else {
            // Hash the password before storing it
            const hashedPassword = hashPassword(password);

            // Add the new user to the local storage
            users.push({ username, password: hashedPassword });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully!');
        }
    });

    function hashPassword(password) {
        // In a real-world scenario, use a proper hashing library (e.g., bcrypt)
        // For simplicity, using a basic hash function here (not suitable for production)
        return btoa(password); // Base64 encoding (not secure, only for demonstration)
    }
});

//merch sign in
// signin.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleSignInButton = document.getElementById('toggleSignInButton');
    const signInModal = document.getElementById('signInModal');
    const signInButton = document.getElementById('signInButton');
    const userButton = document.getElementById('userButton'); // Assuming this is the user button with the image

    // Check if the user is logged in when the page loads
    checkUserLoginStatus();

    // Show the sign-in modal when the button is clicked
    toggleSignInButton.addEventListener('click', function () {
        signInModal.style.display = 'block';
    });

    // Close the sign-in modal when the close button is clicked
    window.closeSignInModal = function () {
        signInModal.style.display = 'none';
    };

    // Close the sign-in modal if the user clicks outside of it
    window.onclick = function (event) {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
    };

    const signinForm = document.getElementById('signinForm');

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signinUsername').value;
        const password = document.getElementById('signinPassword').value;

        // Check if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === hashPassword(password));

        if (user) {
            alert('Sign in successful!');
            signInModal.style.display = 'none';
            toggleSignInButton.style.display = 'none';
            userButton.style.display = 'block';

            // Set the user login status in local storage
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            alert('Invalid username or password.');
        }
    });

    function hashPassword(password) {
        // In a real-world scenario, use a proper hashing library (e.g., bcrypt)
        // For simplicity, using a basic hash function here (not suitable for production)
        return btoa(password); // Base64 encoding (not secure, only for demonstration)
    }

    function checkUserLoginStatus() {
        // Check if the user is logged in based on the flag in local storage
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (isLoggedIn) {
            toggleSignInButton.style.display = 'none';
            userButton.style.display = 'block';
        }
    }
});

//cart
// Open the cart sidebar
function openCart() {
    document.getElementById('cartSidebar').style.width = '250px';
    document.getElementById('overlay').style.width = '100%';
}

// Close the cart sidebar
function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
    document.getElementById('overlay').style.width = '0';
}

document.getElementById('userButton').addEventListener('click', openCart);

document.addEventListener('DOMContentLoaded', function () {
    const addToCartDesktop = document.getElementById('addToCartDesktop');
    const cartSidebar = document.getElementById('cartSidebar');

    addToCartDesktop.addEventListener('click', function () {
        // Check if the user is logged in
        if (isLoggedIn()) {
            const itemName = 'Item 1'; // You can dynamically get the item name based on your HTML structure
            addToCart(itemName);
            updateCartSidebar(); // Update the cart sidebar content
            alert('Item added to the cart!');
        } else {
            alert('Please sign in to add items to your cart.');
            // Optionally, you can redirect the user to the sign-in page here
        }
    });

    function addToCart(itemName) {
        // Retrieve existing cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item is already in the cart
        const existingItem = cartItems.find(item => item === itemName);

        if (!existingItem) {
            // If the item is not in the cart, add it
            cartItems.push(itemName);

            // Save the updated cart items to local storage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }

    function updateCartSidebar() {
        // Retrieve cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Clear the existing content in the cart sidebar
        cartSidebar.innerHTML = '';

        // Display each item in the cart
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('p');
            cartItemElement.textContent = item;
            cartSidebar.appendChild(cartItemElement);
        });
    }

    function isLoggedIn() {
        // Check if the user is logged in based on the flag in local storage
        return localStorage.getItem('isLoggedIn') === 'true';
    }
});