import {SafeAreaView, StyleSheet, Text, View, Image, ScrollView , Dimensions, TouchableOpacity, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import IC_Gender, { IC_Camera, IC_Check,  IC_PeopleWithCamera } from '../../assets/icons/index'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import { IMG_AgeLogo, IMG_GenderLogo, IMG_Logo, IMG_ReactLogo, IMG_Robot } from '../../assets/images'


const views=[
    {id: 1, source:IMG_ReactLogo,text: 'Welcome my app', },
    {id: 2, source:IMG_AgeLogo,text: 'You can predict age',},
    {id: 3, source:IMG_GenderLogo,text: 'You can predict gender',},

]



const LoadingScreen = (props) => {
    const [imgActive,setImgActive]= useState(0);
    onchange=(nativeEvent)=>{
        if(nativeEvent){
            const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
            if(slide!=imgActive){
                setImgActive(slide);
            }
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.heder}>
            <Image source={IMG_Robot} style={styles.imageHeader} resizeMode='cover'></Image>
        </View>

        <View style={styles.body}>
           <ScrollView 
            onScroll={({nativeEvent})=>onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.scroll}
            >
                {
                    views.map((item,index)=>(
                        <View style={styles.scroll}>
                            <Image source={item.source} style={styles.imageBody}></Image>
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    ))
                }
            </ScrollView>
            
        </View>

        <View style={styles.footer}>
            <ImageBackground source={IMG_Logo} style={styles.imageFooter} resizeMode='cover'>
                <TouchableOpacity style={{alignSelf:'flex-end',marginRight: scale(40),marginBottom: scale(10)}}>
                    <Text style={{color: color.White, fontSize: 14,fontWeight: '700'}}>skip</Text>
                </TouchableOpacity>
            </ImageBackground>
            
        </View>
        <View style={styles.viewSkip}>
            <View style={styles.wrapDot}>
                    {
                        views.map((item,index)=>(
                            <Text key={item.id} style={imgActive===index?styles.dotActive:styles.dot}>●</Text>
                        ))
                    }
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.LightPink
    },
    heder:{
        flex: 0.15,
    },
    imageHeader:{
        width: scale(100),
        height: scale(100),
        alignSelf:'flex-end',
    }, 
    body:{
        flex: 0.5,

    },
    scroll:{
        width: Dimensions.get('screen').width,
        flex: 1,
    },
    footer:{
        flex: 0.35,
    },
    imageFooter:{
        width: '100%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'flex-end',


    },

    ///
    imageBody:{
        height:'80%',
        width: '80%',
        alignSelf:'center',
        justifyContent:'center'
    },
    text:{
        color: color.White,
        alignSelf:'center',
        fontSize: 24,
        fontWeight: '900',
        paddingHorizontal: scale(50),
    },
    wrapDot:{
        paddingBottom: scale(50),
        position: 'absolute',
        bottom: 0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin: 3,
        color: color.White,
    },
    dot:{
        margin: 3,
        color: color.Black,
    },

})