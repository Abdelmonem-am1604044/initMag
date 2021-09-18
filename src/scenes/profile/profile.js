import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../../redux/actions/auth';

export default function Profile() {
  const dispatch = useDispatch();
  //   const {username, email} = useSelector(state => state.user);

  return (
    <View>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <Text>username</Text>
      <Text>email</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          dispatch(signout());
        }}>
        <Text>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
