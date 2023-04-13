import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import scale from '../constants/responsive'
import color from '../constants/color'

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.viewButton} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    viewButton:{
        width: scale(250),
        height: scale(56),
        borderRadius: 30,
        borderWidth: 1,
        borderColor: color.Black,
        backgroundColor: color.White,
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 36,
        fontWeight: '700',
        color: color.LightPink,
    },
})