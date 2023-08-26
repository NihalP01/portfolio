import { Box, styled } from '@mui/material';

export const LayoutContainer = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  margin: '0rem auto',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '640px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '608px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '736px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '992px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1248px',
  },
  [theme.breakpoints.up('xxl')]: {
    maxWidth: '1280px',
  },
  // padding: '0px 128px',
}));
