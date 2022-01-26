import { createTheme } from "@mui/material/styles";

const createCustomTheme = (theme) => {
  const customTheme = createTheme({
    ...theme,
    palette: {
      common: {
        black: rgba(31, 37, 51, 1),
        white: rgba(255, 255, 255, 1),
      },
      primary: {
        main: rgba(53, 151, 64, 1),
        light: rgba(43, 177, 89, 1),
        dark: rgba(79, 160, 131, 1),
        contrastText: rgba(255, 255, 255, 1),
      },
      warning: {
        main: rgba(255, 207, 85, 1),
      },
      error: {
        main: rgba(229, 92, 92, 1),
        contrastText: rgba(255, 255, 255, 1),
      },
      text: {
        primary: rgba(31, 37, 51, 1),
        secondary: rgba(112, 115, 124, 1),
      },
    },
    typography: {
      ...theme.typography,
      fontFamily: "'Lexend', sans-serif",
    },
  });

  return customTheme;
};

export default createCustomTheme;
