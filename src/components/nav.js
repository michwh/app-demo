import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Nav = () => {
  return <View style={styles.container}>
    <View style={styles.item}>
      <Image source={require('../imgs/recommend.png')}/>
    </View>
    <View style={styles.item}>
      <Image source={require('../imgs/icon2.png')}/>
    </View>
    <View style={styles.item}>
      <Image source={require('../imgs/icon3.png')}/>
    </View>
    <View style={styles.item}>
      <Image source={require('../imgs/icon4.png')}/>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 73,
    backgroundColor: '#FA1D50',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 31,
    width: 21,
  },
  item: {
    flex: 1,
    marginLeft: 35,
  }
});

export default Nav