import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)(({ padding }) => ({
  padding: padding ? padding : '1rem',
  textTransform: 'none',
  borderRadius: '2rem',
  fontWeight: 600,
}));
