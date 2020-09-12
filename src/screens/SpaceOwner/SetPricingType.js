import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function SetPricingType(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.setPricing}>Set Pricing</Text>
      <Text style={styles.loremIpsum}>
        Choose how you want to charge for the bookings
      </Text>
      <View style={styles.rect}>
        <View style={styles.variableRateColumnRow}>
          <View style={styles.variableRateColumn}>
            <Text style={styles.variableRate}>Variable Rate</Text>
            <Text style={styles.loremIpsum2}>
              Charge by length of reservation
            </Text>
          </View>
          <Switch
            value={true}
            trackColor={{
              true: 'rgba(39,170,225,1)',
              false: 'rgba(230, 230, 230,1)',
            }}
            style={styles.switch}></Switch>
        </View>
      </View>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <Text style={styles.flatRateOnly}>Flat Rate only</Text>
          <Switch
            value={true}
            trackColor={{
              true: 'rgba(39,170,225,1)',
              false: 'rgba(230, 230, 230,1)',
            }}
            style={styles.switch2}></Switch>
        </View>
        <Text style={styles.loremIpsum3}>Charge a flat rate per day</Text>
      </View>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setPricing: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 58,
    marginLeft: 18,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 15,
    marginTop: 14,
    marginLeft: 19,
  },
  rect: {
    width: 335,
    height: 58,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 44,
    marginLeft: 19,
  },
  variableRate: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 13,
    marginTop: 7,
  },
  variableRateColumn: {
    width: 180,
  },
  switch: {
    marginLeft: 100,
    marginTop: 9,
  },
  variableRateColumnRow: {
    height: 42,
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 1,
    marginRight: 9,
  },
  rect1: {
    top: 0,
    left: 1,
    width: 335,
    height: 58,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    flexDirection: 'row',
  },
  flatRateOnly: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 1,
    marginTop: 5,
  },
  switch2: {
    marginLeft: 184,
    marginTop: 15,
  },
  loremIpsum3: {
    top: 32,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 13,
  },
  rect1Stack: {
    width: 336,
    height: 58,
    marginTop: 19,
    marginLeft: 18,
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 60,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginTop: 157,
    marginLeft: 134,
  },
});

export default SetPricingType;
