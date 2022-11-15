const forms = document.querySelectorAll("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const zip = document.querySelector("#zip");
const id = document.querySelector("#id");
const errorDisplay = document.getElementsByClassName("errors");

// Functions

const showError = (input, message) => {
  //   input.styles.color = "red";
  console.log(message);
};

const showSuccess = (input) => {
  console.log(input.value);
};

const isValidEntry = () => {};

const isValidNumber = (input) => {
  const regEx = /^\d+$/;
  return regEx.test(input.value);
};

const isValidRequiredSize = (input) => {
  return input.value.length === parseInt(input.getAttribute("minlength"));
};

const isValidAlphaNumeric = (input) => {
  const regEx = /^[0-9a-zA-Z]+$/;
  return regEx.test(input.value.trim());
};

const isValidPassword = (input) => {
  const regEx =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/;
  return regEx.test(input.value);
};

// Submit button Event Listener

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    [...form.elements].forEach((input) => {
      if (input.classList.contains("required")) {
        if (input.value == "") {
          console.log(input.name);
          showError(
            input,
            "Required fields must have a value that is not empty or whitespace"
          );
        } else {
          return input;
        }
      }
      if (input.classList.contains("password")) {
        
        if (isValidNumber(input)) {
          console.log(input.name);
          showError(
            input,
            "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters."
          );
        }
      }
      if (input.classList.contains("numeric")) {
        if (input.value == "") {
          return;
        }
        if (!isValidNumber(input)) {
          console.log(input.name);
          showError(input, "Numeric fields must be a series of numbers.");
        }
      }
      if (input.classList.contains("required_size")) {
        if (input.value == "") {
          return;
        }
        if (!isValidRequiredSize(input)) {
          console.log(input.name);
          showError(
            input,
            "Required_size field lengths must exactly match the minlength attribute of that field."
          );
        }
      }
      if (input.classList.contains("username")) {
        if (input.value == "") {
          return;
        }
        if (input.value.length < 8) {
          console.log(input.name);
          showError(
            input,
            "Usernamefields must contain at least 8 characters."
          );
        } else if (!isValidAlphaNumeric(input)) {
          console.log(input.value);
          showError(
            input,
            "Username fields must contain only alphanumeric characters."
          );
        }
      }

      
      
    });
    console.log('done');
  });
});
