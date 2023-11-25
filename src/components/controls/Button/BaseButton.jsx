import React from 'react';
import { CustomButton } from './button.styles';

const BaseButton = (props) => {
  const { text, btnPadding, secondary, onClick } = props;
  return (
    <CustomButton
      padding={btnPadding}
      variant={secondary ? 'outlined' : 'contained'}
      onClick={onClick}
      secondary={secondary}
    >
      {text}
    </CustomButton>
  );
};

export default BaseButton;
