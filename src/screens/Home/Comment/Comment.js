import React, {Component} from 'react';
import {View} from 'react-native';
import CommentForm from '../../../components/Forms/CommentForm';
export class Comment extends Component {
  render() {
    return (
      <View>
        <CommentForm />
      </View>
    );
  }
}

export default Comment;
