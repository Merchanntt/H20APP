import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ButtonContainer = styled(RectButton)`
  height: 80px;
  width: 160px;
  background-color: #546cf4;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Oswald_700Bold';
  color: #f3f6fc;
  font-size: 16px;
`;
