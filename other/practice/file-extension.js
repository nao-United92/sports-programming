export const getFileExtension = (filename) => {
  if (typeof filename !== 'string') return '';
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex <= 0) return '';
  return filename.slice(lastDotIndex + 1);
};
