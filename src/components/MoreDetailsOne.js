import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default function MoreDetailsOne() {
  return (
    <Fragment>
      <Text style={styles.loremIpsum}>906 Peg Shop St. Franklyn, NY 11209</Text>
      <Text style={styles.ownerBusinessName}>Owner/Business Name</Text>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.icon1Row}>
            <IoniconsIcon name='ios-star' style={styles.icon1}></IoniconsIcon>
            <IoniconsIcon name='ios-star' style={styles.icon2}></IoniconsIcon>
            <IoniconsIcon name='ios-star' style={styles.icon3}></IoniconsIcon>
            <IoniconsIcon
              name='ios-star-half'
              style={styles.icon4}
            ></IoniconsIcon>
            <Text style={styles.loremIpsum2}>656</Text>
          </View>
        </View>
        <IoniconsIcon name='ios-star' style={styles.icon}></IoniconsIcon>
      </View>
      <Image
        source={require('../assets/images/parking.jpg')}
        resizeMode='stretch'
        style={styles.image}
      ></Image>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum3}>
          07/01/2019, 9:00 PM to 07/02/2019, 6:00 AM
        </Text>
        <View style={styles.loremIpsum4Row}>
          <Text style={styles.loremIpsum4}>
            My time has been Extended for free
          </Text>
          <TouchableOpacity>
            <Text style={styles.why}>Why?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect3Row}>
          <View style={styles.rect3}>
            <Text style={styles.valet}>VALET</Text>
          </View>
          <View style={styles.rect4}>
            <Text style={styles.covered}>COVERED</Text>
          </View>
          <View style={styles.rect5}>
            <Text style={styles.onSiteStaff}>ON SITE STAFF</Text>
          </View>
        </View>
        <View style={styles.rect6}>
          <Text style={styles.accessible}>ACCESSIBLE</Text>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 28,
    // marginTop: 72,
    // marginLeft: 18,
    // marginRight: -18,
  },
  ownerBusinessName: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    marginTop: 10,
    // marginLeft: 16,
  },
  rect: {
    top: 0,
    left: 1,
    width: 170,
    height: 32,
    position: 'absolute',
    flexDirection: 'row',
  },
  icon1: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
  },
  icon2: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
    marginLeft: 5,
  },
  icon3: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
    marginLeft: 5,
  },
  icon4: {
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
    height: 24,
    width: 19,
    marginLeft: 5,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(130,130,130,1)',
    marginLeft: 10,
    marginTop: 5,
  },
  icon1Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 22,
    marginLeft: 24,
    marginTop: 3,
  },
  icon: {
    top: 3,
    left: 0,
    position: 'absolute',
    color: 'rgba(248,231,28,1)',
    fontSize: 22,
  },
  rectStack: {
    width: '100%',
    height: 32,
    marginTop: 9,
    // marginLeft: 17,
  },
  image: {
    width: '100%',
    height: 161,
    marginTop: 9,
    // marginLeft: 16,
  },
  rect2: {
    width: '100%',
    height: 183,
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 25,
    paddingHorizontal: 7,
    // marginLeft: 10,
  },
  loremIpsum3: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 16,
    marginTop: 16,
    marginLeft: 8,
  },
  loremIpsum4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 17,
  },
  why: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginLeft: 6,
    marginTop: 1,
  },
  loremIpsum4Row: {
    height: 21,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 11,
    marginRight: 21,
  },
  rect3: {
    width: 76,
    height: 31,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgba(196,195,195,1)',
  },
  valet: {
    fontFamily: 'roboto-regular',
    color: 'rgba(196,195,195,1)',
    marginTop: 5,
    marginLeft: 18,
  },
  rect4: {
    width: 91,
    height: 31,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgba(196,195,195,1)',
    marginLeft: 12,
  },
  covered: {
    fontFamily: 'roboto-regular',
    color: 'rgba(196,195,195,1)',
    marginTop: 5,
    marginLeft: 15,
  },
  rect5: {
    width: 127,
    height: 31,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgba(196,195,195,1)',
    marginLeft: 12,
  },
  onSiteStaff: {
    fontFamily: 'roboto-regular',
    color: 'rgba(196,195,195,1)',
    marginTop: 5,
    marginLeft: 16,
  },
  rect3Row: {
    height: 31,
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 11,
    marginRight: 17,
  },
  rect6: {
    width: 117,
    height: 31,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'rgba(196,195,195,1)',
    marginTop: 10,
    marginLeft: 11,
  },
  accessible: {
    fontFamily: 'roboto-regular',
    color: 'rgba(196,195,195,1)',
    marginTop: 5,
    marginLeft: 20,
  },
});
