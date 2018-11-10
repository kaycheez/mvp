import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Body } from 'native-base';

export default class Rotater extends Component {

  render() {
    const { queue, rotatees, commenceRotation } = this.props;
    
    return (
      <Body style={styles.rotater}>
        <Text>{rotatees[queue]}</Text>
        <Button transparent primary onPress={() => commenceRotation()} >
          <Text>
            Rotate I Say
          </Text>
        </Button>
      </Body>
    )
  }
}


const styles = StyleSheet.create({
  rotater: {
    flex: 1,
  },
});
