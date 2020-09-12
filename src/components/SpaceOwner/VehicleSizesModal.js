import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function VehicleSizesModal(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>How do I determine my space size?</Text>
      <EntypoIcon name="cross" style={styles.icon}></EntypoIcon>
      <View style={styles.icon2Stack}>
        <MaterialCommunityIconsIcon
          name="car-estate"
          style={styles.icon2}></MaterialCommunityIconsIcon>
        <Text style={styles.large1}>Large</Text>
      </View>
      <View style={styles.icon3Stack}>
        <MaterialCommunityIconsIcon
          name="car-side"
          style={styles.icon3}></MaterialCommunityIconsIcon>
        <Text style={styles.midSized1}>Mid Sized</Text>
      </View>
      <View style={styles.icon4Stack}>
        <MaterialCommunityIconsIcon
          name="car-sports"
          style={styles.icon4}></MaterialCommunityIconsIcon>
        <Text style={styles.compact1}>Compact</Text>
      </View>
      <FontAwesomeIcon name="truck" style={styles.icon1}></FontAwesomeIcon>
      <Text style={styles.oversized1}>Oversized</Text>
      <View style={styles.motorcycle1Stack}>
        <Text style={styles.motorcycle1}>Motorcycle</Text>
        <FontAwesomeIcon
          name="motorcycle"
          style={styles.icon5}></FontAwesomeIcon>
      </View>
      <Text style={styles.loremIpsum2}>
        Motorcycle and Motorbike spaces are a minimum size of 3 by 6 feet. Each
        bicycle space shall be a minimum of 2 by 6 feet.
      </Text>
      <Text style={styles.loremIpsum3}>
        Compact cars are roughly 5-6 feet wide and 11-14 feet long. Comon
        vehicles that should be able to fit in compact spaces are Mini Cooper,
        Honda Civic, Toyota Corolla, and Toyota Pruis.
      </Text>
      <Text style={styles.loremIpsum4}>
        Mid size cars are roughly 5-6 feet wide and 14-16.5 feet long. Common
        vehicles that should be able to fit in mid size spaces are Nissan
        altima, Toyota Camry, Honda Accord
      </Text>
      <Text style={styles.loremIpsum5}>
        Large cars are 6-6.5 feet wide and 16-18 feet long. Common vehicles that
        should be able to fit in large spaces are Toyota Highlander, Toyota
        Tacoma, Mercedes E-Classs, Tesla Model S.
      </Text>
      <Text style={styles.loremIpsum6}>
        Oversized cars are 6-7 feet wide and 17-20 feet long. Common vehicles
        that should be able to fit in oversized spaces are Chevy Suburban, Ford
        F-150, Chevy Silverado, Most Cargo Vans.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 15,
    marginTop: 48,
    marginLeft: 26,
  },
  icon: {
    color: 'rgba(182,182,182,1)',
    fontSize: 25,
    marginTop: -58,
    marginLeft: 266,
  },
  icon2: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 90,
  },
  large1: {
    top: 77,
    left: 21,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
  },
  icon2Stack: {
    width: 90,
    height: 98,
    marginTop: 744,
    marginLeft: 108,
  },
  icon3: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 95,
  },
  midSized1: {
    top: 85,
    left: 11,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
  },
  icon3Stack: {
    width: 95,
    height: 104,
    marginTop: -337,
    marginLeft: 101,
  },
  icon4: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 100,
  },
  compact1: {
    top: 89,
    left: 13,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
  },
  icon4Stack: {
    width: 100,
    height: 109,
    marginTop: -359,
    marginLeft: 97,
  },
  icon1: {
    color: 'rgba(39,170,225,1)',
    fontSize: 80,
    marginTop: 631,
    marginLeft: 109,
  },
  oversized1: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
    marginTop: 2,
    marginLeft: 116,
  },
  motorcycle1: {
    top: 68,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
  },
  icon5: {
    top: 0,
    left: 0,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 70,
  },
  motorcycle1Stack: {
    width: 90,
    height: 83,
    marginTop: -1018,
    marginLeft: 100,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 16,
    marginLeft: 42,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 132,
    marginLeft: 31,
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 141,
    marginLeft: 30,
  },
  loremIpsum5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    marginTop: 147,
    marginLeft: 29,
  },
  loremIpsum6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    textAlign: 'center',
    marginTop: 160,
    marginLeft: 30,
  },
});

export default VehicleSizesModal;
