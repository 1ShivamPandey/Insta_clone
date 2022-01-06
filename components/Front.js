import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import night from '../assets/night.png';
import commentimage from '../assets/comm.png';
import shareimage from '../assets/share.png';
import whiteheartimage from '../assets/whiteheart.png';
import redheartimage1 from '../assets/redheart.png';
import saveimage from '../assets/save.png';
import plusimage from '../assets/plus.png';
import ellipsisimage from '../assets/ellipsis.jpg';
import instaname from '../assets/instaname.png';
import lam from '../assets/lam.png';
import logo from '../assets/logo.png';
import tbt from '../assets/tbt.png';

export class Front extends Component {
  constructor(props) {
    super(props);

    this.state1 = {
      date: [new Date().getHours()],
    };

    this.state = {
      heartimage: whiteheartimage,
    };
  }

  heartbutton = () => {
    this.setState({
      heartimage: redheartimage1,
    });
  };

  heartbuttonback = () => {
    this.setState({
      heartimage: whiteheartimage,
    });
  };

  render() {
    // const hey = () => {
    //   alert(new Date());
    // };

    // function getlocation() {
    //   Geolocation.getCurrentPosition(showPosition);
    // }

    // function showPosition(position) {
    //   const locate = position.coords.latitude;
    // }
    // Geolocation.getCurrentPosition(data => console.warn(data.coords.latitude));
    // console.warn('Geolocation');

    //For function component
    // const love = () => {
    //   alert(postdate);
    // };

    // const [postdate, setpostdate] = useState(true);
    // const date = () => {
    //   let mydate = new Date();
    //   setpostdate(mydate);
    // };

    // const greeting = () => {
    //   let date = new Date();
    // };
    return;
  }
}

// function HomeScreen({navigation}) {
//   return
// }

// function MessageScreen({navigation}) {
//   return <Messagesystem />;
// }
// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Homje" component={HomeScreen} />
//       <Stack.Screen name="Message" component={MessageScreen} />
//     </Stack.Navigator>
//   );
// }
export default Front;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    height: 40,
    width: 500,
  },
  plusimage: {
    marginTop: 5,
    marginLeft: 5,
    width: 30,
    height: 30,
  },

  container: {
    marginTop: 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 280,
    borderRadius: 50,
    //  borderWidth: 3,
    borderColor: 'red',
  },
  userpost: {
    width: 360,
    height: 280,
  },
  btn: {
    paddingTop: 100,
    borderWidth: 5,
    height: 100,
  },

  sec: {
    marginLeft: 2,
    // borderWidth:5,
    borderRadius: 40,
    width: 350,
    height: 40,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  heartimage: {
    marginRight: 30,
    width: 30,
    height: 40,
  },
  commentimage: {
    marginRight: 30,
    width: 30,
    height: 40,
  },
  shareimage: {
    marginTop: 10,
    width: 25,
    height: 20,
  },
  saveimage: {
    paddingLeft: 10,
    width: 40,
    height: 35,
  },
  sec1: {
    paddingRight: 150,
    flexDirection: 'row',
  },
  txt: {
    flexDirection: 'row',
  },
  msgbox: {
    backgroundColor: 'red',
    color: 'blue',
  },
});
