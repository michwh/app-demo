import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import ImgView from './img_view'

// const position = {
//   0: {top: 30, left: 20},
//   1: {top: 20, right: 30},
//   2: {bottom: 30, right: 20},
//   3: {bottom: 20, left: 30},
// };

// const ImgView = ({img, index}) => {
//   const key = index % 4;
//   const subKey1 = key - 1 < 0 ? 3 : key - 1;
//   const subKey2 = key + 1 > 3 ? 0 : key + 1;
//   return (
//     <View>
//       <Image source={img} style={{height: '90%'}} />
//       <Image
//         style={{position: 'absolute', ...position[key]}}
//         source={require('../imgs/start.png')}
//       />
//       <Image
//         style={{position: 'absolute', ...position[subKey1]}}
//         source={require('../imgs/star2.png')}
//       />
//       <Image
//         style={{position: 'absolute', ...position[subKey2]}}
//         source={require('../imgs/star2.png')}
//       />
//     </View>
//   );
// };

const SwiperDish = ({dishData = [], bills = [], setBills}) => {
  const positionAnimatedRef = useRef(new Animated.Value(0));
  const layoutWidthRef = useRef(0);
  const positionRef = useRef(0);
  const startPositionRef = useRef(0);
  const responderRef = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        // 用户手指触碰屏幕，停止动画
        positionAnimatedRef.current.stopAnimation();
        // 记录手势响应时的位置
        startPositionRef.current = positionRef.current;
      },
      onPanResponderMove: (evt, {dx}) => {
        // 要变化的位置 = 手势响应时的位置 + 移动的距离
        const position = startPositionRef.current + dx;
        positionAnimatedRef.current.setValue(position);
      },
      onPanResponderRelease: () => {
        const index = Math.round(-positionRef.current / layoutWidthRef.current);
        const safeIndex = getSafeIndex(index);
        scrollTo(safeIndex);
      },
    }),
  );

  useEffect(() => {
    positionAnimatedRef.current.addListener(({value}) => {
      positionRef.current = value;
    });
  }, []);

  const scrollTo = toIndex => {
    Animated.spring(positionAnimatedRef.current, {
      toValue: -toIndex * layoutWidthRef.current,
      friction: 12,
      tension: 50,
      useNativeDriver: true,
    }).start();
  };

  // 获取容器宽度
  const handleLayout = ({nativeEvent}) => {
    layoutWidthRef.current = nativeEvent.layout.width;
  };

  const getSafeIndex = index => {
    const max = dishData.length - 1;
    const min = 0;
    const safeIndex = Math.min(max, Math.max(index, min));
    return safeIndex;
  };

  const handleAdd = data => {
    const newBill = [...bills, data];
    setBills(newBill);
  };

  return (
    <View
      style={styles.container}
      onLayout={handleLayout}
      {...responderRef.current.panHandlers}>
      {dishData.map((data, index) => {
        return (
          <Animated.View
            key={index}
            style={{
              width: '100%',
              transform: [
                {
                  translateX: positionAnimatedRef.current,
                },
              ],
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <ImgView img={data.img} index={index} />
            <View style={styles.dishRight}>
              <View>
                <Text
                  style={[
                    styles.dishRightText,
                    {fontSize: 32, fontWeight: '600'},
                  ]}>
                  {data.name}
                </Text>
                <Text
                  style={[
                    styles.dishRightText,
                    {fontSize: 24, fontWeight: '300'},
                  ]}>
                  {data.price}$
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleAdd(data)}>
                <Image source={require('../imgs/add.png')} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(242, 241, 241, 1)',
    overflow: 'hidden',
  },
  dishRight: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  dishRightText: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    color: '#EB5C77',
  },
});

export default SwiperDish;
