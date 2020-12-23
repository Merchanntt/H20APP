import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
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

const AnimatedContainer = Animatable.createAnimatableComponent(Container)
const TitleAnimation = Animatable.createAnimatableComponent(Title)

const Footer: React.FC = () => {
  const concludeGoalState = useRecoilValue(concludeGoal)

  const drops = [0, 1, 2, 3, 4, 5, 6, 7]

  return (
    <AnimatedContainer animation= 'bounceInUp' duration={1500}>
      <LevelContainer>
        <TitleAnimation animation= 'fadeIn' delay={1000}>NÍVEL ATUAL DE H2O</TitleAnimation>
          <FlatList
            numColumns={4}
            data={drops}
            scrollEnabled = {false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
            <DropContainer>
              <Drop goalBeated={concludeGoalState.dayStreak.indexOf(index) === index}/>
            </DropContainer>
            )}
          />
      </LevelContainer>

      <InfoContainer>
        <TitleAnimation animation= 'fadeIn' delay={1000}>VISÃO GERAL</TitleAnimation>
        <InfoText>23% UP</InfoText>
        <SubInfoText>COMPARADO À {'\n'} ÚLTIMA SEMANA</SubInfoText>
      </InfoContainer>
    </AnimatedContainer>
  );
}

export default Footer;
