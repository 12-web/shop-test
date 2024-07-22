const breakpoints = {
  xs: 375,
  md: 768,
  xl: 1280,
  xxl: 1440,
  fhd: 1920,
};

export type Breakpoints = keyof typeof breakpoints;

export default breakpoints;
