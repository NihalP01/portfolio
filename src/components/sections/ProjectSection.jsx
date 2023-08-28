import React from 'react';
import { BoxWrapper } from './styles.sections';
import { Controls } from '../controls';
import { Components } from '..';
import { Grid } from '@mui/material';
import { cardData } from '../../constants/projectSectionConstants';

const ProjectSection = () => {
  return (
    <BoxWrapper
      paddingtopMob="2rem"
      sx={{ px: '2rem', display: 'flex', flexDirection: 'column' }}
    >
      <Controls.BaseTypography
        text="Projects"
        fontSize={'1.5rem'}
        fontWeight={600}
      />
      <Grid container spacing={2} mt={2}>
        {cardData.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Components.ProjectCard
              title={item.title}
              subTitle={item.subTitle}
              imgUrl={item.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
    </BoxWrapper>
  );
};

export default ProjectSection;
