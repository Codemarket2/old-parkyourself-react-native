import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function ParkingOrders() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.parkingOrders}>Parking Orders</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  parkingOrders: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
});
