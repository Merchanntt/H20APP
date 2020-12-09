import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

interface CupsTextProps {
  isSelected: boolean;
}

export const Container = styled.ImageBackground`
  flex: 1;
  position: relative;
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

export const CupButton = styled(BorderlessButton)``;

export const CupSize = styled.Text<CupsTextProps>`
  font-family: 'Oswald_400Regular';
  text-align: right;
  color: ${(props) => props.isSelected ? '#f3f6fc' : '#a2acdf'};
  font-size: ${(props) => props.isSelected ? '20px' : '12px'};
  margin-top: 6px;
  margin-right: 12px;
`;

export const ConfirmCupButton = styled(BorderlessButton)`
  justify-content: center;
  margin-top: 8px;
`;
