window.onload = () => {
  addEventListeners();
}

/**
 * Loop through each form element and add an event listener
 */
const addEventListeners = () => {
    for (const form of document.querySelectorAll("form")) {
    form.addEventListener("submit", validationCheck);
  }
}

/**
 * Handles validation of target form 
 * @param {SubmitEvent} e - event submission
 */
const validationCheck = (e) => {
  // Prevent form from submitting
  e.preventDefault();
  const form = e.target;
    // Create array to hold error messages
    let errors = [];
    // Loop through each input of form and check validations by class name
    [...form.elements].forEach((input) => {
      if (input.classList.contains("required")) {
        if (isValidRequired(input.value)) {errors.push("Required fields must have a value that is not empty or whitespace.");}
      }
      if (input.classList.contains("password") && (input.value !== "")) {
        if (!isValidPassword(input.value)) {errors.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");}
      }
      if (input.classList.contains("numeric") && input.value !== "") {
        if (!isValidNumber(input.value)) {errors.push("Numeric fields must be a series of numbers.");}
      }
      if (input.classList.contains("required_size") && input.value !== "") {
        if (!isValidRequiredSize(input)) {errors.push("Required_size field lengths must exactly match the minlength attribute of that field.");}
      }
      if (input.classList.contains("username") && input.value !== "") {
        if (input.value.length < 8) { errors.push("Username fields must contain at least 8 characters.");}
        if (!isValidAlphaNumeric(input.value)) {errors.push("Username fields must contain only alphanumeric characters.");}
      }
      if (input.classList.contains("phone") && input.value !== "") {
        if (!isValidPhoneNumber(input.value)) {errors.push("Phone fields must match the format of XXX-XXX-XXXX.");}
      }
      if (input.classList.contains("date") && input.value !== "") {
        if (!isValidDate(input.value)) {errors.push("Date fields must match the format of XX/XX/XXXX.");}
      }
      if (input.classList.contains("alphabetic") && input.value !== "") {
        if (!isValidAlphabetic(input.value)) {errors.push("Alphabetic fields must be a series of alphabetic characters.");}
      }
    });
    // If there are errors, display errors in a list. If no errors, submit form
  if (errors.length > 0) {
      // Clear old messages first 
      removeErrorList(form);
      displayErrorList(form, errors);
    } else {
      form.submit();
    }
  }


/**
 * Removes error list from parent div element
 * @param {HTMLElement} form
 */
const removeErrorList = (form) => {
  const existingList = form.parentNode.querySelector(".errors");
  while (existingList.firstChild) {
    existingList.removeChild(existingList.firstChild);
  }
};
/**
 * Generates error list and display in document
 * @param {HTMLElement} form 
 * @param {String []} errors - list of error messages
 */
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

/**
 * Returns true if text is not an empty space or no spaces or tabs have been entered
 * @param {String} text 
 * @returns {boolean}
 */
const isValidRequired = (text) => {
  return text === "" || text.trim().length === 0;
}
/**
 * Returns true if text is a number
 * @param {String} text 
 * @returns {boolean}
 */
const isValidNumber = (text) => {
  const regEx = /^\d+$/;
  return regEx.test(text.trim());
};

/**
 * Returns true if length of input is equal to the value of "minlength" attribute of the input
 * @param {HTMLElement} input 
 * @returns {boolean}
 */
const isValidRequiredSize = (input) => {
  return input.value.length === parseInt(input.getAttribute("minlength"));
};

/**
 * Returns true if text is alphanumeric
 * @param {String} text 
 * @returns {boolean}
 */
const isValidAlphaNumeric = (text) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  return regEx.test(text.trim());
};

/**
 * Returns true if text is alphabetic
 * @param {String} text 
 * @returns {boolean}
 */
const isValidAlphabetic = (text) => {
  const regEx = /^[a-zA-Z]+$/;
  return regEx.test(text.trim());
};

/**
 * Returns true if password requirements are met
 * @param {String} text 
 * @returns {boolean}
 */
const isValidPassword = (text) => {
  const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¬!"£$%^&*()_+=\-`{}:@~#';<>?\/.,|\\]).*$/;
  return regEx.test(text);
};

/**
 * Returns true if date requirements are met
 * @param {String} text 
 * @returns {boolean}
 */
const isValidDate = (text) => {
  const regEx = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/;
  return regEx.test(text);
};

/**
 * Returns true if phone number requirements are met
 * @param {String} text 
 * @returns {boolean}
 */
const isValidPhoneNumber = (text) => {
  const regEx = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
  return regEx.test(text);
};




