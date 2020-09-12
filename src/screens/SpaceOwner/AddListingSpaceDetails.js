import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioButton from '../../components/RadioButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function AddListingSpaceDetails(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.addAListing1}>Add a Listing</Text>
      <Text style={styles.spaceDetails}>Space Details</Text>
      <Text style={styles.parkingSpaceType}>Parking Space Type</Text>
      <View style={styles.rect5}>
        <View style={styles.rect4Row}>
          <View style={styles.rect4}>
            <View style={styles.icon4Stack}>
              <IoniconsIcon name="ios-car" style={styles.icon4}></IoniconsIcon>
              <Text style={styles.tandem}>Tandem</Text>
            </View>
          </View>
          <View style={styles.rect3}>
            <MaterialCommunityIconsIcon
              name="garage"
              style={styles.icon3}></MaterialCommunityIconsIcon>
            <Text style={styles.sideBySide}>Side by Side</Text>
          </View>
        </View>
      </View>
      <TextInput
        placeholder="Total Quantity of Parking Spaces"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.textInput}></TextInput>
      <Text style={styles.loremIpsum}>
        Are all parking spaces of same size?
      </Text>
      <View style={styles.materialRadioRow}>
        <View style={styles.option}>
          <RadioButton checked={false} style={styles.materialRadio}></RadioButton>
          <Text style={styles.yes}>Yes</Text>
        </View>
        <View style={styles.option}>
          <RadioButton checked={true} style={styles.materialRadio1}></RadioButton>
          <Text style={styles.loremIpsum2}>No, some are different</Text>
        </View>
      </View>
      <TextInput
        placeholder="Vehicle Height Limit (if applicable)"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.textInput1}></TextInput>
      <Text style={styles.vehicleSizes}>Vehicle Sizes</Text>
      <Text style={styles.loremIpsum3}>
        Select the largest vehicle size for your parking spaces (choose more
        than one if you have different sized spaces)
      </Text>
      <View style={styles.rect6Stack}>
        <View style={styles.rect6}>
          <View style={styles.motorcycle1StackStackRow}>
            <View style={styles.motorcycle1StackStack}>
              <View style={styles.motorcycle1Stack}>
                <Text style={styles.motorcycle1}>Motorcycle</Text>
                <TouchableOpacity style={styles.button5}></TouchableOpacity>
              </View>
              <FontAwesomeIcon
                name="motorcycle"
                style={styles.icon9}></FontAwesomeIcon>
            </View>
            <TouchableOpacity style={styles.button4}>
              <View style={styles.compact1Stack}>
                <Text style={styles.compact1}>Compact</Text>
                <MaterialCommunityIconsIcon
                  name="car-sports"
                  style={styles.icon8}></MaterialCommunityIconsIcon>
              </View>
            </TouchableOpacity>
            <View style={styles.midSized1Stack}>
              <Text style={styles.midSized1}>Mid Sized</Text>
              <MaterialCommunityIconsIcon
                name="car-side"
                style={styles.icon7}></MaterialCommunityIconsIcon>
              <TouchableOpacity style={styles.button3}></TouchableOpacity>
            </View>
          </View>
          <View style={styles.oversized1StackStack}>
            <View style={styles.oversized1Stack}>
              <Text style={styles.oversized1}>Oversized</Text>
              <TouchableOpacity style={styles.button1}></TouchableOpacity>
            </View>
            <FontAwesomeIcon
              name="truck"
              style={styles.icon5}></FontAwesomeIcon>
          </View>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.large1Stack}>
              <Text style={styles.large1}>Large</Text>
              <MaterialCommunityIconsIcon
                name="car-estate"
                style={styles.icon6}></MaterialCommunityIconsIcon>
            </View>
          </TouchableOpacity>
        </View>

      </View>
      <Text style={styles.loremIpsum4}>How do I determine my space size?</Text>
      <Text style={styles.compactCarSpaces}>Compact Car Spaces</Text>
      <TextInput
        placeholder="Number of Spaces"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.numerOfSpaces}></TextInput>
      <Text style={styles.largeCarSpaces}>Large Car Spaces</Text>
      <TextInput
        placeholder="Number of Spaces"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.numerOfSpaces1}></TextInput>
      <Text style={styles.loremIpsum5}>
        Are the spaces numbered or labelled ?
      </Text>
      <View style={styles.materialRadio3Row}>
        <RadioButton checked={true} style={styles.materialRadio3}></RadioButton>
        <Text style={styles.yes1}>Yes</Text>
        <RadioButton style={styles.materialRadio2}></RadioButton>
        <Text style={styles.no}>No</Text>
      </View>
      <Text style={styles.enterSpaceLabels}>Enter Space Labels</Text>
      <View style={styles.rect7}>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber}></TextInput>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber1}></TextInput>
      </View>
      <View style={styles.rect7}>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber}></TextInput>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber1}></TextInput>
      </View>
      <View style={styles.rect7}>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber}></TextInput>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber1}></TextInput>
      </View>
      <View style={styles.rect7}>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber}></TextInput>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber1}></TextInput>
      </View>
      <View style={styles.rect7}>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber}></TextInput>
        <TextInput
          placeholder="Space Label/Number"
          placeholderTextColor="rgba(182,182,182,1)"
          style={styles.spaceLabelNumber1}></TextInput>
      </View>




      <Text style={styles.loremIpsum6}>Tell Guests about your space</Text>
      <TextInput
        placeholder="What makes your space great? Is it near notable landmarks or destinations?"
        placeholderTextColor="rgba(182,182,182,1)"
        numberOfLines={20}
        inlineImagePadding={10}
        maxLength={300}
        multiline={true}
        selectTextOnFocus={true}
        style={styles.placeholder}></TextInput>
      <Text style={styles.accessInstructions}>Access Instructions</Text>
      <TextInput
        placeholder="Tell Guests what to do when they arrive? Provide special instructions (if any)"
        placeholderTextColor="rgba(182,182,182,1)"
        numberOfLines={20}
        inlineImagePadding={10}
        maxLength={300}
        multiline={true}
        selectTextOnFocus={true}
        style={styles.placeholder1}></TextInput>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  addAListing1: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 28,
    // marginLeft: 24,
  },
  spaceDetails: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginTop: 17,
    // marginLeft: 23,
  },
  parkingSpaceType: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 22,
    // marginLeft: 23,
  },
  rect5: {
    width: 250,
    height: 112,
    flexDirection: 'row',
    marginTop: 23,
    // marginLeft: 23,
  },
  rect4: {
    width: 119,
    height: 112,
    backgroundColor: 'rgba(39,170,225,0.2)',
  },
  icon4: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    height: 65,
    width: 49,
  },
  tandem: {
    top: 63,
    left: 5,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 11,
  },
  icon4Stack: {
    width: 49,
    height: 76,
    marginTop: 13,
    marginLeft: 35,
  },
  rect3: {
    width: 119,
    height: 112,
    backgroundColor: 'rgba(39,170,225,0.2)',
    marginLeft: 12,
  },
  icon3: {
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    height: 65,
    width: 60,
    marginTop: 11,
    marginLeft: 28,
  },
  sideBySide: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 11,
    marginLeft: 30,
  },
  rect4Row: {
    height: 112,
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 44,
    width: 328,
    marginTop: 22,
    // marginLeft: 24,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginTop: 17,
    // marginLeft: 25,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  },
  materialRadio: {
    height: 30,
    width: 30,
  },
  yes: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginLeft: 3,
    // marginTop: 8,
  },
  materialRadio1: {
    height: 30,
    width: 30,
    marginLeft: 21,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginLeft: 3,
    // marginTop: 6,
  },
  materialRadioRow: {
    height: 30,
    flexDirection: 'row',
    marginTop: 11,
    // marginLeft: 27,
    marginRight: 100,
    alignItems: 'center'
  },
  textInput1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 44,
    width: 328,
    marginTop: 14,
    // marginLeft: 24,
  },
  vehicleSizes: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 17,
    // marginLeft: 27,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 17,
    // marginLeft: 27,
  },
  rect6: {
    width: '100%',
    height: 201,
    // position: 'absolute',
  },
  motorcycle1: {
    top: 62,
    left: 20,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
  },
  button5: {
    top: 0,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.3)',
  },
  motorcycle1Stack: {
    top: 0,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
  },
  icon9: {
    top: 17,
    left: 28,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 40,
    height: 40,
    width: 51,
  },
  motorcycle1StackStack: {
    width: 103,
    height: 96,
  },
  button4: {
    width: 103,
    height: 96,
    backgroundColor: 'rgba(39,170,225,1)',
    marginLeft: 9,
  },
  compact1: {
    top: 57,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 13,
  },
  icon8: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 58,
    height: 63,
    width: 58,
  },
  compact1Stack: {
    width: 58,
    height: 73,
    marginTop: 5,
    marginLeft: 22,
  },
  midSized1: {
    top: 64,
    left: 24,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
  },
  icon7: {
    top: 8,
    left: 23,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 58,
    height: 63,
    width: 58,
  },
  button3: {
    top: 0,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.3)',
  },
  midSized1Stack: {
    width: 103,
    height: 96,
    marginLeft: 9,
  },
  motorcycle1StackStackRow: {
    height: 96,
    flexDirection: 'row',
  },
  oversized1: {
    top: 64,
    left: 25,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
  },
  button1: {
    top: 0,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.3)',
  },
  oversized1Stack: {
    top: 0,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
  },
  icon5: {
    top: 11,
    left: 26,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 50,
    height: 50,
    width: 50,
  },
  oversized1StackStack: {
    width: 103,
    height: 96,
    marginTop: 8,
    marginLeft: 111,
  },
  button2: {
    top: 104,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,1)',
  },
  large1: {
    top: 55,
    left: 12,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 13,
  },
  icon6: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 58,
    height: 63,
    width: 58,
  },
  large1Stack: {
    width: 58,
    height: 71,
    marginTop: 8,
    marginLeft: 23,
  },
  rect6Stack: {
    width: '100%',
    height: 201,
    marginTop: 28,
    // marginLeft: 25,
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    marginTop: 33,
    marginLeft: 71,
  },
  compactCarSpaces: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 49,
    // marginLeft: 25,
  },
  numerOfSpaces: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 51,
    width: '100%',
    fontSize: 16,
    marginTop: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6'
    // marginLeft: 27,
  },
  largeCarSpaces: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 18,
    // marginLeft: 28,
  },
  numerOfSpaces1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 51,
    width: '100%',
    fontSize: 16,
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6'
    // marginLeft: 27,
  },
  loremIpsum5: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginTop: 20,
    // marginLeft: 26,
  },
  materialRadio3: {
    height: 30,
    width: 30,
  },
  yes1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginLeft: 3,
    marginTop: 8,
  },
  materialRadio2: {
    height: 30,
    width: 30,
    marginLeft: 51,
  },
  no: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginLeft: 5,
    marginTop: 7,
  },
  materialRadio3Row: {
    height: 30,
    flexDirection: 'row',
    marginTop: 8,
    // marginLeft: 20,
    marginRight: 195,
  },
  enterSpaceLabels: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 39,
    // marginLeft: 30,
  },
  rect7: {
    width: '100%',
    // height: 110,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 24,
    // marginLeft: 21,
    backgroundColor: '#fff',
    padding: 10
  },
  spaceLabelNumber: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: '100%',
    fontSize: 16,
    marginTop: 4,
    // marginLeft: 18,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  spaceLabelNumber1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: '100%',
    fontSize: 16,
    // marginLeft: 19,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  spaceLabelNumber2: {
    top: 54,
    left: 19,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  rect8: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 120,
    shadowOpacity: 0.1,
    shadowRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  spaceLabelNumber2Stack: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
  },
  spaceLabelNumber3: {
    top: 4,
    left: 18,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  spaceLabelNumber2StackStack: {
    width: 335,
    height: 110,
    marginTop: 19,
    marginLeft: 21,
  },
  spaceLabelNumber4: {
    top: 54,
    left: 19,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  rect9: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 120,
    shadowOpacity: 0.1,
    shadowRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  spaceLabelNumber4Stack: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
  },
  spaceLabelNumber5: {
    top: 4,
    left: 18,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  spaceLabelNumber4StackStack: {
    width: 335,
    height: 110,
    marginTop: 19,
    marginLeft: 21,
  },
  spaceLabelNumber6: {
    top: 54,
    left: 19,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  rect10: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 120,
    shadowOpacity: 0.1,
    shadowRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  spaceLabelNumber6Stack: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
  },
  spaceLabelNumber7: {
    top: 4,
    left: 18,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  spaceLabelNumber6StackStack: {
    width: 335,
    height: 110,
    marginTop: 19,
    marginLeft: 21,
  },
  spaceLabelNumber8: {
    top: 54,
    left: 19,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  rect11: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 120,
    shadowOpacity: 0.1,
    shadowRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  spaceLabelNumber8Stack: {
    top: 0,
    left: 0,
    width: 335,
    height: 110,
    position: 'absolute',
  },
  spaceLabelNumber9: {
    top: 4,
    left: 18,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: 296,
    fontSize: 16,
  },
  spaceLabelNumber8StackStack: {
    width: 335,
    height: 110,
    marginTop: 19,
    marginLeft: 21,
  },
  loremIpsum6: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 50,
    // marginLeft: 23,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 183,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 21,
    // marginLeft: 23,
  },
  accessInstructions: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 41,
    // marginLeft: 26,
  },
  placeholder1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 183,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 19,
    // marginLeft: 23,
  },
  materialButtonPrimary1: {
    width: 100,
    height: 36,
    marginTop: 69,
    marginLeft: 134,
  },
});

export default AddListingSpaceDetails;
