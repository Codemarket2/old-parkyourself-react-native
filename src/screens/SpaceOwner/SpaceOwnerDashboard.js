import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch, ScrollView} from 'react-native';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toggleUserType} from '../../actions/user';

function SpaceOwnerDashboard({isSpaceOwner, toggleUserType}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.spaceOwner}>Space Owner</Text>
      <View style={styles.rect1}>
        <View style={styles.icon2Row}>
          <SimpleLineIconsIcon
            name="briefcase"
            style={styles.icon2}></SimpleLineIconsIcon>
          <View style={styles.spaceOwnerProfileColumn}>
            <Text style={styles.spaceOwnerProfile}>SPACE OWNER PROFILE</Text>
            <Text style={styles.exampleGmailCom1}>example@gmail.com</Text>
          </View>
          <IoniconsIcon name="ios-arrow-up" style={styles.icon1}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.icon9StackStack}>
        <View style={styles.icon9Stack}>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon9}></IoniconsIcon>
          <View style={styles.rect8}>
            <Text style={styles.myListings}>My Listings</Text>
          </View>
        </View>
        <MaterialCommunityIconsIcon
          name="calendar-clock"
          style={styles.icon14}></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.icon10Stack}>
        <FontAwesomeIcon
          name="credit-card"
          style={styles.icon10}></FontAwesomeIcon>
        <View style={styles.rect6}>
          <View style={styles.addAListingRow}>
            <Text style={styles.addAListing}>Add a Listing</Text>
            <IoniconsIcon
              name="ios-arrow-forward"
              style={styles.icon17}></IoniconsIcon>
          </View>
        </View>
      </View>
      <View style={styles.rect7}>
        <View style={styles.icon11Row}>
          <FontAwesomeIcon name="car" style={styles.icon11}></FontAwesomeIcon>
          <Text style={styles.loremIpsum}>Parking Orders Recieved</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon16}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.icon12Stack}>
        <IoniconsIcon
          name="ios-arrow-forward"
          style={styles.icon12}></IoniconsIcon>
        <View style={styles.rect11}>
          <View style={styles.icon19Row}>
            <FontAwesomeIcon
              name="handshake-o"
              style={styles.icon19}></FontAwesomeIcon>
            <Text style={styles.loremIpsum3}>Set Staff Credentials</Text>
          </View>
        </View>
      </View>
      <View style={styles.icon13StackStack}>
        <View style={styles.icon13Stack}>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon13}></IoniconsIcon>
          <View style={styles.rect10}>
            <Text style={styles.loremIpsum2}>Payout &amp; Deposit Reports</Text>
          </View>
        </View>
        <SimpleLineIconsIcon
          name="notebook"
          style={styles.icon18}></SimpleLineIconsIcon>
      </View>
      <Text style={styles.dashboard}>DASHBOARD</Text>
      <View style={styles.rect9}>
        <View style={styles.icon15Row}>
          <MaterialCommunityIconsIcon
            name="cash-multiple"
            style={styles.icon15}></MaterialCommunityIconsIcon>
          <Text style={styles.withdrawalSettings}>Withdrawal Settings</Text>
          <IoniconsIcon
            name="ios-arrow-forward"
            style={styles.icon20}></IoniconsIcon>
        </View>
      </View>
      <View style={styles.rect12}>
        <View style={styles.icon21Row}>
          <IoniconsIcon name="ios-log-out" style={styles.icon21}></IoniconsIcon>
          <Text style={styles.logOut1}>LOG OUT</Text>
        </View>
      </View>
      <View style={styles.rect13}>
        <Switch
          value={isSpaceOwner}
          trackColor={{true: 'rgba(74,144,226,1)', false: 'rgba(0,0,0,1)'}}
          style={styles.switch}
          onValueChange={toggleUserType}></Switch>
        <Text style={styles.switchToDriver}>Switch to DRIVER</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaceOwner: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 36,
    marginLeft: 23,
  },
  rect1: {
    width: 329,
    height: 64,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginTop: 37,
    marginLeft: 25,
  },
  icon2: {
    color: 'rgba(11,64,148,1)',
    fontSize: 25,
    height: 28,
    width: 25,
    marginTop: 7,
  },
  spaceOwnerProfile: {
    fontFamily: 'roboto-300',
    color: '#121212',
    fontSize: 12,
    marginLeft: 1,
  },
  exampleGmailCom1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 4,
  },
  spaceOwnerProfileColumn: {
    width: 150,
    marginLeft: 19,
  },
  icon1: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 15,
    marginLeft: 90,
    marginTop: 4,
  },
  icon2Row: {
    height: 38,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 14,
    marginRight: 16,
  },
  icon9: {
    top: 19,
    left: 310,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
  },
  rect8: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.88,
    shadowRadius: 20,
  },
  myListings: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 20,
    marginLeft: 56,
  },
  icon9Stack: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
  },
  icon14: {
    top: 20,
    left: 14,
    position: 'absolute',
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
  },
  icon9StackStack: {
    width: 329,
    height: 58,
    marginTop: 82,
    marginLeft: 25,
  },
  icon10: {
    top: 19,
    left: 17,
    position: 'absolute',
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
  },
  rect6: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
  },
  addAListing: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 1,
  },
  icon17: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 23,
    width: 7,
    marginLeft: 158,
  },
  addAListingRow: {
    height: 23,
    flexDirection: 'row',
    flex: 1,
    marginRight: 13,
    marginLeft: 58,
    marginTop: 17,
  },
  icon10Stack: {
    width: 329,
    height: 58,
    marginTop: 100,
    marginLeft: 25,
  },
  rect7: {
    width: 329,
    height: 58,
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
    marginTop: -137,
    marginLeft: 25,
  },
  icon11: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 22,
    width: 25,
    marginTop: 4,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 16,
    marginTop: 5,
  },
  icon16: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 23,
    width: 7,
    marginLeft: 78,
  },
  icon11Row: {
    height: 26,
    flexDirection: 'row',
    flex: 1,
    marginRight: 13,
    marginLeft: 17,
    marginTop: 15,
  },
  icon12: {
    top: 19,
    left: 309,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
  },
  rect11: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
  },
  icon19: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 22,
    width: 29,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginLeft: 14,
    marginTop: 1,
  },
  icon19Row: {
    height: 22,
    flexDirection: 'row',
    flex: 1,
    marginRight: 123,
    marginLeft: 17,
    marginTop: 19,
  },
  icon12Stack: {
    width: 329,
    height: 58,
    marginTop: 255,
    marginLeft: 25,
  },
  icon13: {
    top: 18,
    left: 309,
    position: 'absolute',
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
  },
  rect10: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.88,
    shadowRadius: 20,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 21,
    marginLeft: 59,
  },
  icon13Stack: {
    top: 0,
    left: 0,
    width: 329,
    height: 58,
    position: 'absolute',
  },
  icon18: {
    top: 19,
    left: 17,
    position: 'absolute',
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
  },
  icon13StackStack: {
    width: 329,
    height: 58,
    marginTop: -137,
    marginLeft: 25,
  },
  dashboard: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 18,
    marginTop: -409,
    marginLeft: 26,
  },
  rect9: {
    width: 329,
    height: 58,
    shadowColor: 'rgba(208,206,206,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.88,
    shadowRadius: 20,
    flexDirection: 'row',
    marginTop: 250,
    marginLeft: 25,
  },
  icon15: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 24,
    width: 22,
    marginTop: 1,
  },
  withdrawalSettings: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    lineHeight: 14,
    fontSize: 16,
    marginLeft: 22,
    marginTop: 5,
  },
  icon20: {
    color: 'rgba(39,170,225,1)',
    fontSize: 21,
    height: 23,
    width: 8,
    marginLeft: 111,
  },
  icon15Row: {
    height: 25,
    flexDirection: 'row',
    flex: 1,
    marginRight: 11,
    marginLeft: 14,
    marginTop: 19,
  },
  rect12: {
    width: 150,
    height: 40,
    backgroundColor: 'rgba(39,170,225,1)',
    flexDirection: 'row',
    marginTop: 323,
    marginLeft: 113,
  },
  icon21: {
    color: 'rgba(254,253,253,1)',
    fontSize: 24,
    height: 27,
    width: 19,
  },
  logOut1: {
    fontFamily: 'roboto-500',
    color: 'rgba(255,255,255,1)',
    marginLeft: 8,
    marginTop: 6,
  },
  icon21Row: {
    height: 27,
    flexDirection: 'row',
    flex: 1,
    marginRight: 36,
    marginLeft: 30,
    marginTop: 7,
  },
  rect13: {
    width: 260,
    height: 43,
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
    marginTop: -106,
    marginLeft: 57,
  },
  switch: {
    marginLeft: 32,
    marginTop: 12,
  },
  switchToDriver: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    marginLeft: 17,
    marginTop: 15,
  },
});

SpaceOwnerDashboard.propTypes = {
  toggleUserType: PropTypes.func.isRequired,
  isSpaceOwner: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isSpaceOwner: state.user.isSpaceOwner,
});

export default connect(mapStateToProps, {toggleUserType})(SpaceOwnerDashboard);
