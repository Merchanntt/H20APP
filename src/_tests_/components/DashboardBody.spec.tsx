import React from 'react';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react-native';

import Body from '../../components/dashboard/Body';

describe('Water Percentage', () => {
    const { findAllByTestId } = render(
      <RecoilRoot>
        <Body />
      </RecoilRoot>
    )
  it('Should be able to find all elements', () => {

    expect(findAllByTestId('background-test')).toBeTruthy()
    expect(findAllByTestId('day-title-test')).toBeTruthy()
    expect(findAllByTestId('percentage-number-test')).toBeTruthy()
    expect(findAllByTestId('percentage-icon-test')).toBeTruthy()
    expect(findAllByTestId('cups-missing-test')).toBeTruthy()
    expect(findAllByTestId('cups-size-test')).toBeTruthy()
    expect(findAllByTestId('cups-size-button-test')).toBeTruthy()
    expect(findAllByTestId('confirm-cup-size-button-test')).toBeTruthy()
    expect(findAllByTestId('confirm-cup-size-icon-test')).toBeTruthy()
  })
})
