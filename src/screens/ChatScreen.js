import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Untitled24(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.gabrielaPepe}>Gabriela &amp; Pepe</Text>
      <Text style={styles.loremIpsum}>906 Peg Shop St. Franklyn, NY 11209</Text>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <Icon name='user-circle' style={styles.icon}></Icon>
            <View style={styles.rect3}>
              <Text style={styles.loremIpsum2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text style={styles.loremIpsum3}>11:52 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gabrielaPepe: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 56,
    marginLeft: 16,
  },
  loremIpsum: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginTop: 8,
    marginLeft: 17,
  },
  rect: {
    width: 375,
    height: 570,
    marginTop: 29,
  },
  rect2: {
    width: 375,
    height: 131,
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 50,
    height: 50,
    width: 50,
    marginTop: 54,
  },
  rect3: {
    width: 205,
    height: 105,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginLeft: 9,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    lineHeight: 22,
    fontSize: 15,
    marginTop: 13,
    marginLeft: 14,
  },
  loremIpsum3: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 13,
    marginTop: 2,
    marginLeft: 139,
  },
  iconRow: {
    height: 105,
    flexDirection: 'row',
    flex: 1,
    marginRight: 95,
    marginLeft: 16,
    marginTop: 11,
  },
});

export default Untitled24;
