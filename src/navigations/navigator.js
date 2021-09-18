import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '_scenes/login/login';
import Signup from '_scenes/signup/signup';
import Home from '_scenes/home/home';
import Splash from '_scenes/splash/splash';
import Profile from '_scenes/profile/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef} from './navigatorRef';
import {useSelector, useDispatch} from 'react-redux';
import {appon} from '../redux/actions/auth';

const AuthStack = createStackNavigator();
const HomeTab = createBottomTabNavigator();

export default function Navigator() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const auth = useSelector(state => state.auth);
  // dispatch(appon());

  useEffect(() => {
    // const userToken = AsyncStorage.getItem('userToken');
    // const value = AsyncStorage.getItem('user');
    // console.log(value);
    // if (userToken && value) {
    // setToken(userToken);
    // }
    setIsLoading(false);
  }, []);
  if (isLoading) return <Splash />;

  return (
    <NavigationContainer ref={navigationRef}>
      {token ? (
        <HomeTab.Navigator>
          <HomeTab.Screen name="home" component={Home} />
          <HomeTab.Screen name="home1" component={Home} />
          <HomeTab.Screen name="profile" component={Profile} />
        </HomeTab.Navigator>
      ) : (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="signin" component={Login} />
          <AuthStack.Screen name="signup" component={Signup} />
          <HomeTab.Screen name="profile" component={Profile} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
