import {
  serializeForm,
  resetForm,
  getInputValue,
  setInputValue,
  getFormData,
  clearForm,
} from './form-utils';

describe('form-utils', () => {
  let form;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="testForm">
        <input type="text" name="username" value="john.doe">
        <input type="email" name="email" value="john@example.com">
        <input type="checkbox" name="newsletter" value="true" checked>
        <input type="checkbox" name="terms" value="agreed">
        <input type="radio" name="gender" value="male" checked>
        <input type="radio" name="gender" value="female">
        <select name="country">
          <option value="us">United States</option>
          <option value="ca" selected>Canada</option>
        </select>
        <select name="colors" multiple>
          <option value="red" selected>Red</option>
          <option value="green">Green</option>
          <option value="blue" selected>Blue</option>
        </select>
        <textarea name="message">Hello World</textarea>
      </form>
    `;
    form = document.getElementById('testForm');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('serializeForm', () => {
    it('should serialize form data correctly', () => {
      const data = serializeForm(form);
      expect(data).toEqual({
        username: 'john.doe',
        email: 'john@example.com',
        newsletter: 'true',
        gender: 'male',
        country: 'ca',
        colors: 'red', // FormData only gets the first selected value for multiple select
        message: 'Hello World',
      });
    });

    it('should handle empty form', () => {
      document.body.innerHTML = '<form id="emptyForm"></form>';
      const emptyForm = document.getElementById('emptyForm');
      expect(serializeForm(emptyForm)).toEqual({});
    });
  });

  describe('resetForm', () => {
    it('should reset form fields to their initial values', () => {
      form.elements.username.value = 'jane.doe';
      form.elements.email.value = 'jane@example.com';
      form.elements.newsletter.checked = false;
      form.elements.gender[1].checked = true; // female
      form.elements.country.value = 'us';
      form.elements.message.value = 'New message';

      resetForm(form);

      expect(form.elements.username.value).toBe('john.doe');
      expect(form.elements.email.value).toBe('john@example.com');
      expect(form.elements.newsletter.checked).toBe(true);
      expect(form.elements.gender[0].checked).toBe(true); // male
      expect(form.elements.country.value).toBe('ca');
      expect(form.elements.message.value).toBe('Hello World');
    });

    it('should do nothing if form is null', () => {
      expect(() => resetForm(null)).not.toThrow();
    });
  });

  describe('getInputValue', () => {
    it('should get text input value', () => {
      expect(getInputValue(form.elements.username)).toBe('john.doe');
    });

    it('should get checkbox value', () => {
      expect(getInputValue(form.elements.newsletter)).toBe(true);
      expect(getInputValue(form.elements.terms)).toBe(false);
    });

    it('should get radio button value', () => {
      expect(getInputValue(form.elements.gender[0])).toBe('male');
      expect(getInputValue(form.elements.gender[1])).toBe(null); // specific radio input
    });

    it('should get single select value', () => {
      expect(getInputValue(form.elements.country)).toBe('ca');
    });

    it('should get multiple select values', () => {
      expect(getInputValue(form.elements.colors)).toEqual(['red', 'blue']);
    });

    it('should get textarea value', () => {
      expect(getInputValue(form.elements.message)).toBe('Hello World');
    });

    it('should return null for non-existent input', () => {
      expect(getInputValue(null)).toBe(null);
    });
  });

  describe('setInputValue', () => {
    it('should set text input value', () => {
      setInputValue(form.elements.username, 'jane.doe');
      expect(form.elements.username.value).toBe('jane.doe');
    });

    it('should set checkbox value', () => {
      setInputValue(form.elements.newsletter, false);
      expect(form.elements.newsletter.checked).toBe(false);
      setInputValue(form.elements.terms, true);
      expect(form.elements.terms.checked).toBe(true);
    });

    it('should set radio button value', () => {
      setInputValue(form.elements.gender[1], 'female');
      expect(form.elements.gender[1].checked).toBe(true);
      expect(form.elements.gender[0].checked).toBe(false);
    });

    it('should set single select value', () => {
      setInputValue(form.elements.country, 'us');
      expect(form.elements.country.value).toBe('us');
    });

    it('should set multiple select values', () => {
      setInputValue(form.elements.colors, ['green']);
      expect(form.elements.colors.options[0].selected).toBe(false);
      expect(form.elements.colors.options[1].selected).toBe(true);
      expect(form.elements.colors.options[2].selected).toBe(false);
    });

    it('should set textarea value', () => {
      setInputValue(form.elements.message, 'New message set');
      expect(form.elements.message.value).toBe('New message set');
    });

    it('should do nothing for non-existent input', () => {
      expect(() => setInputValue(null, 'value')).not.toThrow();
    });
  });

  describe('getFormData', () => {
    it('should get all form data correctly', () => {
      const data = getFormData(form);
      expect(data).toEqual({
        username: 'john.doe',
        email: 'john@example.com',
        newsletter: true,
        terms: false,
        gender: 'male',
        country: 'ca',
        colors: ['red', 'blue'],
        message: 'Hello World',
      });
    });

    it('should handle empty form', () => {
      document.body.innerHTML = '<form id="emptyForm"></form>';
      const emptyForm = document.getElementById('emptyForm');
      expect(getFormData(emptyForm)).toEqual({});
    });

    it('should handle form with no name attributes', () => {
      document.body.innerHTML = '<form id="noNameForm"><input type="text"></form>';
      const noNameForm = document.getElementById('noNameForm');
      expect(getFormData(noNameForm)).toEqual({});
    });

    it('should return empty object if form is null', () => {
      expect(getFormData(null)).toEqual({});
    });
  });

  describe('clearForm', () => {
    it('should clear all input fields in a form', () => {
      form.elements.username.value = 'changed';
      form.elements.email.value = 'changed@example.com';
      form.elements.newsletter.checked = false;
      form.elements.gender[1].checked = true;
      form.elements.country.value = 'us';
      form.elements.colors.options[0].selected = false;
      form.elements.colors.options[1].selected = true;
      form.elements.colors.options[2].selected = false;
      form.elements.message.value = 'changed message';

      clearForm(form);

      expect(form.elements.username.value).toBe('');
      expect(form.elements.email.value).toBe('');
      expect(form.elements.newsletter.checked).toBe(false);
      expect(form.elements.gender[0].checked).toBe(false);
      expect(form.elements.gender[1].checked).toBe(false);
      expect(form.elements.country.value).toBe('us'); // Selects usually reset to first option or empty
      expect(form.elements.colors.options[0].selected).toBe(false);
      expect(form.elements.colors.options[1].selected).toBe(false);
      expect(form.elements.colors.options[2].selected).toBe(false);
      expect(form.elements.message.value).toBe('');
    });

    it('should do nothing if form is null', () => {
      expect(() => clearForm(null)).not.toThrow();
    });
  });
});