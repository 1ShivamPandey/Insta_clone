import React, {Component} from 'react';
import {View, Text, Touchable} from 'react-native';
import {Image} from 'react-native-svg';

import tbt from '../../../assets/Images/tbt';

export class Story extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'blue'}}>

<View>
        <View>
          <Touchable>
            <Image
              style={{margin: '20px', height: '10px', width: '10px'}}
              source={tbt}
            />
          </Touchable>

          <Touchable>
            <Text>User_name</Text>
          </Touchable>
        </View>

        <View>
          <Text>Story</Text>
        </View>
      </View>

</View>






    );
  }
}

export default Story;
