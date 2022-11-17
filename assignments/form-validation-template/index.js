// Remove error list from document
const removeErrorList = (form) => {
  const existingList = form.parentNode.querySelector(".errors");
  while (existingList.firstChild) {
    existingList.removeChild(existingList.firstChild);
  }
};
// Generates error list and display in document
const displayErrorList = (form, errors) => {
  const errorDisplay = form.parentNode.querySelector(".errors");
  const unorderedList = document.createElement("ul");
  // Add each error message to a list element 
  for (const error of errors) {
    const liItem = document.createElement("li");
    const messageText = document.createTextNode(error);

    liItem.appendChild(messageText);
    unorderedList.appendChild(liItem);
    liItem.style = "color: red";
  }
  errorDisplay.appendChild(unorderedList);
};

// Validation functions
const isValidNumber = (input) => {
  const regEx = /^\d+$/;
  return regEx.test(input.value.trim());
};

const isValidRequiredSize = (input) => {
  return input.value.length === parseInt(input.getAttribute("minlength"));
};

const isValidAlphaNumeric = (input) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  return regEx.test(input.value.trim());
};

const isValidAlphabetic = (input) => {
  const regEx = /^[a-zA-Z]+$/;
  return regEx.test(input.value.trim());
};

const isValidPassword = (input) => {
  const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¬!"£$%^&*()_+=\-`{}:@~#';<>?\/.,|\\]).*$/;
  return regEx.test(input.value);
};

const isValidDate = (input) => {
  const regEx = /^[0-9]{2}\/][0-9]{2}[\/][0-9]{4}$/;
  return regEx.test(input.value);
};

const isValidPhoneNumber = (input) => {
  const regEx = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
  return regEx.test(input.value);
};

// Loop through each form element and add event listener
for (const form of document.querySelectorAll("form")) {
  form.addEventListener("submit", function validationCheck(e) {
    e.preventDefault();
    const errors = [];
    // Loop through each input of form and check validations by class name
    [...form.elements].forEach((input) => {
      if (input.classList.contains("required")) {
        if (input.value === "" || input.value.trim().length === 0) {errors.push("Required fields must have a value that is not empty or whitespace.");}
      }
      if (input.classList.contains("password") && (input.value !== "")) {
        if (!isValidPassword(input)) {errors.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");}
      }
      if (input.classList.contains("numeric") && input.value !== "") {
        if (!isValidNumber(input)) {errors.push("Numeric fields must be a series of numbers.");}
      }
      if (input.classList.contains("required_size") && input.value !== "") {
        if (!isValidRequiredSize(input)) {errors.push("Required_size field lengths must exactly match the minlength attribute of that field.");}
      }
      if (input.classList.contains("username") && input.value !== "") {
        if (input.value.length < 8) { errors.push("Username fields must contain at least 8 characters.");}
        if (!isValidAlphaNumeric(input)) {errors.push("Username fields must contain only alphanumeric characters.");}
      }
      if (input.classList.contains("phone") && input.value !== "") {
        if (!isValidPhoneNumber(input)) {errors.push("Phone fields must match the format of XXX-XXX-XXXX.");}
      }
      if (input.classList.contains("date") && input.value !== "") {
        if (!isValidDate(input)) {errors.push("Date fields must match the format of XX/XX/XXXX.");}
      }
      if (input.classList.contains("alphabetic") && input.value !== "") {
        if (!isValidAlphabetic(input)) {errors.push("Alphabetic fields must be a series of alphabetic characters.");}
      }
    });
    // If there are errors, show errors in a list. If no errors, submit form
    if (errors.length > 0) {
      removeErrorList(form);
      displayErrorList(form, errors);
    } else {
      form.submit();
    }
  });
}
