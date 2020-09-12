import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function AddListingLocation(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.addAListing}>Add a Listing</Text>
      <Text style={styles.location}>Location</Text>
      <Text style={styles.listingType}>Listing Type</Text>
      <View style={styles.rect}>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <Text style={styles.business}>Business</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.residential}>Residential</Text>
          </View>
          <View style={styles.rect4}>
            <Text style={styles.others}>Others</Text>
          </View>
        </View>
      </View>
      <TextInput
        placeholder="Business/Property Name"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.textInput}></TextInput>
      <Text style={styles.listingAddress}>Listing Address</Text>
      <TextInput
        placeholder="Country"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder}></TextInput>
      <TextInput
        placeholder="Address"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder1}></TextInput>
      <TextInput
        placeholder="Unit #"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder2}></TextInput>
      <TextInput
        placeholder="City/Town"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder3}></TextInput>
      <TextInput
        placeholder="State/Province"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder4}></TextInput>
      <TextInput
        placeholder="Postal Code"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder5}></TextInput>
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="rgba(182,182,182,1)"
        style={styles.placeholder6}></TextInput>
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
          <View style={styles.rect6}>
            <View style={styles.iconStack}>
              <IoniconsIcon name="ios-car" style={styles.icon}></IoniconsIcon>
              <Text style={styles.driveway}>Driveway</Text>
            </View>
          </View>
          <View style={styles.icon1Stack}>
            <MaterialCommunityIconsIcon
              name="garage"
              style={styles.icon1}></MaterialCommunityIconsIcon>
            <View style={styles.rect7}>
              <Text style={styles.residentialGarage}>Residential Garage</Text>
            </View>
          </View>
        </View>
        <View style={styles.icon2StackRow}>
          <View style={styles.icon2Stack}>
            <IoniconsIcon
              name="logo-model-s"
              style={styles.icon2}></IoniconsIcon>
            <View style={styles.rect8}>
              <Text style={styles.openAirLot}>Open Air Lot</Text>
            </View>
          </View>
          <View style={styles.rect9}>
            <View style={styles.icon3Stack}>
              <MaterialCommunityIconsIcon
                name="garage"
                style={styles.icon3}></MaterialCommunityIconsIcon>
              <Text style={styles.loremIpsum}>
                Commercial Parking Structure
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.loremIpsum2}>Add Images of this Listing</Text>
      <View style={styles.rect10Stack}>
        <View style={styles.rect10}>
          <View style={styles.rect11Row}>
            <View style={styles.rect11}>
              <EntypoIcon name="image" style={styles.icon4}></EntypoIcon>
              <Text style={styles.streetView}>Street View</Text>
            </View>
            <View style={styles.rect12}>
              <EntypoIcon name="image" style={styles.icon5}></EntypoIcon>
              <Text style={styles.loremIpsum3}>Parking Area Entrance</Text>
            </View>
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
            <Text style={styles.loremIpsum5}>24/7 access</Text>
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
            <Text style={styles.loremIpsum6}>24/7 access</Text>
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
            <Text style={styles.loremIpsum7}>24/7 access</Text>
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
      </View>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary}></MaterialButtonPrimary>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  addAListing: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    // marginTop: 28,
    // marginLeft: 24,
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
  rect2: {
    width: 94,
    height: 31,
    borderWidth: 2,
    borderColor: 'rgba(182,182,182,1)',
    borderRadius: 21,
  },
  business: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginTop: 7,
    // marginLeft: 21,
  },
  rect3: {
    width: 110,
    height: 31,
    borderRadius: 21,
    backgroundColor: 'rgba(39,170,225,1)',
    marginLeft: 4,
  },
  residential: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    marginTop: 8,
    // marginLeft: 21,
  },
  rect4: {
    width: 85,
    height: 31,
    borderWidth: 2,
    borderColor: 'rgba(182,182,182,1)',
    borderRadius: 21,
    marginLeft: 5,
  },
  others: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginTop: 8,
    // marginLeft: 23,
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
    width: 329,
    marginTop: 15,
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
    width: 330,
    marginTop: 26,
    // marginLeft: 23,
  },
  placeholder1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 330,
    marginTop: 7,
    // marginLeft: 23,
  },
  placeholder2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 330,
    marginTop: 6,
    // marginLeft: 23,
  },
  placeholder3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 330,
    marginTop: 8,
    // marginLeft: 23,
  },
  placeholder4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 330,
    marginTop: 6,
    // marginLeft: 23,
  },
  placeholder5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 330,
    marginTop: 8,
    // marginLeft: 23,
  },
  placeholder6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 330,
    marginTop: 9,
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
    marginLeft: 19,
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
    height: 73,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  icon4: {
    color: 'rgba(214,214,214,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 9,
    marginLeft: 25,
  },
  streetView: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 10,
    marginTop: 3,
    marginLeft: 16,
  },
  rect12: {
    width: 84,
    height: 73,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginLeft: 10,
  },
  icon5: {
    color: 'rgba(214,214,214,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 9,
    marginLeft: 27,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 1,
    marginLeft: 13,
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
    height: 73,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  icon6: {
    color: 'rgba(214,214,214,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 9,
    marginLeft: 27,
  },
  parkingSpaceStal: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 10,
    textAlign: 'center',
    marginLeft: 8,
  },
  rect10Stack: {
    width: 271,
    height: 73,
    marginTop: 16,
    marginLeft: 19,
  },
  listingFeatures: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 30,
    marginLeft: 20,
  },
  rect14: {
    width: 340,
    height: 180,
    marginTop: 12,
    marginLeft: 20,
  },
  rect15: {
    width: 110,
    height: 31,
    borderRadius: 20,
    backgroundColor: 'rgba(39,170,225,1)',
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 24,
  },
  rect16: {
    width: 110,
    height: 31,
    borderRadius: 20,
    backgroundColor: 'rgba(39,170,225,1)',
    marginLeft: 4,
  },
  carWash: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 31,
  },
  rect17: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
  },
  covered: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 11,
    marginLeft: 36,
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
  },
  eyCharging: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 11,
    marginLeft: 24,
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
  },
  fenced: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 36,
  },
  rect18: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
  },
  mobilePass: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 26,
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
  },
  paved: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
    marginTop: 9,
    marginLeft: 37,
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
  },
  security: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 11,
    marginLeft: 35,
  },
  rect21: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
  },
  staffOnsite: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 28,
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
  },
  tandem: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 36,
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
  },
  unpaved: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
    marginTop: 11,
    marginLeft: 32,
  },
  rect24: {
    width: 110,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 4,
  },
  valet: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 11,
    marginTop: 10,
    marginLeft: 42,
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
    marginTop: 67,
    marginLeft: 146,
  },
});

export default AddListingLocation;
