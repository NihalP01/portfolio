import React from 'react';
import {
  AvatarBox,
  BoxWrapper,
  ButtonBox,
  CircleBoxOne,
} from './styles.sections';
import { Box, Grid } from '@mui/material';
import { Controls } from '../controls';
import { heroConstants } from '../../constants/heroConstants';

const HeroSection = () => {
  return (
    <BoxWrapper>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Grid item xs={6}>
          <Box width={'100%'} maxWidth={530}>
            <Controls.BaseTypography
              variant="headingText"
              text={heroConstants.heading}
            />
            <Controls.BaseTypography
              mt={4}
              fontSize={'1.1rem'}
              text={heroConstants.subHeading}
            />
          </Box>
          <ButtonBox>
            <Controls.BaseButton text={heroConstants.buttonText} />
          </ButtonBox>
        </Grid>
        <Grid item xs={4}>
          <AvatarBox>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
              height={300}
              style={{
                borderRadius: '10rem',
                zIndex: 1,
                position: 'absolute',
              }}
              alt='profile img'
            />
            <CircleBoxOne></CircleBoxOne>
          </AvatarBox>
        </Grid>
      </Grid>
    </BoxWrapper>
  );
};

export default HeroSection;
