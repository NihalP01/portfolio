import React from 'react';
import { BoxWrapper } from './styles.sections';
import { Controls } from '../controls';
import { Components } from '..';
import { Grid, useMediaQuery } from '@mui/material';
import { Cards } from '../cards';
import { freelancingData } from '../../constants/freelancingConstants';

const FreelancingSection = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <BoxWrapper
      paddingtop={'4rem'}
      paddingtopmob="2rem"
      sx={{ px: '2rem', display: 'flex', flexDirection: 'column' }}
    >
      <Controls.BaseTypography
        text="Freelancing"
        fontSize={'1.5rem'}
        fontWeight={600}
      />
      <Components.HorizontalDivider
        linecolor="#00ff66"
        margin={isSmallScreen ? '0.5 0 0 0' : ''}
        width={isSmallScreen ? '70px' : '110px'}
      />
      <Grid container spacing={2} mt={2}>
        {freelancingData.map((item) => (
          <Grid item key={item.id} lg={4} md={6} xs={12}>
            <Cards.FreelancingCard
              title={item.title}
              subTitle={item.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </BoxWrapper>
  );
};

export default FreelancingSection;
