import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import GroupNavi from '../components/GroupNavi';

export default class GroupScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      queue: 0
    }
  }

  AllPersons() {
    return this.props.navigation.state.params.group.persons.map((person, i) => {
      return(
        <TouchableOpacity 
          key={i}
        >
          <Text>{person}</Text>
        </TouchableOpacity>
      )
    })
  }

  commenceRotation() {
    const {queue} = this.props.navigation.state.params.group
    const {persons} = this.props.navigation.state.params.group
    if (queue === persons.length - 1) {
      console.log("Que matches the length")
      this.refreshQueue(this.props.navigation.state.params.group.queue);
      this.props.navigation.state.params.editQueue(0, this.props.navigation.state.params.index)
    } else {
      console.log("Que does not match length")
      this.props.navigation.state.params.editQueue(this.props.navigation.state.params.group.queue += 1, this.props.navigation.state.params.index)

    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props){
      console.log("Prev Props:", prevProps, "\nNew props:", this.props)
      this.refreshQueue(this.props.navigation.state.params.group.queue);
    } else {
      console.log("Component Updated")
    }
  }

  refreshQueue = (queue) => this.setState({queue}, console.log(this.state.queue))

  componentDidMount() {
    this.refreshQueue(this.props.navigation.state.params.group.queue);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps next prop", nextProps)
  //   console.log("getDerivedStateFromProps prev state", prevState)
  //   if (nextProps.navigation.state.params.group.queue !== prevState.queue) {
  //     return {queue: nextProps.navigation.state.params.group.queue}
  //   } else {
  //     return null;
  //   }
  // }
  async handlePress() {
    await this.commenceRotation();
    this.props.navigation.replace('Group', {
      group: this.state.groups[index],
      editGroup: this.editGroup,
      index: index,
      editQueue: this.editQueue,
    })
  }

  render() {
    console.log("props for q", this.props.navigation.state.params.group.queue)
    let rotatee = this.props.navigation.state.params.group.persons[this.props.navigation.state.params.group.queue]
    const rotateThee = (
      <View>
          <Text>YOU SHALL BE ROTATED NEXT</Text>
          <Text style={styles.rotatee}>{rotatee}</Text>
          <Button
            title="ROTATE I SAY"
            onPress={() => this.commenceRotation()}
          />
      </View>
      )
    return (
      <View style={styles.groupContainer}>
        {this.AllPersons()}
        {this.props.navigation.state.params.group.persons.length > 1 ? rotateThee : null}
        <GroupNavi 
          style={styles.groupNavi}
          persons={this.props.navigation.state.params.group.persons}
          history={this.props.navigation.state.params.group.history}
          queue={this.props.navigation.state.params.group.queue}
          navigation={this.props.navigation}
          index={this.props.navigation.state.params.index}
          editGroup={this.props.navigation.state.params.editGroup}
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
  rotatee: {
    justifyContent: 'center',
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  }
});
