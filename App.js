import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import Tabs from './src/components/Navigation/BottomTabNavigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import search from './src/screens/Search/Search';
import homeicon from './src/assets/Images/comm.png';
import Stack from './src/components/Navigation/StackNavigationLanding/Stack';
//import Stack from './src/components/Navigation/StackNavigationLanding/Stack';
// import homeicon from './assets/icons/home.png';
//  import explore from './assets/icons/explore1.png';
//  import reel from './assets/icons/reels.svg';
// import whiteheart from './assets/icons/whiteheart.png';
// import searchicon from './assets/icons/search.png';
// import profile from './assets/icons/profile.png';
//  import {createStackNavigator} from '@react-navigation/stack';
//  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Front from './components/Front';
// import Messagesystem from './components/Messagesystem';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs></Tabs>
      </NavigationContainer>

      // <NavigationContainer>
      //   <MyStack></MyStack>
      // </NavigationContainer>
    );
  }
}

// function Home() {
//   return <Front />;
// }

// function Search() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>No Notifications!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View>
//       <Text>hey this is profile page</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: 'white',
//         style: {
//           backgroundColor: 'black',
//           marginBottom: 4,
//           marginLeft: 5,
//           marginRight: 5,
//           borderRadius: 10,
//         },
//       }}>
//       <Tab.Screen
//         name="HOME"
//         component={Home}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View>
//               <Image
//                 source={homeicon}
//                 style={{
//                   width: 25,
//                   height: 25,
//                   tintColor: focused ? 'white' : 'grey',
//                 }}></Image>
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="SEARCH"
//         component={Search}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View>
//               <Image
//                 source={searchicon}
//                 style={{
//                   width: 25,
//                   height: 25,
//                   tintColor: focused ? 'white' : 'grey',
//                 }}></Image>
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="NOtIFICATION"
//         component={Notifications}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View>
//               <Image
//                 source={whiteheart}
//                 style={{
//                   width: 30,
//                   height: 30,
//                   tintColor: focused ? 'white' : 'grey',
//                 }}></Image>
//             </View>
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="PROFILE"
//         component={Profile}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View>
//               <Image
//                 source={profile}
//                 style={{
//                   width: 25,
//                   height: 25,
//                 }}></Image>
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default App;
