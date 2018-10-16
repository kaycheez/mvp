import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import EditGroupScreen from '../screens/EditGroupScreen';


export default class GroupNavi extends Component {
  constructor(props) {
    super(props);

    this.handleEditPress = this.handleEditPress.bind(this);
  }

  handleEditPress() {
    this.props.navigator.push({
      component: EditGroupScreen,
      passProps: { 
        persons: this.props.persons,
        editGroup: this.props.editGroup,
        index: this.props.index,
      },
    })
  }

  render() {
    console.log('group navi', this.props)
    return (
      <View  style={styles.buttonContainer}>
        <Button
          title="Edit Group"
          persons={this.props.persons}
          onPress={() => this.handleEditPress()}
        />
      </View>
    )
  }
};


const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});
