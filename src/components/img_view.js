import React from 'react';
import {View, Image} from 'react-native';

const position = {
  0: {top: 30, left: 20},
  1: {top: 20, right: 30},
  2: {bottom: 30, right: 20},
  3: {bottom: 20, left: 30},
};

const ImgView = ({img, index}) => {
  const key = index % 4;
  const subKey1 = key - 1 < 0 ? 3 : key - 1;
  const subKey2 = key + 1 > 3 ? 0 : key + 1;

  return (
    <View>
      <Image source={img} style={{height: '90%'}} />
      <Image
        style={{position: 'absolute', ...position[key]}}
        source={require('../imgs/start.png')}
      />
      <Image
        style={{position: 'absolute', ...position[subKey1]}}
        source={require('../imgs/star2.png')}
      />
      <Image
        style={{position: 'absolute', ...position[subKey2]}}
        source={require('../imgs/star2.png')}
      />
    </View>
  );
};

export default ImgView;
