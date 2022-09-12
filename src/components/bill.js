import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Bill = ({bills = []}) => {
  const total = bills.reduce((pre, cur) => pre + cur.price, 0)

  return <View style={styles.container}>
    <View style={styles.money}>
      <View style={styles.moneyContent}>
        <Text style={{fontSize: 32}}>{total}</Text>
        <Text style={{fontSize: 22}}>$</Text>
      </View>
    </View>
    <View style={styles.action}>
      <Text style={styles.actionText}>Pay</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  money: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 232,
    display: 'flex',
    justifyContent: 'center',
    height: 65,
  },
  moneyContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 20,
  },
  action: {
    backgroundColor: '#FA1D50',
    flex: 1,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 32,
  }
});

export default Bill