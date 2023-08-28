import React from 'react';
import { Controls } from '../controls';
import { Box } from '@mui/material';
import { BoxWrapper } from './projectCard.styles';

const ProjectCard = (props) => {
  const { title, subTitle, imgUrl } = props;
  return (
    <BoxWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={imgUrl}
          width={'350px'}
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
        fontSize={'0.9rem'}
        lineHeight={'1.2rem'}
        text={subTitle}
      />
      <Box
        mt={6}
        sx={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <Controls.BaseButton text="Live preview" />
        <Controls.BaseButton text="Check on github" />
      </Box>
    </BoxWrapper>
  );
};

export default ProjectCard;
