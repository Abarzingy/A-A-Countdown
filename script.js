// Function to create falling flowers
function createFlowers() {
    // Array of flower colors
    const colors = ['pink', 'lavender', 'cream', 'rose'];

    // Increase the number of flowers to 100
    for (let i = 0; i < 100; i++) {
        // Create a flower element and assign it a random color class
        const flower = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        flower.classList.add("flower", color);

        // Set random position and animation duration for each flower
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = Math.random() * 5 + 4 + "s"; // Random speed between 4s and 9s

        // Append flower to the body to start the animation
        document.body.appendChild(flower);
    }
}

// Function to start the countdown
function startCountdown() {
    // Set the target date
    const targetDate = new Date("July 7, 2027 00:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations for years, days, hours, minutes, and seconds
        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("years").textContent = years;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // If the countdown is over, stop the timer and display a message
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "The countdown is over!";
        }
    }, 1000);
}

// Run both flower effect and countdown on page load
window.addEventListener("load", function() {
    createFlowers();
    startCountdown();
});