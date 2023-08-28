import React from 'react';
import {
  AvatarBox,
  BoxWrapper,
  ButtonBox,
  CircleBoxOne,
} from './styles.sections';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { Controls } from '../controls';
import { heroConstants } from '../../constants/heroConstants';

const HeroSection = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <BoxWrapper>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          display={isSmallScreen ? 'flex' : 'block'}
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          order={{ xs: 2, lg: 1 }}
        >
          <Box width={'100%'} maxWidth={530}>
            <Controls.BaseTypography
              variant="h1"
              textalign={isSmallScreen ? 'center' : 'start'}
              text={heroConstants.heading}
              mt={isSmallScreen ? '2rem' : 0}
              sx={{
                background:
                  '-webkit-linear-gradient(45deg, #4999a0 30%, #a42fb2 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            />
            <Controls.BaseTypography
              mt={3}
              variant={'body1'}
              textalign={isSmallScreen ? 'center' : 'start'}
              text={heroConstants.subHeading}
            />
          </Box>
          <ButtonBox>
            <Controls.BaseButton text={heroConstants.buttonText} />
          </ButtonBox>
        </Grid>
        <Grid item xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
          <AvatarBox display={isSmallScreen ? 'flex' : 'block'}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
              height={isSmallScreen ? 200 : 300}
              style={{
                boxShadow: '2px 3px 20px 5px black',
                borderRadius: '10rem',
                zIndex: 1,
                position: 'relative',
              }}
              alt="profile img"
            />
            {!isSmallScreen && <CircleBoxOne></CircleBoxOne>}
          </AvatarBox>
        </Grid>
      </Grid>
    </BoxWrapper>
  );
};

export default HeroSection;
