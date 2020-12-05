import React from 'react';
import {FontAwesome5} from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';

import {
  Container,
  PercentageContainer,
  DayTitle,
  PercentageData,
  CupsMissing,
  CupsContainer,
  CupSize,
  ConfirmCupButton
} from './styles';

const Body: React.FC = () => {
  const cupSize = ['1/2 COPO', '1 COPO', '1.5 COPO']

  return (
    <Container>

      <PercentageContainer>
        <DayTitle>HOJE</DayTitle>
        <PercentageData>35%</PercentageData>
        <CupsMissing>4.5 COPOS FALTANDO</CupsMissing>
      </PercentageContainer>

      <CupsContainer>
        <FlatList
          data={cupSize}
          snapToInterval={5}

          style={{overflow: 'visible'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => (
              <CupSize>{item.item}</CupSize>
          )}
        />
        <ConfirmCupButton>
          <FontAwesome5 name='plus-circle' size={24} color='#f3f6fc'/>
        </ConfirmCupButton>
      </CupsContainer>

    </Container>
  );
}

export default Body;
