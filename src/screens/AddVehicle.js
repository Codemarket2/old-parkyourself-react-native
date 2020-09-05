import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialButtonPrimary from '../components/MaterialButtonPrimary';

function Untitled19(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.addAVehicle}>Add a Vehicle</Text>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIconsIcon
          name='image-plus'
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.uploadImage}>Upload Image</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='License Plate'
        placeholderTextColor='rgba(214,214,214,1)'
        style={styles.licensePlate}
      ></TextInput>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.vehicleType}>Vehicle Type</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.make}>Make</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.model}>Model</Text>
      </TouchableOpacity>
      <TextInput
        placeholder='Year'
        placeholderTextColor='rgba(214,214,214,1)'
        style={styles.placeholder}
      ></TextInput>
      <View style={styles.vehicleSizeRow}>
        <Text style={styles.vehicleSize}>Vehicle Size</Text>
        <Text style={styles.loremIpsum}>Vehicle size description</Text>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.button5Row}>
            <TouchableOpacity style={styles.button5}>
              <FontAwesomeIcon
                name='motorcycle'
                style={styles.icon2}
              ></FontAwesomeIcon>
              <Text style={styles.motorcycle}>Motorcycle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button6}>
              <View style={styles.icon3Stack}>
                <MaterialCommunityIconsIcon
                  name='car-sports'
                  style={styles.icon3}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.compact}>Compact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button7}>
              <View style={styles.icon4Stack}>
                <MaterialCommunityIconsIcon
                  name='car-side'
                  style={styles.icon4}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.midSized}>Mid Sized</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button8}>
            <FontAwesomeIcon
              name='truck'
              style={styles.icon6}
            ></FontAwesomeIcon>
            <Text style={styles.oversized}>Oversized</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button9}>
          <View style={styles.icon5Stack}>
            <MaterialCommunityIconsIcon
              name='car-estate'
              style={styles.icon5}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.large}>Large</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder='Color'
        placeholderTextColor='rgba(214,214,214,1)'
        style={styles.placeholder2}
      ></TextInput>
      <MaterialButtonPrimary
        caption='ADD VEHICLE'
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addAVehicle: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 22,
    marginLeft: 26,
  },
  button: {
    width: 326,
    height: 178,
    borderWidth: 1,
    borderColor: 'rgba(221,219,219,1)',
    marginTop: 28,
    marginLeft: 26,
  },
  icon: {
    color: 'rgba(214,214,214,1)',
    fontSize: 56,
    height: 61,
    width: 56,
    marginTop: 37,
    marginLeft: 134,
  },
  uploadImage: {
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 20,
    marginTop: 7,
    marginLeft: 102,
  },
  licensePlate: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 49,
    width: 326,
    fontSize: 20,
    marginTop: 18,
    marginLeft: 26,
  },
  button2: {
    width: 326,
    height: 51,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 11,
    marginLeft: 26,
  },
  vehicleType: {
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 1,
  },
  button3: {
    width: 326,
    height: 51,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 13,
    marginLeft: 26,
  },
  make: {
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 1,
  },
  button4: {
    width: 326,
    height: 51,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 13,
    marginLeft: 26,
  },
  model: {
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 2,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 51,
    width: 326,
    fontSize: 20,
    marginTop: 15,
    marginLeft: 26,
  },
  vehicleSize: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    fontSize: 13,
    marginLeft: 83,
    marginTop: 6,
  },
  vehicleSizeRow: {
    height: 25,
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 26,
    marginRight: 21,
  },
  rect: {
    top: 0,
    left: 1,
    width: 327,
    height: 201,
    position: 'absolute',
  },
  button5: {
    width: 103,
    height: 96,
    backgroundColor: 'rgba(39,170,225,0.3)',
  },
  icon2: {
    color: 'rgba(39,170,225,1)',
    fontSize: 40,
    height: 40,
    width: 51,
    marginTop: 17,
    marginLeft: 28,
  },
  motorcycle: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
    marginTop: 5,
    marginLeft: 20,
  },
  button6: {
    width: 103,
    height: 96,
    backgroundColor: 'rgba(39,170,225,0.3)',
    marginLeft: 9,
  },
  icon3: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 58,
    height: 63,
    width: 58,
  },
  compact: {
    top: 57,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
  },
  icon3Stack: {
    width: 58,
    height: 73,
    marginTop: 5,
    marginLeft: 22,
  },
  button7: {
    width: 103,
    height: 96,
    backgroundColor: 'rgba(39,170,225,0.3)',
    marginLeft: 9,
  },
  icon4: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 58,
    height: 63,
    width: 58,
  },
  midSized: {
    top: 56,
    left: 1,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
  },
  icon4Stack: {
    width: 58,
    height: 72,
    marginTop: 8,
    marginLeft: 23,
  },
  button5Row: {
    height: 96,
    flexDirection: 'row',
  },
  button8: {
    width: 103,
    height: 96,
    backgroundColor: 'rgba(39,170,225,0.3)',
    marginTop: 8,
    marginLeft: 111,
  },
  icon6: {
    color: 'rgba(39,170,225,1)',
    fontSize: 50,
    height: 50,
    width: 50,
    marginTop: 11,
    marginLeft: 26,
  },
  oversized: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
    marginTop: 3,
    marginLeft: 25,
  },
  button9: {
    top: 104,
    left: 0,
    width: 103,
    height: 96,
    position: 'absolute',
    backgroundColor: 'rgba(39,170,225,0.3)',
  },
  icon5: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 58,
    height: 63,
    width: 58,
  },
  large: {
    top: 55,
    left: 12,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 13,
  },
  icon5Stack: {
    width: 58,
    height: 71,
    marginTop: 8,
    marginLeft: 23,
  },
  rectStack: {
    width: 328,
    height: 201,
    marginTop: 21,
    marginLeft: 27,
  },
  placeholder2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 51,
    width: 327,
    fontSize: 20,
    marginTop: 29,
    marginLeft: 28,
  },
  materialButtonPrimary: {
    width: 130,
    height: 35,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop: 26,
    marginLeft: 121,
  },
});

export default Untitled19;
