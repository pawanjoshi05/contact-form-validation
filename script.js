const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Correct email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear old messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email cannot be empty";
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty";
    isValid = false;
  }

  // Show success if everything is valid
  if (isValid) {
    successMessage.textContent = "Thank you! Your message has been received.";
    form.reset();
  }
});
