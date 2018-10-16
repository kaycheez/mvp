import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class GroupNavi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: 'Add New Person',
    }
  }

  handleEditGroup() {

  }

  AllPersons() {
    return this.props.persons.map((person, i) => {
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
    return (
      <View style={styles.editScreen}>
        {this.AllPersons()}
        <TextInput 
          value={this.state.person}
          onFocus= {() => this.setState({person : ''})}
          onChangeText={(person) => this.setState({person})}
        />
        <Button
          onPress={() => this.props.editGroup(this.state.person, this.props.index)}
          title="+"
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  editScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  }
});
