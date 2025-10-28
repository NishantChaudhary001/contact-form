document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  // Reset previous messages
  document.querySelectorAll(".error-message").forEach(el => (el.textContent = ""));
  formMessage.textContent = "";

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    showError(message, "Message cannot be empty");
    isValid = false;
  }

  if (isValid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fix the errors above.";
  }
});

function showError(input, message) {
  const errorElement = input.parentElement.querySelector(".error-message");
  errorElement.textContent = message;
}
