import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useRecoilState } from 'recoil';

import { concludeGoal } from '../../../store/RecoilAtom';

import Button from '../../Button';

import { Container, ConfirmationContainer, ConfirmationContainerText } from './styles';

 const AnimatedContainer = Animatable.createAnimatableComponent(ConfirmationContainer)

const GoalConcludeConfirmation: React.FC = () => {
  const [goalInfo, setGoalInfo] = useRecoilState(concludeGoal)

  return (
    <Container>
      <AnimatedContainer
        animation='zoomIn'
      >
        <ConfirmationContainerText>
          PARABÉNS, {'\n '} VOCÊ ATINGIU SUA META DIÁRIA!
        </ConfirmationContainerText>
        <Button
          buttonDescription='OK!'
          onPress={() => setGoalInfo({...goalInfo, completedDay: false})}
        />
      </AnimatedContainer>
    </Container>
  );
}

export default GoalConcludeConfirmation;
