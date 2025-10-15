document.getElementById("waitlistForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("emailInput").value;
    const waitlistMessage = document.getElementById("waitlistMessage");

    if (emailInput) {
        // Display success message
        waitlistMessage.style.display = "block";

        // Optionally, send the email to a server or API endpoint here
        console.log("RADISIST early access email:", emailInput);

        // Clear the input field
        document.getElementById("emailInput").value = "";
    }
});

// Scroll reveal for elements with .reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

