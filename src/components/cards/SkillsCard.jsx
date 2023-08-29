import { Box } from '@mui/material';
import React from 'react';
import { Controls } from '../controls';
import { SkillBox } from './cards.styles';

const SkillsCard = (props) => {
  const { icon: Icon, title, subTitle } = props;
  return (
    <SkillBox>
      {/* <icon style={{ fontSize: '3rem' }} /> */}
      <Icon fontSize={'3rem'} />
      <Box ml={2}>
        <Controls.BaseTypography fontSize={'1.4rem'} text={title} />
        <Controls.BaseTypography
          mt={0.5}
          fontSize={'0.9rem'}
          lineHeight={'1.2rem'}
          text={subTitle}
        />
      </Box>
    </SkillBox>
  );
};

export default SkillsCard;
