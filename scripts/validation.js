const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__button_type_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error"
}

const showInputError =  (formElement, inputElement, errorMessage) => {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement) => {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = "";
  inputElement.classList.remove("modal__input_type_error");
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = () => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const disableButton = (buttonElement) => {
  buttonElement.disabled = true;
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
    buttonElement.classList.add("modal__submit-button_type_disabled");
  } else{
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__submit-button_type_disabled");
  };
};

const resetValidation = (formElement, inputList) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input);
  });
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(settings);
