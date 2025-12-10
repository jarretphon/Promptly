import { createTheme } from "@mui/material/styles";

// first get the default theme
const base = createTheme();

// then create a theme that overrides/extends parts explicitly
const theme = createTheme(base, {
  breakpoints: {
    // you can include all keys to be explicit, or only add a custom key
    values: {
      tiny: 450,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // other customizations...
});

export default theme;
