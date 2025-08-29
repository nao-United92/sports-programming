
export const isEmail = (email) => {
  if (typeof email !== 'string') {
    return false;
  }
  // Basic regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};
