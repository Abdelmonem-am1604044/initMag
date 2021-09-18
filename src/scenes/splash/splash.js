import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import main from '_assets/images/mic_2.png';
import {StyleSheet, Image, SafeAreaView, ActivityIndicator} from 'react-native';

export default function Splash() {
  return (
    <LinearGradient
      colors={['#0E2453', '#9A031E']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.magnetImage} source={main} />
        <ActivityIndicator
          style={styles.activity}
          size="large"
          color="#ffffff"
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  magnetImage: {width: 250, height: 250},
  activity: {marginTop: 25},
});
