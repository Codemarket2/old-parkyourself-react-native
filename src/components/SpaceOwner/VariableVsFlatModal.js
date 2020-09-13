import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import MaterialButtonPrimary from '../MaterialButtonPrimary';

function VariableVsFlatModal({ visible, onPress }) {
  return (
    <View style={styles.container}>
      <Modal animationType="slide"
        visible={visible}>
        <Text style={styles.loremIpsum}>Variable Rates Vs Flat Rates</Text>
        <Text style={styles.loremIpsum2}>
          Charging a flat rate means Guests will pay a fixed price per day
          regardless of how many hours they reserve. Variable rate means they will
          be charged based on the exact time they reserve.
      </Text>
        <Text style={styles.loremIpsum3}>Which one should I use?</Text>
        <Text style={styles.loremIpsum4}>
          If your listing is in an area where drivers need short term parking
          throughtout the day we recommend charging a variable rate to encourage
          more reservations. If your listing is near a venue and will be mostly be
          used by drivers during events we recommend charging a flat rate so you
          get exactly what your space is worth. You can change your rate type for
          specific dates at any time using the calendar feature.
      </Text>
        <MaterialButtonPrimary
          onPress={onPress}
          caption="OK"
          style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 28,
    alignSelf: 'center',
    fontWeight: '700'
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    lineHeight: 18,
    marginTop: 21,
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 30

  },
  loremIpsum3: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 41,
    alignSelf: 'center',
    fontWeight: '700'


  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    lineHeight: 18,
    marginTop: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginHorizontal: 30



  },
  materialButtonPrimary1: {
    width: 100,
    height: 36,
    backgroundColor: 'rgba(39,170,225,1)',
    marginTop: 45,
    alignSelf: 'center'
  },
});

export default VariableVsFlatModal;
