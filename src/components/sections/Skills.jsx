import React from 'react';
import { BoxWrapper } from './styles.sections';
import { Controls } from '../controls';
import { Grid, useMediaQuery } from '@mui/material';
import { Components } from '..';
import { Cards } from '../cards';
import { SkillsData } from '../../constants/skillsConstants';

const Skills = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <BoxWrapper
      paddingtop={'4rem'}
      paddingtopmob="2rem"
      sx={{ px: '2rem', display: 'flex', flexDirection: 'column' }}
      id='3'
    >
      <Controls.BaseTypography
        text="Skills"
        fontSize={'1.8rem'}
        fontWeight={600}
      />
      <Components.HorizontalDivider
        linecolor="#ff4929"
        margin={isSmallScreen ? '0.5 0 0 0' : ''}
        width={isSmallScreen ? '30px' : '45px'}
      />
      <Grid container spacing={3}>
        {SkillsData.map((item) => (
          <Grid item key={item.id}  md={4} lg={3}>
            <Cards.SkillsCard
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          </Grid>
        ))}
      </Grid>
    </BoxWrapper>
  );
};

export default Skills;
