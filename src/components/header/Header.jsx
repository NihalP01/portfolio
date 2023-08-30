import { Toolbar, useMediaQuery } from '@mui/material';
import React from 'react';
import {
  AppBarMain,
  CustomHeaderBox,
  HeaderMain,
} from './header.styles';
import { Controls } from '../controls';
import { headerHome, links } from '../../constants/headerConstants';

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderMain>
      <AppBarMain component="nav" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Controls.BaseTypography
            text={headerHome.name}
            sx={{cursor: 'pointer'}}
            onClick={() => scrollToSection(0)}
          />
          {!isSmallScreen && (
            <CustomHeaderBox>
              {links.map((link) => (
                <Controls.BaseTypography
                  sx={{ cursor: 'pointer' }}
                  variant="subBody"
                  key={link.id}
                  text={link.value}
                  onClick={() => scrollToSection(link.sectionId)}
                />
              ))}
            </CustomHeaderBox>
          )}
        </Toolbar>
      </AppBarMain>
    </HeaderMain>
  );
};

export default Header;
