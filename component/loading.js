import LottieView from 'lottie-react-native';
import {Modal, StyleSheet, View} from 'react-native';

const Loading = props => {
  return (
    <Modal transparent visible={props.visible}>
      <View style={styles.background}>
        <Lottie />
      </View>
    </Modal>
  );
};

const Lottie = () => {
  return (
    <LottieView
      style={{width: '100%', height: '50%'}}
      source={require('../assets/lotties/animation_ll2053e0.json')}
      autoPlay
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
