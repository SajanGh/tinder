/* eslint-disable @typescript-eslint/no-explicit-any */
export const FindInputError = (
  errors: Record<string, any>,
  name: string
): Record<string, any> => {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
};
