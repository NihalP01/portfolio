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
      
    },
    fontFamily: {
      inter: `"Inter", sans-serif`,
    },
  },
});
