import React from 'react';
import { CustomButton } from './button.styles';

const BaseButton = (props) => {
  const { text, btnPadding } = props;
  return (
    <CustomButton padding={btnPadding} variant='contained'>
      {text}
    </CustomButton>
  );
};

export default BaseButton;
