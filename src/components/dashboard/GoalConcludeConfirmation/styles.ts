import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;


export const TrophyContainer = styled.View`
  justify-content: center;
  margin-top: 24px;
  height: 220px;
  width: 220px;
`;

export const ConfirmationContainer = styled.View`
  background-color: #F3F6FC;
  width: 80%;
  height: 70%;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 24px 16px;
`;

export const ConfirmationContainerText = styled.Text`
  font-family: 'Oswald_400Regular';
  text-align: center;
  line-height: 32px;
  color: #303030;
  font-size: 16px;
`;
