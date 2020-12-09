import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'

import FooterImageBackground from '../../../assets/BackgroundImage.png'

import { Container, FooterImage, DotContainer } from './styles';

interface OnboardingFooterProps {
  dotComponent: boolean;
}

const OnBoardingFooter: React.FC<OnboardingFooterProps> = ({ dotComponent = false }) => {
    const [firstDot, setFirstDote] = useState('#f3f6fc')
    const [secondDot, setSecondDote] = useState('#a2acdf')
    const [firstDotSize, setFirstDoteSize] = useState(24)
    const [secondDotSize, setSecondDoteSize] = useState(18)

    useEffect(() => {
      if (dotComponent) {
        setFirstDote('#a2acdf')
        setSecondDote('#f3f6fc')
        setFirstDoteSize(18)
        setSecondDoteSize(24)
      }
    }, [dotComponent])

    return (
      <Container>
        <FooterImage source={FooterImageBackground} resizeMode='repeat'/>
        <DotContainer>
          <FontAwesome5
            name = 'dot-circle'
            size = {firstDotSize}
            color = {firstDot}
            style = {{marginRight: 8}}
          />
          <FontAwesome5 name='dot-circle' size={secondDotSize} color={secondDot}/>
        </DotContainer>
      </Container>
    );
}

export default OnBoardingFooter;
