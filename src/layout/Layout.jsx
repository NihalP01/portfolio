import React from 'react';
import { LayoutContainer } from './layout.styles';
import { Components } from '../components';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Components.Header />
      {children}
      <Components.Footer />
    </LayoutContainer>
  );
};

export default Layout;
