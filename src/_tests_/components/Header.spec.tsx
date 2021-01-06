import React from 'react';

import { render } from '@testing-library/react-native';
import Header from '../../components/Header';

describe('Header elements', () => {
  it('Should be able to find all header elements', () => {
    const { findAllByTestId } = render(<Header title='' animation=''/>)

    expect(findAllByTestId('step-view-right-test')).toBeTruthy()
    expect(findAllByTestId('button-test')).toBeTruthy()
    expect(findAllByTestId('icon-test')).toBeTruthy()
    expect(findAllByTestId('title-test')).toBeTruthy()
  })
  it("Shouldn't be able to show button", () => {
    const { findAllByTestId } = render(<Header title='' animation='' isOnBoarding={true}/>)

    expect(findAllByTestId('step-view-left-test')).toBeTruthy()
  })
})
