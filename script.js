document.getElementById("waitlistForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("emailInput").value;
    const waitlistMessage = document.getElementById("waitlistMessage");

    if (emailInput) {
        // Display success message
        waitlistMessage.style.display = "block";

        // Optionally, send the email to a server or API endpoint here
        console.log("User email:", emailInput);

        // Clear the input field
        document.getElementById("emailInput").value = "";
    }
});

