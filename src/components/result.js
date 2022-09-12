import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';

const Result = ({bills = []}) => {
  const getTop = index => {
    const width = index * 50;
    const row = Math.floor(width / 250) - 1;
    const top = row * 50;
    return top;
  };

  const getLeft = index => {
    const width = index * 50;
    const left = width % 250;
    return left;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../imgs/plate.png')}
        style={{width: 276, height: 121}}>
        {bills.map((bill, index) => {
          const top = getTop(index);
          const left = getLeft(index);
          return (
            <Image
              key={index}
              source={bill.resultImg}
              style={{...styles.dishImg, top, left}}
            />
          );
        })}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dishImg: {
    position: 'absolute',
  },
});

export default Result;
