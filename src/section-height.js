export const sectionHeight = (sections, number) => {
  if (sections[number] === undefined || typeof number !== "number")
    return "error";
  let value = 0;
  for (let i = 0; i < number; i++) {
    value += sections[i].clientHeight;
  }
  return value;
};
