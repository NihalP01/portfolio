import React from 'react';
import { BoxWrapper } from './projectCard.styles';
import { Controls } from '../controls';

const FreelancingCard = (props) => {
  const { title, subTitle } = props;
  return (
    <BoxWrapper cardPadding={0.5} mt={4}>
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
    </BoxWrapper>
  );
};

export default FreelancingCard;
