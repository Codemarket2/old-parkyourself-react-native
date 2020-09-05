import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Svg, { Ellipse } from 'react-native-svg';

function AppDrawer(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require('../assets/images/headerlogo.jpg')}
          resizeMode='contain'
          style={styles.image}
        ></Image>
        <TouchableOpacity style={styles.icon5StackStack}>
          <MaterialCommunityIconsIcon
            name='chevron-right'
            style={styles.icon5}
          ></MaterialCommunityIconsIcon>
          <View style={styles.rect3}>
            <Text style={styles.bookAParking}>Book a Parking</Text>
          </View>
          <MaterialCommunityIconsIcon
            name='calendar-clock'
            style={styles.icon11}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect4}>
          <View style={styles.icon12Row}>
            <FontAwesomeIcon name='car' style={styles.icon12}></FontAwesomeIcon>
            <Text style={styles.myBookings}>My Bookings</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon4}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect5}>
          <View style={styles.icon13Row}>
            <FontAwesomeIcon
              name='credit-card'
              style={styles.icon13}
            ></FontAwesomeIcon>
            <Text style={styles.onGoingParkings}>On-Going Parkings</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon3}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect6}>
          <View style={styles.icon14Row}>
            <FeatherIcon name='mail' style={styles.icon14}></FeatherIcon>
            <Text style={styles.messages}>Messages</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon8}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect7}>
          <View style={styles.icon15Row}>
            <MaterialCommunityIconsIcon
              name='cash'
              style={styles.icon15}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.rentYourSpace}>Rent your Space</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon7}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect8}>
          <View style={styles.icon16Row}>
            <MaterialCommunityIconsIcon
              name='gift'
              style={styles.icon16}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.sendAGift}>Send a Gift</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon6}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect9}>
          <View style={styles.icon17Row}>
            <EntypoIcon name='add-user' style={styles.icon17}></EntypoIcon>
            <Text style={styles.referAFriend}>Refer a Friend</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rect10}>
          <View style={styles.icon18Row}>
            <FontAwesomeIcon
              name='question-circle-o'
              style={styles.icon18}
            ></FontAwesomeIcon>
            <Text style={styles.faQs}>FAQ&#39;s</Text>
            <MaterialCommunityIconsIcon
              name='chevron-right'
              style={styles.icon9}
            ></MaterialCommunityIconsIcon>
          </View>
        </TouchableOpacity>
        <View style={styles.ellipseStackRow}>
          <View style={styles.ellipseStack}>
            <Svg viewBox='0 0 43.54 42.25' style={styles.ellipse}>
              <Ellipse
                stroke='rgba(230, 230, 230,1)'
                strokeWidth={0}
                fill='rgba(85,111,152,1)'
                cx={22}
                cy={21}
                rx={22}
                ry={21}
              ></Ellipse>
            </Svg>
            <EntypoIcon name='user' style={styles.icon19}></EntypoIcon>
          </View>
          <Text style={styles.mark}>Mark</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  rect: {
    width: '100%',
    height: 736,
    marginTop: 30,
    // marginLeft: 46,
  },
  image: {
    width: 230,
    height: 89,
    // marginLeft: 12,
    alignSelf: 'center',
  },
  icon5: {
    top: 11,
    left: 217,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
  },
  rect3: {
    top: 0,
    left: 0,
    width: 261,
    height: 56,
    position: 'absolute',
  },
  bookAParking: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginTop: 18,
    marginLeft: 59,
  },
  icon11: {
    top: 16,
    left: 16,
    position: 'absolute',
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 27,
    width: 25,
  },
  icon5StackStack: {
    width: 261,
    height: 56,
    marginTop: 7,
    marginLeft: 11,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  rect4: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 11,
    backgroundColor: '#fff',
  },
  icon12: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 25,
    width: 29,
    marginTop: 7,
  },
  myBookings: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 18,
    marginTop: 8,
  },
  icon4: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 65,
  },
  icon12Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
    marginTop: 9,
  },
  rect5: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 11,
    backgroundColor: '#fff',
  },
  icon13: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 25,
    width: 27,
    marginTop: 5,
  },
  onGoingParkings: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 16,
    marginTop: 7,
  },
  icon3: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 24,
  },
  icon13Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
    marginLeft: 16,
    marginTop: 10,
  },
  rect6: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 12,
    backgroundColor: '#fff',
  },
  icon14: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 25,
    width: 25,
    marginTop: 5,
  },
  messages: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 19,
    marginTop: 6,
  },
  icon8: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 84,
  },
  icon14Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 15,
    marginTop: 11,
  },
  rect7: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 12,
    backgroundColor: '#fff',
  },
  icon15: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 27,
    width: 25,
    marginTop: 5,
  },
  rentYourSpace: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 19,
    marginTop: 7,
  },
  icon7: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 41,
  },
  icon15Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 15,
    marginTop: 11,
  },
  rect8: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 13,
    marginLeft: 12,
    backgroundColor: '#fff',
  },
  icon16: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 27,
    width: 25,
    marginTop: 5,
  },
  sendAGift: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 19,
    marginTop: 7,
  },
  icon6: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 78,
  },
  icon16Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 15,
    marginTop: 11,
  },
  rect9: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 11,
    backgroundColor: '#fff',
  },
  icon17: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 27,
    width: 25,
    marginTop: 5,
  },
  referAFriend: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 19,
    marginTop: 7,
  },
  icon2: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 58,
  },
  icon17Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
    marginLeft: 16,
    marginTop: 11,
  },
  rect10: {
    width: 261,
    height: 56,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 20,
    shadowOpacity: 0.26,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 11,
    backgroundColor: '#fff',
  },
  icon18: {
    fontSize: 25,
    color: 'rgba(11,64,148,1)',
    height: 25,
    width: 21,
    marginTop: 7,
  },
  faQs: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 16,
    marginLeft: 23,
    marginTop: 7,
  },
  icon9: {
    color: 'rgba(39,170,225,1)',
    fontSize: 34,
    height: 37,
    width: 34,
    marginLeft: 118,
  },
  icon18Row: {
    height: 37,
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
    marginLeft: 16,
    marginTop: 10,
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 44,
    height: 42,
    position: 'absolute',
  },
  icon19: {
    top: 5,
    left: 5,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 36,
    height: 39,
    width: 36,
  },
  ellipseStack: {
    width: 44,
    height: 44,
  },
  mark: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginLeft: 13,
    marginTop: 11,
  },
  ellipseStackRow: {
    height: 44,
    flexDirection: 'row',
    marginTop: 34,
    marginLeft: 26,
    marginRight: 159,
  },
});

export default AppDrawer;
