import { Box, Toolbar, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import {
  AppBarMain,
  CustomDrawer,
  CustomHeaderBox,
  DrawerBox,
  HeaderMain,
} from './header.styles';
import { Controls } from '../controls';
import { headerHome, links } from '../../constants/headerConstants';
import { STATIC_ASSETS } from '../../global/StaticAssets';

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  const [openDrawer, setOpenDrawer] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <HeaderMain>
      <AppBarMain component="nav" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Controls.BaseTypography
            text={headerHome.name}
            sx={{ cursor: 'pointer' }}
            onClick={() => scrollToSection(0)}
          />
          {isSmallScreen ? (
            <Box onClick={handleOpenDrawer}>
              <STATIC_ASSETS.MENU_ICON />
              <CustomDrawer
                anchor={'top'}
                open={openDrawer}
                onClose={handleOpenDrawer}
                PaperProps={{
                  sx: {
                    backgroundColor: 'rgb(0 0 0 / 84%)',
                    color: 'white',
                  },
                }}
              >
                {/* FIXME:Add drawer */}
                <DrawerBox>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    pt={3}
                  >
                    {links.map((link) => (
                      <Controls.BaseTypography
                        sx={{ cursor: 'pointer' }}
                        fontSize={'1rem'}
                        mt={3}
                        key={link.id}
                        text={link.value}
                        onClick={() =>
                          scrollToSection(link.sectionId)
                        }
                      />
                    ))}
                  </Box>
                  <Box mt={1}>
                    <STATIC_ASSETS.HOME_ICON
                      onClick={() => scrollToSection(0)}
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        fontSize: '1.4rem',
                      }}
                    />
                  </Box>
                  <Box mt={1}>
                    <STATIC_ASSETS.CLOSE_ICON
                      style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        fontSize: '1.4rem',
                      }}
                    />
                  </Box>
                </DrawerBox>
              </CustomDrawer>
            </Box>
          ) : (
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
