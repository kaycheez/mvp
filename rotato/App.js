import React, { Component } from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen';
import GroupScreen from './screens/GroupScreen';
import EditGroupScreen from './screens/EditGroupScreen';


export default class App extends Component {

render() {
  return (
      <RootStack />
    );
  }
}
  
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Group: GroupScreen,
    EditGroup: EditGroupScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
