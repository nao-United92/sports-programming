/**
 * Serializes a form into a plain JavaScript object.
 * @param {HTMLFormElement} formElement The form element to serialize.
 * @returns {object} An object containing form data.
 */
export function serializeForm(formElement) {
  const formData = new FormData(formElement);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
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
      input.selectedIndex = -1;
    } else {
      input.value = '';
    }
  });
}