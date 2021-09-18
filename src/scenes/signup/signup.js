import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import main from '_assets/images/mic_2.png';
import facebook from '_assets/images/facebook.png';
import google from '_assets/images/google.png';
import apple from '_assets/images/apple.png';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function Signup({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <LinearGradient
      colors={['#0E2453', '#9A031E']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.title}>MAGNET</Text>
          <Image style={styles.magnetImage} source={main} />
        </View>

        <View
          style={{
            flex: 4,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#9E9D9D"
              onChangeText={email => setEmail(email)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#9E9D9D"
              onChangeText={username => setUsername(username)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#9E9D9D"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.push('signin');
            }}>
            <Text style={styles.forgotButton}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{width: 10, flex: 1, height: 1, backgroundColor: 'white'}}
            />
            <View>
              <Text
                style={{
                  width: 50,
                  fontSize: 18,
                  textAlign: 'center',
                  color: 'white',
                }}>
                Or
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          </View>

          <View style={styles.externalAuth}>
            <TouchableOpacity style={styles.authImageView}>
              <Image style={styles.authImage} source={facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.authImageView}>
              <Image style={styles.authImage} source={google} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.authImageView}>
              <Image style={styles.authImage} source={apple} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 35,
    color: 'white',
    letterSpacing: 2,
  },

  externalAuth: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  authImage: {
    width: 40,
    height: 40,
  },

  magnetImage: {width: 90, height: 90},

  inputView: {
    backgroundColor: 'rgba(128, 128, 128,0.5)',
    borderRadius: 30,
    width: '80%',
    height: 45,
  },

  TextInput: {
    height: 50,
    flex: 1,
    color: 'white',
    padding: 10,
    marginLeft: 10,
  },

  forgotButton: {
    height: 30,
    color: 'white',
    fontSize: 15,
  },

  signup: {
    height: 30,
    color: 'white',
    fontSize: 20,
  },

  loginBtn: {
    width: '30%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'red',
  },
});
