import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../component/header';
import {IMG_Logo, IMG_Predict} from '../../assets/images';
import ButtonComponent from '../../component/button';
import color from '../../constants/color';
import scale from '../../constants/responsive';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Popup from '../../component/popup';
import Modal from 'react-native-modal';
import axios from 'axios';
import Loading from '../../component/loading';
import ErrorModal from '../../component/error';

const HomeScreen = () => {
  const [color] = useState(new Animated.Value(0));

  const startColorAnimation = () =>
    Animated.timing(color, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      color.setValue(0);
      startColorAnimation();
    });
  useEffect(() => startColorAnimation(), []);

  // Lấy giá trị màu sắc từ animated value và chuyển đổi thành dạng chuỗi màu HEX
  const interpolatedColor = color.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFB6C1', '#6ADAFF'],
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [age, setAge] = useState([]);
  const [gender, setGender] = useState('');
  const defaultImg =
    'https://raw.githubusercontent.com/mowshon/age-and-gender/master/example/result.jpg';
  const [cameraPhoto, setCameraPhoto] = useState(defaultImg);
  let options = {
    savePhotos: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
      setAge([]);
      setGender('');
      setVisible(false);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setCameraPhoto(result.assets[0].uri);
    setAge([]);
    setGender('');
    setVisible(false);
  };

  const handleSubmits = async data => {
    setLoading(true);
    const formData = new FormData();
    formData.append('upload', {
      name: new Date() + '_predictImage',
      uri: cameraPhoto,
      type: 'image/jpg',
    });
    console.log(formData);
    try {
      const response = await axios.post(
        'https://aandg.onrender.com/predict',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('success', response.data);
      const age = response.data.age.split('-');
      setAge(age);
      setGender(response.data.gender);

      setLoading(false);
    } catch (err) {
      console.log('err', err);
      setError(true);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      {loading && <Loading />}
      {error && <ErrorModal setError={setError} />}
      <View style={styles.viewImage}>
        <Image
          source={{uri: cameraPhoto}}
          resizeMode="contain"
          resizeMethod="scale"
          style={styles.image}></Image>
      </View>
      {cameraPhoto === defaultImg ? (
        <View style={styles.viewButton}>
          <ButtonComponent
            text={'Your image'}
            onPress={() => setVisible(true)}
          />
        </View>
      ) : (
        <View style={styles.viewButton}>
          <ButtonComponent
            text={'Predict image'}
            onPress={() => handleSubmits()}
          />
          <ButtonComponent
            text={'Change image'}
            onPress={() => setVisible(true)}
          />
        </View>
      )}

      <View style={styles.viewAgeGender}>
        <View style={styles.viewAgeLabel}>
          <View style={styles.viewTextLabel}>
            <Text style={styles.textLabel}>AGE</Text>
          </View>
          <View style={styles.viewPredict}>
            <View style={styles.viewItemLeft}>
              <Text adjustsFontSizeToFit style={styles.textPredict}>
                {age[0] ? age[0] : '?'}
              </Text>
            </View>
            <View style={styles.viewItemRight}>
              <Text style={styles.textPredict}>{age[1] ? age[1] : '?'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.viewAgeLabel}>
          <View style={styles.viewTextLabel}>
            <Text style={styles.textLabel}>GENDER</Text>
          </View>
          <View style={styles.viewPredict}>
            <Animated.View
              style={[
                styles.viewItemLeft,
                {
                  backgroundColor:
                    gender === 'Male' ? interpolatedColor : '#FFB6C1',
                },
              ]}>
              <Text
                style={
                  gender === 'Male'
                    ? styles.textPredictTrue
                    : styles.textPredict
                }>
                Male
              </Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.viewItemRight,
                {
                  backgroundColor:
                    gender === 'Female' ? interpolatedColor : '#FFB6C1',
                },
              ]}>
              <Text
                style={
                  gender === 'Female'
                    ? styles.textPredictTrue
                    : styles.textPredict
                }>
                Female
              </Text>
            </Animated.View>
          </View>
        </View>
      </View>

      <Modal
        style={styles.viewModal}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        isVisible={visible}>
        <Popup onPressUpload={openGallery} onPressCamera={openCamera}></Popup>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.LightPink,
  },
  viewImage: {
    marginTop: scale(30),
    width: scale(150),
    height: scale(250),
    borderRadius: 10,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 20,
  },
  viewButton: {
    paddingHorizontal: scale(30),
    marginTop: scale(30),
    width: '100%',
    height: scale(56),
    flexDirection: 'row',
    gap: scale(15),
  },
  viewAgeGender: {
    marginTop: scale(30),
    width: scale(324),
    height: scale(156),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  viewAgeLabel: {
    height: scale(45),
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTextLabel: {
    width: '50%',
    alignItems: 'center',
  },
  textLabel: {
    fontSize: 32,
    fontWeight: '700',
    color: color.White,
  },
  viewPredict: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewItemRight: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1,
    width: '40%',
    height: scale(25),
    alignItems: 'center',
    borderColor: color.White,
  },
  viewItemLeft: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderWidth: 1,
    width: '40%',
    height: scale(25),
    alignItems: 'center',
    borderColor: color.White,
  },
  textPredict: {
    color: color.White,
    fontSize: 16,
    fontWeight: '700',
  },
  textPredictTrue: {
    color: color.Black,
    fontSize: 16,
    fontWeight: '700',
  },
  /////////////////////////////////
  viewModal: {
    width: '100%',
    backgroundColor: color.White,
    marginLeft: 0,
    marginTop: 'auto',
    flex: 0.3,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginBottom: 0,
  },
});
