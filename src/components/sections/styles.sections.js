import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(
  ({ theme, paddingtop, paddingtopmob }) => ({
    display: 'flex',
    width: '100%',
    paddingTop: paddingtop ? paddingtop : '8rem',
    [theme.breakpoints.down('lg')]: {
      paddingTop: paddingtopmob ? paddingtopmob : '5.5rem',
    },
    background: theme.palette.background.paper,
    paddingBottom: '4rem',
  })
);

export const ButtonBox = styled(Box)(({ margintop }) => ({
  display: 'flex',
  justifyContent: 'start',
  marginTop: margintop ? margintop : '4rem',
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
