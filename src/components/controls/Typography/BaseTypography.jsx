import React from 'react';
import { CustomTypography } from './typography.styles';

const BaseTypography = (props) => {
  const { text, fontsize, color, textalign, ...others } = props;
  return (
    <CustomTypography
      fontSize={fontsize}
      color={color}
      textAlign={textalign ? textalign : 'start'}
      {...others}
    >
      {text}
    </CustomTypography>
  );
};

export default BaseTypography;
