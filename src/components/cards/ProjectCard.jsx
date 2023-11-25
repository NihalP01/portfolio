import React from 'react';
import { Controls } from '../controls';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { BoxWrapper } from './cards.styles';
// import { Components } from '..';

const ProjectCard = (props) => {
  const {
    title,
    subTitle,
    imgUrl,
    hasPreview,
    shadowColor,
    liveLink,
    sourceLink,
    // chipLabel,
  } = props;
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <BoxWrapper
      height={isSmallScreen ? 'auto' : '420px'}
      sx={{ boxShadow: `0px 0px 6px 0px ${shadowColor}` }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={imgUrl}
          width={'100%'}
          height={'auto'}
          alt="project interface"
        />
      </Box>
      <Controls.BaseTypography
        mt={2}
        fontSize={'1.2rem'}
        fontWeight={600}
        text={title}
      />
      <Controls.BaseTypography
        mt={1}
        mb={isSmallScreen ? '5rem' : 0}
        fontSize={'0.9rem'}
        lineHeight={'1.2rem'}
        text={subTitle}
      />
      {/* <Box mt={2} display={'flex'}>
        {chipLabel.map((item) => (
          <Components.BaseChip key={item.id} label={item.label} />
        ))}
      </Box> */}
      <Grid
        container
        spacing={1}
        sx={{
          position: 'absolute',
          bottom: '1rem',
          marginTop: '5rem',
        }}
      >
        {hasPreview && (
          <Grid item>
            <Controls.BaseButton
              btnPadding="0.7rem"
              text="Live preview"
              onClick={() => handleClick(liveLink)}
            />
          </Grid>
        )}

        <Grid item>
          <Controls.BaseButton
            btnPadding="0.7rem"
            text="Source code"
            secondary
            onClick={() => handleClick(sourceLink)}
          />
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          position: 'absolute',
          bottom: '25px',
        }}
      >
        <Controls.BaseButton text="Live preview" />
        <Controls.BaseButton text="Check on github" />
      </Box> */}
    </BoxWrapper>
  );
};

export default ProjectCard;
