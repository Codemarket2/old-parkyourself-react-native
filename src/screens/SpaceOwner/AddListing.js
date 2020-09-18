import React, {Component, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
  Modal,
} from 'react-native';
import AddListingLocation from './AddListingLocation';
import AddListingSpaceDetails from './AddListingSpaceDetails';
import SpaceAvailable from './SpaceAvailable';
import SetPricingType from './SetPricingType';
import FlatBillingType from './FlatBillingType';
import VariableBillingType from './VariableBillingType';
import SaveSpaceDetails from './SaveSpaceDetails';
import {connect} from 'react-redux';

const AddListing = ({navigation, listing}) => {
  const {
    locationDetails,
    spaceDetails,
    spaceAvailable,
    pricingDetails,
  } = listing;
  const [activeIndex, setActiveIndex] = useState(1);
  const [visible, setVisible] = useState(true);
  const onBackButtonPress = (count = 1) => {
    if (activeIndex != 1) {
      setActiveIndex(activeIndex - count);
    } else {
      setVisible(false);
      navigation.navigate('SpaceOwnerDashboard');
    }
  };
  const onNextButtonPress = (count = 1) => {
    if (activeIndex != 7) {
      setActiveIndex(activeIndex + count);
    } else {
    }
  };
  return (
    <Modal visible={visible}>
      {activeIndex == 1 && (
        <AddListingLocation
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          locationDetails={locationDetails}
        />
      )}
      {activeIndex == 2 && (
        <AddListingSpaceDetails
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          spaceDetails={spaceDetails}
        />
      )}
      {activeIndex == 3 && (
        <SpaceAvailable
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          spaceAvailable={spaceAvailable}
        />
      )}
      {activeIndex == 4 && (
        <SetPricingType
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          pricingDetails={pricingDetails}
        />
      )}
      {activeIndex == 5 && (
        <FlatBillingType
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          pricingDetails={pricingDetails}
        />
      )}
      {activeIndex == 6 && (
        <VariableBillingType
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          pricingDetails={pricingDetails}
        />
      )}
      {activeIndex == 7 && (
        <SaveSpaceDetails
          onBackButtonPress={onBackButtonPress}
          onNextButtonPress={onNextButtonPress}
          navigation={navigation}
        />
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  listing: state.listing,
});

export default connect(mapStateToProps)(AddListing);
