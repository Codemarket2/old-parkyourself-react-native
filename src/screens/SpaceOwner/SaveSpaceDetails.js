import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function SaveSpaceDetails(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.addASpace}>Add a Space</Text>
      <Text style={styles.loremIpsum}>
        All the details related to the parking space have been recieved, do you
        wish to save the details? If you want to edit any details, please click
        back icon and do so. Once all details are correct you can save it.
      </Text>
      <MaterialButtonPrimary
        caption="SAVE ALL DETAILS"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addASpace: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 58,
    marginLeft: 23,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 67,
    marginLeft: 22,
  },
  materialButtonPrimary: {
    width: 150,
    height: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 60,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginTop: 75,
    marginLeft: 114,
  },
});

export default SaveSpaceDetails;
