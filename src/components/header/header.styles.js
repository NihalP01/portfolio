import { AppBar, Box, Drawer, styled } from '@mui/material';

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

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '&.MuiDrawer-root': {
    // background: "red",
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(0,0,30,0.4)',
  },
}));

export const DrawerBox = styled(Box)({
  padding: '2rem 2rem',
  display: 'flex',
});
