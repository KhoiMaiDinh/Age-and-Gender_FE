import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View, PermissionsAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header'
import { IMG_Logo, IMG_Predict } from '../../assets/images'
import ButtonComponent from '../../component/button'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Popup from '../../component/popup'
import Modal from'react-native-modal'

const HomeScreen = () => {
    const [visible,setVisible]= useState(false)

    const [cameraPhoto,setCameraPhoto]= useState('https://raw.githubusercontent.com/mowshon/age-and-gender/master/example/result.jpg');
    let options={
        savePhotos: true,
        mediaType:'photo',
    }
    const openCamera=async()=>{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if(granted===PermissionsAndroid.RESULTS.GRANTED){
            const result= await launchCamera(options);
            setCameraPhoto(result.assets[0].uri);
            setVisible(false)

        }
    }

    const openGallery = async()=>{
        const result = await launchImageLibrary(options);
        setCameraPhoto(result.assets[0].uri)
        setVisible(false)
    }
  return (
    <SafeAreaView style={styles.container}> 
       <Header></Header>

        <View style={styles.viewImage}>
            <Image source={{uri:cameraPhoto}} resizeMode='stretch' style={styles.image}></Image>
        </View>

        <View style={styles.viewButton}>
           <ButtonComponent text={'Your image'} onPress={()=>setVisible(true)}/>
        </View>

        <View style={styles.viewAgeGender}>
            <View style={styles.viewAgeLabel}>
                <View style={styles.viewTextLabel}>
                    <Text style={styles.textLabel}>AGE</Text>
                </View>
                <View style={styles.viewPredict}>
                    <View style={styles.viewItemLeft}>
                        <Text style={styles.textPredict}>18</Text>
                    </View>
                    <View style={styles.viewItemRight}>
                        <Text style={styles.textPredict}>50</Text>
                    </View>
                </View>
            </View>


            <View style={styles.viewAgeLabel}>
                <View style={styles.viewTextLabel}>
                    <Text style={styles.textLabel}>GENDER</Text>
                </View>
                <View style={styles.viewPredict}>
                    <View style={styles.viewItemLeft}>
                        <Text style={styles.textPredict}>Male</Text>
                    </View>
                    <View style={styles.viewItemRight}>
                        <Text style={styles.textPredict}>Female</Text>
                    </View>
                </View>
            </View>
        </View>

        <Modal
            style={styles.viewModal}
            onBackdropPress={()=>setVisible(false)} 
            onBackButtonPress={()=>setVisible(false)} 
            isVisible={visible} 
        >
            <Popup onPressUpload={openGallery} onPressCamera={openCamera}></Popup>
        </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.LightPink,
    },
    viewImage:{
        marginTop: scale(30),
        width: scale(150),
        height: scale(250),
        borderRadius: 10,
        alignSelf: 'center'
    },
    image:{
        width: scale(150),
        height: scale(250),
        borderRadius: 20,
    },
    viewButton:{
        marginTop: scale(30),
    },
    viewAgeGender:{
        marginTop: scale(30),
        // borderWidth: 1,
        width: scale(324),
        height: scale(156),
        alignSelf: 'center',
        justifyContent: 'center',
    },

    //
    viewAgeLabel:{
        height: scale(45),
        flexDirection: 'row',
        alignItems:'center'
    },
    viewTextLabel:{
        width: '50%',
        alignItems:'center',
    },
    textLabel:{
        fontSize: 32,
        fontWeight: '700',
        color: color.White
    },
    viewPredict:{
        width: '50%',
        alignItems:'center',
        flexDirection: 'row'
    },
    viewItemRight:{
        borderTopRightRadius: 30,
        borderBottomRightRadius:30,
        borderWidth: 1,
        width: '40%',
        alignItems:'center',
        borderColor: color.White,
    },
    viewItemLeft:{
        borderTopLeftRadius: 30,
        borderBottomLeftRadius:30,
        borderWidth: 1,
        width: '40%',
        alignItems:'center',
        borderColor: color.White,
    },
    textPredict:{
        color: color.White,
        fontSize: 16,
        fontWeight: '700'
    },

    /////////////////////////////////
    viewModal:{
        width: '100%',
        backgroundColor: color.White,
        marginLeft: 0,
        marginTop: 'auto',
        flex: 0.3,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        marginBottom: 0,
    },
   
})