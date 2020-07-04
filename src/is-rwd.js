//   Function checks if window size passed RWD breakpoints.

export const isRWD = (rwdWidth, rwdHeight) =>
  rwdWidth || rwdHeight
    ? !!(
        (rwdWidth && window.innerWidth < rwdWidth) ||
        (rwdHeight && window.innerHeight < rwdHeight)
      )
    : null;
