import {AUTH} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {};

export default async (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case AUTH.LOGIN_SUCCESS:
    case AUTH.SIGNUP_SUCCESS:
      await AsyncStorage.setItem('userToken', payload.token);
      await AsyncStorage.setItem('user', JSON.stringify(payload.user));
      return {
        ...state,
        userToken: payload.token,
        user: payload.user,
      };
    case AUTH.SIGNOUT_SUCCESS:
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('user');
      return {
        ...state,
        userToken: payload.token,
        user: payload.user,
      };
    case AUTH.APP_ON:
      const userToken = await AsyncStorage.getItem('userToken');
      const value = await AsyncStorage.getItem('user');
      return {
        ...state,
        userToken,
        user: JSON.parse(value),
      };
    default:
      return state;
  }
};
