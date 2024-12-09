const $ = (selector) => document.querySelector(selector);

const createAccount = (evt) => {
  evt.preventDefault(); 


  const firstName = $("#firstName").value.trim();
  const lastName = $("#lastName").value.trim();
  const age = Number($("#age").value.trim());
  const address = $("#adress").value.trim();
  const password = $("#password").value.trim();

  let hasError = false;


  if (!firstName || /\d/.test(firstName) || firstName.length > 20) {
    hasError = true;
    $("#firstNameError").textContent = "First Name must be valid and less than 20 characters.";
  } else {
    $("#firstNameError").textContent = "";
  }

 
  if (!lastName || /\d/.test(lastName) || lastName.length > 20) {
    hasError = true;
    $("#lastNameError").textContent = "Last Name must be valid and less than 20 characters.";
  } else {
    $("#lastNameError").textContent = "";
  }


  if (isNaN(age) || age <= 18 || age > 110) {
    hasError = true;
    $("#ageError").textContent = "Age must be over 18 to enter";
  } else {
    $("#ageError").textContent = "";
  }


  if (!address || /\d/.test(address)) {
    hasError = true;
    $("#adressError").textContent = "Address must be valid.";
  } else {
    $("#adressError").textContent = "";
  }


  if (!password || password.length < 10) {
    hasError = true;
    $("#passwordError").textContent = "Password must be at least 10 characters.";
  } else {
    $("#passwordError").textContent = "";
  }

  
  if (!hasError) {
    alert("Account created successfully!");
  }
};


const clearAccount = () => {
  $("#firstName").value = "";
  $("#lastName").value = "";
  $("#age").value = "";
  $("#adress").value = "";
  $("#password").value = "";

  $("#firstNameError").textContent = "";
  $("#lastNameError").textContent = "";
  $("#ageError").textContent = "";
  $("#adressError").textContent = "";
  $("#passwordError").textContent = "";
};


document.addEventListener("DOMContentLoaded", () => {
  $("#accountForm").addEventListener("submit", createAccount);
  $("#clearBtn").addEventListener("click", clearAccount);
});