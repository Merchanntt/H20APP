import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #0d1fe9;
  padding: 28px 16px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PercentageContainer = styled.View`
  flex: 1;
`;

export const DayTitle = styled.Text`
  font-family: 'Oswald_500Medium';
  color: #f3f6fc;
  font-size: 16px;
`;

export const PercentageData = styled.Text`
  font-family: 'Oswald_700Bold';
  color: #f3f6fc;
  font-size: 72px;
  margin-top: 8px;
`;

export const CupsMissing = styled.Text`
  font-family: 'Oswald_500Medium';
  color: #a2acdf;
  font-size: 16px;
  margin-top: 8px;
`;

export const CupsContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CupSize = styled.Text`
  font-family: 'Oswald_400Regular';
  text-align: right;
  color: #f3f6fc;
  font-size: 14px;
  margin-top: 4px;
  margin-right: 12px;
`;

export const ConfirmCupButton = styled(BorderlessButton)`
  justify-content: center;
  margin-top: 8px;
`;
