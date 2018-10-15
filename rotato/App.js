import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import { fetchGroups } from './constants/api';
import axios from 'axios';
import AddGroup from './components/AddGroup'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      groups: [],
    }
  }

  AddGroupHandler = (newGroup) => {
    console.log(newGroup);
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

  componentDidMount() {
    this.getGroups();
  }

  AllGroups() {
    return this.state.groups.map((group, i) => {
      return(
        <View key={i}>
          <Text>{group.name}</Text>
        </View>
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
    marginTop: 20,
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
