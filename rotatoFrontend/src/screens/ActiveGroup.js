import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Body, Content, Button, Text, Footer, FooterTab, ListItem } from 'native-base';

import RotaterContainer from '../containers/RotaterContainer'; 

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.renderAllRotatees = this.renderAllRotatees.bind(this);
  }

  _keyExtractor = (item, index) => {
    const id = index + 1;
    return `${id}`
  };

  renderRotater() {
    const { rotatees } = this.props.activeGroup;

    if (rotatees.length < 1) {
      return null
    }
    return <RotaterContainer />
  }


  renderAllRotatees() {
    const { rotatees } = this.props.activeGroup;
  

    return (
      <FlatList 
        data={rotatees}
        renderItem={({ item }) => 
            <ListItem >
              <Text>{item}</Text>
            </ListItem>
        }
        keyExtractor={this._keyExtractor}
      >
      </FlatList>
    )
  }

  render() {
    const { activeGroup, navToEditGroup, clearAndGoBack } = this.props;

    return (
        <Container>
          <Header>
          <Left>
            <Button transparent onPress={() => clearAndGoBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{activeGroup.name}</Title>
          </Body>
          <Right />
        </Header>
          <Content>
            <Body style={styles.rotatees}>
              {this.renderAllRotatees()}
            </Body>
            {this.renderRotater()}
          </Content>
          <Footer>
            <FooterTab>
              <Button full onPress={() => navToEditGroup()}>
                <Text>Edit Group</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  rotatees: {
    flex: 1,
  },
});


