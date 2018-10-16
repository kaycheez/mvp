import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AddGroup from '../components/AddGroup';
import GroupScreen from './GroupScreen';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      groups: [],
    }

    this.getGroups = this.getGroups.bind(this);
    this.AddGroupHandler = this.AddGroupHandler.bind(this);
    this.handleGroupPress = this.handleGroupPress.bind(this);
    this.editGroup = this.editGroup.bind(this);
  }

  getGroups() {
    axios.get('http://localhost:1177/api/groups')
      .then((res) => {
        this.setState({
          groups: res.data.groups
        }, () => {
          console.log(this.state.groups)
        })
      })
  }
  
  AddGroupHandler(name) {
    axios.post('http://localhost:1177/api/groups', {name})
      .then((response) => {
        console.log(response);
        this.getGroups()
      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentDidMount() {
    this.getGroups();
  }

  handleGroupPress(group, index) {
    const editGroup = this.editGroup;
    this.props.navigator.push({
      component: GroupScreen,
      title: group.name,
      passProps: {
        group: group,
        editGroup: editGroup,
        index: index,
      },
    })
  }

  editGroup(newPerson, index) {
    const currGroup = this.state.groups[index]
    console.log(currGroup);
    currGroup.persons.push(newPerson)
    axios.put('http://localhost:1177/api/groups', currGroup)

  }

  AllGroups() {
    return this.state.groups.map((group, index) => {
      return(
        <TouchableOpacity 
          onPress={() => this.handleGroupPress(group, index)}
          key={index}
        >
          <Text>{group.name}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rotato</Text>
        {this.AllGroups()}
        <AddGroup addNewGroup={this.AddGroupHandler} />>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 30
  }
});
