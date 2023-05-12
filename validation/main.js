function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Validate name field
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    return false;
  }

  // Validate email field
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    return false;
  } else {
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format.";
      return false;
    }
  }

  // Validate password field
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required.";
    return false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long.";
    return false;
  }

  // If all fields are valid, you can submit the form
  document.getElementById("myForm").submit();
}
