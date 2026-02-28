const fromCSV = (csv, delimiter = ',') => {
  const [titles, ...data] = csv.split('\n');
  const titleValues = titles.split(delimiter);
  return data.map(v =>
    titleValues.reduce((obj, title, index) => {
      obj[title] = v.split(delimiter)[index].replace(/^"|"$/g, '');
      return obj;
    }, {})
  );
};
module.exports = fromCSV;
