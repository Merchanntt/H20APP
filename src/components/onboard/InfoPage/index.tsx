import React, { useEffect, useRef, useState } from 'react';
import { Description } from '../WelcomePage/styles';
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
  const [weight, setWeight] = useState('')
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    if(weight.length >= 2) {
      AnimationRef.current?.play()
      setIsFilled(true)
    }
  }, [weight])

  return (
    <Container>
      <Description>
        NOS INFORME SEU PESO,
        PARA QUE POSSAMOS CALCULAR A QUANTIDADE DIÁRIA IDEAL DE H2O.
      </Description>
      <WeightContainer>
        <WeightInput
          maxLength={2}
          keyboardType='number-pad'
          placeholder='00'
          onChangeText={(e) => setWeight(e)}
        />
      </WeightContainer>
        <ConfirmButton>
          <Lottie source={BreathingDot} loop={isFilled} />
        </ConfirmButton>
    </Container>
  );
}

export default OnBoardingInfo;
