import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FlatList } from 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';
import NumberAnimation from 'react-native-animated-number';
import { FontAwesome5 } from '@expo/vector-icons'

import { userProgress, userHealthly, concludeGoal } from '../../../store/RecoilAtom';
import WaterCalculator from '../../../utils/WaterCalculator';

import Background from '../../../assets/BackgroundImage.png';

import {
  Container,
  PercentageContainer,
  DayTitle,
  PercentageMainContainer,
  PercentageData,
  CupsMissing,
  CupsContainer,
  CupButton,
  CupSize,
  ConfirmCupButton
} from './styles';

const AnimatedPercentageContainer = Animatable.createAnimatableComponent(PercentageContainer);
const AnimatedCupsContainer = Animatable.createAnimatableComponent(CupsContainer);


const Body: React.FC = () => {
  const [userProgressData, setUserProgressData] = useRecoilState(userProgress);
  const userHeathlyData = useRecoilValue(userHealthly);
  const [concludeGoalState, setConcludeGoalState] = useRecoilState(concludeGoal);

  const [selectedCup, setSelectedCup] = useState(1);
  const [selectedCupName, setSelectedCupName] = useState('1 COPO');

  const [completedGoalInfo, setCompletedGoalInfo] = useState(false);
  const [percentageWidth, setPercentageWidth] = useState(45);

  const cupSize = ['1/2 COPO', '1 COPO', '1.5 COPO']

  const { WaterProgressCalculator } = WaterCalculator;

  useEffect(() => {
    if (userProgressData.percentage >= 10) {
      setPercentageWidth(80)
    }
    if (userProgressData.percentage >= 100) {
      const dayStreakLength = concludeGoalState.dayStreak.length

      const dayStreak = [ ...concludeGoalState.dayStreak, dayStreakLength ]

      setCompletedGoalInfo(true)
      setPercentageWidth(110)
      setConcludeGoalState({
        dayStreak,
        completedDay: true
      })
    }
  }, [userProgressData.percentage])

  const handleSetCup = useCallback((cupName, index) => {
    setSelectedCupName(cupName)
    setSelectedCup(index)
  }, [])

  const handleProgressCalculator = useCallback(async () => {
    const data = await WaterProgressCalculator(
      selectedCupName,
      userProgressData.waterRemain,
      userHeathlyData.waterPerDay
      )

    if (data) {
      setUserProgressData({
        ...userProgressData,
        cupsMissing: data.formatedCups,
        waterRemain: data.totalWater,
        percentage: data.percentage
      })
    }
  }, [
    selectedCupName,
    userProgressData.waterRemain,
    userHeathlyData.waterPerDay,
  ])

  return (
    <Animatable.View
      style={{flex: 1}}
      animation= 'pulse'
      duration={2000}
    >
      <Container source={Background} resizeMode='stretch'>

        <AnimatedPercentageContainer animation='fadeIn'>
          <DayTitle>HOJE</DayTitle>

          <PercentageMainContainer>
            <NumberAnimation
              value= {userProgressData.percentage}
              time= {80}
              style= {{
                fontFamily: 'Oswald_700Bold',
                color: '#f3f6fc',
                fontSize: 72,
                marginTop: 8,
                minWidth: percentageWidth
              }}
            />
            <PercentageData>%</PercentageData>
          </PercentageMainContainer>
          {completedGoalInfo
            ? <CupsMissing>VOCÊ ATINGIU SUA META!</CupsMissing>
            : <CupsMissing>{userProgressData.cupsMissing} COPOS FALTANDO</CupsMissing>
          }
        </AnimatedPercentageContainer>

        <AnimatedCupsContainer animation='fadeIn'>
          <FlatList
            data={cupSize}
            style={{overflow: 'visible'}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <CupButton onPress={() => handleSetCup(item, index)}>
                <CupSize isSelected={selectedCup === index}>{item}</CupSize>
              </CupButton>
            )}
          />
          <ConfirmCupButton
            enabled={!completedGoalInfo}
            onPress={handleProgressCalculator}
          >
            <FontAwesome5 name='plus-circle' size={24} color='#f3f6fc'/>
          </ConfirmCupButton>
        </AnimatedCupsContainer>

      </Container>
    </Animatable.View>
  );
}

export default Body;
