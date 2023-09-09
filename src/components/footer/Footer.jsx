import React from 'react';
import { BoxWrapper } from './footer.styles';
import { Controls } from '../controls';
import { Box, Grid, useMediaQuery } from '@mui/material';
import {
  footerContent,
  socialIcons,
} from '../../constants/footerConstants';

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const mobileScreen = useMediaQuery('(max-width: 640px)');
  const year = new Date().getFullYear();

  return (
    <BoxWrapper>
      <Grid
        container
        spacing={2}
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Controls.BaseTypography
            fontSize={'1.1rem'}
            fontWeight={600}
            text={footerContent.footerText}
            textAlign={mobileScreen ? 'center' : 'start'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Controls.BaseTypography
            fontSize={'0.9rem'}
            textAlign={
              isSmallScreen
                ? mobileScreen
                  ? 'center'
                  : 'end'
                : 'center'
            }
            sx={{ cursor: 'pointer' }}
            onClick={() =>
              (window.location.href = `mailto:${footerContent.mail}`)
            }
            text={footerContent.mail}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          display={'flex'}
          justifyContent={isSmallScreen ? 'center' : 'end'}
        >
          {socialIcons.map((item) => (
            <Box
              key={item.id}
              onClick={() => window.open(item.link, '_blank')}
              sx={{ cursor: 'pointer' }}
              width={'40px'}
            >
              <item.icon fontSize={'1.5rem'} />
            </Box>
          ))}
        </Grid>
      </Grid>
      <Controls.BaseTypography
        mt={2}
        textAlign="center"
        fontSize="0.8rem"
        fontWeight={600}
        text={`© ${year} ${footerContent.name}`}
      />
    </BoxWrapper>
  );
};

export default Footer;
