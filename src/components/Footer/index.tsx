import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import {
  Container,
  LevelContainer,
  Title,
  DropContainer,
  Drop,
  InfoContainer,
  InfoText,
  SubInfoText,
} from './styles';

const Footer: React.FC = () => {
  const drops = [1, 2, 3 , 4, 5, 6, 7, 8]

  return (
    <Container>
      <LevelContainer>
        <Title>NÍVEL ATUAL DE H2O</Title>
          <FlatList
            numColumns={4}
            data={drops}
            keyExtractor={(item, index) => index.toString()}
            renderItem={() => (
            <DropContainer>
              <Drop />
            </DropContainer>
            )}
          />
      </LevelContainer>

      <InfoContainer>
        <Title>VISÃO GERAL</Title>
        <InfoText>23% UP</InfoText>
        <SubInfoText>COMPARADO À {'\n'} ÚLTIMA SEMANA</SubInfoText>
      </InfoContainer>
    </Container>
  );
}

export default Footer;
