export const BREAKPOINTS = {
  xs: 448,
  s: 768,
  m: 1024,
  l: 1280,
  xl: 1440,
  xxl: 1920,
  xxxl: 2500,
};

const widths = Object.entries(BREAKPOINTS).reduce(
  (queries, [key, value]) => ({
    ...queries,
    [key]: `@media (min-width: ${value}px)`,
  }),
  {}
);

const mediaQueries = {
  ...widths,
  finePointer: "@media (pointer: fine)",
};

export default mediaQueries;
