import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/actionCreators';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGroups());
  }

  AllGroups() {
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
    return (
      <View style={styles.container}>
        {this.AllGroups()}
        <TouchableOpacity>
          <Text>
           Hi yooo
          </Text>
        </TouchableOpacity>
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

const mapStateToProps = state => ({
  groups: state.groups.groups,
  loading: state.groups.loading,
  error: state.groups.error
});

export default connect(mapStateToProps)(HomeScreen)