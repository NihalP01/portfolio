import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(
  ({ cardPadding, borderRad }) => ({
    // border: '1px solid #ffb4b4',
    position: 'relative',
    padding: cardPadding ? cardPadding : '1rem',
    borderRadius: borderRad ? borderRad : '0.7rem',
  })
);
