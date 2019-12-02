/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeStack from "./src/router/router";

const App: () => React$Node = () => {
  return (
        <HomeStack></HomeStack>
  );
};


export default App;
