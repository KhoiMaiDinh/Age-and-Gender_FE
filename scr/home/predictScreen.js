import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Header from '../../component/header'
import { IMG_Logo, IMG_Predict } from '../../assets/images'
import Button from '../../component/button'
import ButtonComponent from '../../component/button'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Popup from '../../component/popup'
import Modal from'react-native-modal'
import { IC_AddImage } from '../../assets/icons'

const PredictScreen = () => {
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
       <Header/>

        <TouchableOpacity style={styles.viewAddImage} onPress={()=>setVisible(true)}>
            <Text style={styles.textAddImage}>new image</Text>
            <IC_AddImage></IC_AddImage>
        </TouchableOpacity>
        <View style={styles.viewImage}>
            <Image source={{uri:cameraPhoto}} resizeMode='stretch' style={styles.image}></Image>
        </View>

        <View style={styles.viewButton}>
           <ButtonComponent text={'Predict'}/>
        </View>

        <View style={styles.viewAgeGender}>
            <View style={styles.viewAgeLabel}>
                <View style={styles.viewTextLabel}>
                    <Text style={styles.textLabel}>AGE</Text>
                </View>
                <View style={styles.viewPredict}>
                    <Text style={styles.textPredict}>18-32</Text>
                </View>
            </View>


            <View style={styles.viewAgeLabel}>
                <View style={styles.viewTextLabel}>
                    <Text style={styles.textLabel}>GENDER</Text>
                </View>
                <View style={styles.viewPredict}>
                    <Text style={styles.textPredict}>Female</Text>
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

export default PredictScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.LightPink,
        // alignItems: 'center'
    },
    viewAddImage:{
        width: scale(100),
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textAddImage:{
        color: color.Black,
        fontSize: 14,
        fontWeight: '700',
    },
    viewImage:{
        // marginTop: scale(10),
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
        borderWidth: 1,
        width: '50%',
        alignItems:'center',
        borderColor: color.White,
        borderRadius: 30,        
    },
    textPredict:{
        color: color.White,
        fontSize: 24,
        fontWeight: '700'
    },
    //////////
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