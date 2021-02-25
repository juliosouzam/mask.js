const mask = (value, pattern) => {
  let i = 0;

  const v = value.toString().trim().replace(/D/g, '');

  return pattern
    .toString()
    .trim()
    .replace(/#/g, () => v[i++ || '']);
};

module.exports = mask;
