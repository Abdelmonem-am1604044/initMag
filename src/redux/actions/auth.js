import api from '../../api/api';
import {SERVER_ERROR, AUTH} from './types';
import {navigate} from '../../navigations/navigatorRef';

export const login = values => async dispatch => {
  try {
    const response = await api.post(`/api/auth/login`, values);
    dispatch({type: AUTH.LOGIN_SUCCESS, payload: response.data});
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = values => async dispatch => {
  try {
    const response = await api.post(`/api/auth/signup`, values);
    dispatch({type: AUTH.SIGNUP_SUCCESS, payload: response.data});
  } catch (error) {
    console.log(error.message);
  }
};

export const appon = values => async dispatch => {
  try {
    dispatch({type: AUTH.APP_ON});
  } catch (error) {
    console.log(error.message);
  }
};

export const signout = values => dispatch => {
  try {
    dispatch({type: AUTH.SIGNOUT_SUCCESS});
  } catch (error) {
    console.log(error.message);
  }
};
