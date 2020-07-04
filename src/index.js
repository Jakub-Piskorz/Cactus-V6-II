import { updatePage } from "./update-page";
import { slide } from "./slide";
import { sectionHeight } from "./section-height";

const sections = document.querySelectorAll(".section");
const main = document.querySelector("#main");
const container = document.querySelector("#container");
const navs = document.querySelectorAll("nav span a");

setTimeout(slide, 1000, container, sectionHeight(sections, 1));
setTimeout(slide, 2000, container, sectionHeight(sections, 2));
setTimeout(slide, 3000, container, sectionHeight(sections, 3));
setTimeout(slide, 4000, container, sectionHeight(sections, 4));

// //Customizing script for specific page
// window.addEventListener("wheel", slideOnScroll);
// window.onresize = (event) => {
//   // switchRwd();
//   updateLocations();
// };
// if (document.querySelector("#slide-marker"))
//   document
//     .querySelector("#slide-marker")
//     .addEventListener("click", (event) => slide(currentSection + 1));
// if (document.querySelector(".link"))
//   document
//     .querySelector(".link")
//     .addEventListener("click", (event) =>
//       window.open(
//         "https://digital24.pl/wyzwalanie-lamp/cactus-v6-ii-bezprzewodowy-wyzwalacz-do-lamp-blyskowych.html",
//         "_self"
//       )
//     );
// if (document.querySelector("#btn-red"))
//   document
//     .querySelector("#btn-red")
//     .addEventListener("click", (event) => slide(currentSection + 1, "click"));

// updateLocations("forced");
