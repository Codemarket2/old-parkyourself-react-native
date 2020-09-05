import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';

function Untitled22(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.payments}>Payments</Text>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <FontAwesomeIcon
              name='cc-visa'
              style={styles.icon}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum}>VISA xxxx-xxxx-xxxx-6594</Text>
            <FontAwesomeIcon
              name='trash-o'
              style={styles.icon2}
            ></FontAwesomeIcon>
          </View>
        </View>
        <View style={styles.icon3StackStack}>
          <View style={styles.icon3Stack}>
            <FontAwesomeIcon
              name='trash-o'
              style={styles.icon3}
            ></FontAwesomeIcon>
            <View style={styles.rect3}>
              <Text style={styles.loremIpsum1}>VISA xxxx-xxxx-xxxx-6594</Text>
            </View>
          </View>
          <FontAwesomeIcon
            name='cc-visa'
            style={styles.icon4}
          ></FontAwesomeIcon>
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.icon5Row}>
            <EntypoIcon
              name='circle-with-plus'
              style={styles.icon5}
            ></EntypoIcon>
            <Text style={styles.addPaymentMethod}>Add Payment Method</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect5}>
        <Text style={styles.riderProfile}>Rider Profile</Text>
        <View style={styles.rect6}>
          <View style={styles.icon6Row}>
            <MaterialCommunityIconsIcon
              name='google'
              style={styles.icon6}
            ></MaterialCommunityIconsIcon>
            <View style={styles.personalProfileColumn}>
              <Text style={styles.personalProfile}>PERSONAL PROFILE</Text>
              <Text style={styles.robert308GmailCom}>robert308@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect7}>
          <View style={styles.icon8Row}>
            <SimpleLineIconsIcon
              name='briefcase'
              style={styles.icon8}
            ></SimpleLineIconsIcon>
            <View style={styles.businessProfileColumn}>
              <Text style={styles.businessProfile}>BUSINESS PROFILE</Text>
              <Text style={styles.loremIpsum2}>Set Up Business Profile</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect8Stack}>
        <View style={styles.rect8}></View>
        <Text style={styles.promotions}>Promotions</Text>
        <TouchableOpacity style={styles.button2}>
          <View style={styles.icon9Row}>
            <EntypoIcon
              name='circle-with-plus'
              style={styles.icon9}
            ></EntypoIcon>
            <Text style={styles.addPromoCode}>Add Promo Code</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  payments: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 60,
    marginLeft: 24,
  },
  rect: {
    width: 329,
    height: 208,
    marginTop: 17,
    marginLeft: 24,
  },
  rect2: {
    width: 329,
    height: 70,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 28,
    color: 'rgba(11,64,148,1)',
    height: 28,
    width: 36,
    marginTop: 1,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    marginLeft: 19,
    marginTop: 6,
  },
  icon2: {
    fontSize: 28,
    height: 28,
    width: 22,
    marginLeft: 19,
  },
  iconRow: {
    height: 29,
    flexDirection: 'row',
    flex: 1,
    marginRight: 19,
    marginLeft: 20,
    marginTop: 20,
  },
  icon3: {
    top: 22,
    left: 288,
    position: 'absolute',
    fontSize: 28,
    height: 28,
    width: 22,
  },
  rect3: {
    top: 0,
    left: 0,
    width: 329,
    height: 70,
    position: 'absolute',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  loremIpsum1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
    marginTop: 28,
    marginLeft: 75,
  },
  icon3Stack: {
    top: 0,
    left: 0,
    width: 329,
    height: 70,
    position: 'absolute',
  },
  icon4: {
    top: 23,
    left: 20,
    position: 'absolute',
    fontSize: 28,
    color: 'rgba(11,64,148,1)',
    height: 28,
    width: 36,
  },
  icon3StackStack: {
    width: 329,
    height: 70,
  },
  button: {
    width: 329,
    height: 68,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    flexDirection: 'row',
  },
  icon5: {
    color: 'rgba(39,170,225,1)',
    fontSize: 30,
    height: 33,
    width: 30,
  },
  addPaymentMethod: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 18,
    marginLeft: 23,
    marginTop: 6,
  },
  icon5Row: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    marginRight: 82,
    marginLeft: 21,
    marginTop: 19,
  },
  rect5: {
    width: 329,
    height: 193,
    marginTop: 33,
    marginLeft: 24,
  },
  riderProfile: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 18,
    marginLeft: 1,
  },
  rect6: {
    width: 329,
    height: 70,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 18,
  },
  icon6: {
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 5,
  },
  personalProfile: {
    fontFamily: 'roboto-300',
    color: 'rgba(179,179,179,1)',
  },
  robert308GmailCom: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 1,
  },
  personalProfileColumn: {
    width: 160,
    marginLeft: 18,
  },
  icon6Row: {
    height: 42,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 20,
    marginRight: 101,
  },
  rect7: {
    width: 329,
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginTop: 13,
  },
  icon8: {
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 4,
  },
  businessProfile: {
    fontFamily: 'roboto-300',
    color: 'rgba(179,179,179,1)',
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 6,
  },
  businessProfileColumn: {
    width: 165,
    marginLeft: 17,
  },
  icon8Row: {
    height: 42,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 22,
    marginRight: 95,
  },
  rect8: {
    top: 0,
    left: 1,
    width: 328,
    height: 104,
    position: 'absolute',
  },
  promotions: {
    top: 1,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 18,
  },
  button2: {
    top: 40,
    left: 0,
    width: 329,
    height: 64,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    flexDirection: 'row',
  },
  icon9: {
    color: 'rgba(39,170,225,1)',
    fontSize: 30,
    height: 33,
    width: 30,
  },
  addPromoCode: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 18,
    marginLeft: 18,
    marginTop: 5,
  },
  icon9Row: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    marginRight: 120,
    marginLeft: 24,
    marginTop: 16,
  },
  rect8Stack: {
    width: 329,
    height: 104,
    marginTop: 30,
    marginLeft: 24,
  },
});

export default Untitled22;
