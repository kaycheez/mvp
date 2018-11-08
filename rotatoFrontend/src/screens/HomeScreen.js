import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Footer, FooterTab, List, ListItem } from 'native-base';

import AddGroupContainer from '../containers/AddGroupContainer';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
    }
    
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
    this.renderAllGroups = this.renderAllGroups.bind(this);
  }

  toggleModalVisibility() {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  renderAllGroups() {
    const { loading, groups } = this.props.groupsList;

    if (loading) {
      return <Text>Loading...</Text>
    }
    return (
      <List 
        dataArray={groups}
        renderRow={(group, sectionID, rowID) => 
          <ListItem button onPress={() => console.log(rowID)}>
            <Text>{group.name}</Text>
          </ListItem>
        }
      >
      </List>
    )
  }

  render() {
    const { modalVisible } = this.state;

    return (
        <Container>
          <Content>
            {this.renderAllGroups()}
          </Content>
          <Footer>
            <FooterTab>
              <Button full onPress={() => this.toggleModalVisibility()}>
                <Text>Add Group</Text>
              </Button>
            </FooterTab>
          </Footer>
          <AddGroupContainer 
            modalVisible={modalVisible}
            toggleModalVisibility={this.toggleModalVisibility}
          />
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
