import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  buttonDescription: string;
}

const Button: React.FC<ButtonProps> = ({buttonDescription, ...rest}) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{buttonDescription}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
