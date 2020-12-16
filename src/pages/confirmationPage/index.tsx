import React, { useEffect, useState } from 'react';
import NumberAnimation from 'react-native-animated-number';
import { useRecoilState } from 'recoil';
import Lottie from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import WaterLoadingAnimation from '../../assets/WaterLoadingAnimation.json';

import Button from '../../components/Button';

import WaterCalculatorUtils from '../../utils/WaterCalculator';
import { userHealthly } from '../../store/RecoilAtom';

import {
    Container,
    CupsAvarageContainer,
    CupsAvarageText,
  } from './styles';

  interface RouteParams {
    weight: string;
  }

const ConfirmationPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useRecoilState(userHealthly)

  const Route = useRoute()
  const { navigate } = useNavigation()
  const { WaterCalculator } = WaterCalculatorUtils;

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
      })
    }, 3000)
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
          <CupsAvarageContainer>
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
          </CupsAvarageContainer>
          <Button buttonDescription='OK!' onPress={() => navigate('Dashboard')}/>
        </Container>
      );
    }
}

export default ConfirmationPage;
