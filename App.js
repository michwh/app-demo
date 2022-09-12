/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Nav from './src/components/nav';
import Bill from './src/components/bill';
import Contact from './src/components/contact';
import SwiperDish from './src/components/swiper_dish';
import Result from './src/components/result';

const dishData = [
  {
    img: require('./src/imgs/fries.png'),
    name: 'fries',
    price: 4,
    resultImg: require('./src/imgs/fries_result.png'),
  },
  {
    img: require('./src/imgs/latte.png'),
    name: 'latte',
    price: 3,
    resultImg: require('./src/imgs/latte_result.png'),
  },
  {
    img: require('./src/imgs/burger.png'),
    name: 'burger',
    price: 6,
    resultImg: require('./src/imgs/burger_result.png'),
  },
];

const App: () => Node = () => {
  const [bills, setBills] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Nav />
      <View style={styles.content}>
        <SwiperDish dishData={dishData} bills={bills} setBills={setBills} />
        <Result bills={bills} />
      </View>
      <Contact />
      <Bill bills={bills} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  content: {
    // flex: 1,
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#F9F2F2',
  },
});

export default App;
