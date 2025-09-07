/**
 * Validates data against a given schema.
 * @param {object} data The data object to validate.
 * @param {object} schema The schema object defining validation rules.
 * @returns {object} An object containing validation errors, or empty if valid.
 */
export const validate = (data, schema) => {
  const errors = {};

  for (const key in schema) {
    if (Object.prototype.hasOwnProperty.call(schema, key)) {
      const rule = schema[key];
      const value = data[key];

      // Required check
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors[key] = `${key} is required`;
        continue;
      }

      // Type check
      if (rule.type && typeof value !== rule.type) {
        if (value !== undefined) { // Only add type error if value is present
          errors[key] = `${key} must be a ${rule.type}`;
          continue;
        }
      }

      // Min/Max length for strings
      if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
        errors[key] = `${key} must be at least ${rule.minLength} characters long`;
        continue;
      }
      if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
        errors[key] = `${key} must be at most ${rule.maxLength} characters long`;
        continue;
      }

      // Min/Max value for numbers
      if (rule.min && typeof value === 'number' && value < rule.min) {
        errors[key] = `${key} must be at least ${rule.min}`;
        continue;
      }
      if (rule.max && typeof value === 'number' && value > rule.max) {
        errors[key] = `${key} must be at most ${rule.max}`;
        continue;
      }

      // Custom validation function
      if (rule.validator && !rule.validator(value)) {
        errors[key] = rule.message || `${key} is invalid`;
        continue;
      }
    }
  }

  return errors;
};
