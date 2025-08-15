/**
 * Serializes a form into a plain JavaScript object.
 * @param {HTMLFormElement} formElement The form element to serialize.
 * @returns {object} An object containing form data.
 */
export function serializeForm(formElement) {
  const data = {};
  const elements = formElement.elements;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.name) {
      if (element.type === 'select-multiple') {
        data[element.name] = Array.from(element.options)
          .filter(option => option.selected)
          .map(option => option.value);
      } else {
        data[element.name] = element.value;
      }
    }
  }
  return data;
}

/**
 * Resets a form to its initial state.
 * @param {HTMLFormElement} formElement The form element to reset.
 */
export function resetForm(formElement) {
  if (formElement && typeof formElement.reset === 'function') {
    formElement.reset();
  }
}

/**
 * Gets the value of a form input element.
 * Handles text inputs, checkboxes, radio buttons, and select elements.
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} inputElement The input element.
 * @returns {string|boolean|string[]|null} The value of the input element.
 */
export function getInputValue(inputElement) {
  if (!inputElement) return null;

  const tagName = inputElement.tagName.toLowerCase();
  const type = inputElement.type ? inputElement.type.toLowerCase() : '';

  if (tagName === 'input') {
    if (type === 'checkbox') {
      return inputElement.checked;
    } else if (type === 'radio') {
      // For radio buttons, you might want to get the value of the checked one in a group
      // This function gets the value of the *specific* radio input passed.
      return inputElement.checked ? inputElement.value : null;
    } else {
      return inputElement.value;
    }
  } else if (tagName === 'select') {
    if (inputElement.multiple) {
      return Array.from(inputElement.options)
        .filter(option => option.selected)
        .map(option => option.value);
    } else {
      return inputElement.value;
    }
  } else if (tagName === 'textarea') {
    return inputElement.value;
  }
  return null;
}

/**
 * Sets the value of a form input element.
 * Handles text inputs, checkboxes, radio buttons, and select elements.
 * @param {HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement} inputElement The input element.
 * @param {string|boolean|string[]} value The value to set.
 */
export function setInputValue(inputElement, value) {
  if (!inputElement) return;

  const tagName = inputElement.tagName.toLowerCase();
  const type = inputElement.type ? inputElement.type.toLowerCase() : '';

  if (tagName === 'input') {
    if (type === 'checkbox') {
      inputElement.checked = !!value;
    } else if (type === 'radio') {
      if (inputElement.value === String(value)) {
        inputElement.checked = true;
      }
    } else {
      inputElement.value = String(value);
    }
  } else if (tagName === 'select') {
    if (inputElement.multiple) {
      Array.from(inputElement.options).forEach(option => {
        option.selected = Array.isArray(value) && value.includes(option.value);
      });
    } else {
      inputElement.value = String(value);
    }
  } else if (tagName === 'textarea') {
    inputElement.value = String(value);
  }
}

/**
 * Gets all form data as an object, including values from various input types.
 * @param {HTMLFormElement} formElement The form element.
 * @returns {object} An object with form field names as keys and their values.
 */
export function getFormData(formElement) {
  const data = {};
  if (!formElement) return data;

  const inputs = formElement.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    const name = input.name;
    if (!name) return;

    if (input.type === 'checkbox') {
      data[name] = input.checked;
    } else if (input.type === 'radio') {
      if (input.checked) {
        data[name] = input.value;
      }
    } else if (input.tagName.toLowerCase() === 'select' && input.multiple) {
      data[name] = Array.from(input.options)
        .filter(option => option.selected)
        .map(option => option.value);
    } else {
      data[name] = input.value;
    }
  });
  return data;
}

/**
 * Clears all input fields within a form.
 * @param {HTMLFormElement} formElement The form element to clear.
 */
export function clearForm(formElement) {
  if (!formElement) return;

  const inputs = formElement.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    if (input.type === 'checkbox' || input.type === 'radio') {
      input.checked = false;
    } else if (input.tagName.toLowerCase() === 'select') {
      input.selectedIndex = 0;
    } else {
      input.value = '';
    }
  });
}

/**
 * Checks if a form has been changed from its initial state.
 * @param {HTMLFormElement} formElement The form element to check.
 * @returns {boolean} True if the form is dirty, false otherwise.
 */
export function isFormDirty(formElement) {
  if (!formElement) return false;

  for (const element of formElement.elements) {
    if (element.type === 'checkbox' || element.type === 'radio') {
      if (element.checked !== element.defaultChecked) return true;
    } else if (element.tagName.toLowerCase() === 'select') {
      for (const option of element.options) {
        if (option.selected !== option.defaultSelected) return true;
      }
    } else {
      if (element.value !== element.defaultValue) return true;
    }
  }
  return false;
}

/**
 * Toggles the disabled state of a form element.
 * @param {HTMLElement} element The form element to toggle.
 * @param {boolean} [force] If true, disables the element. If false, enables it.
 */
export function toggleFormElement(element, force) {
  if (element) {
    element.disabled = force === undefined ? !element.disabled : force;
  }
}

/**
 * Checks if a form is valid using the HTML5 Constraint Validation API.
 * @param {HTMLFormElement} formElement The form to validate.
 * @returns {boolean} True if the form is valid, false otherwise.
 */
export function isFormValid(formElement) {
  if (!formElement || typeof formElement.checkValidity !== 'function') {
    return false;
  }
  return formElement.checkValidity();
}

/**
 * Populates a form with data from a JavaScript object.
 * @param {HTMLFormElement} formElement The form to populate.
 * @param {object} data The data object to populate the form with.
 */
export function populateForm(formElement, data) {
  if (!formElement || !data) return;

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = formElement.elements[key];
      if (element) {
        // Handle radio buttons nodeList
        if (element instanceof NodeList) {
          element.forEach(radio => {
            if (radio.value === data[key]) {
              radio.checked = true;
            }
          });
        } else {
          setInputValue(element, data[key]);
        }
      }
    }
  }
}