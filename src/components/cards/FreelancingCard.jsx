import React from 'react';
import { BoxWrapper } from './cards.styles';
import { Controls } from '../controls';
import { ButtonBox } from '../sections/styles.sections';
import { useMediaQuery } from '@mui/material';

const FreelancingCard = (props) => {
  const { title, subTitle, link } = props;
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  return (
    <BoxWrapper
      cardpadding={'1rem'}
      sx={{
        height: isSmallScreen ? '240px' : '200px',
        border: '1px solid #9fffb2',
        boxShadow: '4px 4px 6px 2px #000000',
      }}
      borderrad={'0.3rem'}
    >
      <Controls.BaseTypography
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
      <ButtonBox
        margintop="1.5rem"
        sx={{
          position: 'absolute',
          bottom: '1rem',
        }}
      >
        <Controls.BaseButton
          onClick={() => window.open(link, '_blank')}
          btnPadding="0.2rem"
          text="Visit"
        />
      </ButtonBox>
    </BoxWrapper>
  );
};

export default FreelancingCard;
