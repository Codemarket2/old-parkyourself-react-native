import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function FlatBillingType(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.setPricing1}>Set Pricing</Text>
      <Text style={styles.loremIpsum}>Set your desired rates</Text>
      <Text style={styles.flatBillingType}>Flat Billing Type</Text>
      <Text style={styles.dailyMaximum}>Daily Maximum</Text>
      <TextInput
        placeholder="placeholder"
        defaultValue="$ 5.00"
        style={styles.placeholder}></TextInput>
      <Text style={styles.loremIpsum2}>Tips for setting appropriate rates</Text>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  setPricing1: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 58,
    marginLeft: 18,
  },
  loremIpsum: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 13,
    marginLeft: 19,
  },
  flatBillingType: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
    marginTop: 45,
    marginLeft: 18,
  },
  dailyMaximum: {
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 16,
    marginTop: 22,
    marginLeft: 19,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: 315,
    fontSize: 16,
    marginTop: 1,
    marginLeft: 19,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    marginTop: 37,
    marginLeft: 19,
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
    marginTop: 136,
    marginLeft: 134,
  },
});

export default FlatBillingType;
