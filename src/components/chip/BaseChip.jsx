import { Chip } from '@mui/material';
import React from 'react';

const BaseChip = (props) => {
  const { label } = props;
  return <Chip label={label} variant="outlined" />;
};

export default BaseChip;
