import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class addGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Add New Group',
    }
  }


  render() {
    return (
      <View style={styles.addGroup}>
        <TextInput 
          style={styles.input}
          value={this.state.text}
          onFocus= {() => this.setState({text : ''})}
          onChangeText={(text) => this.setState({text})}
        />
        <Button 
          style={styles.addBtn}
          title="+" 
          onPress={() => this.props.addNewGroup(this.state.text)} 
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  addGroup: {
    flex: 1,
    width: '70%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  addBtn: {
    width: 15,
  }
});
