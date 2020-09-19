import React, {Component, useState, useRef, useEffect} from 'react';
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
} from 'react-native';
import PropTypes from 'prop-types';
import MapView, {Marker} from 'react-native-maps';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import {addListingLocation} from '../../actions/listing';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker';
import RadioButton from '../../components/RadioButton';
import NextButton from '../../components/SpaceOwner/NextButton';
import AddListingHeader from '../../components/SpaceOwner/AddListingHeader';
import Input from '../../components/Input';
import RadioListItem from '../../components/RadioListItem';

function AddListingLocation({
  onBackButtonPress,
  onNextButtonPress,
  addListingLocation,
  locationDetails,
}) {
  const scrollRef = useRef();

  const [activeIndex, setActiveIndex] = useState(
    locationDetails && locationDetails.listingType ? 6 : 1,
  );

  const [width, setWidth] = useState(
    locationDetails && locationDetails.listingType ? 100 : 0,
  );

  const [listingType, setListingType] = useState(
    locationDetails && locationDetails.listingType
      ? locationDetails.listingType
      : 'Business',
  );
  const [propertyType, setPropertyType] = useState(
    locationDetails && locationDetails.propertyType
      ? locationDetails.propertyType
      : 'Driveway',
  );
  const [propertyName, setPropertyName] = useState(
    locationDetails && locationDetails.propertyName
      ? locationDetails.propertyName
      : '',
  );
  const [country, setCountry] = useState(
    locationDetails && locationDetails.country ? locationDetails.country : '',
  );
  const [address, setAddress] = useState(
    locationDetails && locationDetails.address ? locationDetails.address : '',
  );
  const [unitNum, setUnitNum] = useState(
    locationDetails && locationDetails.unitNum ? locationDetails.unitNum : '',
  );
  const [city, setCity] = useState(locationDetails ? locationDetails.city : '');
  const [state, setState] = useState(
    locationDetails && locationDetails.state ? locationDetails.state : '',
  );
  const [postalCode, setPostalCode] = useState(
    locationDetails && locationDetails.postalCode
      ? locationDetails.postalCode
      : '',
  );
  const [countryCodes, setCountryCodes] = useState([
    {code: '+93', country: 'Afghanistan'},
    {code: '+358', country: 'Aland Islands'},
    {code: '+355', country: 'Albania'},
    {code: '+213', country: 'Algeria'},
    {code: '+54', country: 'Argentina'},
    {code: '+61', country: 'Australia'},
    {code: '+43', country: 'Austria'},
    {code: '+973', country: 'Bahrain'},
    {code: '+880', country: 'Bangladesh'},
    {code: '+375', country: 'Belarus'},
    {code: '+32', country: 'Belgium'},
    {code: '+55', country: 'Brazil'},
    {code: '+359', country: 'Bulgaria'},
    {code: '+855', country: 'Cambodia'},
    {code: '+1', country: 'Canada'},
    {code: '+236', country: 'Central African Republic'},
    {code: '+56', country: 'Chile'},
    {code: '+86', country: 'China'},
    {code: '+506', country: 'Costa Rica'},
    {code: '+53', country: 'Cuba'},
    {code: '+20', country: 'Egypt'},
    {code: '+33', country: 'France'},
    {code: '+49', country: 'Germany'},
    {code: '+30', country: 'Greece'},
    {code: '+852', country: 'Hong Kong'},
    {code: '+91', country: 'India'},
    {code: '+98', country: 'Iran'},
    {code: '+964', country: 'Iraq'},
    {code: '+39', country: 'Italy'},
    {code: '+81', country: 'Japan'},
    {code: '+60', country: 'Malaysia'},
    {code: '+230', country: 'Mauritius'},
    {code: '+95', country: 'Myanmar'},
    {code: '+64', country: 'New Zealand'},
    {code: '+92', country: 'Pakistan'},
    {code: '+351', country: 'Portugal'},
    {code: '+7', country: 'Russia'},
    {code: '+966', country: 'Saudi Arabia'},
    {code: '+65', country: 'Singapore'},
    {code: '+27', country: 'South Africa'},
    {code: '+34', country: 'Spain'},
    {code: '+66', country: 'Thailand'},
    {code: '+90', country: 'Turkey'},
    {code: '+44', country: 'United Kingdom'},
    {code: '+84', country: 'United States'},
    {code: '+263', country: 'Zimbabwe'},
  ]);
  const [code, setCode] = useState(
    locationDetails && locationDetails.code
      ? locationDetails.code
      : countryCodes[0].code,
  );
  const [phone, setPhone] = useState(
    locationDetails && locationDetails.phone ? locationDetails.phone : '',
  );

  const [marker, setMarker] = useState(
    locationDetails && locationDetails.latlng
      ? locationDetails.latlng
      : {
          latitude: 37.78825,
          longitude: -122.4324,
        },
  );

  const [images, setImages] = useState(
    locationDetails && locationDetails.images ? locationDetails.images : [],
  );

  const [featureList, setFeatureList] = useState([
    '24/7 access',
    'Car Wash',
    'Covered',
    'EY Charging',
    'Fenced',
    'Mobile Pass',
    'Paved',
    'Security',
    'Staff onsite',
    'Tandem',
    'Unpaved',
    'Valet',
  ]);
  const [features, setFeatures] = useState(
    locationDetails && locationDetails.features ? locationDetails.features : [],
  );

  const toggleFeatures = (feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter((item) => item != feature));
    } else {
      setFeatures([...features, feature]);
    }
  };

  const options = {
    title: 'Select Photo',
    // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const imagePickerHandler = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        setImages([...images, source]);

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
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
          listingType &&
          propertyType &&
          propertyName &&
          country &&
          address &&
          unitNum &&
          city &&
          state &&
          postalCode &&
          code &&
          phone &&
          marker
        ) {
          let locationData = {
            listingType,
            propertyName: propertyName,
            country,
            address,
            unitNum,
            city,
            state,
            postalCode,
            code,
            phone,
            latlng: marker,
            propertyType,
            images,
            features,
          };

          addListingLocation(locationData);

          // navigation.navigate('AddListingSpaceDetails');
          onNextButtonPress();
        } else {
          Alert.alert('Missing Inputs', 'Please fill all required inputs');
        }
      }
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to add location data');
    }
  };

  return (
    <>
      <AddListingHeader
        onPress={backButtonHandler}
        icon={activeIndex == 1 ? 'close' : 'arrowleft'}
        width={`${width}%`}
      />
      <ScrollView contentContainerStyle={styles.container} ref={scrollRef}>
        {activeIndex == 1 && (
          <>
            {/* <Text style={styles.heading}>Let's add a Listing</Text> */}
            {/* <Text style={styles.location}>Location</Text> */}
            <Text style={styles.heading}>Choose a Listing Type</Text>
            {/* <View style={styles.rect}>
            <View style={styles.rect2Row}>
              <TouchableOpacity
                style={listingType == 1 ? styles.activeTab : styles.inactiveTab}
                onPress={() => {
                  setListingType(1);
                }}>
                <Text
                  style={
                    listingType == 1 ? styles.activeText : styles.inactiveText
                  }>
                  Business
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={listingType == 2 ? styles.activeTab : styles.inactiveTab}
                onPress={() => {
                  setListingType(2);
                }}>
                <Text
                  style={
                    listingType == 2 ? styles.activeText : styles.inactiveText
                  }>
                  Residential
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={listingType == 3 ? styles.activeTab : styles.inactiveTab}
                onPress={() => {
                  setListingType(3);
                }}>
                <Text
                  style={
                    listingType == 3 ? styles.activeText : styles.inactiveText
                  }>
                  Others
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={listingType}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  setListingType(itemValue)
                }>
                <Picker.Item label="Business" value="Business" />
                <Picker.Item label="Residential" value="Residential" />
                <Picker.Item label="Others" value="Others" />
              </Picker>
            </View>
            <Input
              placeholder="Property Name"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.textInput}
              value={propertyName}
              onChangeText={(input) => setPropertyName(input)}></Input>
          </>
        )}
        {activeIndex == 2 && (
          <>
            <Text style={styles.heading}>Listing Address</Text>
            <Input
              placeholder="Country"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.placeholder}
              value={country}
              onChangeText={(input) => setCountry(input)}></Input>
            <Input
              placeholder="Address"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.placeholder}
              value={address}
              onChangeText={(input) => setAddress(input)}></Input>
            <Input
              placeholder="Unit #"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.placeholder}
              value={unitNum}
              onChangeText={(input) => setUnitNum(input)}></Input>
            <Input
              placeholder="City/Town"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.placeholder}
              value={city}
              onChangeText={(input) => setCity(input)}></Input>
            <Input
              placeholder="State/Province"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.placeholder}
              value={state}
              onChangeText={(input) => setState(input)}></Input>
            <Input
              placeholder="Postal Code"
              placeholderTextColor="rgba(182,182,182,1)"
              style={styles.placeholder}
              value={postalCode}
              onChangeText={(input) => setPostalCode(input)}></Input>
            <View style={styles.phone}>
              {/* <View style={styles.pickerContainer}> */}
              <Picker
                selectedValue={code}
                style={{width: 120, marginTop: 10}}
                onValueChange={(itemValue, itemIndex) => setCode(itemValue)}>
                {countryCodes.map((item) => (
                  <Picker.Item
                    key={item}
                    label={`${item.code}  ${item.country}`}
                    value={item.code}
                  />
                ))}
              </Picker>
              {/* </View> */}

              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="rgba(182,182,182,1)"
                style={styles.placeholder}
                value={phone}
                onChangeText={(input) => setPhone(input)}></TextInput>
            </View>
          </>
        )}
        {activeIndex == 3 && (
          <>
            <Text style={styles.heading}>Mark your location on the map</Text>

            <MapView
              style={styles.map}
              //provider={MapView.PROVIDER_GOOGLE}
              initialRegion={{
                latitude: marker.latitude,
                longitude: marker.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={(event) => {
                console.log(event.nativeEvent);
                setMarker({
                  latitude: event.nativeEvent.coordinate.latitude,
                  longitude: event.nativeEvent.coordinate.longitude,
                });
              }}
              customMapStyle={[
                {
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#f5f5f5',
                    },
                  ],
                },
                {
                  elementType: 'labels.icon',
                  stylers: [
                    {
                      visibility: 'off',
                    },
                  ],
                },
                {
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#616161',
                    },
                  ],
                },
                {
                  elementType: 'labels.text.stroke',
                  stylers: [
                    {
                      color: '#f5f5f5',
                    },
                  ],
                },
                {
                  featureType: 'administrative.land_parcel',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#bdbdbd',
                    },
                  ],
                },
                {
                  featureType: 'poi',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#eeeeee',
                    },
                  ],
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#757575',
                    },
                  ],
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#e5e5e5',
                    },
                  ],
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#9e9e9e',
                    },
                  ],
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#ffffff',
                    },
                  ],
                },
                {
                  featureType: 'road.arterial',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#757575',
                    },
                  ],
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#dadada',
                    },
                  ],
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#616161',
                    },
                  ],
                },
                {
                  featureType: 'road.local',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#9e9e9e',
                    },
                  ],
                },
                {
                  featureType: 'transit.line',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#e5e5e5',
                    },
                  ],
                },
                {
                  featureType: 'transit.station',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#eeeeee',
                    },
                  ],
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [
                    {
                      color: '#c9c9c9',
                    },
                  ],
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [
                    {
                      color: '#9e9e9e',
                    },
                  ],
                },
              ]}
              style={styles.mapView}>
              <Marker coordinate={marker}></Marker>
            </MapView>
          </>
        )}

        {activeIndex == 4 && (
          <>
            <Text style={styles.heading}>Choose a Property Type</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={propertyType}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  setPropertyType(itemValue)
                }>
                <Picker.Item label="Driveway" value="Driveway" />
                <Picker.Item
                  label="Residential Garage"
                  value="Residential Garage"
                />
                <Picker.Item label="Open Air Lot" value="Open Air Lot" />
                <Picker.Item
                  label="Commercial Parking Structure"
                  value="Commercial Parking Structure"
                />
              </Picker>
            </View>
            {/* <View style={styles.rect5}>
            <View style={styles.rect6Row}>
              <TouchableOpacity
                style={
                  propertyType == 1 ? styles.activeBtn : styles.inactiveBtn
                }
                onPress={() => {
                  setPropertyType(1);
                }}>
                <IoniconsIcon
                  name="ios-car"
                  style={
                    propertyType == 1 ? styles.activeIcon : styles.inactiveIcon
                  }></IoniconsIcon>
                <Text
                  style={
                    propertyType == 1 ? styles.activeText : styles.inactiveText
                  }>
                  Driveway
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  propertyType == 2 ? styles.activeBtn : styles.inactiveBtn
                }
                onPress={() => {
                  setPropertyType(2);
                }}>
                <MaterialCommunityIconsIcon
                  name="garage"
                  style={
                    propertyType == 2 ? styles.activeIcon : styles.inactiveIcon
                  }></MaterialCommunityIconsIcon>

                <Text
                  style={
                    propertyType == 2 ? styles.activeText : styles.inactiveText
                  }>
                  Residential Garage
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icon2StackRow}>
              <TouchableOpacity
                style={
                  propertyType == 3 ? styles.activeBtn : styles.inactiveBtn
                }
                onPress={() => {
                  setPropertyType(3);
                }}>
                <IoniconsIcon
                  name="ios-car"
                  style={
                    propertyType == 3 ? styles.activeIcon : styles.inactiveIcon
                  }></IoniconsIcon>

                <Text
                  style={
                    propertyType == 3 ? styles.activeText : styles.inactiveText
                  }>
                  Open Air Lot
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  propertyType == 4 ? styles.activeBtn : styles.inactiveBtn
                }
                onPress={() => {
                  setPropertyType(4);
                }}>
                <MaterialCommunityIconsIcon
                  name="garage"
                  style={
                    propertyType == 4 ? styles.activeIcon : styles.inactiveIcon
                  }></MaterialCommunityIconsIcon>
                <Text
                  style={
                    propertyType == 4 ? styles.activeText : styles.inactiveText
                  }>
                  Commercial Parking Structure
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
          </>
        )}

        {activeIndex == 5 && (
          <>
            <Text style={styles.heading}>Add photos of this Listing</Text>
            <TouchableOpacity
              style={styles.addPhotoBtn}
              onPress={imagePickerHandler}>
              <Text style={styles.addPhotoBtnText}>+ Add Photos</Text>
            </TouchableOpacity>

            <View style={styles.imageList}>
              {images &&
                images.map((item) => (
                  <Image key={item.uri} source={item} style={styles.image} />
                ))}
            </View>

            {/* <View style={styles.rect10Stack}>
            <View style={styles.rect10}>
              <View style={styles.rect11Row}>
                <TouchableOpacity style={styles.rect11}>
                  <EntypoIcon name="image" style={styles.icon4}></EntypoIcon>
                  <Text style={styles.streetView}>Street View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rect12}>
                  <EntypoIcon name="image" style={styles.icon5}></EntypoIcon>
                  <Text style={styles.loremIpsum3}>Parking Area Entrance</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect13}>
              <EntypoIcon name="image" style={styles.icon6}></EntypoIcon>
              <Text style={styles.parkingSpaceStal}>Parking Space/Stal</Text>
            </View>
          </View> */}
          </>
        )}

        {activeIndex == 6 && (
          <>
            <Text style={styles.heading}>What features will you offer?</Text>
            <View style={styles.features}>
              {featureList.map((item) => (
                <RadioListItem
                  key={item}
                  label={item}
                  checked={features ? features.includes(item) : false}
                  onPress={() => {
                    toggleFeatures(item);
                  }}
                />
              ))}
            </View>
            {/* <View style={styles.rect14}>
            <View style={styles.rect15Row}>
              <View style={styles.rect15}>
                <Text style={styles.loremIpsum4}>24/7 access</Text>
              </View>
              <View style={styles.rect16}>
                <Text style={styles.carWash}>Car Wash</Text>
              </View>
              <View style={styles.rect17}>
                <Text style={styles.covered}>Covered</Text>
              </View>
            </View>
            <View style={styles.loremIpsum5StackRow}>
              <View style={styles.loremIpsum5Stack}>
                <View style={styles.rect20}>
                  <Text style={styles.eyCharging}>EY Charging</Text>
                </View>
              </View>
              <View style={styles.rect19}>
                <Text style={styles.fenced}>Fenced</Text>
              </View>
              <View style={styles.rect18}>
                <Text style={styles.mobilePass}>Mobile Pass</Text>
              </View>
            </View>
            <View style={styles.loremIpsum6StackRow}>
              <View style={styles.loremIpsum6Stack}>
                <View style={styles.rect23}>
                  <Text style={styles.paved}>Paved</Text>
                </View>
              </View>
              <View style={styles.rect22}>
                <Text style={styles.security}>Security</Text>
              </View>
              <View style={styles.rect21}>
                <Text style={styles.staffOnsite}>Staff onsite</Text>
              </View>
            </View>
            <View style={styles.loremIpsum7StackRow}>
              <View style={styles.loremIpsum7Stack}>
                <View style={styles.rect26}>
                  <Text style={styles.tandem}>Tandem</Text>
                </View>
              </View>
              <View style={styles.rect25}>
                <Text style={styles.unpaved}>Unpaved</Text>
              </View>
              <View style={styles.rect24}>
                <Text style={styles.valet}>Valet</Text>
              </View>
            </View>
          </View> */}
          </>
        )}

        {/* <View style={styles.btnRow}> */}
        {/* {activeIndex != 1 && (
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        )} */}

        {/* <MaterialButtonPrimary
          onPress={onSubmitHandler}
          caption="NEXT"
          style={styles.materialButtonPrimary}></MaterialButtonPrimary> */}

        {/* </View> */}
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
    zIndex: 0,
    paddingVertical: 80,
  },
  heading: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
  },
  location: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 17,
    fontWeight: '500',

    // marginLeft: 23,
  },
  pickerContainer: {
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    // marginVertical: 10,
    // fontSize: 18,
  },
  label: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '700',
    // marginLeft: 24,
  },
  rect: {
    width: 330,
    height: 43,
    flexDirection: 'row',
    marginTop: 18,
    // marginLeft: 23,
  },
  inactiveTab: {
    width: 94,
    height: 31,
    borderWidth: 2,
    borderColor: 'rgba(182,182,182,1)',
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  activeTab: {
    width: 110,
    height: 31,
    borderRadius: 21,
    backgroundColor: 'rgba(39,170,225,1)',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
  },
  activeIcon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 58,
    // height: 63,
    // width: 58,
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
    textAlign: 'center',
  },
  inactiveIcon: {
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    // height: 65,
    // width: 49,
  },
  rect4: {
    width: 85,
    height: 31,
    borderWidth: 2,
    borderColor: 'rgba(182,182,182,1)',
    borderRadius: 21,
    marginLeft: 5,
    marginTop: 8,
  },
  rect2Row: {
    height: 31,
    flexDirection: 'row',
    flex: 1,
    marginRight: 32,
    marginTop: 5,
  },
  textInput: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    height: 41,
    width: '100%',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    // marginLeft: 24,
  },
  listingAddress: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 16,
    // marginLeft: 24,
  },
  placeholder: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: '100%',
    // marginTop: 26,
    // borderBottomColor: '#d6d6d6',
    // borderBottomWidth: 1,
    fontSize: 18,
    // marginLeft: 23,
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
  },
  mapView: {
    height: 400,
    width: 375,
    marginTop: 21,
  },
  propertyType: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 29,
    // marginLeft: 21,
  },
  rect5: {
    width: 250,
    height: 235,
    marginTop: 19,
    // marginLeft: 23,
  },
  rect6: {
    width: 119,
    height: 112,
    backgroundColor: 'rgba(39,170,225,0.2)',
  },
  icon: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    height: 65,
    width: 49,
  },
  driveway: {
    top: 62,
    left: 0,
    position: 'absolute',
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 11,
  },
  iconStack: {
    width: 49,
    height: 75,
    marginTop: 13,
    marginLeft: 35,
  },
  icon1: {
    top: 11,
    left: 28,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    height: 65,
    width: 60,
  },
  rect7: {
    top: 0,
    left: 0,
    width: 119,
    height: 112,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.2)',
  },
  residentialGarage: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 74,
    marginLeft: 21,
  },
  icon1Stack: {
    width: 119,
    height: 112,
    marginLeft: 12,
  },
  rect6Row: {
    height: 112,
    flexDirection: 'row',
  },
  icon2: {
    top: 13,
    left: 35,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    height: 65,
    width: 53,
  },
  rect8: {
    top: 0,
    left: 0,
    width: 119,
    height: 112,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.2)',
  },
  openAirLot: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 11,
    marginTop: 74,
    marginLeft: 28,
  },
  icon2Stack: {
    width: 119,
    height: 112,
  },
  rect9: {
    width: 119,
    height: 112,
    backgroundColor: 'rgba(39,170,225,0.2)',
    marginLeft: 12,
  },
  icon3: {
    top: 0,
    left: 23,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 60,
    height: 65,
    width: 60,
  },
  loremIpsum: {
    top: 62,
    left: 0,
    position: 'absolute',
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 11,
    textAlign: 'center',
  },
  icon3Stack: {
    width: 112,
    height: 89,
    marginTop: 10,
    marginLeft: 4,
  },
  icon2StackRow: {
    height: 112,
    flexDirection: 'row',
    marginTop: 11,
  },
  loremIpsum2: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 31,
    // marginLeft: 19,
  },
  addPhotoBtn: {
    borderColor: '#0b4094',
    borderWidth: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 6,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  addPhotoBtnText: {
    color: '#0b4094',
    fontWeight: '700',
    fontSize: 16,
  },
  imageList: {},
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  rect10: {
    top: 0,
    left: 0,
    width: 261,
    height: 73,
    position: 'absolute',
    flexDirection: 'row',
  },
  rect11: {
    width: 84,
    height: 84,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon4: {
    color: 'rgba(214,214,214,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 9,
    // marginLeft: 25,
  },
  streetView: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 10,
    marginTop: 3,
    // marginLeft: 16,
  },
  rect12: {
    width: 84,
    height: 84,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginLeft: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon5: {
    color: 'rgba(214,214,214,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 9,
    // marginLeft: 27,
  },
  loremIpsum3: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 1,
    // marginLeft: 13,
  },
  rect11Row: {
    height: 73,
    flexDirection: 'row',
    flex: 1,
    marginRight: 83,
  },
  rect13: {
    top: 0,
    left: 187,
    width: 84,
    height: 84,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon6: {
    color: 'rgba(214,214,214,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 9,
    // marginLeft: 27,
  },
  parkingSpaceStal: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 10,
    textAlign: 'center',
    // marginLeft: 8,
  },
  rect10Stack: {
    width: 271,
    height: 73,
    marginTop: 16,
    // marginLeft: 19,
  },
  listingFeatures: {
    // fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginVertical: 20,
    // marginLeft: 20,
  },
  features: {},
  feature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    paddingVertical: 5,
  },
  featureText: {
    fontSize: 18,
  },
  rect14: {
    width: 340,
    height: 180,
    marginTop: 12,
    // marginLeft: 20,
  },
  rect15: {
    width: 110,
    height: 31,
    borderRadius: 20,
    backgroundColor: 'rgba(39,170,225,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loremIpsum4: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  rect16: {
    width: 110,
    height: 31,
    borderRadius: 20,
    backgroundColor: 'rgba(39,170,225,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carWash: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  rect17: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  covered: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
  },
  rect15Row: {
    height: 32,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 1,
    marginRight: 1,
  },
  loremIpsum5: {
    top: 10,
    left: 24,
    position: 'absolute',
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  rect20: {
    top: 0,
    left: 0,
    width: 110,
    height: 31,
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyCharging: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
  },
  loremIpsum5Stack: {
    width: 110,
    height: 32,
  },
  rect19: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fenced: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    // marginTop: 10,
    // marginLeft: 36,
  },
  rect18: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobilePass: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    // marginTop: 10,
    // marginLeft: 26,
  },
  loremIpsum5StackRow: {
    height: 32,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 1,
    marginRight: 1,
  },
  loremIpsum6: {
    top: 10,
    left: 24,
    position: 'absolute',
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  rect23: {
    top: 0,
    left: 0,
    width: 110,
    height: 31,
    position: 'absolute',
    borderRadius: 20,
    backgroundColor: 'rgba(39,170,225,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paved: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  loremIpsum6Stack: {
    width: 110,
    height: 32,
  },
  rect22: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  security: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
  },
  rect21: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  staffOnsite: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    // marginTop: 10,
    // marginLeft: 28,
  },
  loremIpsum6StackRow: {
    height: 32,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 1,
    marginRight: 1,
  },
  loremIpsum7: {
    top: 10,
    left: 24,
    position: 'absolute',
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  rect26: {
    top: 0,
    left: 0,
    width: 110,
    height: 31,
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tandem: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
  },
  loremIpsum7Stack: {
    width: 110,
    height: 32,
  },
  rect25: {
    width: 110,
    height: 31,
    borderRadius: 20,
    backgroundColor: 'rgba(39,170,225,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unpaved: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  rect24: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valet: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
  },
  loremIpsum7StackRow: {
    height: 32,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 1,
    marginRight: 1,
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
  materialButtonPrimary: {
    width: 100,
    height: 36,
    marginVertical: 67,
    alignSelf: 'center',
  },
});

AddListingLocation.propTypes = {
  addListingLocation: PropTypes.func.isRequired,
};

export default connect(null, {addListingLocation})(AddListingLocation);
