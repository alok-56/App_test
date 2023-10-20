import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(18, 18, 35, 1)'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(18, 18, 35, 1)',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 25, fontWeight: '500'}}>
            Log In
          </Text>
          <Text style={{color: '#fff', fontSize: 18, marginTop: 4}}>
            Please sign in to your existing account
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          elevation: 20,
          position: 'relative',
          bottom: 5,
        }}>
        <ScrollView>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 250,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                }}>
                Email
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(227, 238, 249, 1)',
                  padding: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  fontSize: 18,
                  color: '#000',
                }}
                placeholder="Enter Your Email"></TextInput>
            </View>

            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: '500',
                }}>
                Password
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(227, 238, 249, 1)',
                  padding: 15,
                  marginTop: 10,
                  borderRadius: 10,
                  fontSize: 18,
                  color: '#000',
                }}
                placeholder="Enter Your Password"></TextInput>
            </View>
            <Text
              style={{
                alignSelf: 'flex-end',
                marginTop: 8,
                fontSize: 16,
                color: 'rgba(255, 118, 34, 1)',
                fontWeight: '500',
              }}>
              Forget Password
            </Text>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                marginTop: 20,
                borderRadius: 8,
                backgroundColor: 'rgba(255, 118, 34, 1)',
              }} onPress={()=>navigation.navigate("product")}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  LOG IN
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: 16,
                fontWeight: '500',
                color: '#000',
              }} >
              Don’t have an account?
              <Text
                style={{
                  fontSize: 20,
                  color: 'rgba(255, 118, 34, 1)',
                }}>
                Signup
              </Text>
            </Text>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: 20,
                color: 'grey',
              }}>
              Or
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 30,
                }}>
                <Image source={require('../images/facebook.png')}></Image>
                <Image source={require('../images/Twitter.png')}></Image>
                <Image source={require('../images/Apple.png')}></Image>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
