import React from 'react';
import * as Animatable from 'react-native-animatable';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

import { Container, Title, StepView } from './styles';

interface HeaderProps {
  title: string;
  isOnBoarding?: boolean;
  animation: string;
}

const AnimatedContainer = Animatable.createAnimatableComponent(Container)

const Header: React.FC<HeaderProps> = ({isOnBoarding, title, animation}) => {
  return (
    <AnimatedContainer
      animation= {animation}
      delay={1000}
    >
      { isOnBoarding
        ? <StepView testID='step-view-left-test'/>
        : <BorderlessButton testID='button-test' >
            <Feather
              testID='icon-test'
              name='align-justify'
              size={32}
              color='#a2acdf'
            />
          </BorderlessButton>
      }
      <Title testID='title-test'>{title}</Title>
      <StepView testID='step-view-right-test'/>
    </AnimatedContainer>
  );
}

export default Header;
