import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import {saveSpaceDetails} from '../../actions/listing';

function SaveSpaceDetails({
  navigation,
  saveSpaceDetails,
  listing: {locationDetails, spaceDetails, spaceAvailable, pricingDetails},
}) {
  const onSubmitHandler = () => {
    try {
      let listingData = {
        locationDetails,
        spaceDetails,
        spaceAvailable,
        pricingDetails,
      };
      console.log(listingData);
      saveSpaceDetails(listingData);
      navigation.navigate('SpaceOwnerDashboard');
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to set pricing details');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.addASpace}>Add a Space</Text>
      <Text style={styles.loremIpsum}>
        All the details related to the parking space have been recieved, do you
        wish to save the details? If you want to edit any details, please click
        back icon and do so. Once all details are correct you can save it.
      </Text>
      <MaterialButtonPrimary
        onPress={onSubmitHandler}
        caption="SAVE ALL DETAILS"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    backgroundColor: '#fff',
    padding: 20,
  },
  addASpace: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 67,
  },
  materialButtonPrimary: {
    width: 150,
    height: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 20,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginTop: 75,
    alignSelf: 'center',
  },
});

SaveSpaceDetails.propTypes = {
  listing: PropTypes.object.isRequired,
  saveSpaceDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listing: state.listing,
});

export default connect(mapStateToProps, {saveSpaceDetails})(SaveSpaceDetails);
