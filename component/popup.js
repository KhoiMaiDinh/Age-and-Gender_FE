import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../constants/color'
import scale from '../constants/responsive'
import { IC_Camera, IC_Image } from '../assets/icons'

const Popup = (props) => {
  return (
    <View style={styles.viewModal}>
        <TouchableOpacity style={styles.viewPopUpLeft} onPress={props.onPressUpload}>
                <View style={styles.viewTextPopUp}>
                    <Text style={styles.textPopUp}>Uploads image</Text>
                </View>
                <View style={styles.viewImagePopUp}>
                    <IC_Image></IC_Image>
                </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewPopUpRight} onPress={props.onPressCamera}>
                <View style={styles.viewTextPopUp}>
                    <Text style={styles.textPopUp}>Camera</Text>
                </View>
                <View style={styles.viewImagePopUp}>
                    <IC_Camera></IC_Camera>
                </View>
        </TouchableOpacity>
    </View>
  )
}

export default Popup

const styles = StyleSheet.create({
    viewModal:{
        width: '100%',
        height:'100%',
        backgroundColor: color.White,
        marginLeft: 0,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewPopUpLeft:{
       height: '100%',
       borderWidth: 1,
       width: '50%',
       borderTopStartRadius: 30,
       alignItems:'center',
       flexDirection: 'column',
       justifyContent: 'center',
       borderColor: color.LightPink,

    },
    viewPopUpRight:{
        height: '100%',
        borderTopEndRadius: 30,
        borderWidth: 1,
        width: '50%',
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderColor: color.LightPink,

     },
     viewTextPopUp:{
        // borderWidth: 1,
        width: scale(139),
        height: scale(90),
        alignItems: 'center',
        justifyContent: 'center'
     },
     textPopUp:{
        fontSize: 32,
        color: color.LightPink,
        fontWeight: '700',
        textAlign: 'center'
     },
     viewImagePopUp:{
        width: scale(139),
        height: scale(69),
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
     },
})