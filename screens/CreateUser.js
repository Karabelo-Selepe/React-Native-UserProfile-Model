import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import userModelObj from '../model/UserModel';

const CreateUser = ({navigation}) => {
     const [Name, setName] = useState();
     const [Phone, setPhone] = useState();
     const [Email, setEmail] = useState();
     const [Occupation, setOccupation] = useState();
     const [Address, setAddress] = useState();
     const [Picture, setPicture] = useState();
     const [modal, setModal] = useState(false)

     const pickFromGallery = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1
            })
            if(!data.cancelled) {
                userModelObj.setPicture(data.uri);
            }
        } else {
            Alert.alert('Give permission to use your Gallery!')
        }
     }
     const pickFromCamera = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 1
            })
            if(!data.cancelled) {
                userModelObj.setPicture(data.uri);
            }
        } else {
            Alert.alert('Give permission to use your Camera!')
        }
     }
      
    return (
        <View style={styles.root}>
            <TextInput
                style={styles.inputStyle}
                label='Name'
                value={Name}
                theme={theme}
                mode='outlined'
                onChangeText={text => userModelObj.setName(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Email'
                value={Email}
                theme={theme}
                mode='outlined'
                keyboardType='email-address'
                onChangeText={text => userModelObj.setEmail(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Phone'
                value={Phone}
                theme={theme}
                mode='outlined'
                keyboardType='number-pad'
                onChangeText={text => userModelObj.setPhone(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Occupation'
                value={Occupation}
                theme={theme}
                mode='outlined'
                onChangeText={text => userModelObj.setOccupation(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Address'
                value={Address}
                theme={theme}
                mode='outlined'
                onChangeText={text => userModelObj.setAddress(text)}
            />
            <Button style={styles.inputStyle} icon={Picture==''?'upload':'check'} theme={theme} mode="contained" onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button style={styles.inputStyle} icon="content-save" theme={theme} mode="contained" onPress={() => navigation.navigate('Profile',{
                name: userModelObj.name,
                email: userModelObj.email,
                phone: userModelObj.phone,
                occupation: userModelObj.occupation,
                address: userModelObj.address,
                picture: userModelObj.picture
            })}>
                save
            </Button>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={() => {setModal(false)}}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera" theme={theme} mode="contained" onPress={() => pickFromCamera()}>
                            camera
                        </Button>
                        <Button icon="image-area" theme={theme} mode="contained" onPress={() => pickFromGallery()}>
                            gallery
                        </Button>
                    </View>
                    <Button theme={theme} onPress={() => setModal(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    );
}

const theme = {
    colors: {
        primary: '#179c52',
    }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
      margin: 5,
  },
   modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,

  },
});

export default CreateUser;