import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

import { Container, Title, StepView } from './styles';

interface HeaderProps {
  title: string;
  isOnBoarding?: boolean;
}

const Header: React.FC<HeaderProps> = ({isOnBoarding, title}) => {
  return (
    <Container>
      { isOnBoarding
        ? <StepView />
        : <BorderlessButton>
            <Feather name='align-justify' size={32} color='#a2acdf'/>
          </BorderlessButton>
      }
      <Title>{title}</Title>
      <StepView />
    </Container>
  );
}

export default Header;
