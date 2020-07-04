export const updateNav = (
  navHtml = document.querySelectorAll("nav span a"),
  section = 0,
  primaryColor = "black",
  restColor = "#d7000f"
) => {
  for (let n of navHtml) n.style.color = primaryColor;
  navHtml[section].style.color = restColor;
};
