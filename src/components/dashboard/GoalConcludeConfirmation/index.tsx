import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useRecoilState } from 'recoil';
import Lottie from 'lottie-react-native';

import { concludeGoal } from '../../../store/RecoilAtom';
import TrophyAnimation from '../../../assets/TrophyAnimation.json';

import Button from '../../Button';

import {
   Container,
   TrophyContainer,
   ConfirmationContainer,
   ConfirmationContainerText
  } from './styles';

 const AnimatedContainer = Animatable.createAnimatableComponent(ConfirmationContainer)

const GoalConcludeConfirmation: React.FC = () => {
  const [goalInfo, setGoalInfo] = useRecoilState(concludeGoal)

  return (
    <Container>
      <AnimatedContainer
        animation='bounceIn'
      >
        <ConfirmationContainerText>
          PARABÉNS, {'\n '} VOCÊ ATINGIU SUA META DIÁRIA!
        </ConfirmationContainerText>
        <TrophyContainer>
          <Lottie
            source= {TrophyAnimation}
            autoPlay
            resizeMode= 'contain'
          />
        </TrophyContainer>
        <Button
          buttonDescription='UHUUU!'
          onPress={() => setGoalInfo({...goalInfo, completedDay: false})}
        />
      </AnimatedContainer>
    </Container>
  );
}

export default GoalConcludeConfirmation;
