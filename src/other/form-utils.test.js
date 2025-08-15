import {
  serializeForm,
  resetForm,
  getInputValue,
  setInputValue,
  getFormData,
  clearForm,
  isFormValid,
  populateForm
} from './form-utils';

describe('form-utils', () => {
  let form;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="testForm">
        <input type="text" name="username" value="john.doe" required>
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
        colors: ['red', 'blue'],
        message: 'Hello World',
      });
    });
  });

  describe('resetForm', () => {
    it('should reset form fields to their initial values', () => {
      form.elements.username.value = 'jane.doe';
      resetForm(form);
      expect(form.elements.username.value).toBe('john.doe');
    });
  });

  describe('getInputValue', () => {
    it('should get various input values', () => {
      expect(getInputValue(form.elements.username)).toBe('john.doe');
      expect(getInputValue(form.elements.newsletter)).toBe(true);
      expect(getInputValue(form.elements.gender[0])).toBe('male');
      expect(getInputValue(form.elements.colors)).toEqual(['red', 'blue']);
    });
  });

  describe('setInputValue', () => {
    it('should set various input values', () => {
      setInputValue(form.elements.username, 'jane.doe');
      expect(form.elements.username.value).toBe('jane.doe');
      setInputValue(form.elements.newsletter, false);
      expect(form.elements.newsletter.checked).toBe(false);
      setInputValue(form.elements.gender[1], 'female');
      expect(form.elements.gender[1].checked).toBe(true);
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
  });

  describe('clearForm', () => {
    it('should clear all input fields in a form', () => {
      clearForm(form);
      expect(form.elements.username.value).toBe('');
      expect(form.elements.newsletter.checked).toBe(false);
    });
  });

  describe('isFormValid', () => {
    it('should return true for a valid form', () => {
      expect(isFormValid(form)).toBe(true);
    });

    it('should return false for an invalid form', () => {
      form.elements.username.value = ''; // required field
      expect(isFormValid(form)).toBe(false);
    });
  });

  describe('populateForm', () => {
    it('should populate form fields from an object', () => {
      const data = {
        username: 'new.user',
        email: 'new@example.com',
        newsletter: false,
        gender: 'female',
        country: 'us',
        colors: ['green'],
        message: 'Updated message'
      };
      populateForm(form, data);
      expect(form.elements.username.value).toBe('new.user');
      expect(form.elements.newsletter.checked).toBe(false);
      expect(form.elements.gender[1].checked).toBe(true);
      expect(getInputValue(form.elements.colors)).toEqual(['green']);
    });
  });
});