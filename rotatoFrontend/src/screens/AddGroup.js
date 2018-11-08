import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Form, Label, Input, Item, Body, Footer, FooterTab } from 'native-base';


export default class AddGroup extends Component {

  render() {
    const { 
      saveNewGroupAndGoBack, 
      goBack, 
      updateName, 
      updateRotatee 
    } = this.props;

    return (
      <Container style={styles.container}>
        <Content>
          <Body>
            <Form>
              <Item stackedLabel>
                <Label>Group Name</Label>
                <Input name='name' onChangeText={(name) => updateName(name)}/>
              </Item>
            </Form>
          </Body>
        </Content>
        <Footer>
          <FooterTab>
            <Button transparent primary onPress={() => {
                saveNewGroupAndGoBack();
              }}
            ><Text>Save</Text></Button>
            <Button transparent danger onPress={() => goBack()}>
              <Text>Cancel</Text>
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
  },
});
