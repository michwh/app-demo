import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Contact = () => {
  return <View style={styles.container}>
    <View style={styles.addressContainer}>
    <Image source={require('../imgs/address.png')} />
    <Text numberOfLines={2} style={styles.content}>
      Dongcheng District Metro Cultural Building
    </Text>
    </View>
    <Image source={require('../imgs/phone.png')} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 73,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F9F2F2',
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    width: 25,
    height: 'auto',
  },
  content: {
    width: 200,
    marginLeft: 17,
    color: '#606060',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
  },
  phone: {
    width: 32,
    height: 'auto',
  }
});


export default Contact