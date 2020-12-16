import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Description } from '../WelcomePage/styles';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import BreathingDot from '../../../assets/BreathingDot.json'

import {
  Container,
  WeightContainer,
  WeightInput,
  ConfirmButton
} from './styles';

const OnBoardingInfo: React.FC = () => {
  const AnimationRef = useRef<Lottie>(null)
  const {navigate} = useNavigation()

  const [weight, setWeight] = useState('')
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    if(weight.length === 2) {
      setIsFilled(true)
      AnimationRef.current?.play()
    } else {
      AnimationRef.current?.reset()
    }
  }, [weight])

  const handleNavigateToConfirmatiomPage = useCallback(() => {
    navigate('ConfirmationPage', { weight })
  }, [weight, navigate])

  return (
    <Container>
      <Description>
        POR FAVOR, INFORME SEU PESO
        PARA CALCULAR A SUA QUANTIDADE DIÁRIA DE HIDRATAÇÃO.
      </Description>
      <WeightContainer>
        <WeightInput
          maxLength={2}
          keyboardType='number-pad'
          placeholder='00'
          onChangeText={(e) => setWeight(e)}
        />
      </WeightContainer>
        <ConfirmButton onPress= {handleNavigateToConfirmatiomPage}>
          <Lottie
            ref={AnimationRef}
            source={BreathingDot}
            loop={isFilled}
            speed={2}
          />
        </ConfirmButton>
    </Container>
  );
}

export default OnBoardingInfo;
