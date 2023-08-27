import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  marginTop: '8rem',
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
  background: '#d7f5ff',
  position: 'absolute',
  padding: '10rem',
  top: '30%',
  left: '63%',
  borderRadius: '10rem',
  zIndex: 0,
});
