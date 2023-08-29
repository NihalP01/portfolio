import { Box, styled } from '@mui/material';

export const CustomBox = styled(Box)(
  ({ linecolor, width, height, margin }) => ({
    background: linecolor ? linecolor : '#0088ff',
    margin: margin ? margin : '4px 0 0 0',
    height: height ? height : '4px',
    width: width ? width : '70px',
    borderRadius: '0.4rem',
  })
);
