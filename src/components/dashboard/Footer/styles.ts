import styled from 'styled-components/native'

interface DropProps {
  goalBeated: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  padding-bottom: 24px;
  margin-top: auto;
`;

export const LevelContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: 'Oswald_500Medium';
  color: #303030;
  font-size: 12px;
`;

export const DropContainer = styled.View`
  flex-direction: row;
  margin-top: 28px;
  `;

export const Drop = styled.View<DropProps>`
  height: 30px;
  width: 30px;
  background-color: ${props => props.goalBeated ? '#546cf4' : '#a2acdf'};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  transform: rotate(-40deg);
  margin-right: 6px;
  overflow: hidden;
`;

export const InfoContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const InfoText = styled.Text`
  font-family: 'Oswald_700Bold';
  color: #303030;
  font-size: 34px;
  margin-top: 12px;
`;

export const SubInfoText = styled.Text`
  font-family: 'Oswald_300Light';
  text-align: right;
  color: #a2acdf;
  font-size: 12px;
  margin-top: 12px;
`;

