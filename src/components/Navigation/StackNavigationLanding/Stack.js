import React, {Component} from 'react';
//import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import index from '../../../screens/Home/Landing/Index';
import story from '../../../screens/Home/Story/Story';
import chat from '../../../screens/Home/Chat/Chat';
import comment from '../../../screens/Home/Comment/Comment';

const Stacks = createStackNavigator();

export class Stack extends Component {
  render() {
    return (
      <Stacks.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stacks.Screen
          options={{headerShown: false}}
          name="index"
          component={index}
        />
        <Stacks.Screen
          options={{headerShown: false}}
          name="story"
          component={story}
        />
        <Stacks.Screen
          options={{headerShown: true}}
          name="chat"
          component={chat}
        />
        <Stacks.Screen
          options={{headerShown: true}}
          name="comment"
          component={comment}
        />
      </Stacks.Navigator>
    );
  }
}

export default Stack;
