import React from 'react';
import {View, Text,Image} from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <View
      style={{
       flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image style={{width:"100%",height:"100%"}} source={require('../images/icon.jpg')}></Image>
    </View>
  );
};

export default Splash;
