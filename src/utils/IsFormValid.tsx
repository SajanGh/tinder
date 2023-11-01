/* eslint-disable @typescript-eslint/no-explicit-any */

export const IsFormValid = (err: Record<string, any>) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};
