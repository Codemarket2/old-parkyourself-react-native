import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MoreDetailsOne from '../components/MoreDetailsOne';
import MoreDetailsTwo from '../components/MoreDetailsTwo';
import MoreDetailsThree from '../components/MoreDetailsThree';

function MoreDetails({route}) {
  const listingDetail = route.params.item;
  const {locationDetails, spaceAvailable} = listingDetail;
  const {startDate, endDate} = spaceAvailable;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MoreDetailsOne
        locationDetails={locationDetails}
        startDate={startDate}
        endDate={endDate}
      />
      <MoreDetailsTwo
        locationDetails={locationDetails}
        spaceAvailable={spaceAvailable}
      />
      <MoreDetailsThree />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(39,170,225,0)',
  },
});

export default MoreDetails;
