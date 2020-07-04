import { slide } from "./slide";
import { isRWD } from "./is-rwd";
export const slideOnScroll = (event, container, currentSection) => {
  if (isRWD(900, 810))
    if (event.deltaY >= 2 && currentSection + 1 < sections.length)
      slide(container, currentSection + 1);
    else if (event.deltaY <= -2 && currentSection > 0)
      slide(container, currentSection + 1);
  console.log(event.deltaY);
};
