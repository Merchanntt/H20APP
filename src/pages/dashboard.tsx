import React from 'react';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

import { Container } from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  )
};

export default DashBoard;
