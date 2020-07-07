import { isRWD } from "./is-rwd";
import { updateNavColors } from "./update-nav-colors";

export const resetPage = (navs, pageState) => {
  if (pageState === isRWD(900, 810)) return pageState;
  document.querySelector("#container").style.marginTop = 0;
  document.querySelector("#main").scrollTo(0, 0);
  updateNavColors(navs, 0, "black", "#d7000f");
  return !pageState;
};
