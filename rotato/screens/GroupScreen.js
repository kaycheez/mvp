import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import GroupNavi from '../components/GroupNavi';

export default class GroupScreen extends Component {
  constructor(props) {
    super(props)
  }

  AllPersons() {
    return this.props.group.persons.map((person, i) => {
      return(
        <TouchableOpacity 
          key={i}
        >
          <Text>{person}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    console.log('group shit', this.props.group.persons)
    return (
      <View style={styles.groupContainer}>
        {this.AllPersons()}
        <GroupNavi 
          style={styles.groupNavi}
          persons={this.props.group.persons}
          history={this.props.group.history}
          queue={this.props.group.queue}
          navigator={this.props.navigator}
          index={this.props.index}
          editGroup={this.props.editGroup}
        />
      </View>
    )
  }
};


const styles = StyleSheet.create({
  groupContainer: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  groupNavi: {
    height: 20,
    alignItems: 'flex-end',
  },
});
