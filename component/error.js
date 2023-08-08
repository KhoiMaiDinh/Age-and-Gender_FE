import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Modal, StyleSheet, View, Text, Animated, Easing} from 'react-native';
import color from '../constants/color';
import scale from '../constants/responsive';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const ErrorModal = ({setError}) => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Modal transparent>
      <View style={styles.background}>
        <AnimatedLottieView
          style={{width: '100%', height: '30%'}}
          source={require('../assets/lotties/error.json')}
          autoPlay
          loop={false}
          progress={animationProgress.current}
          onAnimationFinish={() => setError(false)}
        />
        {/* <Lottie setError={setError} progress={animationProgress.current} /> */}
        <Text style={styles.textStyle}>
          The system is overloaded, please try again
        </Text>
      </View>
    </Modal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    paddingHorizontal: scale(20),
    fontSize: 28,
    fontWeight: '700',
    color: color.White,
    textAlign: 'center',
  },
});
