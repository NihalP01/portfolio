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
    headingText: {},
    fontFamily: {
      inter: `"Inter", sans-serif`,
    },
  },
});

theme.typography.body1 = {
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
};

theme.typography.h1 = {
  fontSize: '2.25rem',
  lineHeight: '2.7rem',
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    lineHeight: '3.35rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3.5rem',
    lineHeight: '4rem',
  },
};
