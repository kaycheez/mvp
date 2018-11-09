import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Body, Content, Button, Text, Footer, FooterTab, List, ListItem } from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.renderAllRotatees = this.renderAllRotatees.bind(this);
  }



  renderAllRotatees() {
    const { name, rotatees } = this.props.activeGroup;
  

    return (
      <List 
        dataArray={rotatees}
        renderRow={(rotatee) => 
          <ListItem >
            <Text>{rotatee}</Text>
          </ListItem>
        }
      >
      </List>
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
            {this.renderAllRotatees()}
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


