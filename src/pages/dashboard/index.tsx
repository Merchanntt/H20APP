import React from 'react';

import Header from '../../components/Header';
import Body from '../../components/dashboard/Body';
import Footer from '../../components/dashboard/Footer';
import GoalConcludeConfirmation from '../../components/dashboard/GoalConcludeConfirmation';

import { useRecoilValue } from 'recoil';
import { concludeGoal } from '../../store/RecoilAtom';

import { Container, MaskView } from './styles';

const DashBoard: React.FC = () => {
  const goalInfo = useRecoilValue(concludeGoal)

  return (
    <Container >
      {goalInfo.completedDay && (
        <>
          <MaskView />
          <GoalConcludeConfirmation />
        </>
      )}
      <Header
        title='NIVEL DE HIDRATAÇÃO'
        animation= 'fadeIn'
      />
      <Body />
      <Footer />
    </Container>
  )
};

export default DashBoard;
