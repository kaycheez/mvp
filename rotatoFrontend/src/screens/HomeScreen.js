import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Footer, FooterTab, List, ListItem } from 'native-base';

import AddGroupContainer from '../containers/AddGroupContainer';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.renderAllGroups = this.renderAllGroups.bind(this);
  }



  renderAllGroups() {
    const { navToGroup, groupsList } = this.props;
    const { loading, groups } = groupsList;

    if (loading) {
      return <Text>Loading...</Text>
    }
    return (
      <List 
        dataArray={groups}
        renderRow={(group, sectionID, rowID) => 
          <ListItem button onPress={() => {
            navToGroup(rowID);
          }}>
            <Text>{group.name}</Text>
          </ListItem>
        }
      >
      </List>
    )
  }

  render() {
    const { navToAddGroup } = this.props;

    return (
        <Container>
          <Content>
            {this.renderAllGroups()}
          </Content>
          <Footer>
            <FooterTab>
              <Button full onPress={() => navToAddGroup()}>
                <Text>Add Group</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
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
