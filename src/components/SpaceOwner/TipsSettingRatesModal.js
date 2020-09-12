import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialButtonPrimary from '../components/MaterialButtonPrimary';

function TipsSettingRatesModal(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Tips for setting Rates</Text>
      <Text style={styles.loremIpsum2}>
        Take a minute to consider average parking meter and parking lot rates in
        your area and try to keep your rates competitive. This will help you to
        get more reservations and earn more!
      </Text>
      <MaterialButtonPrimary
        caption="OK"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 24,
    marginLeft: 73,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    lineHeight: 18,
    marginTop: 23,
    marginLeft: 20,
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    backgroundColor: 'rgba(39,170,225,1)',
    marginTop: 23,
    marginLeft: 106,
  },
});

export default TipsSettingRatesModal;
