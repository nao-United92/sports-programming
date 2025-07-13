
import { serializeForm, clearForm, disableForm, enableForm } from './form-advanced-utils';

describe('form-advanced-utils', () => {
  let form;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="testForm">
        <input type="text" name="username" value="testuser">
        <input type="email" name="email" value="test@example.com">
        <input type="checkbox" name="rememberMe" checked>
        <input type="radio" name="gender" value="male" checked>
        <input type="radio" name="gender" value="female">
        <select name="country">
          <option value="usa">USA</option>
          <option value="jp" selected>Japan</option>
        </select>
        <select name="colors" multiple>
          <option value="red" selected>Red</option>
          <option value="blue">Blue</option>
          <option value="green" selected>Green</option>
        </select>
        <textarea name="comment">This is a comment.</textarea>
        <button type="submit">Submit</button>
      </form>
    `;
    form = document.getElementById('testForm');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('serializeForm', () => {
    test('should serialize form data correctly', () => {
      const data = serializeForm(form);
      expect(data).toEqual({
        username: 'testuser',
        email: 'test@example.com',
        rememberMe: true,
        gender: 'male',
        country: 'jp',
        colors: ['red', 'green'],
        comment: 'This is a comment.',
      });
    });

    test('should handle empty form', () => {
      document.body.innerHTML = '<form id="emptyForm"></form>';
      const emptyForm = document.getElementById('emptyForm');
      expect(serializeForm(emptyForm)).toEqual({});
    });

    test('should return empty object for invalid form element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      expect(serializeForm(null)).toEqual({});
      expect(consoleWarnSpy).toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('clearForm', () => {
    test('should clear all form fields', () => {
      clearForm(form);

      expect(form.elements.username.value).toBe('');
      expect(form.elements.email.value).toBe('');
      expect(form.elements.rememberMe.checked).toBe(false);
      expect(form.elements.gender[0].checked).toBe(false); // male radio
      expect(form.elements.gender[1].checked).toBe(false); // female radio
      expect(form.elements.country.selectedIndex).toBe(-1);
      expect(form.elements.colors.options[0].selected).toBe(false);
      expect(form.elements.colors.options[1].selected).toBe(false);
      expect(form.elements.colors.options[2].selected).toBe(false);
      expect(form.elements.comment.value).toBe('');
    });

    test('should not clear for invalid form element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      const initialUsername = form.elements.username.value;
      clearForm(null);
      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(form.elements.username.value).toBe(initialUsername);
      consoleWarnSpy.mockRestore();
    });
  });

  describe('disableForm', () => {
    test('should disable all form fields', () => {
      disableForm(form);

      expect(form.elements.username.disabled).toBe(true);
      expect(form.elements.email.disabled).toBe(true);
      expect(form.elements.rememberMe.disabled).toBe(true);
      expect(form.elements.gender[0].disabled).toBe(true);
      expect(form.elements.country.disabled).toBe(true);
      expect(form.elements.comment.disabled).toBe(true);
      expect(form.elements[form.elements.length - 1].disabled).toBe(true); // submit button
    });

    test('should not disable for invalid form element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      disableForm(null);
      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(form.elements.username.disabled).toBe(false);
      consoleWarnSpy.mockRestore();
    });
  });

  describe('enableForm', () => {
    beforeEach(() => {
      disableForm(form); // Ensure form is disabled before enabling
    });

    test('should enable all form fields', () => {
      enableForm(form);

      expect(form.elements.username.disabled).toBe(false);
      expect(form.elements.email.disabled).toBe(false);
      expect(form.elements.rememberMe.disabled).toBe(false);
      expect(form.elements.gender[0].disabled).toBe(false);
      expect(form.elements.country.disabled).toBe(false);
      expect(form.elements.comment.disabled).toBe(false);
      expect(form.elements[form.elements.length - 1].disabled).toBe(false); // submit button
    });

    test('should not enable for invalid form element', () => {
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      enableForm(null);
      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(form.elements.username.disabled).toBe(true); // Should remain disabled
      consoleWarnSpy.mockRestore();
    });
  });
});
