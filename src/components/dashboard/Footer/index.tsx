import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useRecoilValue } from 'recoil';

import { concludeGoal } from '../../../store/RecoilAtom';

import {
  Container,
  LevelContainer,
  Title,
  DropContainer,
  Drop,
  InfoContainer,
  InfoText,
  SubInfoText,
} from './styles';

const Footer: React.FC = () => {
  const concludeGoalState = useRecoilValue(concludeGoal)
  const [streakDays, setStreakDays] = useState<Number | undefined>()

  const drops = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <Container>
      <LevelContainer>
        <Title>NÍVEL ATUAL DE H2O</Title>
          <FlatList
            numColumns={4}
            data={drops}
            scrollEnabled = {false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
            <DropContainer>
              <Drop goalBeated={streakDays === index}/>
            </DropContainer>
            )}
          />
      </LevelContainer>

      <InfoContainer>
        <Title>VISÃO GERAL</Title>
        <InfoText>23% UP</InfoText>
        <SubInfoText>COMPARADO À {'\n'} ÚLTIMA SEMANA</SubInfoText>
      </InfoContainer>
    </Container>
  );
}

export default Footer;
