import { slide } from "./slide";
import { isRWD } from "./is-rwd";
import { sectionHeight } from "./section-height";
export const slideOnScroll = (
  event,
  container,
  sections,
  currentSection,
  cooldown = 900
) => {
  //Don't scroll because on mobile
  if (isRWD(900, 810)) return currentSection;

  //Scroll down
  if (event.deltaY >= 2 && currentSection < sections.length - 1) {
    if (
      slide(
        container,
        sectionHeight(sections, currentSection + 1),
        cooldown
      ) === 0
    )
      return currentSection;
    return currentSection + 1;
  }

  //Scroll up
  else if (event.deltaY <= -2 && currentSection > 0) {
    if (
      slide(
        container,
        sectionHeight(sections, currentSection - 1),
        cooldown
      ) === 0
    )
      return currentSection;
    return currentSection - 1;
  }

  //Don't scroll, because you've reached the limit
  return currentSection;
};
