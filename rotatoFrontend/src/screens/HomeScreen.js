import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Footer, FooterTab } from 'native-base';

import AddGroupContainer from '../containers/AddGroupContainer';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
    }
    
    this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
  }

  toggleModalVisibility() {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  AllGroups() {
    const { loading, groupsList } = this.props.groups;

    if (loading) {
      return <Text>Loading...</Text>
    }
    return groupsList.map((group, index) => {
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
    const { modalVisible } = this.state;

    return (
        <Container>
          <Header>Rotato</Header>
          <Content>
            <Button full>
              <Text>Button</Text>
            </Button>
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
