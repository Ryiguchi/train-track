export const createSlug = (str: string) => {
  return str.trim().toLowerCase().replace(/\s+/g, '-');
};
