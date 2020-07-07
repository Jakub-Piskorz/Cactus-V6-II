import { resetPage } from "./reset-page";
import { slide } from "./slide";
import { sectionHeight } from "./section-height";
import { updateNavColors } from "./update-nav-colors";
import { slideOnScroll } from "./slide-on-scroll";

const sections = document.querySelectorAll(".section");
const container = document.querySelector("#container");
const navs = document.querySelectorAll("nav span a");
let currentSection = 0;
let pageOnMobile = false;

// initial updates
updateNavColors(navs, 0, "black", "#d7000f");
pageOnMobile = resetPage(navs, pageOnMobile);

/* If I loop below listeners inside "for (let i=0; i<5; i++)" loop, webpack errors after compile.
No idea why. Sorry for spaghetti. */
navs[0].addEventListener("click", () => {
  slide(container, sectionHeight(sections, 0));
  updateNavColors(navs, 0, "black", "#d7000f");
  currentSection = 0;
});
navs[1].addEventListener("click", () => {
  slide(container, sectionHeight(sections, 1));
  updateNavColors(navs, 1, "black", "#d7000f");
  currentSection = 1;
});
navs[2].addEventListener("click", () => {
  slide(container, sectionHeight(sections, 2));
  updateNavColors(navs, 2, "black", "#d7000f");
  currentSection = 2;
});
navs[3].addEventListener("click", () => {
  slide(container, sectionHeight(sections, 3));
  updateNavColors(navs, 3, "black", "#d7000f");
  currentSection = 3;
});
navs[4].addEventListener("click", () => {
  slide(container, sectionHeight(sections, 4));
  updateNavColors(navs, 4, "black", "#d7000f");
  currentSection = 4;
});
window.addEventListener("resize", () => {
  pageOnMobile = resetPage(navs, pageOnMobile);
  currentSection = 0;
});
container.addEventListener("wheel", (event) => {
  currentSection = slideOnScroll(event, container, sections, currentSection);
  updateNavColors(navs, currentSection, "black", "#d7000f");
});
