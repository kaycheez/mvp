import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { fetchGroups } from './constants/api';

export default class App extends React.Component {
  static defaultProps = {
    fetchGroups
  }

  state = {
    loading: false,
    groups: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let data = await this.props.fetchGroups();
    console.log('this is data', data);
    this.setState({ loading: false, groups: data}, () => {
      console.log('this is state', this.state.loading)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Rotato App</Text>
        <FlatList
          // data={this.state.groups.map((group, i) => (
          //   {key: group.name}
          // ))}
          // renderItem={(item) => <Text style={styles.item}>{item.key}</Text>}
        />
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
});
