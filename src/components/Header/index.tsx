import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

import { Container, Title, RightStepView } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <BorderlessButton>
        <Feather name='align-justify' size={32} color='#a2acdf'/>
      </BorderlessButton>
      <Title>NIVEL DE HIDRATAÇÃO</Title>
      <RightStepView />
    </Container>
  );
}

export default Header;
