import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ms: 500,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  typography: {
    headingText: {
      fontSize: '3.125rem',
      fontWeight: 600,
      lineHeight: '4rem',
    },
    fontFamily: {
      inter: `"Inter", sans-serif`,
    },
  },
});
