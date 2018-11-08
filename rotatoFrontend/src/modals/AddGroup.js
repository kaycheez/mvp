import React, { Component } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Container, Content, Button, Text, Form, Label, Input, Item, Body, Footer, FooterTab } from 'native-base';


export default class AddGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      rotatees: [],
    }
    
    this.handleSaveNewGroup = this.handleSaveNewGroup.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(name) {
    this.setState({
      name
    })
  }

  handleSaveNewGroup() {
    const { saveNewGroupAndRefresh } = this.props;
    const newGroup = {
      name: this.state.name,
      rotatees: this.state.rotatees,
    }

    saveNewGroupAndRefresh(newGroup);
  }


  render() {
    const { toggleModalVisibility, modalVisible } = this.props;

    return (
      <View>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <Container style={styles.container}>
            <Content>
              <Body>
                <Form>
                  <Item stackedLabel>
                    <Label>Group Name</Label>
                    <Input name='name' onChangeText={(text) => this.handleTextChange(text)}/>
                  </Item>
                </Form>
              </Body>
            </Content>
            <Footer>
            <FooterTab>
              <Button transparent primary onPress={() => this.handleSaveNewGroup()}><Text>Save</Text></Button>
              <Button transparent danger onPress={() => toggleModalVisibility()}><Text>Cancel</Text></Button>   
            </FooterTab>
          </Footer>
          </Container>
        </Modal>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#b7b7b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
