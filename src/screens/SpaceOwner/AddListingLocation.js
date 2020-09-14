import React, {Component, useState} from 'react';
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
import MapView from 'react-native-maps';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import {addListingLocation} from '../../actions/listing';
import {connect} from 'react-redux';

function AddListingLocation({navigation, addListingLocation}) {
  const [listingType, setListingType] = useState(1);
  const [propertyType, setPropertyType] = useState(1);
  const [propertyName, setPropertyName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [unitNum, setUnitNum] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [features, setFeatures] = useState([
    '24/7 access',
    'Car Wash',
    'Paved',
    'Unpaved',
  ]);

  const onSubmitHandler = () => {
    try {
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
        phone
      ) {
        let locationData = {
          listingType:
            listingType == 1
              ? 'Business'
              : listingType == 2
              ? 'Residential'
              : 'Others',
          propertyName: propertyName,
          listingAddress: {
            country,
            address,
            unitNum,
            city,
            state,
            postalCode,
            phone,
          },
          propertyType:
            propertyType == 1
              ? 'Driveway'
              : propertyType == 2
              ? 'Residential Garage'
              : propertyType == 3
              ? 'Open Air Lot'
              : 'Commercial Parking Structure',
          features: features,
        };

        addListingLocation(locationData);

        navigation.navigate('AddListingSpaceDetails');
      } else {
        Alert.alert('Missing Inputs', 'Please fill all required inputs');
      }
    } catch (error) {
      Alert.alert('Something Went wrong!', 'Unable to add location data');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.addAListing}>Add a Listing</Text>
      <Text style={styles.location}>Location</Text>
      <Text style={styles.listingType}>Listing Type</Text>
      <View style={styles.rect}>
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
      </View>
      <TextInput
        placeholder="Business/Property Name"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.textInput}
        value={propertyName}
        onChangeText={(input) => setPropertyName(input)}></TextInput>
      <Text style={styles.listingAddress}>Listing Address</Text>
      <TextInput
        placeholder="Country"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={country}
        onChangeText={(input) => setCountry(input)}></TextInput>
      <TextInput
        placeholder="Address"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={address}
        onChangeText={(input) => setAddress(input)}></TextInput>
      <TextInput
        placeholder="Unit #"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={unitNum}
        onChangeText={(input) => setUnitNum(input)}></TextInput>
      <TextInput
        placeholder="City/Town"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={city}
        onChangeText={(input) => setCity(input)}></TextInput>
      <TextInput
        placeholder="State/Province"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={state}
        onChangeText={(input) => setState(input)}></TextInput>
      <TextInput
        placeholder="Postal Code"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={postalCode}
        onChangeText={(input) => setPostalCode(input)}></TextInput>
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}
        value={phone}
        onChangeText={(input) => setPhone(input)}></TextInput>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
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
        style={styles.mapView}></MapView>
      <Text style={styles.propertyType}>Property Type</Text>
      <View style={styles.rect5}>
        <View style={styles.rect6Row}>
          <TouchableOpacity
            style={propertyType == 1 ? styles.activeBtn : styles.inactiveBtn}
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
            style={propertyType == 2 ? styles.activeBtn : styles.inactiveBtn}
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
            style={propertyType == 3 ? styles.activeBtn : styles.inactiveBtn}
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
            style={propertyType == 4 ? styles.activeBtn : styles.inactiveBtn}
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
      </View>
      <Text style={styles.loremIpsum2}>Add Images of this Listing</Text>
      <View style={styles.rect10Stack}>
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
      </View>
      <Text style={styles.listingFeatures}>Listing Features</Text>
      <View style={styles.rect14}>
        <View style={styles.rect15Row}>
          <TouchableOpacity style={styles.rect15}>
            <Text style={styles.loremIpsum4}>24/7 access</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect16}>
            <Text style={styles.carWash}>Car Wash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect17}>
            <Text style={styles.covered}>Covered</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loremIpsum5StackRow}>
          <TouchableOpacity style={styles.loremIpsum5Stack}>
            <View style={styles.rect20}>
              <Text style={styles.eyCharging}>EY Charging</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect19}>
            <Text style={styles.fenced}>Fenced</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect18}>
            <Text style={styles.mobilePass}>Mobile Pass</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loremIpsum6StackRow}>
          <TouchableOpacity style={styles.loremIpsum6Stack}>
            <View style={styles.rect23}>
              <Text style={styles.paved}>Paved</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect22}>
            <Text style={styles.security}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect21}>
            <Text style={styles.staffOnsite}>Staff onsite</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loremIpsum7StackRow}>
          <TouchableOpacity style={styles.loremIpsum7Stack}>
            <View style={styles.rect26}>
              <Text style={styles.tandem}>Tandem</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect25}>
            <Text style={styles.unpaved}>Unpaved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rect24}>
            <Text style={styles.valet}>Valet</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MaterialButtonPrimary
        onPress={onSubmitHandler}
        caption="NEXT"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  addAListing: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
  location: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginTop: 17,
    // marginLeft: 23,
  },
  listingType: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 19,
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 41,
    width: '100%',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    // marginLeft: 24,
  },
  listingAddress: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 16,
    // marginLeft: 24,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: '100%',
    marginTop: 26,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    // marginLeft: 23,
  },
  mapView: {
    height: 290,
    width: 375,
    marginTop: 41,
  },
  propertyType: {
    fontFamily: 'roboto-500',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 31,
    // marginLeft: 19,
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 50,
    // marginLeft: 20,
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
