import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import MoreDetailsOne from '../components/MoreDetailsOne';
import MoreDetailsTwo from '../components/MoreDetailsTwo';
import MoreDetailsThree from '../components/MoreDetailsThree';

function MoreDetails(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MoreDetailsOne />
      <MoreDetailsTwo />
      <MoreDetailsThree />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(39,170,225,0.03)',
  },
});

export default MoreDetails;
