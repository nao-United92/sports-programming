
/**
 * Serializes a form into a JavaScript object.
 * Only includes input, select, and textarea elements with a 'name' attribute.
 * @param {HTMLFormElement} formElement The form element to serialize.
 * @returns {object} An object containing the form data.
 */
export function serializeForm(formElement) {
  if (!(formElement instanceof HTMLFormElement)) {
    console.warn('serializeForm: Invalid form element provided.');
    return {};
  }

  const formData = {};
  const elements = formElement.elements;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.name) {
      if (element.type === 'checkbox') {
        formData[element.name] = element.checked;
      } else if (element.type === 'radio') {
        if (element.checked) {
          formData[element.name] = element.value;
        }
      } else if (element.tagName === 'SELECT' && element.multiple) {
        formData[element.name] = Array.from(element.options)
          .filter(option => option.selected)
          .map(option => option.value);
      } else {
        formData[element.name] = element.value;
      }
    }
  }
  return formData;
}

/**
 * Clears all input fields within a form.
 * Resets input, textarea, and select elements.
 * @param {HTMLFormElement} formElement The form element to clear.
 */
export function clearForm(formElement) {
  if (!(formElement instanceof HTMLFormElement)) {
    console.warn('clearForm: Invalid form element provided.');
    return;
  }

  const elements = formElement.elements;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const tagName = element.tagName.toLowerCase();
    const type = element.type;

    if (tagName === 'input' || tagName === 'textarea') {
      if (type === 'checkbox' || type === 'radio') {
        element.checked = false;
      } else {
        element.value = '';
      }
    } else if (tagName === 'select') {
      element.selectedIndex = -1;
    }
  }
}

/**
 * Disables all input fields within a form.
 * @param {HTMLFormElement} formElement The form element to disable.
 */
export function disableForm(formElement) {
  if (!(formElement instanceof HTMLFormElement)) {
    console.warn('disableForm: Invalid form element provided.');
    return;
  }

  const elements = formElement.elements;
  for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = true;
  }
}

/**
 * Enables all input fields within a form.
 * @param {HTMLFormElement} formElement The form element to enable.
 */
export function enableForm(formElement) {
  if (!(formElement instanceof HTMLFormElement)) {
    console.warn('enableForm: Invalid form element provided.');
    return;
  }

  const elements = formElement.elements;
  for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = false;
  }
}
