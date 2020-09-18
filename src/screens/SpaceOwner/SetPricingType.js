import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import AddListingHeader from '../../components/SpaceOwner/AddListingHeader';
import NextButton from '../../components/SpaceOwner/NextButton';

function SetPricingType({
  onBackButtonPress,
  onNextButtonPress,
  pricingDetails,
}) {
  const [billingType, setBillingType] = useState(
    pricingDetails ? (pricingDetails.pricingType == 'Flat' ? 1 : 0) : 1,
  );

  const backButtonHandler = () => {
    onBackButtonPress();
  };

  const onSubmitHandler = () => {
    try {
      if (billingType == 0) {
        // navigation.navigate('VariableBillingType');
        onNextButtonPress(2);
      } else {
        // navigation.navigate('FlatBillingType');
        onNextButtonPress();
      }
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to set pricing type');
    }
  };

  return (
    <>
      <AddListingHeader onPress={backButtonHandler} />
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.setPricing}>Set Pricing</Text> */}
        <Text style={styles.heading}>
          Choose how you want to charge for the bookings
        </Text>
        <View style={styles.rect}>
          <View style={styles.variableRateColumnRow}>
            <View style={styles.variableRateColumn}>
              <Text style={styles.subHeading}>Variable Rate</Text>
              <Text style={styles.loremIpsum2}>
                Charge by length of reservation
              </Text>
            </View>
            <Switch
              value={billingType == 0}
              onValueChange={() => setBillingType(0)}
              trackColor={{
                true: 'rgba(39,170,225,1)',
                false: 'rgba(230, 230, 230,1)',
              }}
              style={styles.switch}></Switch>
          </View>
        </View>
        <View style={styles.rect}>
          <View style={styles.variableRateColumnRow}>
            <View style={styles.variableRateColumn}>
              <Text style={styles.subHeading}>Flat Rate only</Text>
              <Text style={styles.loremIpsum2}>Charge a flat rate per day</Text>
            </View>
            <Switch
              value={billingType == 1}
              onValueChange={() => setBillingType(1)}
              trackColor={{
                true: 'rgba(39,170,225,1)',
                false: 'rgba(230, 230, 230,1)',
              }}
              style={styles.switch}></Switch>
          </View>
        </View>

        {/* <MaterialButtonPrimary
        onPress={onSubmitHandler}
        caption="NEXT"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary> */}
      </ScrollView>
      <NextButton onPress={onSubmitHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    minHeight: Dimensions.get('window').height,
    paddingTop: 50,
  },
  setPricing: {
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
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    // marginTop: 40,
  },
  loremIpsum: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 15,
    marginVertical: 20,
  },
  rect: {
    width: '100%',
    // height: 58,
    borderBottomWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 20,
  },
  variableRate: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
  },
  loremIpsum2: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 13,
    marginTop: 7,
  },
  variableRateColumnRow: {
    // height: 42,
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 1,
    marginRight: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  materialButtonPrimary: {
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
    marginTop: 157,
    alignSelf: 'center',
    backgroundColor: '#27aae1',
  },
});

export default SetPricingType;
