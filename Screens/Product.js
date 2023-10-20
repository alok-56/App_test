import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Product = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const page = 1;
  const perPage = 10;

  useEffect(() => {
    fetchProduct(page);
  }, []);

  const fetchProduct = async pageNumber => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_limit=${perPage}`,
      );
      let data = await response.json();
      if (data) {
        setProduct([...product, ...data]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEndReached = () => {
    // Load more data when reaching the end of the list
    fetchProduct(page + 1);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#fff',
          elevation: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <View
            style={{
              width: '85%',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Image source={require('../images/Top.png')}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: height,
          marginTop: 10,
          marginBottom: 90,
        }}>
        <FlatList
          data={product}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '95%',
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                  backgroundColor: '#fff',
                  elevation: 20,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: '#000',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </View>
            );
          }}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
        />
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          width: '90%',
          height: 50,
          alignSelf: 'center',
          backgroundColor: 'red',
          borderRadius: 10,
        }}
        onPress={() => handleEndReached()}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            marginTop: 10,
          }}>
          Next Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
