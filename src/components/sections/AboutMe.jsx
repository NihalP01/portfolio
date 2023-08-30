import React from 'react';
import { Controls } from '../controls';
import { Components } from '..';
import { BoxWrapper } from './styles.sections';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { aboutMe } from '../../constants/aboutMeConstants';

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
      <Grid container spacing={2}>
        {aboutMe.map((item) => (
          <Grid item xs={6} lg={2} mt={3} key={item.id}>
            <Box display={'flex'} alignItems={'center'}>
              <Controls.BaseTypography
                text={item.title}
                fontWeight={500}
                fontSize={'1.3rem'}
                mr={2}
              />

              <Components.HorizontalDivider
                margin="0"
                linecolor="linear-gradient(45deg, #0088ff, transparent)"
              />
            </Box>
            <Controls.BaseTypography
              text={item.subTitle}
              fontSize={'0.9rem'}
            />
          </Grid>
        ))}
      </Grid>
    </BoxWrapper>
  );
};

export default AboutMe;
