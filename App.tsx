import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './component/header';
import ButtonComponent from './component/button';
import HomeScreen from './scr/home/homeScreen';
import PredictScreen from './scr/home/predictScreen';
import OnboardingScreen from './scr/loading';

const App = () => {
  return <HomeScreen />;
};

export default App;

const styles = StyleSheet.create({});
