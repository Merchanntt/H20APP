import React, { useCallback, useRef, useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import Header from '../../components/Header';
import OnBoardingBody from '../../components/onboard/WelcomePage';
import OnBoardingInfo from '../../components/onboard/InfoPage';
import Footer from '../../components/onboard/Footer';
import Button from '../../components/Button';

import { Container, Main, WelcomeContainer } from './styles';

const Onboarding: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null)

  const [secondPage, setSecondPage] = useState(false)
  const {width} = Dimensions.get('screen')

  const handleScrollTheView = useCallback(() => {
    scrollViewRef.current?.scrollTo({x: width, y: 0, animated: true })
    setSecondPage(true)
  }, [])

  return (
    <Container>
      <Header title='SEJA BEM-VINDO,' isOnBoarding={true}/>
      <Main
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled= {false}
      >
        <WelcomeContainer>
          <OnBoardingBody />
          <Button
            style= {{marginBottom: 10}}
            buttonDescription='VAMOS LÁ!'
            onPress= {handleScrollTheView}
          />
        </WelcomeContainer>

        <OnBoardingInfo />

      </Main>
      <Footer dotComponent={secondPage}/>
    </Container>
  );
}

export default Onboarding;
