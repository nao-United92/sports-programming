/**
 * Formats a number with grouped thousands.
 *
 * @param {number} number The number to format.
 * @param {number} [decimals=0] The number of decimal points.
 * @param {string} [dec_point='.'] The separator for the decimal point.
 * @param {string} [thousands_sep=','] The thousands separator.
 * @returns {string} The formatted number.
 */
export const formatNumber = (number, decimals = 0, dec_point = '.', thousands_sep = ',') => {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
  const dec = (typeof dec_point === 'undefined') ? '.' : dec_point;
  let s = '';

  const toFixedFix = (n, prec) => {
    const k = Math.pow(10, prec);
    return '' + Math.round(n * k) / k;
  };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};

/**
 * Formats a string using placeholders.
 *
 * @param {string} format The format string (e.g., "Hello %s").
 * @param {...any} args The values to insert into the format string.
 * @returns {string} The formatted string.
 */
export const sprintf = (format, ...args) => {
  let i = 0;
  return format.replace(/%s/g, () => args[i++]);
};
