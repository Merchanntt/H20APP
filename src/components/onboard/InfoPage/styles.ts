import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';

const { width: screenWidth } = Dimensions.get('window')

export const Container = styled.View`
  padding: 24px 16px;
  position: relative;
  max-width: ${screenWidth}px;
  justify-content: center;
  align-items: center;
`;

export const WeightContainer = styled.View`
  height: 100px;
  width: 160px;
  background-color: #546cf4;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  border-radius: 8px;
`;

export const WeightInput = styled.TextInput`
  height: 80px;
  width: 140px;
  padding: 0 48px;
  background-color: #f3f6fc;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  font-size: 40px;
  font-family: 'Oswald_700Bold';
  color: #303030;
`;

export const ConfirmButton = styled(BorderlessButton)`
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 80px;
`;
