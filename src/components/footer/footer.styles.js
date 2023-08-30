import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgb(255 255 255 / 10%)',
  padding: '2rem 0',
  background: theme.palette.background.paper,
  // [theme.breakpoints.down('lg')]: {
  //   paddingBottom: '4rem',
  // },
  width: '100%',
}));
