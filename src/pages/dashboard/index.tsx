import React from 'react';

import Header from '../../components/Header';
import Body from '../../components/dashboard/Body';
import Footer from '../../components/dashboard/Footer';

import { Container } from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Header title='NIVEL DE HIDRATAÇÃO'/>
      <Body />
      <Footer />
    </Container>
  )
};

export default DashBoard;
