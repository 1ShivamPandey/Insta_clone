import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';

export class CommentForm extends Component {
  render() {
    return (
      <View style={{position: 'relative'}}>
        <TextInput style={styles.TextInput} placeholder="Comment">
          <Text style={styles.ButtonInput}> post</Text>
        </TextInput>
      </View>
    );
  }
}

export default CommentForm;
const styles = StyleSheet.create({
  TextInput: {
    marginTop: 2,
    marginRight: 60,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'grey',
  },
  ButtonInput: {
    marginRight: 10,
    color: 'lightblue',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
