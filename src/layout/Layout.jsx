import React from 'react';
import { LayoutContainer } from './layout.styles';
import { Sections } from '../components';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sections.Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
