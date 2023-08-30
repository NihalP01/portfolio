import React from 'react';
import { BoxWrapper } from './footer.styles';
import { Controls } from '../controls';
import { Box, Grid } from '@mui/material';
import { socialIcons } from '../../constants/footerConstants';

const Footer = () => {
  return (
    <BoxWrapper>
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Controls.BaseTypography
            fontSize={'1.1rem'}
            fontWeight={600}
            text="Feel free to contact me"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Controls.BaseTypography
            fontSize={'0.9rem'}
            textAlign="center"
            text="nihalburagohain02@gmail.com"
          />
        </Grid>
        <Grid item sm={12} lg={4} display={'flex'} justifyContent={'end'}>
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
    </BoxWrapper>
  );
};

export default Footer;
