import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen';
import GroupScreen from './screens/GroupScreen';


export default class App extends Component {

render() {
  return (
      <NavigatorIOS 
        initialRoute={{
          component: HomeScreen,
          title: 'ROTATO'
        }}
        style={{flex: 1}}
      />
    );
  }
}
  

