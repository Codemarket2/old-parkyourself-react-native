import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import TipsSettingRatesModal from '../../components/SpaceOwner/TipsSettingRatesModal';
import {setListingPricingDetails} from '../../actions/listing';
import NextButton from '../../components/SpaceOwner/NextButton';
import AddListingHeader from '../../components/SpaceOwner/AddListingHeader';

function FlatBillingType({
  onBackButtonPress,
  onNextButtonPress,
  setListingPricingDetails,
  pricingDetails,
}) {
  const [dailyMax, setDailyMax] = useState(
    pricingDetails ? pricingDetails.pricingRates.dailyMax : '$ 5.00',
  );
  const [visible, setVisible] = useState(false);

  const backButtonHandler = () => {
    onBackButtonPress();
  };

  const onSubmitHandler = () => {
    try {
      if (dailyMax) {
        let pricingDetails = {
          pricingType: 'Flat',
          pricingRates: {
            dailyMax,
          },
        };
        setListingPricingDetails(pricingDetails);
        // navigation.navigate('SaveSpaceDetails');
        onNextButtonPress(2);
      } else {
        Alert.alert('Missing Inputs', 'Please fill all required inputs');
      }
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to set pricing details');
    }
  };

  return (
    <>
      <AddListingHeader onPress={backButtonHandler} />

      <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.setPricing1}>Set Pricing</Text> */}
        <Text style={styles.heading}>Set your desired rates</Text>
        <Text style={styles.subHeading}>Flat Billing Type</Text>
        <Text style={styles.dailyMaximum}>Daily Maximum</Text>
        <TextInput
          placeholder="placeholder"
          value={dailyMax}
          onChangeText={(input) => setDailyMax(input)}
          style={styles.placeholder}></TextInput>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.loremIpsum2}>
            Tips for setting appropriate rates
          </Text>
        </TouchableOpacity>
        {/* <MaterialButtonPrimary
        onPress={onSubmitHandler}
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary> */}

        <TipsSettingRatesModal
          visible={visible}
          onPress={() => setVisible(false)}
        />
      </ScrollView>
      <NextButton onPress={onSubmitHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 1,
    paddingTop: 50,
  },
  setPricing1: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
  heading: {
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30,
    marginVertical: 20,
  },
  subHeading: {
    color: '#27aae1',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },
  loremIpsum: {
    // fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 13,
  },
  flatBillingType: {
    // fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 45,
    fontWeight: '700',
  },
  dailyMaximum: {
    // fontFamily: 'roboto-regular',
    color: '#b6b6b6',
    fontSize: 16,
    marginTop: 22,
  },
  placeholder: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: '100%',
    fontSize: 18,
    marginTop: 10,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
  },
  loremIpsum2: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    marginTop: 37,
    fontSize: 16,
  },
  materialButtonPrimary1: {
    width: 100,
    height: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 10,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginTop: 136,
    alignSelf: 'center',
    backgroundColor: '#27aae1',
  },
});

FlatBillingType.propTypes = {
  setListingPricingDetails: PropTypes.func.isRequired,
};

export default connect(null, {setListingPricingDetails})(FlatBillingType);
