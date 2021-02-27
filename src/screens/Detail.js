import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SwiperComponent from '../components/SwiperComponent';

const Detail = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '90%',
        }}>
        <View style={{width: '10%', paddingLeft: 20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../images/17.png')}
              style={{marginVertical: 40}}
            />
          </TouchableOpacity>

          <View style={styles.iconStyle}>
            <Image source={require('../images/11.png')} />
          </View>

          <View style={styles.iconStyle}>
            <Image source={require('../images/12.png')} />
          </View>

          <View style={styles.iconStyle}>
            <Image source={require('../images/13.png')} />
          </View>

          <View style={styles.iconStyle}>
            <Image source={require('../images/14.png')} />
          </View>
        </View>

        <View style={{width: '90%'}}>
          <SwiperComponent />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
            color: '#62636a',
          }}>
          Angelica
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            color: '#00a46c',
            fontSize: 20,
          }}>
          $400
        </Text>
      </View>

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: 'bold',
          color: '#b1e5d3',
          paddingTop: 3,
          fontSize: 20,
        }}>
        Russia
      </Text>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <View
          style={{
            width: '50%',
            backgroundColor: '#00a46c',
            height: 75,
            marginTop: 20,
            borderTopRightRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 17,
              fontWeight: 'bold'
            }}>
            Buy Now
          </Text>
        </View>

        <View
          style={{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#62636a',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Description
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default Detail;
