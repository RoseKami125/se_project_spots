const showInputError =  (formElement, inputElement, errorMessage, settings) => {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.add(settings.inputErrorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = "";
  inputElement.classList.remove(settings.inputErrorClass)
}

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const disableButton = (buttonElement, settings) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, settings);
  } else{
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  };
};

const resetValidation = (formElement, inputList, settings) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input, settings);
  });
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};
