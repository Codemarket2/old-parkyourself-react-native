import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Switch} from 'react-native';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function VariableBillingType(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
      <Text style={styles.loremIpsum1}>Tips for setting appropriate rates</Text>
      <View style={styles.placeholder1Stack}>
        <TextInput
          placeholder="placeholder"
          defaultValue="$ 1.80"
          style={styles.placeholder1}></TextInput>
        <Text style={styles.perHour}>Per Hour</Text>
      </View>
      <Text style={styles.loremIpsum2}>Set your desired rates</Text>
      <Text style={styles.setPricing1}>Set Pricing</Text>
      <Text style={styles.loremIpsum3}>Variable Billing Type</Text>
      <View style={styles.placeholder2Stack}>
        <TextInput
          placeholder="placeholder"
          defaultValue="$ 13.00"
          style={styles.placeholder2}></TextInput>
        <Text style={styles.perDay}>Per Day</Text>
      </View>
      <View style={styles.placeholder3Stack}>
        <TextInput
          placeholder="placeholder"
          defaultValue="$ 60.00"
          style={styles.placeholder3}></TextInput>
        <Text style={styles.perWeek}>Per Week</Text>
        <Switch
          value={false}
          trackColor={{
            true: 'rgba(230, 230, 230,1)',
            false: 'rgba(155,155,155,1)',
          }}
          disabled={false}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.placeholder4Stack}>
        <TextInput
          placeholder="placeholder"
          defaultValue="$ 200.00"
          style={styles.placeholder4}></TextInput>
        <Text style={styles.perMonth}>Per Month</Text>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(155,155,155,1)',
          }}
          disabled={false}
          style={styles.switch2}></Switch>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialButtonPrimary1: {
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
    marginTop: 620,
    marginLeft: 134,
  },
  loremIpsum1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    marginTop: -152,
    marginLeft: 19,
  },
  placeholder1: {
    top: 17,
    left: 2,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: 315,
    fontSize: 16,
  },
  perHour: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 16,
  },
  placeholder1Stack: {
    width: 317,
    height: 57,
    marginTop: -313,
    marginLeft: 17,
  },
  loremIpsum2: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: -165,
    marginLeft: 19,
  },
  setPricing1: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: -61,
    marginLeft: 18,
  },
  loremIpsum3: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
    marginTop: 80,
    marginLeft: 16,
  },
  placeholder2: {
    top: 16,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: 315,
    fontSize: 16,
  },
  perDay: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 16,
  },
  placeholder2Stack: {
    width: 315,
    height: 56,
    marginTop: 94,
    marginLeft: 19,
  },
  placeholder3: {
    top: 16,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: 315,
    fontSize: 16,
  },
  perWeek: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 16,
  },
  switch: {
    position: 'absolute',
    top: 37,
    left: 295,
  },
  placeholder3Stack: {
    width: 340,
    height: 60,
    marginTop: 18,
    marginLeft: 19,
  },
  placeholder4: {
    top: 18,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: 315,
    fontSize: 16,
  },
  perMonth: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 16,
  },
  switch2: {
    position: 'absolute',
    top: 25,
    left: 295,
  },
  placeholder4Stack: {
    width: 340,
    height: 58,
    marginTop: 13,
    marginLeft: 19,
  },
});

export default VariableBillingType;
