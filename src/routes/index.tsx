import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoarding from '../pages/onboarding';
import ConfirmationPage from '../pages/confirmationPage';
import DashBoard from '../pages/dashboard';

const {Navigator, Screen} = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator headerMode='none'>
      <Screen name="OnBoarding" component={OnBoarding}/>
      <Screen name="ConfirmationPage" component={ConfirmationPage}/>
      <Screen name="Dashboard" component={DashBoard}/>
    </Navigator>
  </NavigationContainer>
)

export default Routes
