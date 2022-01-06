import React, {Component} from 'react';
import {View, Text, Touchable, Button} from 'react-native';
import {Image} from 'react-native';

//Importing images for story
import tbt from '../../../assets/Images/tbt';
//import lam from '../../../assets/Images/lam'
export class Story extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'blue'}}>
        <View>
          <View>
            <View>
              <Touchable>
                <Image
                  style={{margin: '20px', height: '10px', width: '10px'}}
                  source={tbt}
                />
              </Touchable>
            </View>

            <View>
              <Touchable>
                <Text>User_name</Text>
              </Touchable>
            </View>

            <View>
              <Touchable>
                <Text>User_name</Text>
              </Touchable>
            </View>

<View>
  <Text>❌</Text>
</View>

          </View>

          <View>
            <Text>Story</Text>
          </View>

          <View>
            <Touchable>
              <Button>Send...</Button>
              <Text input="Story message">Send</Text>
            </Touchable>
          </View>
        </View>
      </View>
    );
  }
}

export default Story;
