import { AppBar, Box, styled } from '@mui/material';

export const HeaderMain = styled(Box)(({ theme }) => ({
  '& .MuiToolbar-root': {
    zIndex: '1 !important',
    margin: '0 auto',
    width: '100%',
    
    maxWidth: '640px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
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
  },
}));

export const AppBarMain = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  boxShadow: '0px 0px 0.6px 0px',
  width: '100%',
  // padding: '0rem 4rem',
  justifyContent: 'space-between',

}));

export const CustomHeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 480,
});
