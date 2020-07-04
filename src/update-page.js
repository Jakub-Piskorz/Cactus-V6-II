// Updates page after crossing RWD breakpoints

import { isRWD } from "./is-rwd";

export const updatePage = (RWD) => {
  if (RWD === isRWD(900, 810)) return;
  document.querySelector("#container").style.marginTop = 0;
  document.querySelector("#main").scrollTo(0, 0);
};
