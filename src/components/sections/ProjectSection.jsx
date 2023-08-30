import React from 'react';
import { BoxWrapper } from './styles.sections';
import { Controls } from '../controls';
import { Components } from '..';
import { Grid, useMediaQuery } from '@mui/material';
import { cardData } from '../../constants/projectSectionConstants';
import { Cards } from '../cards';

const ProjectSection = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <BoxWrapper
      paddingtopmob="2rem"
      sx={{ px: '2rem', display: 'flex', flexDirection: 'column' }}
      id="1"
    >
      <Controls.BaseTypography
        text="Projects"
        fontSize={'1.8rem'}
        fontWeight={600}
      />
      <Components.HorizontalDivider
        margin={isSmallScreen ? '0.5 0 0 0' : ''}
        width={isSmallScreen ? '50px' : '80px'}
      />
      <Grid container spacing={3} mt={2}>
        {cardData.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Cards.ProjectCard
              title={item.title}
              subTitle={item.subTitle}
              imgUrl={item.imgUrl}
              hasPreview={item.hasPreview}
              shadowColor={item.shadowColor}
              // chipLabel={item.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </BoxWrapper>
  );
};

export default ProjectSection;
