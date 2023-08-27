import {  Toolbar } from '@mui/material';
import React from 'react';
import {
  AppBarMain,
  CustomHeaderBox,
  HeaderMain,
} from './header.styles';
import { Controls } from '../controls';
import { links } from '../../constants/headerConstants';

const Header = () => {
  return (
    <HeaderMain>
      <AppBarMain component="nav" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Controls.BaseTypography text="Portfolio" />
          <CustomHeaderBox>
            {links.map((link) => (
              <Controls.BaseTypography
                sx={{ cursor: 'pointer' }}
                variant="subBody"
                key={link.id}
                text={link.value}
              />
            ))}
          </CustomHeaderBox>
        </Toolbar>
      </AppBarMain>
    </HeaderMain>
  );
};

export default Header;
