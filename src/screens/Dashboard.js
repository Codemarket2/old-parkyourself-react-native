import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

function Untitled13(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.dashboard}>Dashboard</Text>
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            <MaterialCommunityIconsIcon
              name="google"
              style={styles.icon}></MaterialCommunityIconsIcon>
            <View style={styles.personalProfileColumn}>
              <Text style={styles.personalProfile}>PERSONAL PROFILE</Text>
              <Text style={styles.exampleGmailCom}>example@gmail.com</Text>
            </View>
            <IoniconsIcon
              name="ios-arrow-up"
              style={styles.icon2}></IoniconsIcon>
          </View>
        </View>
        <View style={styles.rect3}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="rgba(211,211,211,1)"
            style={styles.placeholder}></TextInput>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="rgba(211,211,211,1)"
            style={styles.placeholder1}></TextInput>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(211,211,211,1)"
            style={styles.placeholder2}></TextInput>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="rgba(211,211,211,1)"
            style={styles.placeholder3}></TextInput>
          <View style={styles.placeholder4Stack}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(211,211,211,1)"
              style={styles.placeholder4}></TextInput>
            <Text style={styles.change}>Change</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.rect5}>
          <View style={styles.icon3Row}>
            <SimpleLineIconsIcon
              name="briefcase"
              style={styles.icon3}></SimpleLineIconsIcon>
            <View style={styles.businessProfileColumn}>
              <Text style={styles.businessProfile}>BUSINESS PROFILE</Text>
              <Text style={styles.loremIpsum}>Set Up Business Profile</Text>
            </View>
            <IoniconsIcon
              name="ios-arrow-up"
              style={styles.icon4}></IoniconsIcon>
          </View>
        </View>
        <TextInput
          placeholder="Business Name"
          placeholderTextColor="rgba(211,211,211,1)"
          style={styles.placeholder5}></TextInput>
        <TextInput
          placeholder="Business Email"
          placeholderTextColor="rgba(211,211,211,1)"
          style={styles.placeholder6}></TextInput>
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor="rgba(211,211,211,1)"
          style={styles.placeholder7}></TextInput>
        <View style={styles.placeholder8Stack}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(211,211,211,1)"
            style={styles.placeholder8}></TextInput>
          <Text style={styles.change1}>Change</Text>
        </View>
      </View>
      <Text style={styles.moreInformation}>MORE INFORMATION</Text>
      <View style={styles.rect6}>
        <View style={styles.icon5Row}>
          <MaterialCommunityIconsIcon
            name="calendar-clock"
            style={styles.icon5}></MaterialCommunityIconsIcon>
          <Text style={styles.myBookings}>My Bookings</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon6}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect8}>
        <View style={styles.icon9Row}>
          <FontAwesomeIcon name="car" style={styles.icon9}></FontAwesomeIcon>
          <Text style={styles.payment}>Vehicles</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon10}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect8}>
        <View style={styles.icon9Row}>
          <FontAwesomeIcon
            name="credit-card"
            style={styles.icon9}></FontAwesomeIcon>
          <Text style={styles.payment}>Payment</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon10}></IoniconsIcon>
        </View>
      </View>

      <View style={styles.rect10}>
        <View style={styles.icon13Row}>
          <FeatherIcon name="mail" style={styles.icon13}></FeatherIcon>
          <Text style={styles.reviews}>Messages</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon14}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect10}>
        <View style={styles.icon13Row}>
          <FontAwesomeIcon
            name="star-o"
            style={styles.icon13}></FontAwesomeIcon>
          <Text style={styles.reviews}>Reviews</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon14}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect10}>
        <View style={styles.icon13Row}>
          <FeatherIcon name="gift" style={styles.icon13}></FeatherIcon>
          <Text style={styles.reviews}>Send a Gift</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon14}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect12}>
        <Switch value={true} style={styles.switch}></Switch>
        <Text style={styles.loremIpsum2}>Switch to SPACE OWNER</Text>
      </View>
      <View style={styles.rect13}>
        <View style={styles.icon17Row}>
          <IoniconsIcon name="ios-log-out" style={styles.icon17}></IoniconsIcon>
          <Text style={styles.logOut}>LOG OUT</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  dashboard: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 28,
    // marginTop: 38,
    // marginLeft: 25,
  },
  rect: {
    width: '100%',
    // height: 381,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    elevation: 30,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    marginTop: 30,
    // marginLeft: 25,
    backgroundColor: '#fff',
  },
  rect2: {
    width: 329,
    height: 64,
  },
  icon: {
    color: 'rgba(11,64,148,1)',
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 8,
  },
  personalProfile: {
    fontFamily: 'roboto-300',
    color: '#121212',
    fontSize: 13,
  },
  exampleGmailCom: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 4,
  },
  personalProfileColumn: {
    width: 150,
    marginLeft: 19,
  },
  icon2: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 15,
    marginLeft: 90,
    marginTop: 5,
  },
  iconRow: {
    height: 39,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 14,
    marginRight: 16,
  },
  rect3: {
    width: 329,
    height: 317,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: 302,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 14,
  },
  placeholder1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: 302,
    fontSize: 16,
    marginTop: 9,
    marginLeft: 14,
  },
  placeholder2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: 302,
    fontSize: 16,
    marginTop: 11,
    marginLeft: 12,
  },
  placeholder3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: 302,
    fontSize: 16,
    marginTop: 14,
    marginLeft: 12,
  },
  placeholder4: {
    top: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 47,
    width: 302,
    fontSize: 16,
    left: 0,
  },
  change: {
    top: 20,
    left: 259,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  placeholder4Stack: {
    width: 302,
    height: 47,
    marginTop: 12,
    marginLeft: 12,
  },
  rect4: {
    width: '100%',
    // height: 314,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    elevation: 30,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    marginTop: 33,
    // marginLeft: 25,
    backgroundColor: '#fff',
  },
  rect5: {
    width: '100%',
    height: 62,
  },
  icon3: {
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    height: 27,
    width: 24,
    marginTop: 4,
  },
  businessProfile: {
    fontFamily: 'roboto-300',
    color: '#121212',
    fontSize: 13,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 2,
  },
  businessProfileColumn: {
    width: 165,
    marginLeft: 27,
  },
  icon4: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 15,
    marginLeft: 70,
    marginTop: 5,
  },
  icon3Row: {
    height: 37,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 15,
    marginRight: 13,
  },
  placeholder5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 43,
    width: 302,
    lineHeight: 16,
    fontSize: 16,
    marginTop: 8,
    marginLeft: 14,
  },
  placeholder6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 43,
    width: 302,
    lineHeight: 16,
    fontSize: 16,
    marginTop: 16,
    marginLeft: 12,
  },
  placeholder7: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 43,
    width: 302,
    lineHeight: 16,
    fontSize: 16,
    marginTop: 15,
    marginLeft: 12,
  },
  placeholder8: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 43,
    width: 302,
    lineHeight: 16,
    fontSize: 16,
  },
  change1: {
    top: 15,
    left: 259,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  placeholder8Stack: {
    width: 302,
    height: 43,
    marginTop: 17,
    marginLeft: 12,
  },
  moreInformation: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 41,
    // marginLeft: 25,
  },
  rect6: {
    width: '100%',
    height: 58,
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
    marginTop: 20,
    // marginLeft: 25,
    backgroundColor: '#fff',
  },
  icon5: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 24,
    width: 22,
    marginTop: 2,
  },
  myBookings: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 25,
    marginTop: 2,
  },
  icon6: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 23,
    width: 7,
    marginLeft: 157,
  },
  icon5Row: {
    height: 26,
    flexDirection: 'row',
    flex: 1,
    marginRight: 13,
    marginLeft: 14,
    marginTop: 18,
  },
  icon7: {
    top: 20,
    left: 309,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
  },
  rect7: {
    top: 0,
    left: 0,
    width: '100%',
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    backgroundColor: '#fff',
  },
  vehicles: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 21,
    marginLeft: 62,
  },
  icon7Stack: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
  },
  icon8: {
    top: 19,
    left: 17,
    position: 'absolute',
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
  },
  icon7StackStack: {
    width: 329,
    height: 58,
    marginTop: 21,
    marginLeft: 25,
  },
  rect8: {
    width: '100%',
    height: 58,
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
    marginTop: 21,
    // marginLeft: 25,
    backgroundColor: '#fff',
  },
  icon9: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 22,
    width: 24,
  },
  payment: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 24,
  },
  icon10: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 23,
    width: 8,
    marginLeft: 182,
  },
  icon9Row: {
    height: 23,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 17,
    marginTop: 19,
  },
  icon11: {
    top: 19,
    left: 310,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
  },
  rect9: {
    top: 0,
    left: 0,
    width: '100%',
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    backgroundColor: '#fff',
  },
  messages: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 20,
    marginLeft: 65,
  },
  icon11Stack: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
  },
  icon12: {
    top: 18,
    left: 17,
    position: 'absolute',
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
  },
  icon11StackStack: {
    width: 329,
    height: 58,
    marginTop: 20,
    marginLeft: 25,
  },
  rect10: {
    width: '100%',
    height: 58,
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
    marginTop: 20,
    // marginLeft: 25,
    backgroundColor: '#fff',
  },
  icon13: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 22,
    width: 21,
  },
  reviews: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 29,
    marginTop: 1,
  },
  icon14: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 23,
    width: 8,
    marginLeft: 184,
    marginTop: 1,
  },
  icon13Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 17,
    marginTop: 18,
  },
  icon15: {
    top: 19,
    left: 310,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
  },
  rect11: {
    top: 0,
    left: 0,
    width: '100%',
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    backgroundColor: '#fff',
  },
  sendAGift: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 21,
    marginLeft: 66,
  },
  icon15Stack: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
  },
  icon16: {
    top: 18,
    left: 17,
    position: 'absolute',
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
  },
  icon15StackStack: {
    width: 329,
    height: 58,
    marginTop: 21,
    marginLeft: 25,
  },
  rect12: {
    // width: 260,
    // height: 50,
    backgroundColor: 'rgba(20,222,113,1)',
    shadowColor: 'rgba(180,177,177,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 300,
    // marginLeft: 66,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  switch: {
    // marginLeft: 19,
    // marginTop: 11,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    marginLeft: 14,
    // marginTop: 15,
  },
  rect13: {
    width: 150,
    height: 45,
    backgroundColor: 'rgba(39,170,225,1)',
    shadowColor: 'rgba(180,179,179,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 80,
    alignSelf: 'center',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon17: {
    color: 'rgba(254,253,253,1)',
    fontSize: 24,
    height: 27,
    width: 19,
  },
  logOut: {
    fontFamily: 'roboto-500',
    color: 'rgba(255,255,255,1)',
    marginLeft: 13,
    marginTop: 6,
  },
  icon17Row: {
    height: 27,
    flexDirection: 'row',
    flex: 1,
    marginRight: 33,
    marginLeft: 28,
    marginTop: 6,
  },
});

export default Untitled13;
