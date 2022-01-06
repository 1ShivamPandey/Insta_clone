import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
export class BottomModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;

    return (
      <View>
        <Modal transparent={true} visible={modalVisible}>
          <View>
            <View style={styles.modalView}>
              <Pressable onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={{color: 'white'}}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: 300,
    backgroundColor: 'black',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#111',
    height: 800,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default BottomModal;
