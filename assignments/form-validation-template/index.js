const forms = document.querySelectorAll("form");
// const firstName = document.querySelector("#firstname");
// const lastName = document.querySelector("#lastname");
// const userName = document.querySelector("#username");
// const password = document.querySelector("#password");
// const zip = document.querySelector("#zip");
// const id = document.querySelector("#id");


// const errorDisplays = document.getElementsByClassName("errors");

// [...errorDisplays].forEach(errorDisplay => {
//   const unorderedList = document.createElement('ul');
//   errorDisplay.appendChild(unorderedList)});

// Functions

const showError = (form, message) => {
  const errorDisplay = form.parentNode.querySelector('.errors');
  console.log(errorDisplay);
  const unorderedList = document.createElement('ul');
  const liItem = document.createElement('li');
  const messageText = document.createTextNode(message);

  liItem.appendChild(messageText);
  unorderedList.appendChild(liItem);
  errorDisplay.appendChild(unorderedList);
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

const isValidAlphabetic = (input) => {
  const regEx = /^[a-zA-Z]+$/;
  return regEx.test(input.value.trim());
};

const isValidPassword = (input) => {
  const regEx =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/;
    
  return regEx.test(input.value);
};

const isValidDate = (input) => {
  const regEx =  /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
  console.log(regEx.test(input.value))
  return regEx.test(input.value)
}

const isValidPhoneNumber = (input) => {
  const regEx = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
  return regEx.test(input.value)
}

// Submit button Event Listener

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    console.log(form);
    e.preventDefault();
    [...form.elements].forEach((input) => {
      if (input.classList.contains("required")) {
        if (input.value == "") {
          console.log(input.name);
          showError(
            form,
            "Required fields must have a value that is not empty or whitespace"
          );
        }
      } else
      if (input.classList.contains("password")) {
        if (input.value == "") {
          return;
        }
        if (!isValidPassword(input)) {
          console.log(input.name);
          showError(
            form,
            "Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters."
          );
        }
      } else
      if (input.classList.contains("numeric")) {
        if (input.value == "") {
          return;
        }
        if (!isValidNumber(input)) {
          console.log(input.name);
          showError(form, "Numeric fields must be a series of numbers.");
        }
      } else
      if (input.classList.contains("required_size")) {
        if (input.value == "") {
          return;
        }
        if (!isValidRequiredSize(input)) {
          console.log(input.name);
          showError(
            form,
            "Required_size field lengths must exactly match the minlength attribute of that field."
          );
        }
      } else
      if (input.classList.contains("username")) {
        if (input.value == "") {
          return;
        }
        if (input.value.length < 8) {
          console.log(input.name);
          showError(
            form,
            "Usernamefields must contain at least 8 characters."
          );
        } else if (!isValidAlphaNumeric(input)) {
          console.log(input.value);
          showError(
            form,
            "Username fields must contain only alphanumeric characters."
          );
        }
      } else 
      if (input.classList.contains("phone")) {
        if (input.value == "") {
          return;
        }
        if (!isValidPhoneNumber(input)) {
          console.log(input.name);
          showError(
            form,
            "Phone fields must match the format of XXX-XXX-XXXX."
          );
        }
      } else
      if (input.classList.contains("date")) {
        if (input.value == "") {
          return;
        }
        if (!isValidDate(input)) {
          console.log(input.name);
          showError(
            form,
            "Date fields must match the format of XX/XX/XXXX."
          );
        }
      } else 
      if (input.classList.contains("alphabetic")) {
        if (input.value == "") {
          return;
        }
        if (!isValidAlphabetic(input)) {
          console.log(input.name);
          showError(
            form,
            "Alphabetic fields must be a series of alphabetic characters."
          );
        }
      }  
    })
    if (hasNoErrors) {
      form.submit();
    }
  });
});
