import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioButton from '../../components/RadioButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import VehicleSizesModal from '../../components/SpaceOwner/VehicleSizesModal';
import {addListingSpaceDetails} from '../../actions/listing';
import {connect} from 'react-redux';

function AddListingSpaceDetails({navigation, addListingSpaceDetails}) {
  const [parkingSpaceType, setParkingSpaceType] = useState(1);
  const [qtyOfSpaces, setQtyOfSpaces] = useState('');
  const [vehicleHeightLimit, setVehicleHeightLimit] = useState('');
  const [sameSizeSpaces, setSameSizeSpaces] = useState(false);
  const [motorcycle, setMotorcycle] = useState(false);
  const [compact, setCompact] = useState(false);
  const [midSized, setMidSized] = useState(false);
  const [large, setLarged] = useState(false);
  const [oversized, setOversized] = useState(false);
  const [visible, setVisible] = useState(false);
  const [motorcycleSpaces, setMotorcycleSpaces] = useState('');
  const [compactSpaces, setCompactSpaces] = useState('');
  const [midsizedSpaces, setMidsizedSpaces] = useState('');
  const [largeSpaces, setLargeSpaces] = useState('');
  const [oversizedSpaces, setOversizedSpaces] = useState('');
  const [aboutSpace, setAboutSpace] = useState('');
  const [accessInstructions, setAccessInstructions] = useState('');

  const onSubmitHandler = () => {
    try {
      if (
        parkingSpaceType &&
        qtyOfSpaces &&
        (motorcycle || compact || midSized || large || oversized) &&
        aboutSpace &&
        accessInstructions
      ) {
        let spaceDetails = {
          spaceType: parkingSpaceType == 1 ? 'Tandem' : 'SideBySide',
          qtyOfSpaces,
          sameSizeSpaces,
          vehicleHeightLimit,
          vehicleSizes: {
            motorcycle: motorcycle,
            compact: compact,
            midSized: midSized,
            large: large,
            oversized: oversized,
          },
          motorcycleSpaces,
          compactSpaces,
          midsizedSpaces,
          largeSpaces,
          oversizedSpaces,
          aboutSpace,
          accessInstructions,
        };
        addListingSpaceDetails(spaceDetails);
        navigation.navigate('SpaceAvailable');
      } else {
        Alert.alert('Missing Inputs', 'Please fill all required inputs');
      }
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to add space details');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.addAListing1}>Add a Listing</Text>
      <Text style={styles.spaceDetails}>Space Details</Text>
      <Text style={styles.parkingSpaceType}>Parking Space Type</Text>
      <View style={styles.rect5}>
        <View style={styles.rect4Row}>
          <TouchableOpacity
            style={
              parkingSpaceType == 1 ? styles.activeBtn : styles.inactiveBtn
            }
            onPress={() => {
              setParkingSpaceType(1);
            }}>
            <IoniconsIcon
              name="ios-car"
              style={
                parkingSpaceType == 1 ? styles.activeIcon : styles.inactiveIcon
              }></IoniconsIcon>
            <Text
              style={
                parkingSpaceType == 1 ? styles.activeText : styles.inactiveText
              }>
              Tandem
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              parkingSpaceType == 2 ? styles.activeBtn : styles.inactiveBtn
            }
            onPress={() => {
              setParkingSpaceType(2);
            }}>
            <MaterialCommunityIconsIcon
              name="garage"
              style={
                parkingSpaceType == 2 ? styles.activeIcon : styles.inactiveIcon
              }></MaterialCommunityIconsIcon>
            <Text
              style={
                parkingSpaceType == 2 ? styles.activeText : styles.inactiveText
              }>
              Side by Side
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="Total Quantity of Parking Spaces"
        placeholderTextColor="rgba(182,182,182,1)"
        value={qtyOfSpaces}
        onChangeText={(input) => setQtyOfSpaces(input)}
        style={styles.textInput}></TextInput>
      <Text style={styles.loremIpsum}>
        Are all parking spaces of same size?
      </Text>
      <View style={styles.materialRadioRow}>
        <View style={styles.option}>
          <RadioButton
            checked={sameSizeSpaces}
            style={styles.materialRadio}
            onPress={() => setSameSizeSpaces(!sameSizeSpaces)}></RadioButton>
          <Text style={styles.yes}>Yes</Text>
        </View>
        <View style={styles.option}>
          <RadioButton
            checked={!sameSizeSpaces}
            style={styles.materialRadio1}
            onPress={() => setSameSizeSpaces(!sameSizeSpaces)}></RadioButton>
          <Text style={styles.loremIpsum2}>No, some are different</Text>
        </View>
      </View>
      <TextInput
        placeholder="Vehicle Height Limit (if applicable)"
        placeholderTextColor="rgba(182,182,182,1)"
        value={vehicleHeightLimit}
        onChangeText={(input) => setVehicleHeightLimit(input)}
        style={styles.textInput1}></TextInput>
      <Text style={styles.vehicleSizes}>Vehicle Sizes</Text>
      <Text style={styles.loremIpsum3}>
        Select the largest vehicle size for your parking spaces (choose more
        than one if you have different sized spaces)
      </Text>
      <View style={styles.rect6Stack}>
        <View style={styles.rect6}>
          <View style={styles.motorcycle1StackStackRow}>
            <TouchableOpacity
              style={motorcycle ? styles.activeBtn : styles.inactiveBtn}
              onPress={() => setMotorcycle(!motorcycle)}>
              <FontAwesomeIcon
                name="motorcycle"
                style={
                  motorcycle ? styles.activeIcon : styles.inactiveIcon
                }></FontAwesomeIcon>
              <Text
                style={motorcycle ? styles.activeText : styles.inactiveText}>
                Motorcycle
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={compact ? styles.activeBtn : styles.inactiveBtn}
              onPress={() => setCompact(!compact)}>
              <MaterialCommunityIconsIcon
                name="car-sports"
                style={
                  compact ? styles.activeIcon : styles.inactiveIcon
                }></MaterialCommunityIconsIcon>
              <Text style={compact ? styles.activeText : styles.inactiveText}>
                Compact
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={midSized ? styles.activeBtn : styles.inactiveBtn}
              onPress={() => setMidSized(!midSized)}>
              <MaterialCommunityIconsIcon
                name="car-side"
                style={
                  midSized ? styles.activeIcon : styles.inactiveIcon
                }></MaterialCommunityIconsIcon>
              <Text style={midSized ? styles.activeText : styles.inactiveText}>
                Mid Sized
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.oversized1StackStack}>
            <TouchableOpacity
              style={large ? styles.activeBtn : styles.inactiveBtn}
              onPress={() => setLarged(!large)}>
              <MaterialCommunityIconsIcon
                name="car-estate"
                style={
                  large ? styles.activeIcon : styles.inactiveIcon
                }></MaterialCommunityIconsIcon>
              <Text style={large ? styles.activeText : styles.inactiveText}>
                Large
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={oversized ? styles.activeBtn : styles.inactiveBtn}
              onPress={() => setOversized(!oversized)}>
              <FontAwesomeIcon
                name="truck"
                style={
                  oversized ? styles.activeIcon : styles.inactiveIcon
                }></FontAwesomeIcon>
              <Text style={oversized ? styles.activeText : styles.inactiveText}>
                Oversized
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.loremIpsum4}>
          How do I determine my space size?
        </Text>
      </TouchableOpacity>
      <Modal visible={visible}>
        <VehicleSizesModal onPress={() => setVisible(false)} />
      </Modal>

      {motorcycle && (
        <View>
          <Text style={styles.compactCarSpaces}>Motorcycle Spaces</Text>
          <TextInput
            placeholder="Number of Spaces"
            placeholderTextColor="rgba(182,182,182,1)"
            style={styles.numerOfSpaces}
            value={motorcycleSpaces}
            onChangeText={(input) => setMotorcycleSpaces(input)}></TextInput>
        </View>
      )}
      {compact && (
        <View>
          <Text style={styles.compactCarSpaces}>Compact Car Spaces</Text>
          <TextInput
            placeholder="Number of Spaces"
            placeholderTextColor="rgba(182,182,182,1)"
            style={styles.numerOfSpaces}
            value={compactSpaces}
            onChangeText={(input) => setCompactSpaces(input)}></TextInput>
        </View>
      )}
      {midSized && (
        <View>
          <Text style={styles.largeCarSpaces}>Mid-Sized Car Spaces</Text>
          <TextInput
            placeholder="Number of Spaces"
            placeholderTextColor="rgba(182,182,182,1)"
            style={styles.numerOfSpaces1}
            value={midsizedSpaces}
            onChangeText={(input) => setMidsizedSpaces(input)}></TextInput>
        </View>
      )}
      {large && (
        <View>
          <Text style={styles.largeCarSpaces}>Large Car Spaces</Text>
          <TextInput
            placeholder="Number of Spaces"
            placeholderTextColor="rgba(182,182,182,1)"
            style={styles.numerOfSpaces1}
            value={largeSpaces}
            onChangeText={(input) => setLargeSpaces(input)}></TextInput>
        </View>
      )}
      {oversized && (
        <View>
          <Text style={styles.largeCarSpaces}>Oversized Car Spaces</Text>
          <TextInput
            placeholder="Number of Spaces"
            placeholderTextColor="rgba(182,182,182,1)"
            style={styles.numerOfSpaces1}
            value={oversizedSpaces}
            onChangeText={(input) => setOversizedSpaces(input)}></TextInput>
        </View>
      )}

      <Text style={styles.loremIpsum5}>
        Are the spaces numbered or labelled ?
      </Text>
      <View style={styles.materialRadio3Row}>
        <View style={styles.option}>
          <RadioButton
            checked={true}
            style={styles.materialRadio3}></RadioButton>
          <Text style={styles.yes1}>Yes</Text>
        </View>
        <View style={styles.option}>
          <RadioButton style={styles.materialRadio2}></RadioButton>
          <Text style={styles.no}>No</Text>
        </View>
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
        style={styles.placeholder}
        value={aboutSpace}
        onChangeText={(input) => setAboutSpace(input)}></TextInput>
      <Text style={styles.accessInstructions}>Access Instructions</Text>
      <TextInput
        placeholder="Tell Guests what to do when they arrive? Provide special instructions (if any)"
        placeholderTextColor="rgba(182,182,182,1)"
        numberOfLines={20}
        inlineImagePadding={10}
        maxLength={300}
        multiline={true}
        selectTextOnFocus={true}
        style={styles.placeholder1}
        value={accessInstructions}
        onChangeText={(input) => setAccessInstructions(input)}></TextInput>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary1}
        onPress={onSubmitHandler}></MaterialButtonPrimary>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  addAListing1: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
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
  inactiveBtn: {
    width: 120,
    height: 110,
    backgroundColor: 'rgba(39,170,225,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  inactiveText: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 11,
  },
  inactiveIcon: {
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    // height: 65,
    // width: 49,
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
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginTop: 17,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
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
    alignItems: 'center',
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
  activeBtn: {
    width: 120,
    height: 110,
    backgroundColor: 'rgba(39,170,225,1)',
    // marginLeft: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  activeText: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 13,
  },
  activeIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 58,
    // height: 63,
    // width: 58,
  },
  motorcycle1StackStackRow: {
    height: 96,
    flexDirection: 'row',
  },
  oversized1StackStack: {
    width: 103,
    height: 96,
    marginTop: 25,
    flexDirection: 'row',
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
    marginTop: 50,
    alignSelf: 'center',
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
    borderBottomColor: '#d6d6d6',
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
    borderBottomColor: '#d6d6d6',
    // marginLeft: 27,
  },
  loremIpsum5: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginTop: 50,
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
  },
  materialRadio3Row: {
    height: 30,
    flexDirection: 'row',
    marginTop: 8,
    // marginLeft: 20,
    marginRight: 195,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
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
    padding: 10,
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
    borderBottomWidth: 1,
  },
  spaceLabelNumber1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 50,
    width: '100%',
    fontSize: 16,
    // marginLeft: 19,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
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
    alignSelf: 'center',
    marginBottom: 50,
  },
});

AddListingSpaceDetails.propTypes = {
  addListingSpaceDetails: PropTypes.func.isRequired,
};

export default connect(null, {addListingSpaceDetails})(AddListingSpaceDetails);
