import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainContainer from './app/navigation/MainContainer';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <MainContainer />
  );
};

export default App;
