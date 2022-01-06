import React, {Component} from 'react';

import {
  View,
  Pressable,
  Modal,
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
//import search from '../../Search/Search';
import BottomModal from '../../../components/Modals/BottomModal/BottomModal';
import night from '../../../assets/Images/night.png';
import commentimage from '../../../assets/Images/comm.png';
import shareimage from '../../../assets/Images/share.png';
import whiteheartimage from '../../../assets/Images/whiteheart.png';
import redheartimage1 from '../../../assets/Images/redheart.png';
import saveimage from '../../../assets/Images/save.png';
import plusimage from '../../../assets/Images/plus.png';
import ellipsisimage from '../../../assets/Images/ellipsis.jpg';
import instaname from '../../../assets/Images/instaname.png';
import lam from '../../../assets/Images/lam.png';
import logo from '../../../assets/Images/logo.png';
import tbt from '../../../assets/Images/tbt.png';
import horizontalline from '../../../assets/Images/horizontal_line.png';
export class FrontScreen extends Component {
  constructor(props) {
    super(props);

    this.state1 = {
      date: [new Date().getHours()],
    };

    this.state = {
      heartimage: whiteheartimage,
      modalVisible: false,
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

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {navigation} = this.props;
    const {modalVisible} = this.state;

    return (
      <ScrollView>
        <View>
          <StatusBar backgroundColor="black"></StatusBar>

          <View>
            <View style={styles.nav}>
              <TouchableOpacity>
                <Image style={styles.plusimage} source={plusimage} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{marginLeft: 70, height: 45, width: 135}}
                  source={instaname}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('chat')}>
                <Image
                  style={{
                    marginLeft: 80,
                    marginTop: 5,
                    width: 30,
                    height: 30,
                  }}
                  source={shareimage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('story')}
                style={{
                  marginLeft: 10,
                  borderRadius: 800,
                  height: 65,
                  width: 65,
                  borderWidth: 3,
                  borderColor: '#fc466b',
                }}>
                <Image
                  style={{
                    marginTop: 2,
                    marginLeft: 2,
                    marginRight: 10,
                    borderRadius: 400,
                    height: 55,
                    width: 55,
                  }}
                  source={lam}></Image>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  borderRadius: 800,
                  height: 65,
                  width: 65,
                  borderWidth: 3,
                  borderColor: '#fc466b',
                }}>
                <Image
                  style={{
                    marginTop: 2,
                    marginLeft: 2,
                    marginRight: 10,
                    borderRadius: 400,
                    height: 55,
                    width: 55,
                  }}
                  source={tbt}></Image>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  borderRadius: 800,
                  height: 65,
                  width: 65,
                  borderWidth: 3,
                  borderColor: '#fc466b',
                }}>
                <Image
                  style={{
                    marginTop: 2,
                    marginLeft: 2,
                    marginRight: 10,
                    borderRadius: 400,
                    height: 55,
                    width: 55,
                  }}
                  source={lam}></Image>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  borderRadius: 800,
                  height: 65,
                  width: 65,
                  borderWidth: 3,
                  borderColor: '#fc466b',
                }}>
                <Image
                  style={{
                    marginTop: 2,
                    marginLeft: 2,
                    marginRight: 10,
                    borderRadius: 400,
                    height: 55,
                    width: 55,
                  }}
                  source={logo}></Image>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: 'bold',
                  color: 'grey',
                }}>
                Your Story
              </Text>
              <Text style={{marginLeft: 25, fontWeight: 'bold'}}>Tbt</Text>
              <Text style={{marginLeft: 25, fontWeight: 'bold'}}>Cramox</Text>
              <Text style={{marginLeft: 25, fontWeight: 'bold'}}>
                Astralshops
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'grey',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
            <TouchableOpacity
              style={{
                marginTop: 2,
                marginLeft: 10,
                borderRadius: 800,
                height: 45,
                width: 45,
                borderWidth: 3,
                borderColor: '#fc466b',
              }}>
              <Image
                style={{
                  marginTop: 2,
                  marginLeft: 2,
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                }}
                source={night}
              />
            </TouchableOpacity>
            <Text style={{marginLeft: 18, marginTop: 15, fontWeight: 'bold'}}>
              Shivamastralian
            </Text>
            <TouchableOpacity onPress={() => this.setModalVisible(true)}>
              <Image
                style={{
                  marginLeft: 130,
                  marginTop: 10,
                  height: 40,
                  width: 60,
                }}
                source={ellipsisimage}
              />
            </TouchableOpacity>
            <Modal transparent={true} visible={modalVisible}>
              <View>
                <View style={styles.modalView}>
                  <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                    <Image
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: 40,
                      }}
                      source={horizontalline}></Image>
                  </TouchableOpacity>

                  <Text style={styles.modalText}>Report..</Text>

                  <Text style={styles.modalText}>
                    Turn on Post Notifications
                  </Text>
                  <Text style={styles.modalText}>Copy Link</Text>
                  <Text style={styles.modalText}>Share to..</Text>
                  <Text style={styles.modalText}>Unfollow</Text>
                  <Text style={styles.modalText}>Mute</Text>
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.container}>
            <Image style={styles.userpost} source={night} />
          </View>

          <View style={styles.sec}>
            <View style={styles.sec1}>
              <TouchableOpacity
                onPress={this.heartbutton}
                onPressIn={this.heartbuttonback}>
                <Image
                  style={styles.heartimage}
                  source={this.state.heartimage}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('comment')}>
                <Image style={styles.commentimage} source={commentimage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.shareimage} source={shareimage} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Image style={styles.saveimage} source={saveimage} />
            </TouchableOpacity>
          </View>

          <Text style={{marginLeft: 10, fontWeight: 'bold'}}>908 likes</Text>

          <View style={styles.txt}>
            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>
              shivamastralian
            </Text>
            <Text> chilling out in valley silicon valley</Text>
            <Text style={{color: 'grey'}}>..more</Text>
          </View>

          <Text style={{marginTop: 3, marginLeft: 10, color: 'grey'}}>
            View all 99 comments
          </Text>

          <Text style={{marginLeft: 10, color: 'grey', fontSize: 10}}>
            {this.state1.date} hours ago
          </Text>

          {/* <TouchableOpacity>
        <Text onPress={getlocation()}>fnjr</Text>
      </TouchableOpacity> */}
        </View>
      </ScrollView>

      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <Button
      //     title="Go to Profile"
      //     onPress={() => navigation.navigate('Profile')}
      //   />
      // </View>
    );
  }
}

export default FrontScreen;

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
  modalView: {
    marginTop: 220,
    backgroundColor: 'white',
    paddingLeft: 10,
    height: 800,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalText: {
    fontSize: 15,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
