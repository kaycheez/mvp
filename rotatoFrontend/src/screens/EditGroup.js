
import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Container, Header, Title, Content, Button, Text, Form, Label, Input, Item, Body, Footer, FooterTab, List, ListItem } from 'native-base';


export default class EditGroup extends Component {

  _keyExtractor = (item, index) => {
    const id = index + 1;
    return `${id}`
  };

  renderRotatees() {
    const { rotatees } = this.props;

    return (
      <FlatList 
        data={rotatees}
        renderItem={({ item }) => 
          <ListItem>
            <Text>{item}</Text>
          </ListItem>
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
      newRotateeName,
      updateRotateeName,
      addRotateeAndClear, 
      updateGroupAndGoBack, 
    } = this.props;

    return (
      <Container>
        
        <Header>

          <Body>
            <Title>Edit Group</Title>
          </Body>

        </Header>

        <Content style={styles.content}>

          <Body  style={styles.name}>
            <Form>
              <Item stackedLabel>
                <Label>Group Name</Label>
                <Input name='name' value={name} onChangeText={(name) => updateName(name)}/>
              </Item>
            </Form>
          </Body>

          <Body  style={styles.rotateeList}>
            <Text>Rotatees</Text>
            {this.renderRotatees()}
          </Body>

          <Body  style={styles.newRotatee}>
            <Form>
              <Item stackedLabel>
                <Label>New Rotatee</Label>
                <Input name='rotatee' value={newRotateeName} onChangeText={(rotatee) => updateRotateeName(rotatee)}/>
              </Item>
            </Form>
            <Button primary onPress={() => addRotateeAndClear()}>
              <Text> Add New Rotatee </Text>
            </Button>
          </Body>

        </Content>

        <Footer>
          <FooterTab>
            <Button transparent primary onPress={() => {
                updateGroupAndGoBack();
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
