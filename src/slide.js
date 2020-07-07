export const slide = (() => {
  let _sliding = false;
  return (htmlElement, height, cooldown = 900) => {
    if (!_sliding) {
      _sliding = true;
      htmlElement.style.marginTop = `-${height}px`;
      setTimeout(() => {
        _sliding = false;
        return 1;
      }, cooldown);
    } else return 0;
  };
})();
