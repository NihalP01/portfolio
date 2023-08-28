import React from 'react';
import { BoxWrapper } from './styles.sections';
import { Controls } from '../controls';
import { Components } from '..';
import { Grid } from '@mui/material';
import { Cards } from '../cards';
import { freelancingData } from '../../constants/freelancingConstants';

const FreelancingSection = () => {
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
        width={'110px'}
      />
      <Grid container spacing={10}>
        {freelancingData.map((item) => (
          <Grid item key={item.id}>
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
