import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Image } from 'react-native-svg';


import tbt from "../../../assets/Images/tbt"

export class Story extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'blue'}}>
        <Text>hey here is the story</Text>
<Image style={{height:"10px", width:"10px"}} source={tbt} />
      </View>
    );
  }
}

export default Story;
