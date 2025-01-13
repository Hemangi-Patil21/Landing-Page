// Get the form and CTA button
const form = document.getElementById("contact-form");
const ctaButton = document.getElementById("cta-button");

// Add event listener to the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
    form.reset(); // Clear form fields
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

// Add animation to the CTA button
ctaButton.addEventListener("mouseover", () => {
  ctaButton.style.transform = "scale(1.1)";
  ctaButton.style.transition = "transform 0.3s ease";
});

ctaButton.addEventListener("mouseout", () => {
  ctaButton.style.transform = "scale(1)";
});
