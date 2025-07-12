/**
 * Collects form data into an object.
 *
 * @param formElement The HTMLFormElement to collect data from.
 * @returns An object where keys are input names and values are their corresponding values.
 */
export function getFormData(formElement) {
    const formData = new FormData(formElement);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
}

/**
 * Clears all input fields within a form.
 *
 * @param formElement The HTMLFormElement to clear.
 */
export function clearForm(formElement) {
    for (const element of formElement.elements) {
        if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = false;
        } else if (element.type !== 'submit' && element.type !== 'button' && element.type !== 'reset') {
            element.value = '';
        }
    }
}

/**
 * Sets the values of form input fields based on an object.
 *
 * @param formElement The HTMLFormElement to set values for.
 * @param data An object where keys are input names and values are the values to set.
 */
export function setFormValues(formElement, data) {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const input = formElement.elements[key];
            if (input) {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = data[key];
                } else {
                    input.value = data[key];
                }
            }
        }
    }
}
