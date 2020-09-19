import React, {Component, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Dimensions,
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
import {Picker} from '@react-native-community/picker';
import NextButton from '../../components/SpaceOwner/NextButton';
import AddListingHeader from '../../components/SpaceOwner/AddListingHeader';
import Input from '../../components/Input';
import RadioListItem from '../../components/RadioListItem';

function AddListingSpaceDetails({
  onBackButtonPress,
  onNextButtonPress,
  spaceDetails,
  addListingSpaceDetails,
}) {
  const scrollRef = useRef();

  const [activeIndex, setActiveIndex] = useState(
    spaceDetails && spaceDetails.spaceType ? 6 : 1,
  );

  const [width, setWidth] = useState(
    spaceDetails && spaceDetails.spaceType ? 100 : 0,
  );

  const [parkingSpaceType, setParkingSpaceType] = useState(
    spaceDetails && spaceDetails.spaceType ? spaceDetails.spaceType : 'Tandem',
  );
  const [qtyOfSpaces, setQtyOfSpaces] = useState(
    spaceDetails && spaceDetails.qtyOfSpaces ? spaceDetails.qtyOfSpaces : '',
  );
  const [vehicleHeightLimit, setVehicleHeightLimit] = useState(
    spaceDetails && spaceDetails.vehicleHeightLimit
      ? spaceDetails.vehicleHeightLimit
      : '',
  );
  const [sameSizeSpaces, setSameSizeSpaces] = useState(
    spaceDetails && spaceDetails.sameSizeSpaces
      ? spaceDetails.sameSizeSpaces
      : false,
  );
  const [motorcycle, setMotorcycle] = useState(
    spaceDetails && spaceDetails.vehicleSizes
      ? spaceDetails.vehicleSizes.motorcycle
      : false,
  );
  const [compact, setCompact] = useState(
    spaceDetails && spaceDetails.vehicleSizes
      ? spaceDetails.vehicleSizes.compact
      : false,
  );
  const [midSized, setMidSized] = useState(
    spaceDetails && spaceDetails.vehicleSizes
      ? spaceDetails.vehicleSizes.midSized
      : false,
  );
  const [large, setLarged] = useState(
    spaceDetails && spaceDetails.vehicleSizes
      ? spaceDetails.vehicleSizes.large
      : false,
  );
  const [oversized, setOversized] = useState(
    spaceDetails && spaceDetails.vehicleSizes
      ? spaceDetails.vehicleSizes.oversized
      : false,
  );
  const [visible, setVisible] = useState(false);
  const [motorcycleSpaces, setMotorcycleSpaces] = useState(
    spaceDetails && spaceDetails.motorcycleSpaces
      ? spaceDetails.motorcycleSpaces
      : '',
  );
  const [compactSpaces, setCompactSpaces] = useState(
    spaceDetails && spaceDetails.compactSpaces
      ? spaceDetails.compactSpaces
      : '',
  );
  const [midsizedSpaces, setMidsizedSpaces] = useState(
    spaceDetails && spaceDetails.midsizedSpaces
      ? spaceDetails.midsizedSpaces
      : '',
  );
  const [largeSpaces, setLargeSpaces] = useState(
    spaceDetails && spaceDetails.largeSpaces ? spaceDetails.largeSpaces : '',
  );
  const [oversizedSpaces, setOversizedSpaces] = useState(
    spaceDetails && spaceDetails.oversizedSpaces
      ? spaceDetails.oversizedSpaces
      : '',
  );
  const [isLabelled, setIsLabelled] = useState(
    spaceDetails && spaceDetails.isLabelled ? spaceDetails.isLabelled : true,
  );
  const [spaceLabels, setSpaceLabels] = useState(
    spaceDetails && spaceDetails.spaceLabels ? spaceDetails.spaceLabels : [],
  );
  const [aboutSpace, setAboutSpace] = useState(
    spaceDetails && spaceDetails.aboutSpace ? spaceDetails.aboutSpace : '',
  );
  const [accessInstructions, setAccessInstructions] = useState(
    spaceDetails && spaceDetails.accessInstructions
      ? spaceDetails.accessInstructions
      : '',
  );

  const setParkingSpaceInputs = (qty) => {
    var num = parseInt(qty);
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push({id: num + 1, label: '', largestSize: ''});
    }
    setSpaceLabels(arr);
  };

  const setLabelById = (idx, label) => {
    setSpaceLabels(
      spaceLabels.map((item, index) =>
        index == idx ? {...item, label: label} : {...item},
      ),
    );
    // console.log(spaceLabels);
  };

  const setLargestSizeById = (idx, size) => {
    setSpaceLabels(
      spaceLabels.map((item, index) =>
        index == idx ? {...item, largestSize: size} : {...item},
      ),
    );
    // console.log(spaceLabels);
  };

  const backButtonHandler = () => {
    if (activeIndex != 1) {
      setActiveIndex(activeIndex - 1);
      scrollRef.current.scrollTo({
        y: 0,
        animated: true,
      });
      setWidth(width - 20);
    } else {
      onBackButtonPress();
    }
  };

  const onSubmitHandler = () => {
    try {
      if (activeIndex != 6) {
        setActiveIndex(activeIndex + 1);
        scrollRef.current.scrollTo({
          y: 0,
          animated: true,
        });
        setWidth(width + 20);
      } else {
        if (
          parkingSpaceType &&
          qtyOfSpaces &&
          (motorcycle || compact || midSized || large || oversized) &&
          ((motorcycle && motorcycleSpaces) ||
            (compact && compactSpaces) ||
            (midSized && midsizedSpaces) ||
            (large && largeSpaces) ||
            (oversized && oversizedSpaces)) &&
          isLabelled &&
          spaceLabels.length > 0 &&
          aboutSpace &&
          accessInstructions
        ) {
          let spaceDetails = {
            spaceType: parkingSpaceType,
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
            isLabelled,
            spaceLabels,
            aboutSpace,
            accessInstructions,
          };
          addListingSpaceDetails(spaceDetails);
          // navigation.navigate('SpaceAvailable');
          onNextButtonPress();
        } else {
          Alert.alert('Missing Inputs', 'Please fill all required inputs');
        }
      }
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to add space details');
    }
  };

  return (
    <>
      <AddListingHeader onPress={backButtonHandler} width={`${width}%`} />
      <ScrollView ref={scrollRef} contentContainerStyle={styles.container}>
        {/* <Text style={styles.addAListing1}>Add a Listing</Text> */}
        {/* <Text style={styles.spaceDetails}>Space Details</Text> */}
        {activeIndex == 1 && (
          <>
            <Text style={styles.heading}>Choose a Parking Space type</Text>

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={parkingSpaceType}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  setParkingSpaceType(itemValue)
                }>
                <Picker.Item label="Tandem" value="Tandem" />
                <Picker.Item label="Side by Side" value="Side by Side" />
              </Picker>
            </View>
            {/* <View style={styles.rect5}>
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
      </View> */}
            <Input
              placeholder="Total Quantity of Parking Spaces"
              placeholderTextColor="rgba(182,182,182,1)"
              value={qtyOfSpaces}
              keyboardType="number-pad"
              onChangeText={(input) => {
                if (input == '0') {
                  Alert.alert(
                    "Total quantity of spaces can't be zero",
                    'Please input again',
                  );
                } else {
                  setQtyOfSpaces(input);
                  setParkingSpaceInputs(input);
                }
              }}
              style={styles.textInput}
            />
          </>
        )}
        {activeIndex == 2 && (
          <>
            <Text style={styles.heading}>
              Are all parking spaces of same size?
            </Text>
            <RadioListItem
              label="Yes"
              checked={sameSizeSpaces}
              onPress={() => setSameSizeSpaces(!sameSizeSpaces)}
            />
            <RadioListItem
              label="No, some are different"
              checked={!sameSizeSpaces}
              onPress={() => setSameSizeSpaces(!sameSizeSpaces)}
            />
            <Input
              placeholder="Vehicle Height Limit (if applicable)"
              placeholderTextColor="rgba(182,182,182,1)"
              value={vehicleHeightLimit}
              onChangeText={(input) => setVehicleHeightLimit(input)}
              style={styles.textInput1}></Input>
          </>
        )}

        {activeIndex == 3 && (
          <>
            <Text style={styles.heading}>Vehicle Sizes</Text>
            <Text style={styles.description}>
              Select the largest vehicle size for your parking spaces (choose
              more than one if you have different sized spaces)
            </Text>

            <RadioListItem
              label="Motorcycle"
              checked={motorcycle}
              onPress={() => setMotorcycle(!motorcycle)}
            />
            <RadioListItem
              label="Compact"
              checked={compact}
              onPress={() => setCompact(!compact)}
            />
            <RadioListItem
              label="Mid Sized"
              checked={midSized}
              onPress={() => setMidSized(!midSized)}
            />
            <RadioListItem
              label="Large"
              checked={large}
              onPress={() => setLarge(!large)}
            />
            <RadioListItem
              label="Over Sized"
              checked={oversized}
              onPress={() => setOversized(!oversized)}
            />

            {/* <View style={styles.rect6Stack}>
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
                      style={
                        motorcycle ? styles.activeText : styles.inactiveText
                      }>
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
                    <Text
                      style={compact ? styles.activeText : styles.inactiveText}>
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
                    <Text
                      style={
                        midSized ? styles.activeText : styles.inactiveText
                      }>
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
                    <Text
                      style={large ? styles.activeText : styles.inactiveText}>
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
                    <Text
                      style={
                        oversized ? styles.activeText : styles.inactiveText
                      }>
                      Oversized
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View> */}

            {motorcycle && (
              <View>
                <Text style={styles.subHeading}>Motorcycle Spaces</Text>
                <TextInput
                  placeholder="Number of Spaces"
                  placeholderTextColor="rgba(182,182,182,1)"
                  style={styles.numerOfSpaces}
                  value={motorcycleSpaces}
                  onChangeText={(input) =>
                    setMotorcycleSpaces(input)
                  }></TextInput>
              </View>
            )}
            {compact && (
              <View>
                <Text style={styles.subHeading}>Compact Car Spaces</Text>
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
                <Text style={styles.subHeading}>Mid-Sized Car Spaces</Text>
                <TextInput
                  placeholder="Number of Spaces"
                  placeholderTextColor="rgba(182,182,182,1)"
                  style={styles.numerOfSpaces1}
                  value={midsizedSpaces}
                  onChangeText={(input) =>
                    setMidsizedSpaces(input)
                  }></TextInput>
              </View>
            )}
            {large && (
              <View>
                <Text style={styles.subHeading}>Large Car Spaces</Text>
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
                <Text style={styles.subHeading}>Oversized Car Spaces</Text>
                <TextInput
                  placeholder="Number of Spaces"
                  placeholderTextColor="rgba(182,182,182,1)"
                  style={styles.numerOfSpaces1}
                  value={oversizedSpaces}
                  onChangeText={(input) =>
                    setOversizedSpaces(input)
                  }></TextInput>
              </View>
            )}

            <TouchableOpacity onPress={() => setVisible(true)}>
              <Text style={styles.loremIpsum4}>
                How do I determine my space size?
              </Text>
            </TouchableOpacity>
            <Modal visible={visible}>
              <VehicleSizesModal onPress={() => setVisible(false)} />
            </Modal>
          </>
        )}
        {activeIndex == 4 && (
          <>
            <Text style={styles.heading}>
              Are the spaces numbered or labelled ?
            </Text>
            <RadioListItem
              label="Yes"
              checked={isLabelled}
              onPress={() => {
                setIsLabelled(!isLabelled);
              }}
            />
            <RadioListItem
              label="No"
              checked={!isLabelled}
              onPress={() => {
                setIsLabelled(!isLabelled);
              }}
            />
            {qtyOfSpaces.length > 0 && (
              <>
                <Text style={styles.subHeading}>Enter Space Labels</Text>
                {spaceLabels.map((item, index) => (
                  <View style={styles.rect7} key={item.id}>
                    <TextInput
                      placeholder="Space Label/Number"
                      placeholderTextColor="rgba(182,182,182,1)"
                      value={item.label}
                      onChangeText={(input) => {
                        setLabelById(index, input);
                      }}
                      style={styles.spaceLabelNumber}></TextInput>
                    {/* <TextInput
              placeholder="Space Label/Number"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.spaceLabelNumber1}></TextInput> */}
                    <Picker
                      selectedValue={
                        item.largestSize
                          ? item.largestSize
                          : 'Largest Vehicle Size'
                      }
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) => {
                        setLargestSizeById(index, itemValue);
                      }}>
                      {motorcycle && (
                        <Picker.Item label="Motorcycle" value="Motorcycle" />
                      )}
                      {compact && (
                        <Picker.Item label="Compact" value="Compact" />
                      )}
                      {midSized && (
                        <Picker.Item label="Mid Sized" value="Mid Sized" />
                      )}
                      {large && <Picker.Item label="Large" value="Large" />}
                      {oversized && (
                        <Picker.Item label="Oversized" value="Oversized" />
                      )}
                    </Picker>
                  </View>
                ))}
              </>
            )}
          </>
        )}

        {activeIndex == 5 && (
          <>
            <Text style={styles.heading}>Tell Guests about your space</Text>
            <TextInput
              placeholder="What makes your space great? Is it near notable landmarks or destinations?"
              placeholderTextColor="rgba(182,182,182,1)"
              numberOfLines={20}
              inlineImagePadding={10}
              textAlignVertical="top"
              maxLength={300}
              multiline={true}
              selectTextOnFocus={true}
              style={styles.placeholder}
              value={aboutSpace}
              onChangeText={(input) => setAboutSpace(input)}></TextInput>
          </>
        )}
        {activeIndex == 6 && (
          <>
            <Text style={styles.heading}>
              Tell Guests what to do when they arrive?
            </Text>
            <TextInput
              placeholder="Tell Guests what to do when they arrive? Provide special instructions (if any)"
              placeholderTextColor="rgba(182,182,182,1)"
              numberOfLines={20}
              inlineImagePadding={10}
              maxLength={300}
              textAlignVertical="top"
              multiline={true}
              selectTextOnFocus={true}
              style={styles.placeholder}
              value={accessInstructions}
              onChangeText={(input) =>
                setAccessInstructions(input)
              }></TextInput>
          </>
        )}

        {/* <View style={styles.btnRow}>
        {activeIndex != 1 && (
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        )}
        <MaterialButtonPrimary
          caption="NEXT"
          style={styles.materialButtonPrimary1}
          onPress={onSubmitHandler}></MaterialButtonPrimary>
      </View> */}
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
    minHeight: Dimensions.get('window').height,
    paddingTop: 50,
    paddingBottom: 80,
  },
  heading: {
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30,
    marginVertical: 20,
  },
  subHeading: {
    color: 'rgba(11,64,148,1)',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
  },
  addAListing1: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    // marginLeft: 24,
  },
  spaceDetails: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginTop: 17,
    // marginLeft: 23,
  },
  parkingSpaceType: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 22,
    // marginLeft: 23,
  },
  pickerContainer: {
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    marginBottom: 10,
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
    color: '#121212',
    // height: 44,
    width: '100%',
    // marginTop: 22,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  loremIpsum: {
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
    color: '#121212',
    // height: 44,
    width: '100%',
    marginTop: 14,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    // marginBottom: 20,
    // marginLeft: 24,
  },
  vehicleSizes: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 17,
    // marginLeft: 27,
  },
  description: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    lineHeight: 22,
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 16,
  },
  compactCarSpaces: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 49,
    // marginLeft: 25,
  },
  numerOfSpaces: {
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 18,
    // marginLeft: 28,
  },
  numerOfSpaces1: {
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginTop: 20,
    // marginLeft: 26,
  },
  materialRadio3: {
    height: 30,
    width: 30,
  },
  yes1: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginLeft: 3,
  },
  materialRadio2: {
    height: 30,
    width: 30,
    marginLeft: 51,
  },
  no: {
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 39,
    // marginLeft: 30,
  },
  picker: {
    width: '100%',
    // marginVertical: 10,
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 20,
    // marginLeft: 23,
  },
  placeholder: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    height: 183,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 21,
    padding: 10,
    fontSize: 18,
    // marginLeft: 23,
  },
  accessInstructions: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 20,
    // marginLeft: 26,
  },
  placeholder1: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    height: 183,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 19,
    padding: 10,
    // marginLeft: 23,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtnText: {
    fontSize: 16,
    textDecorationLine: 'underline',
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
