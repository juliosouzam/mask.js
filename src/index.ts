function mask(value: string, pattern: string): string {
  let i = 0;

  const v = value.toString().trim().replace(/D/g, "");

  return pattern
    .toString()
    .trim()
    .replace(/#/g, () => v[i++ || 0]);
}

export { mask };
