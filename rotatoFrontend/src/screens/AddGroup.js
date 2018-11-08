import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Content, Button, Text, Form, Label, Input, Item, Body, Footer, FooterTab, List, ListItem } from 'native-base';


export default class AddGroup extends Component {

  _keyExtractor = (item, index) => {
    const id = index + 1;
    return `${id}`
  };

  renderRotatees() {
    const { rotatees } = this.props;
    console.log('hey dur', rotatees);

    return (
      <FlatList 
        data={rotatees}
        renderItem={({ item }) => {
          return (
          <ListItem>
            <Text>{item}</Text>
          </ListItem>
          )
        }
        }
        keyExtractor={this._keyExtractor}
      >
      </FlatList>
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
      <Container>
        <Content style={styles.content}>
          <Body  style={styles.name}>
            <Form>
              <Item stackedLabel>
                <Label>Group Name</Label>
                <Input name='name' value={name} onChangeText={(name) => updateName(name)}/>
              </Item>
            </Form>
          </Body>
            {/* <Text>Rotatees</Text> */}
          <Body  style={styles.rotateeList}>
            <Text>Rotatees</Text>
            {this.renderRotatees()}
          </Body>
          <Body  style={styles.newRotatee}>
            <Form>
              <Item stackedLabel>
                <Label>New Rotatee</Label>
                <Input name='rotatee' onChangeText={(rotatee) => updateNewRotateeName(rotatee)}/>
              </Item>
            </Form>
            <Button primary onPress={() => updateAllRotatees()}>
              <Text> Add New Rotatee </Text>
            </Button>
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
  content: {
    flex: 1,
  },
  name: {
    flex: 1,
  },
  rotateeList: {
    flex: 4,
  },
  newRotatee: {
    flex: 1,
  },
});
