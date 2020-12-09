import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';

import Background from '../../../assets/BackgroundImage.png';

import {
  Container,
  PercentageContainer,
  DayTitle,
  PercentageData,
  CupsMissing,
  CupsContainer,
  CupButton,
  CupSize,
  ConfirmCupButton
} from './styles';

const Body: React.FC = () => {
  const cupSize = ['1/2 COPO', '1 COPO', '1.5 COPO']
  const [selectedCup, setSelectedCup] = useState(1);

  return (
    <Container source={Background} resizeMode='stretch'>

      <PercentageContainer>
        <DayTitle>HOJE</DayTitle>
        <PercentageData>35%</PercentageData>
        <CupsMissing>4.5 COPOS FALTANDO</CupsMissing>
      </PercentageContainer>

      <CupsContainer>
        <FlatList
          data={cupSize}

          style={{overflow: 'visible'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CupButton onPress={() => setSelectedCup(index)}>
              <CupSize isSelected={selectedCup === index}>{item}</CupSize>
            </CupButton>
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
