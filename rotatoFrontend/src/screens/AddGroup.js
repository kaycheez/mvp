import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Form, Label, Input, Item, Body, Footer, FooterTab } from 'native-base';


export default class AddGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      rotatees: [],
    }
  }

  render() {
    const { saveNewGroupAndGoBack, goBack } = this.props;
    const { name, rotatees } = this.state;

    return (
      <Container style={styles.container}>
        <Content>
          <Body>
            <Form>
              <Item stackedLabel>
                <Label>Group Name</Label>
                <Input name='name' onChangeText={(name) => this.setState({ name })}/>
              </Item>
            </Form>
          </Body>
        </Content>
        <Footer>
          <FooterTab>
            <Button transparent primary onPress={() => {
                saveNewGroupAndGoBack({ name, rotatees});
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
