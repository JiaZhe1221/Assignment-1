//nav bar
document.getElementById('mobile-nav').addEventListener('click', function () {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

//index.html

//hero image section
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
        imageElement.style.opacity = 0;
        buttons.forEach(button => button.classList.remove('active'));

        setTimeout(function() {
            imageElement.src = imageSources[currentIndex];

            imageElement.style.transition = "opacity 1s ease-in-out";
            imageElement.style.opacity = 1;

            buttons[currentIndex].classList.add('active');
        }, 500); // Wait for 0.5 seconds to allow the previous image to fade out before transitioning the new image
    }
}

// Set the initial state of the buttons when the page loads(the first button will be purple)
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


//Songs section
function playOnPlatform(url) {
    // Open the provided URL in a new tab/window
    window.open(url, '_blank');
}

var currentSongIndex = 0;
var songPlayers = document.querySelectorAll('.song-player');

//play the music when the image was press
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

//button that will change the songs
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
    songPlayers[currentSongIndex].style.display = 'flex';
}

//videos section
const videoUrls = [
    'https://www.youtube.com/embed/iQhKe0q7nqs',
    'https://www.youtube.com/embed/y_NrR7dmBiI',
    'https://www.youtube.com/embed/XKuL5xaKZHM',
    'https://www.youtube.com/embed/4p9kZT7dGQA?list=PLHhCK-1ELevCi2C8ezPfUX-kSg7B70BoI',
    'https://www.youtube.com/embed/0SkZebcmRJA?list=PLHhCK-1ELevDWYkkutb8B3wyXr2-oZul-',
];

let currentVideoIndex = 0;

//button that will change the videos
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


//Dates.html
document.addEventListener("DOMContentLoaded", function () {
    //all the events details
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

//write the events detail to html file
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

//App
//pop up window for desktop mode
function openPopup() {
    document.getElementById("appPopup").style.display = "flex";
}

//function to close the pop-up
function closePopup() {
    document.getElementById("appPopup").style.display = "none";
}

//event listener to close the pop-up when clicking outside of it
window.onclick = function (event) {
    var popup = document.getElementById("appPopup");
    if (event.target === popup) {
        closePopup();
    }
};

//Mobile view
//animation for the mobile side bar
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

//app
//detect user device and download the app
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

//add a click event listener to your app button
var appButton = document.querySelector(".app-mobile"); // replace with the actual class or ID of your app button
appButton.addEventListener("click", detectDevice);





//merch
//sign up
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const emailField = form.querySelector('.email-field');
    const emailInput = emailField.querySelector('.email');
    const passField = form.querySelector('.create-password');
    const passInput = passField.querySelector('.password');
    const cPassField = form.querySelector('.confirm-password');
    const cPassInput = cPassField.querySelector('.cPassword');

    // Email Validation
    function checkEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)) {
            return emailField.classList.add('invalid');
        }
        emailField.classList.remove('invalid');
    }

    //hide and show password
    const eyeIcons = document.querySelectorAll('.show-hide');

    eyeIcons.forEach((eyeIcon) => {
        eyeIcon.addEventListener('click', () => {
            const pInput = eyeIcon.parentElement.querySelector('input');
            if (pInput.type === 'password') {
                eyeIcon.classList.replace('bx-hide', 'bx-show');
                return (pInput.type = 'text');
            }
            eyeIcon.classList.replace('bx-show', 'bx-hide');
            pInput.type = 'password';
        });
    });

    //password Validation
    function createPass() {
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passInput.value.match(passPattern)) {
            return passField.classList.add('invalid');
        }
        passField.classList.remove('invalid');
    }

    // Confirm Password Validation
    function confirmPass() {
        if (passInput.value !== cPassInput.value || cPassInput.value === '') {
            return cPassField.classList.add('invalid');
        }
        cPassField.classList.remove('invalid');
    }

    //signup Form Submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        checkEmail();
        createPass();
        confirmPass();

        emailInput.addEventListener('keyup', checkEmail);
        passInput.addEventListener('keyup', createPass);
        cPassInput.addEventListener('keyup', confirmPass);

        if (
            !emailField.classList.contains('invalid') &&
            !passField.classList.contains('invalid') &&
            !cPassField.classList.contains('invalid')
        ) {

            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const existingUser = users.find(u => u.username === username);

            if (existingUser) {
                alert('Username already exists. Please choose another one.');
            } else {
                const hashedPassword = hashPassword(password);
                users.push({ username, password: hashedPassword });
                localStorage.setItem('users', JSON.stringify(users));
                location.href = 'merch.html'; // Redirect to merch.html
            }
        }
    });

    //encypt the password
    function hashPassword(password) {
        return btoa(password);
    }
});

//sign in window
document.addEventListener('DOMContentLoaded', function () {
    const toggleSignInButton = document.getElementById('toggleSignInButton');
    const signInModal = document.getElementById('signInModal');
    const userButton = document.getElementById('userButton'); 

    //check if the user is logged in when the page loads
    checkUserLoginStatus();

    //show the sign-in modal when the button is clicked
    toggleSignInButton.addEventListener('click', function () {
        signInModal.style.display = 'block';
    });

    //close the sign-in modal when the close button is clicked
    window.closeSignInModal = function () {
        signInModal.style.display = 'none';
    };


    const signinForm = document.getElementById('signinForm');

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('signinUsername').value;
        const password = document.getElementById('signinPassword').value;

        //check if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === hashPassword(password));

        if (user) {
            alert('Sign in successful!');
            signInModal.style.display = 'none';
            toggleSignInButton.style.display = 'none';
            userButton.style.display = 'block';

            //set the user login status in local storage
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            alert('Invalid username or password.');
        }
    });

    function hashPassword(password) {
        return btoa(password); 
    }

    function checkUserLoginStatus() {
        //check if the user is logged in based on the flag in local storage
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (isLoggedIn) {
            toggleSignInButton.style.display = 'none';
            userButton.style.display = 'block';
        }
    }
});

//cart
//open the cart sidebar
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addToCartButton');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartItemsContainer = document.getElementById('cartItemsContainer');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemName = button.getAttribute('data-item-name');
            const itemImageSrc = button.getAttribute('data-item-image');
            const itemPrice = button.getAttribute('data-item-price');

            if (isLoggedIn()) {
                addToCart(itemName, itemImageSrc,itemPrice);
                updateCartSidebar();
                alert('Item added to the cart!');
            } else {
                signInModal.style.display = 'block';
            }
        });
    });

    //load cart items when the page loads
    updateCartSidebar();

    //open the cart sidebar
    document.getElementById('userButton').addEventListener('click', openCart);

    //close the cart sidebar
    document.querySelector('.close-cart').addEventListener('click', closeCart);

    function addToCart(itemName, itemImageSrc, itemPrice) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.name === itemName);
    
        if (!existingItem) {
            cartItems.push({ name: itemName, imageSrc: itemImageSrc, price: itemPrice });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }
    
    //check the user cart status and updated to the cart
    function updateCartSidebar() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItemsContainer.innerHTML = '';
    
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
    
            const itemImage = document.createElement('img');
            itemImage.src = item.imageSrc;
            itemImage.alt = item.name;
            itemImage.style.width = '100px'; 
            itemImage.style.height = '100px';

            const itemDetails = document.createElement('div');
            itemDetails.classList.add('item-details');
            
            const itemName = document.createElement('p');
            itemName.textContent = item.name;
    
            const itemPrice = document.createElement('p');
            itemPrice.textContent = item.price;
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                deleteCartItem(item.name);
                updateCartSidebar();
            });
    
            cartItemElement.appendChild(itemImage);
            cartItemElement.appendChild(itemName);
            cartItemElement.appendChild(itemPrice);
            cartItemElement.appendChild(deleteButton);
    
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    //delete cart item
    function deleteCartItem(itemName) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = cartItems.filter(item => item.name !== itemName);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
});

//open the cart sidebar
function openCart() {
    document.getElementById('cartSidebar').style.width = '250px';
    document.getElementById('overlay').style.width = '100%';
}

//close the cart sidebar
function closeCart() {
    document.getElementById('cartSidebar').style.width = '0';
    document.getElementById('overlay').style.width = '0';
}

//handle sign out
const signOutButton = document.getElementById('signOutButton');

    signOutButton.addEventListener('click', function () {
        signOut();
    });

    function signOut() {
        //clear the user's login status
        localStorage.setItem('isLoggedIn', 'false');

        location.reload(); 
    }

    //handle checkout
    const checkoutButton = document.getElementById('checkoutButton');

    checkoutButton.addEventListener('click', function () {
        checkout();
    });

    function checkout() {
        showQrPopup();
        clearCart();
        location.reload(); 
    }

    //show QR when checking out
    function showQrPopup() {
        const qrPopup = document.getElementById('qrPopup');
        qrPopup.style.display = 'block';

        const qrImage = document.getElementById('qrImage');
        qrImage.src = 'images/QR Apple.png';
    }

    function clearCart() {
        localStorage.removeItem('cartItems');
        updateCartSidebar();
    }

    //click the button to close the QR
    function closeQrPopup() {
        const qrPopup = document.getElementById('qrPopup');
        qrPopup.style.display = 'none';
    }