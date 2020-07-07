export const updateNavColors = (navHtml, section, selectedColor, restColor) => {
  for (let n of navHtml) n.style.color = selectedColor;
  navHtml[section].style.color = restColor;
};
