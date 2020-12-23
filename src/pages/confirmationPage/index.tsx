import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import NumberAnimation from 'react-native-animated-number';
import * as Animatable from 'react-native-animatable';
import Lottie from 'lottie-react-native';
import { useRecoilState } from 'recoil';

import WaterLoadingAnimation from '../../assets/WaterLoadingAnimation.json';

import Button from '../../components/Button';

import WaterCalculatorUtils from '../../utils/WaterCalculator';
import { userHealthly, userProgress } from '../../store/RecoilAtom';

import {
    Container,
    CupsAvarageContainer,
    CupsAvarageText,
  } from './styles';

  const AnimatableCupsAvarageContainer = Animatable.createAnimatableComponent(CupsAvarageContainer);

  interface RouteParams {
    weight: string;
  }

const ConfirmationPage: React.FC = () => {
  const Route = useRoute()
  const { reset, navigate } = useNavigation()
  const { WaterCalculator } = WaterCalculatorUtils;

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useRecoilState(userHealthly)
  const [userProgressData, setuserProgressData] = useRecoilState(userProgress)
  const [showButton, setShowButton] = useState(false)

  const { weight } = Route.params as RouteParams;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    setTimeout(() => {
      WaterCalculator(weight).then(data => {
        setUserData({
          ...userData,
          weight: data.convertedWeight,
          cupsAvarage: data.totalOfCups,
          waterPerDay: data.totalOfWaterPerDay
        })
        setuserProgressData({
          ...userProgressData,
          cupsMissing: data.totalOfCups,
          waterRemain: data.totalOfWaterPerDay
        })
      })
    }, 3000)
  }, [])

  const handleResetAndNavigateToDashboard = useCallback(() => {
    reset({
      routes: [{name: 'Dashboard'}],
      index: 0
    })
  }, [])

  const handleAnimations = useCallback(() => {
    setShowButton(true)
  }, [])

  if(isLoading) {
    return (
      <Container>
        <Lottie
          source= {WaterLoadingAnimation}
          loop
          autoPlay
          resizeMode='center'
        />
      </Container>
    )
  } else {
      return (
        <Container>
          <AnimatableCupsAvarageContainer
            animation='zoomIn'
            onAnimationEnd= {handleAnimations}
          >
            <CupsAvarageText> SUA META É DE </CupsAvarageText>
            <NumberAnimation
              value={userData.cupsAvarage}
              time={70}
              style={{
                fontFamily: 'Oswald_700Bold',
                color: '#303030',
                fontSize: 72,
                marginTop: 8,
              }}
            />
            <CupsAvarageText>COPOS POR DIA.</CupsAvarageText>
          </AnimatableCupsAvarageContainer>
          {showButton &&
            <Animatable.View
              animation='fadeIn'
              delay={100}
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 28
              }}
            >
              <Button
              buttonDescription='OK!'
              onPress= {handleResetAndNavigateToDashboard}
              />
            </Animatable.View>
          }
        </Container>
      );
    }
}

export default ConfirmationPage;
