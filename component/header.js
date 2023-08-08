import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../constants/color';
import {IMG_Logo} from '../assets/images';
import scale from '../constants/responsive';
import IC_Back from '../assets/icons/index';
// import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.viewBack}>
          {/* <View style={styles.viewTextBack}> */}
          {/* <IC_Back></IC_Back> */}
          {/* <Text style={styles.textBack}>Back</Text> */}
          {/* </View> */}
        </TouchableOpacity>
        <Image source={IMG_Logo} style={styles.image}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height * 0.15,
    backgroundColor: color.LightPink,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: scale(192),
    height: scale(192),
  },
  viewBack: {
    width: scale(125),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBack: {
    color: color.Black,
    fontSize: 16,
    fontWeight: '700',
  },
});
