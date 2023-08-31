import React from 'react';
import { CustomButton } from './button.styles';

const BaseButton = (props) => {
  const { text, btnPadding, onClick } = props;
  return (
    <CustomButton
      padding={btnPadding}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </CustomButton>
  );
};

export default BaseButton;
