export const colors = {
  white: '#fff',
  black: '#000',
  lightGray: '#bfbfbf',
  lightPink: '#ffacbd',
  lightBlue: '#5687ff',
};

export const transitions = {
  baseTransitionTime: '0.4s',
  loadingAnimationTransitionTime: '1.2s',
};

export const breakpoints = {
  mobileS: '320px',
  mobile: '375px',
  mobileL: '425px',
  tablet: '768px',
  desktopL: '1440px',
};

export const deviceQueries = {
  mobile: `only screen and (min-width: ${breakpoints.mobileS})`,
  mobileLarge: `only screen and (min-width: ${breakpoints.mobile})`,
  tablet: `only screen and (min-width: ${breakpoints.mobileL})`,
  desktop: `only screen and (min-width: ${breakpoints.tablet})`,
  desktopLarge: `only screen and (min-width: ${breakpoints.desktopL})`,
  customBreakpoint: (breakpoint) =>
    `only screen and (min-width: ${breakpoint})`,
};
