import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

export const Container = styled.View`
  padding: 24px 16px;
  width: ${screenWidth}px;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
`;

export const Description = styled.Text`
  font-family: 'Oswald_400Regular';
  text-align: center;
  line-height: 32px;
  color: #303030;
  font-size: 16px;
`;
