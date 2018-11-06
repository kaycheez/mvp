import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  AllGroups() {
    if (!this.props.groups) {
      return <Text>Loading...</Text>
    }
    return this.props.groups.map((group, index) => {
      return(
        <TouchableOpacity 
          key={index}
        >
          <Text>{group.name}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        {this.AllGroups()}
        <Text>see me</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
