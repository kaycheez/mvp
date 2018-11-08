import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Content, Button, Text, Footer, FooterTab, List, ListItem } from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.renderAllRotatees = this.renderAllRotatees.bind(this);
  }



  renderAllRotatees() {
    const { activeGroup } = this.props;
    const { rotatees } = activeGroup;

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
    const { navToEditGroup, activeGroup } = this.props;

    return (
        <Container>
          <Content>
            <Body>
              <Text>{activeGroup.name}</Text>
              {this.renderAllRotatees()}
            </Body>
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


