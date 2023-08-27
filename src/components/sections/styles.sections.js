import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  paddingTop: '8rem',
  [theme.breakpoints.down('lg')]: {
    paddingTop: '5.5rem',
  },
  background: theme.palette.background.paper,
}));

export const ButtonBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  marginTop: '4rem',
}));

export const AvatarBox = styled(Box)({
  justifyContent: 'center',
  alignItems: 'center',
});

export const CircleBoxOne = styled(Box)({
  background: '#91e3ff',
  position: 'absolute',
  padding: '8rem',
  top: '30%',
  left: '66%',
  borderRadius: '10rem',
  boxShadow: '0 0 62px #36a3ff',
  zIndex: 0,
});
