import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RadioButton from '../../components/RadioButton';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TextInput} from 'react-native-gesture-handler';
import {addListingSpaceAvailable} from '../../actions/listing';

function SpaceAvailable({navigation, addListingSpaceAvailable}) {
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const [scheduleType, setScheduleType] = useState(1);
  const [noticeTime, setNoticeTime] = useState('1 Hour');
  const [advanceBookingTime, setAdvanceBookingTime] = useState('');
  const [instantBooking, setInstantBooking] = useState(true);

  // date picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [mode, setMode] = useState('time');
  const [showStart, setStartShow] = useState(false);
  const [showEnd, setEndShow] = useState(false);

  //date picker functions
  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setEndShow(false);
    setStartShow(false);
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setStartShow(false);
    setEndShow(false);
    setEndDate(currentDate);
  };

  const showMode = (currentMode, item) => {
    setMode(currentMode);
    if (item == 'start') {
      setEndShow(false);
      setStartShow(true);
    } else if (item == 'end') {
      setStartShow(false);
      setEndShow(true);
    }
  };

  const showDatepicker = (item) => {
    showMode('time', item);
  };

  const onSubmitHandler = () => {
    try {
      if (
        (monday ||
          tuesday ||
          wednesday ||
          thursday ||
          friday ||
          saturday ||
          sunday) &&
        scheduleType &&
        noticeTime &&
        advanceBookingTime &&
        instantBooking
      ) {
        let spaceAvailableData = {
          activeDays: {
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday,
            sunday: sunday,
          },
          scheduleType: scheduleType == 1 ? 'daily' : 'custom',
          startDate: startDate,
          endDate: endDate,
          noticeTime,
          advanceBookingTime,
          bookingProcessType: instantBooking
            ? 'Instant Booking'
            : 'Approval is Required',
        };
        addListingSpaceAvailable(spaceAvailableData);
        navigation.navigate('SetPricingType');
      } else {
        Alert.alert('Missing Inputs', 'Please fill all required inputs');
      }
    } catch (error) {
      Alert.alert(
        'Something Went wrong!',
        'Unable to add space available details',
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.spaceAvailable}>Space Available</Text>
      <Text style={styles.loremIpsum}>
        What days can drivers park at your listing?
      </Text>
      <View style={styles.rect}>
        <Text style={styles.monday}>Monday</Text>
        <Switch
          value={monday}
          onValueChange={() => setMonday(!monday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.rect}>
        <Text style={styles.monday}>Tuesday</Text>
        <Switch
          value={tuesday}
          onValueChange={() => setTuesday(!tuesday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.rect}>
        <Text style={styles.monday}>Wednesday</Text>
        <Switch
          value={wednesday}
          onValueChange={() => setWednesday(!wednesday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.rect}>
        <Text style={styles.monday}>Thursday</Text>
        <Switch
          value={thursday}
          onValueChange={() => setThursday(!thursday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.rect}>
        <Text style={styles.monday}>Friday</Text>
        <Switch
          value={friday}
          onValueChange={() => setFriday(!friday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.rect}>
        <Text style={styles.monday}>Saturday</Text>
        <Switch
          value={saturday}
          onValueChange={() => setSaturday(!saturday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>
      <View style={styles.rect}>
        <Text style={styles.monday}>Sunday</Text>
        <Switch
          value={sunday}
          onValueChange={() => setSunday(!sunday)}
          trackColor={{
            true: 'rgba(39,170,225,1)',
            false: 'rgba(230, 230, 230,1)',
          }}
          style={styles.switch}></Switch>
      </View>

      <Text style={styles.text}>
        Set a daily schedule or set it to 24 hours a day
      </Text>
      <View style={styles.materialRadio1Row}>
        <RadioButton
          checked={scheduleType == 1}
          style={styles.materialRadio1}
          onPress={() => setScheduleType(1)}></RadioButton>
        <Text style={styles.loremIpsum2}>Set to a daily schedule</Text>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => showDatepicker('start')}>
          <Text style={styles.startTime} numberOfLines={1}>
            {startDate ? startDate.toString() : 'Start Time'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => showDatepicker('end')}>
          <Text style={styles.endTime} numberOfLines={1}>
            {endDate ? endDate.toString() : 'End Time'}
          </Text>
        </TouchableOpacity>
      </View>

      {showStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate ? startDate : new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onStartDateChange}
        />
      )}
      {showEnd && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate ? endDate : new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onEndDateChange}
        />
      )}

      <View style={styles.materialRadio2Row}>
        <RadioButton
          checked={scheduleType == 2}
          style={styles.materialRadio2}
          onPress={() => setScheduleType(2)}></RadioButton>
        <Text style={styles.loremIpsum3}>Set to 24 hours a day</Text>
      </View>
      <TouchableOpacity
        style={styles.rect9}
        onPress={() => {
          navigation.navigate('CustomSchedule');
        }}>
        <Text style={styles.loremIpsum4}>SET A CUSTOM SCHEDULE</Text>
      </TouchableOpacity>
      <Text style={styles.loremIpsum5}>
        How much notice do you need before a Guest arrives?
      </Text>
      <View style={styles.button}>
        <TextInput
          style={styles.hour}
          value={noticeTime}
          onChangeText={(input) => {
            setNoticeTime(input);
          }}></TextInput>
      </View>
      <Text style={styles.loremIpsum6}>
        Tip : At least 2 days&#39; notice can help you plan for a guest&#39;s
        arrival, but you might miss out last minute trips.
      </Text>
      <Text style={styles.loremIpsum7}>
        How far in advance can guests book?
      </Text>
      <View style={styles.button4}>
        <TextInput
          style={styles.loremIpsum8}
          value={advanceBookingTime}
          onChangeText={(input) => {
            setAdvanceBookingTime(input);
          }}></TextInput>
      </View>
      <Text style={styles.loremIpsum9}>
        Tip : At least 2 days&#39; notice can help you plan for a guest&#39;s
        arrival, but you might miss out last minute trips.
      </Text>
      <Text style={styles.loremIpsum10}>How long can guests stay?</Text>
      <View style={styles.rect10}>
        <View style={styles.iconRow}>
          <TouchableOpacity>
            <EntypoIcon
              name="circle-with-minus"
              style={styles.icon}></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.loremIpsum11}>1 hour Minimum</Text>
          <TouchableOpacity>
            <EntypoIcon
              name="circle-with-plus"
              style={styles.icon2}></EntypoIcon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rect11}>
        <View style={styles.icon4Row}>
          <TouchableOpacity>
            <EntypoIcon
              name="circle-with-minus"
              style={styles.icon4}></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.loremIpsum12}>30 Days Maximum</Text>
          <TouchableOpacity>
            <EntypoIcon
              name="circle-with-plus"
              style={styles.icon3}></EntypoIcon>
          </TouchableOpacity>
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
        <RadioButton
          checked={instantBooking}
          style={styles.materialRadio2}
          onPress={() => setInstantBooking(true)}></RadioButton>
        <Text style={styles.instantBooking}>Instant Booking</Text>
      </View>
      <View style={styles.icon6Row}>
        <RadioButton
          checked={!instantBooking}
          style={styles.materialRadio2}
          onPress={() => setInstantBooking(false)}></RadioButton>
        <Text style={styles.approvalIsRequired}>Approval is required</Text>
      </View>
      <MaterialButtonPrimary
        onPress={onSubmitHandler}
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  spaceAvailable: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
  loremIpsum: {
    // fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 18,
    marginVertical: 21,
  },
  rect: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monday: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginLeft: 2,
    marginTop: 12,
  },
  switch: {},
  text: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 20,
    marginTop: 37,
  },
  materialRadio1: {
    height: 30,
    width: 30,
  },
  loremIpsum2: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginLeft: 10,
    // marginTop: 6,
  },
  materialRadio1Row: {
    height: 30,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  button2: {
    width: 142,
    height: 39,
    borderBottomWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
  },
  startTime: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 18,
    marginTop: 9,
    // marginLeft: 28,
  },
  button3: {
    width: 142,
    height: 39,
    borderBottomWidth: 1,
    borderColor: 'rgba(182,182,182,1)',
    marginLeft: 38,
  },
  endTime: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    fontSize: 18,
    marginTop: 9,
    // marginLeft: 33,
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
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginLeft: 10,
  },
  materialRadio2Row: {
    height: 30,
    flexDirection: 'row',
    marginTop: 28,
    alignItems: 'center',
  },
  rect9: {
    width: 238,
    height: 38,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(39,170,225,1)',
    marginTop: 21,
    marginLeft: 27,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loremIpsum4: {
    // fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 13,
  },
  loremIpsum5: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 48,
  },
  button: {
    width: '100%',
    // height: 46,
    borderBottomWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 17,
  },
  hour: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 15,
    // marginLeft: 13,
  },
  loremIpsum6: {
    // fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    lineHeight: 20,
    marginTop: 25,
    // marginLeft: 28,
  },
  loremIpsum7: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 31,
    // marginLeft: 29,
  },
  button4: {
    width: '100%',
    // height: 46,
    borderBottomWidth: 1,
    borderColor: 'rgba(214,214,214,1)',
    marginTop: 16,
    // marginLeft: 26,
  },
  loremIpsum8: {
    // fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 16,
    marginTop: 15,
    // marginLeft: 11,
  },
  loremIpsum9: {
    // fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    lineHeight: 20,
    marginTop: 24,
    // marginLeft: 29,
  },
  loremIpsum10: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 24,
    // marginLeft: 29,
  },
  rect10: {
    width: 195,
    height: 31,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 25,
  },
  icon: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 22,
  },
  loremIpsum11: {
    // fontFamily: 'roboto-regular',
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
    marginLeft: 25,
  },
  icon4: {
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    height: 24,
    width: 22,
  },
  loremIpsum12: {
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    width: 310,
    lineHeight: 20,
    height: 60,
    marginTop: 20,
    // marginLeft: 29,
  },
  loremIpsum14: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 17,
    marginTop: 24,
    // marginLeft: 27,
  },
  icon5: {
    color: 'rgba(39,170,225,1)',
    fontSize: 20,
  },
  instantBooking: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(11,64,148,1)',
    marginLeft: 11,
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
    // fontFamily: 'roboto-regular',
    color: 'rgba(182,182,182,1)',
    marginLeft: 12,
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
    marginVertical: 67,
    alignSelf: 'center',
    // marginLeft: 136,
  },
});

SpaceAvailable.propTypes = {
  addListingSpaceAvailable: PropTypes.func.isRequired,
};

export default connect(null, {addListingSpaceAvailable})(SpaceAvailable);
