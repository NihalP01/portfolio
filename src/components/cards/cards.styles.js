import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(
  ({ cardpadding, borderrad }) => ({
    // border: '1px solid #ffb4b4',
    position: 'relative',
    padding: cardpadding ? cardpadding : '1rem',
    borderRadius: borderrad ? borderrad : '0.7rem',
  })
);

export const SkillBox = styled(Box)({
  display: 'flex',
  alignItems: 'start',
  padding: '1rem 0',
  // sx={{ display: 'flex', alignItems: 'start' }}
});
