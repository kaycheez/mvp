import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Form, Label, Input, Item, Body, Footer, FooterTab, List, ListItem } from 'native-base';


export default class AddGroup extends Component {

  renderRotatees() {
    const { rotatees } = this.props;

    return (
      <List 
        dataArray={rotatees}
        renderRow={(rotatee, sectionID, rowID) => 
          <ListItem >
            <Text>{rotatee}</Text>
          </ListItem>
        }
      >
      </List>
    )
  }

  render() {
    const { 
      name,
      goBack, 
      updateName, 
      updateAllRotatees,
      updateNewRotateeName,
      saveNewGroupAndGoBack, 
    } = this.props;

    return (
      <Container style={styles.container}>
        <Content>
          <Body>
            <Form>
              <Item stackedLabel>
                <Label>Group Name</Label>
                <Input name='name' value={name} onChangeText={(name) => updateName(name)}/>
              </Item>
            </Form>
          </Body>
            <Text>Rotatees</Text>
            {this.renderRotatees()}
            <Form>
              <Item stackedLabel>
                <Label>New Rotatee</Label>
                <Input name='rotatee' onChangeText={(rotatee) => updateNewRotateeName(rotatee)}/>
              </Item>
            </Form>
            <Button primary onPress={() => updateAllRotatees()}>
              <Text> Add New Rotatee </Text>
            </Button>
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
