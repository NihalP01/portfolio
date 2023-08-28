import React from 'react';
import { CustomBox } from './styles';

const HorizontalDivider = (props) => {
  const { linecolor, width, height, margin } = props;
  return (
    <CustomBox
      linecolor={linecolor}
      width={width}
      height={height}
      margin={margin}
    ></CustomBox>
  );
};

export default HorizontalDivider;
