// function for opening mobile menu
function openMenu() {
    document.getElementById("menuNav").style.display = "flex";
}

// function for closing mobile menu
function closeMenu() {
    document.getElementById("menuNav").style.display = "none";
}

// function for opening review popup tripadvisor
function reviewPop1() {
    document.getElementById("popTripadvisor").style.display = "flex";
}

// function for opening review popup booking
function reviewPop2() {
    document.getElementById("popBooking").style.display = "flex";
}

// function for closing review popup
function closeReviewPop() {
    document.getElementById("popTripadvisor").style.display = "none";
    document.getElementById("popBooking").style.display = "none";
}