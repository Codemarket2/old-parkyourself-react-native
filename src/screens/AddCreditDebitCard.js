import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCheckbox1 from '../components/MaterialCheckbox1';
import MaterialButtonPrimary from '../components/MaterialButtonPrimary';

function Untitled20(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.loremIpsum}>Add Credit/Debit card</Text>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require('../assets/images/Gradient_Ehls5MT.png')}
      >
        <Icon name='cc-visa' style={styles.icon}></Icon>
        <Text style={styles.platinum}>Platinum</Text>
        <Text style={styles.loremIpsum2}>********0212</Text>
      </ImageBackground>
      <TextInput
        placeholder='xxxx-xxxx-xxxx-xxxx'
        placeholderTextColor='rgba(214,214,214,1)'
        style={styles.placeholder}
      ></TextInput>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.mmYy}>MM/YY</Text>
        </TouchableOpacity>
        <TextInput
          placeholder='Name on Card'
          placeholderTextColor='rgba(214,214,214,1)'
          style={styles.nameOnCard}
        ></TextInput>
      </View>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}>
          <Text style={styles.setAsDefault}>Set as Default</Text>
        </View>
        <MaterialCheckbox1 style={styles.materialCheckbox1}></MaterialCheckbox1>
      </View>
      <TextInput
        placeholder='Profile Category'
        placeholderTextColor='rgba(214,214,214,1)'
        style={styles.profileCategory}
      ></TextInput>
      <MaterialButtonPrimary
        caption='ADD CARD'
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 60,
    marginLeft: 19,
  },
  rect: {
    width: 342,
    height: 217,
    borderRadius: 23,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 90,
    shadowOpacity: 0.3,
    shadowRadius: 30,
    marginTop: 28,
    marginLeft: 17,
    overflow: 'hidden',
  },
  rect_imageStyle: {},
  icon: {
    fontSize: 58,
    color: 'rgba(255,255,255,1)',
    height: 58,
    width: 75,
    marginTop: 18,
    marginLeft: 26,
  },
  platinum: {
    fontFamily: 'roboto-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    letterSpacing: 2,
    marginTop: 8,
    marginLeft: 25,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 64,
    marginLeft: 26,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 51,
    width: 341,
    fontSize: 20,
    marginTop: 35,
    marginLeft: 19,
  },
  button: {
    width: 99,
    height: 45,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    backgroundColor: '#fff',
  },
  mmYy: {
    fontFamily: 'roboto-regular',
    color: 'rgba(214,214,214,1)',
    fontSize: 18,
    marginTop: 12,
    marginLeft: 19,
  },
  nameOnCard: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    width: 224,
    lineHeight: 14,
    fontSize: 20,
    marginLeft: 14,
  },
  buttonRow: {
    height: 45,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 19,
    marginRight: 19,
  },
  rect2: {
    top: 0,
    left: 7,
    width: 211,
    height: 51,
    position: 'absolute',
  },
  setAsDefault: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 14,
    marginLeft: 37,
  },
  materialCheckbox1: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: 0,
    top: 6,
  },
  rect2Stack: {
    width: 218,
    height: 51,
    marginTop: 28,
    marginLeft: 12,
  },
  profileCategory: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 48,
    width: 341,
    fontSize: 20,
    marginTop: 9,
    marginLeft: 19,
  },
  materialButtonPrimary: {
    width: 120,
    height: 40,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 90,
    shadowOpacity: 0.3,
    shadowRadius: 30,
    marginTop: 52,
    marginLeft: 123,
  },
});

export default Untitled20;
