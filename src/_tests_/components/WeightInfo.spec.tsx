import React from 'react';

import { render } from '@testing-library/react-native';
import InfoPage from '../../components/onboard/InfoPage';

jest.mock('@react-navigation/native', () => {
 return {
    useNavigation: jest.fn(),
  }
})

describe('Preset weight', () => {
  it('Should be able to catch the weight on the input text and button', () => {
    const { findAllByTestId } = render(<InfoPage />)

    expect(findAllByTestId('weight-input')).toBeTruthy()
    expect(findAllByTestId('confirmation-button')).toBeTruthy()
  })
})
