export const createSlug = (str: string) => {
  return str.trim().toLowerCase().replace(/\s+/g, '-');
};

export const capitalize = (str: string) => {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};
