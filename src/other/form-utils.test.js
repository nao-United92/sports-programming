import { getFormData, clearForm, setFormValues } from './form-utils.js';

describe('form-utils', () => {
  let form;

  beforeEach(() => {
    form = document.createElement('form');
    form.innerHTML = `
      <input name="username" value="testuser">
      <input name="password" type="password" value="password">
      <input name="remember" type="checkbox" checked>
    `;
    document.body.appendChild(form);
  });

  afterEach(() => {
    document.body.removeChild(form);
  });

  it('should get form data', () => {
    const data = getFormData(form);
    expect(data).toEqual({
      username: 'testuser',
      password: 'password',
      remember: 'on', // Checkbox value is 'on' by default if not specified
    });
  });

  it('should clear a form', () => {
    clearForm(form);
    const data = getFormData(form);
    expect(data.username).toBe('');
  });

  it('should set form values', () => {
    setFormValues(form, {
      username: 'newuser',
      remember: false,
    });
    const data = getFormData(form);
    expect(data.username).toBe('newuser');
    expect(form.elements.remember.checked).toBe(false);
  });
});
