import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialButtonPrimary from '../MaterialButtonPrimary';

export default function MyListingListItem({item, navigation}) {
  console.log(item);
  const {
    address,
    city,
    state,
    postalCode,
  } = item.locationDetails.listingAddress;
  const viewDetailsHandler = () => {
    navigation.navigate('DetailsScreen', {item: item});
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/cars.jpg')}
            resizeMode="stretch"
            style={styles.image}></Image>
        </View>
        <View style={styles.title}>
          <Text style={styles.location}>
            {address}, {city}, {state}, {postalCode}
          </Text>
          <Text style={styles.bookings}>No Upcoming Bookings</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Manager</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
        <MaterialButtonPrimary
          caption="VIEW DETAILS"
          style={styles.viewDetails}
          onPress={viewDetailsHandler}></MaterialButtonPrimary>
        <TouchableOpacity style={styles.modifyButton}>
          <Text style={styles.modify}>MODIFY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 154,
    // position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(197,196,196,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    elevation: 20,
    shadowOpacity: 0.17,
    shadowRadius: 20,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '20%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  title: {
    width: '65%',
  },
  location: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 15,
    fontWeight: '700',
  },
  bookings: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
  },
  tag: {
    width: '15%',
    height: 20,
    // backgroundColor: 'rgba(39,170,225,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 9,
    backgroundColor: 'rgba(39,170,225,0.2)',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButton: {
    width: '30%',
    height: 36,
    borderWidth: 1,
    borderColor: 'rgba(39,170,225,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 13,
  },
  viewDetails: {
    width: '30%',
    height: 36,
  },
  modifyButton: {
    width: '30%',
    height: 36,
    borderWidth: 1,
    borderColor: 'rgba(39,170,225,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modify: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    fontSize: 13,
  },
});
