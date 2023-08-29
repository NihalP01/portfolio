import React from 'react';
import { Controls } from '../controls';
import { Components } from '..';
import { BoxWrapper } from './styles.sections';
import { useMediaQuery } from '@mui/material';

const AboutMe = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <BoxWrapper
      paddingtop={'4rem'}
      paddingtopmob="2rem"
      sx={{ px: '2rem', display: 'flex', flexDirection: 'column' }}
      id="4"
    >
      <Controls.BaseTypography
        text="About me"
        fontSize={'1.8rem'}
        fontWeight={600}
      />
      <Components.HorizontalDivider
        linecolor="#fb1dff"
        margin={isSmallScreen ? '0.5 0 0 0' : ''}
        width={isSmallScreen ? '55px' : '100px'}
      />
    </BoxWrapper>
  );
};

export default AboutMe;
