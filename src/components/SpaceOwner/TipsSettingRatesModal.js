import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import MaterialButtonPrimary from '../MaterialButtonPrimary';

function TipsSettingRatesModal({ onPress, visible }) {
  return (
    <View style={styles.container}>
      <Modal style={styles.modal} animationType="slide"
        visible={visible}>
        <View styles={styles.modalView}>
          <Text style={styles.loremIpsum}>Tips for setting Rates</Text>
          <Text style={styles.loremIpsum2}>
            Take a minute to consider average parking meter and parking lot rates in
            your area and try to keep your rates competitive. This will help you to
            get more reservations and earn more!
      </Text>
          <MaterialButtonPrimary
            onPress={onPress}
            caption="OK"
            style={styles.materialButtonPrimary}></MaterialButtonPrimary>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
  },
  modalView: {
    width: '80%',
    elevation: 10,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 24,
    alignSelf: 'center'
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    lineHeight: 18,
    marginTop: 23,
    alignSelf: 'center',
    marginHorizontal: 30
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    backgroundColor: 'rgba(39,170,225,1)',
    marginTop: 23,
    // marginLeft: 106,
    alignSelf: 'center'
  },
});

export default TipsSettingRatesModal;
