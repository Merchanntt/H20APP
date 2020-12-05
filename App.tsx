import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Oswald_300Light, Oswald_400Regular ,Oswald_500Medium, Oswald_700Bold, useFonts } from '@expo-google-fonts/oswald'

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  } else {
      return (
        <>
          <StatusBar hidden/>
          <Routes />
        </>
      )
  }
}
