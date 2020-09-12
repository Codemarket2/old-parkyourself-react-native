import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch, TouchableOpacity} from 'react-native';
import RadioButton from '../../components/RadioButton';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';

function SpaceAvailable(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.spaceAvailable}>Space Available</Text>
      <Text style={styles.loremIpsum}>
        What days can drivers park at your listing?
      </Text>
      <View style={styles.rect}>
        <Text style={styles.monday}>Monday</Text>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.switch2Stack}>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch2}></Switch>
        <View style={styles.rect1}>
          <Text style={styles.tuesday}>Tuesday</Text>
        </View>
      </View>
      <View style={styles.switch3Stack}>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch3}></Switch>
        <View style={styles.rect2}>
          <Text style={styles.wednesday}>Wednesday</Text>
        </View>
      </View>
      <View style={styles.switch4Stack}>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch4}></Switch>
        <View style={styles.rect3}>
          <Text style={styles.thursday}>Thursday</Text>
        </View>
      </View>
      <View style={styles.switch5Stack}>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch5}></Switch>
        <View style={styles.rect4}>
          <Text style={styles.friday}>Friday</Text>
        </View>
      </View>
      <View style={styles.switch6Stack}>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch6}></Switch>
        <View style={styles.rect5}>
          <Text style={styles.saturday}>Saturday</Text>
        </View>
      </View>
      <View style={styles.switch7Stack}>
        <Switch
          value={true}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch7}></Switch>
        <View style={styles.rect6}>
          <Text style={styles.sunday}>Sunday</Text>
        </View>
      </View>
      <Text style={styles.text}>
        Set a daily schedule or set it to 24 hours a day
      </Text>
      <View style={styles.materialRadio1Row}>
        <RadioButton checked={true} style={styles.materialRadio1}></RadioButton>
        <Text style={styles.loremIpsum2}>Set to a daily schedule</Text>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.startTime}>Start Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.endTime}>End Time</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.materialRadio2Row}>
        <RadioButton style={styles.materialRadio2}></RadioButton>
        <Text style={styles.loremIpsum3}>Set to 24 hours a day</Text>
      </View>
      <View style={styles.rect9}>
        <Text style={styles.loremIpsum4}>SET A CUSTOM SCHEDULE</Text>
      </View>
      <Text style={styles.loremIpsum5}>
        How much notice do you need before a Guest arrives?
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.hour}>! hour</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum6}>
        Tip : At least 2 days&#39; notice can help you plan for a guest&#39;s
        arrival, but you might miss out last minute trips.
      </Text>
      <Text style={styles.loremIpsum7}>
        How far in advance can guests book?
      </Text>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.loremIpsum8}>Dates unavailable by default</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum9}>
        Tip : At least 2 days&#39; notice can help you plan for a guest&#39;s
        arrival, but you might miss out last minute trips.
      </Text>
      <Text style={styles.loremIpsum10}>How long can guests stay?</Text>
      <View style={styles.rect10}>
        <View style={styles.iconRow}>
          <EntypoIcon name="circle-with-minus" style={styles.icon}></EntypoIcon>
          <Text style={styles.loremIpsum11}>1 hour Minimum</Text>
          <EntypoIcon name="circle-with-plus" style={styles.icon2}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect11}>
        <View style={styles.icon4Row}>
          <EntypoIcon
            name="circle-with-minus"
            style={styles.icon4}></EntypoIcon>
          <Text style={styles.loremIpsum12}>30 Days Maximum</Text>
          <EntypoIcon name="circle-with-plus" style={styles.icon3}></EntypoIcon>
        </View>
      </View>
      <Text style={styles.loremIpsum13}>
        Tip : At least 2 days&#39; notice can help you plan for a guest&#39;s
        arrival, but you might miss out last minute trips.
      </Text>
      <Text style={styles.loremIpsum14}>
        Which booking process do you prefer?
      </Text>
      <View style={styles.icon5Row}>
        <IoniconsIcon
          name="md-radio-button-on"
          style={styles.icon5}></IoniconsIcon>
        <Text style={styles.instantBooking}>Instant Booking</Text>
      </View>
      <View style={styles.icon6Row}>
        <IoniconsIcon
          name="md-radio-button-off"
          style={styles.icon6}></IoniconsIcon>
        <Text style={styles.approvalIsRequired}>Approval is required</Text>
      </View>
      <MaterialButtonPrimary
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaceAvailable: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
    marginTop: 27,
    marginLeft: 23,
  },
  loremIpsum: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginTop: 21,
    marginLeft: 22,
  },
  rect: {
    width: 331,
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 22,
  },
  monday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginLeft: 2,
    marginTop: 12,
  },
  switch: {
    marginLeft: 212,
    marginTop: 14,
  },
  switch2: {
    position: 'absolute',
    top: 14,
    left: 285,
  },
  rect1: {
    top: 0,
    left: 0,
    width: 331,
    height: 48,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  tuesday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 13,
    marginLeft: 1,
  },
  switch2Stack: {
    width: 331,
    height: 48,
    marginTop: 7,
    marginLeft: 22,
  },
  switch3: {
    position: 'absolute',
    top: 14,
    left: 285,
  },
  rect2: {
    top: 0,
    left: 0,
    width: 331,
    height: 48,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  wednesday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 13,
    marginLeft: 2,
  },
  switch3Stack: {
    width: 331,
    height: 48,
    marginTop: 7,
    marginLeft: 22,
  },
  switch4: {
    position: 'absolute',
    top: 14,
    left: 285,
  },
  rect3: {
    top: 0,
    left: 0,
    width: 331,
    height: 48,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  thursday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 3,
  },
  switch4Stack: {
    width: 331,
    height: 48,
    marginTop: 8,
    marginLeft: 22,
  },
  switch5: {
    position: 'absolute',
    top: 14,
    left: 285,
  },
  rect4: {
    top: 0,
    left: 0,
    width: 331,
    height: 48,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  friday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 3,
  },
  switch5Stack: {
    width: 331,
    height: 48,
    marginTop: 7,
    marginLeft: 22,
  },
  switch6: {
    position: 'absolute',
    top: 14,
    left: 285,
  },
  rect5: {
    top: 0,
    left: 0,
    width: 331,
    height: 48,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  saturday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 2,
  },
  switch6Stack: {
    width: 331,
    height: 48,
    marginTop: 7,
    marginLeft: 22,
  },
  switch7: {
    position: 'absolute',
    top: 14,
    left: 285,
  },
  rect6: {
    top: 0,
    left: 0,
    width: 331,
    height: 48,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
  },
  sunday: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 12,
    marginLeft: 2,
  },
  switch7Stack: {
    width: 331,
    height: 48,
    marginTop: 7,
    marginLeft: 22,
  },
  text: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 37,
    marginLeft: 23,
  },
  materialRadio1: {
    height: 30,
    width: 30,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginLeft: 6,
    marginTop: 6,
  },
  materialRadio1Row: {
    height: 30,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 19,
    marginRight: 151,
  },
  button2: {
    width: 142,
    height: 39,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
  },
  startTime: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 18,
    marginTop: 9,
    marginLeft: 28,
  },
  button3: {
    width: 142,
    height: 39,
    borderWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 38,
  },
  endTime: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 18,
    marginTop: 9,
    marginLeft: 33,
  },
  button2Row: {
    height: 39,
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 25,
    marginRight: 28,
  },
  materialRadio2: {
    height: 30,
    width: 30,
  },
  loremIpsum3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginLeft: 6,
    marginTop: 5,
  },
  materialRadio2Row: {
    height: 30,
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 19,
    marginRight: 161,
  },
  rect9: {
    width: 238,
    height: 38,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    marginTop: 21,
    marginLeft: 27,
  },
  loremIpsum4: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 13,
    marginTop: 12,
    marginLeft: 38,
  },
  loremIpsum5: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 48,
    marginLeft: 27,
  },
  button: {
    width: 325,
    height: 46,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 17,
    marginLeft: 28,
  },
  hour: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 15,
    marginLeft: 13,
  },
  loremIpsum6: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    lineHeight: 20,
    marginTop: 25,
    marginLeft: 28,
  },
  loremIpsum7: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 31,
    marginLeft: 29,
  },
  button4: {
    width: 325,
    height: 46,
    borderWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 16,
    marginLeft: 26,
  },
  loremIpsum8: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 15,
    marginLeft: 11,
  },
  loremIpsum9: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    lineHeight: 20,
    marginTop: 24,
    marginLeft: 29,
  },
  loremIpsum10: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 24,
    marginLeft: 29,
  },
  rect10: {
    width: 195,
    height: 31,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 55,
  },
  icon: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 22,
  },
  loremIpsum11: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 20,
    marginTop: 5,
  },
  icon2: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 24,
    width: 22,
    marginLeft: 20,
  },
  iconRow: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 4,
    marginLeft: 5,
    marginTop: 4,
  },
  rect11: {
    width: 195,
    height: 31,
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 55,
  },
  icon4: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 22,
  },
  loremIpsum12: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginLeft: 15,
    marginTop: 4,
  },
  icon3: {
    color: 'rgba(11,64,148,1)',
    fontSize: 22,
    height: 24,
    width: 22,
    marginLeft: 12,
  },
  icon4Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 4,
    marginLeft: 5,
    marginTop: 4,
  },
  loremIpsum13: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    width: 310,
    lineHeight: 20,
    height: 60,
    marginTop: 20,
    marginLeft: 29,
  },
  loremIpsum14: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 24,
    marginLeft: 27,
  },
  icon5: {
    color: 'rgba(39,170,225,1)',
    fontSize: 20,
  },
  instantBooking: {
    fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginLeft: 11,
    marginTop: 3,
  },
  icon5Row: {
    height: 22,
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 28,
    marginRight: 222,
  },
  icon6: {
    color: 'rgba(182,182,182,1)',
    fontSize: 20,
  },
  approvalIsRequired: {
    fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginLeft: 12,
    marginTop: 2,
  },
  icon6Row: {
    height: 22,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 28,
    marginRight: 195,
  },
  materialButtonPrimary1: {
    width: 100,
    height: 36,
    marginTop: 67,
    marginLeft: 136,
  },
});

export default SpaceAvailable;
