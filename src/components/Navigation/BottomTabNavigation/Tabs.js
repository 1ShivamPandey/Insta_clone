import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
//import HOME from '../../../screens/Home/Landing/Index';
import SEARCH from '../../../screens/Search/Search';
import NOTIFICATION from '../../../screens/Notification/Notification';
import PROFILE from '../../../screens/Profile/Dashboard/Dashboard';
import Stacks from '../StackNavigationLanding/Stack';
// // import homeicon from '../../../assets/icons/home.png';
// import searchicon from '../../../assets/icons/search.png';
// import notificationicon from '../../../assets/icons/whiteheart.png';
// import profileicon from '../../../assets/icons/profile.png';
import homeicon from '../../../assets/icons/home.png';
import searchicon from '../../../assets/icons/search.png';
import notificationicon from '../../../assets/icons/whiteheart.png';
import profileicon from '../../../assets/icons/profile.png';

const Tab = createBottomTabNavigator();

export class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HOME"
        tabBarOptions={{
          activeTintColor: 'white',
          style: {
            backgroundColor: 'black',
            marginBottom: 4,
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 10,
          },
        }}>
        <Tab.Screen
          name="HOME"
          component={Stacks}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={homeicon}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'white' : 'grey',
                  }}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SEARCH"
          component={SEARCH}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={searchicon}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'white' : 'grey',
                  }}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NOTIFICATION"
          component={NOTIFICATION}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={notificationicon}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? 'white' : 'grey',
                  }}></Image>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="PROFILE"
          component={PROFILE}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={profileicon}
                  style={{
                    width: 25,
                    height: 25,
                  }}></Image>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default Tabs;
