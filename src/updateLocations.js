import { slide } from "./slide";

export const updateLocations = (attr) => {
  sectionLocations = [0];
  sections.forEach((x, i) =>
    sectionLocations.push(sections[i].clientHeight + sectionLocations[i])
  );
  sectionLocations.pop();
  slide(currentSection, attr);
  if (!RWD) document.querySelector("#main").scroll(0, 0);
  updateNav();
};
