/**
 * Masks an email address for privacy.
 * Example: 'example@gmail.com' -> 'e******@gmail.com'
 * @param {string} email
 * @returns {string}
 */
export const maskEmail = (email) => {
  const [user, domain] = email.split('@');
  if (!user || !domain) return email;
  return user.charAt(0) + '*'.repeat(user.length - 1) + '@' + domain;
};
