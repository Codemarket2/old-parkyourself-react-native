import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
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
import AddListingHeader from '../../components/SpaceOwner/AddListingHeader';
import NextButton from '../../components/SpaceOwner/NextButton';
import RadioListItem from '../../components/RadioListItem';
import Input from '../../components/Input';

function SpaceAvailable({
  onBackButtonPress,
  onNextButtonPress,
  spaceAvailable,
  addListingSpaceAvailable,
}) {
  const scrollRef = useRef();

  const [activeIndex, setActiveIndex] = useState(1);

  const [monday, setMonday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.monday : false,
  );
  const [tuesday, setTuesday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.tuesday : false,
  );
  const [wednesday, setWednesday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.wednesday : false,
  );
  const [thursday, setThursday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.thursday : false,
  );
  const [friday, setFriday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.friday : false,
  );
  const [saturday, setSaturday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.saturday : false,
  );
  const [sunday, setSunday] = useState(
    spaceAvailable ? spaceAvailable.activeDays.sunday : false,
  );
  const [scheduleType, setScheduleType] = useState(
    spaceAvailable ? (spaceAvailable.scheduleType == 'daily' ? 1 : 2) : 1,
  );
  const [noticeTime, setNoticeTime] = useState(
    spaceAvailable ? spaceAvailable.noticeTime : '1 Hour',
  );
  const [advanceBookingTime, setAdvanceBookingTime] = useState(
    spaceAvailable ? spaceAvailable.advanceBookingTime : '3 Hours',
  );
  const [minTime, setMinTime] = useState(
    spaceAvailable && spaceAvailable.minTime ? spaceAvailable.minTime : 1,
  );
  const [maxTime, setMaxTime] = useState(
    spaceAvailable && spaceAvailable.maxTime ? spaceAvailable.maxTime : 30,
  );
  const [instantBooking, setInstantBooking] = useState(
    spaceAvailable ? spaceAvailable.instantBooking : true,
  );

  // date picker
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [mode, setMode] = useState('time');
  const [showStart, setStartShow] = useState(false);
  const [showEnd, setEndShow] = useState(false);

  //date picker functions
  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startTime;
    setEndShow(false);
    setStartShow(false);
    setStartTime(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endTime;
    setStartShow(false);
    setEndShow(false);
    setEndTime(currentDate);
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

  const backButtonHandler = () => {
    if (activeIndex != 1) {
      setActiveIndex(activeIndex - 1);
      scrollRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    } else {
      onBackButtonPress();
    }
  };

  const onSubmitHandler = () => {
    try {
      if (activeIndex != 6) {
        setActiveIndex(activeIndex + 1);
        scrollRef.current.scrollTo({
          y: 0,
          animated: true,
        });
      } else {
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
          startTime &&
          endTime &&
          minTime &&
          maxTime &&
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
            startTime,
            endTime,
            noticeTime,
            advanceBookingTime,
            minTime,
            maxTime,
            instantBooking,
          };
          addListingSpaceAvailable(spaceAvailableData);
          // navigation.navigate('SetPricingType');
          onNextButtonPress();
        } else {
          Alert.alert('Missing Inputs', 'Please fill all required inputs');
        }
      }
    } catch (error) {
      Alert.alert(
        'Something Went wrong!',
        'Unable to add space available details',
      );
    }
  };

  return (
    <>
      <AddListingHeader onPress={backButtonHandler} />
      <ScrollView ref={scrollRef} contentContainerStyle={styles.container}>
        {/* <Text style={styles.spaceAvailable}>Space Available</Text> */}

        {activeIndex == 1 && (
          <>
            <Text style={styles.heading}>
              What days can drivers park at your listing?
            </Text>
            <RadioListItem
              label="Monday"
              checked={monday}
              onPress={() => setMonday(!monday)}
            />
            <RadioListItem
              label="Tuesday"
              checked={tuesday}
              onPress={() => setTuesday(!tuesday)}
            />
            <RadioListItem
              label="Wednesday"
              checked={wednesday}
              onPress={() => setWednesday(!wednesday)}
            />
            <RadioListItem
              label="Thursday"
              checked={thursday}
              onPress={() => setThursday(!thursday)}
            />
            <RadioListItem
              label="Friday"
              checked={friday}
              onPress={() => setFriday(!friday)}
            />
            <RadioListItem
              label="Saturday"
              checked={saturday}
              onPress={() => setSaturday(!saturday)}
            />
            <RadioListItem
              label="Sunday"
              checked={sunday}
              onPress={() => setSunday(!sunday)}
            />
          </>
        )}

        {activeIndex == 2 && (
          <>
            <Text style={styles.heading}>
              Set a daily schedule or set it to 24 hours a day
            </Text>
            <RadioListItem
              label="Set to a daily schedule"
              checked={scheduleType == 1}
              onPress={() => setScheduleType(1)}
            />

            <View style={styles.button2Row}>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => showDatepicker('start')}>
                <Text style={styles.startTime} numberOfLines={1}>
                  {startTime ? startTime.toString() : 'Start Time'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button3}
                onPress={() => showDatepicker('end')}>
                <Text style={styles.endTime} numberOfLines={1}>
                  {endTime ? endTime.toString() : 'End Time'}
                </Text>
              </TouchableOpacity>
            </View>

            {showStart && (
              <DateTimePicker
                testID="dateTimePicker"
                value={startTime ? startTime : new Date()}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onStartDateChange}
              />
            )}
            {showEnd && (
              <DateTimePicker
                testID="dateTimePicker"
                value={endTime ? endTime : new Date()}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onEndDateChange}
              />
            )}

            <RadioListItem
              label="Set to 24 hours a day"
              checked={scheduleType == 2}
              onPress={() => setScheduleType(2)}
            />
            <TouchableOpacity
              style={styles.rect9}
              onPress={() => {
                navigation.navigate('CustomSchedule');
              }}>
              <Text style={styles.loremIpsum4}>SET A CUSTOM SCHEDULE</Text>
            </TouchableOpacity>
          </>
        )}

        {activeIndex == 3 && (
          <>
            <Text style={styles.heading}>
              How much notice do you need before a Guest arrives?
            </Text>
            <View style={styles.button}>
              <Input
                style={styles.hour}
                value={noticeTime}
                onChangeText={(input) => {
                  setNoticeTime(input);
                }}></Input>
            </View>
            <Text style={styles.description}>
              Tip : At least 2 days&#39; notice can help you plan for a
              guest&#39;s arrival, but you might miss out last minute trips.
            </Text>
          </>
        )}

        {activeIndex == 4 && (
          <>
            <Text style={styles.heading}>
              How far in advance can guests book?
            </Text>
            <View style={styles.button}>
              <Input
                style={styles.loremIpsum8}
                value={advanceBookingTime}
                onChangeText={(input) => {
                  setAdvanceBookingTime(input);
                }}
              />
            </View>
            <Text style={styles.description}>
              Tip : At least 2 days&#39; notice can help you plan for a
              guest&#39;s arrival, but you might miss out last minute trips.
            </Text>
          </>
        )}

        {activeIndex == 5 && (
          <>
            <Text style={styles.heading}>How long can guests stay?</Text>
            <View style={styles.rect10}>
              <View style={styles.iconRow}>
                <TouchableOpacity
                  onPress={() => {
                    if (minTime != 1) {
                      setMinTime(minTime - 1);
                    }
                  }}>
                  <EntypoIcon
                    name="circle-with-minus"
                    style={styles.icon}></EntypoIcon>
                </TouchableOpacity>
                <Text style={styles.loremIpsum11}>
                  {minTime} {minTime == 1 ? 'Hour' : 'Hours'} Minimum
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setMinTime(minTime + 1);
                  }}>
                  <EntypoIcon
                    name="circle-with-plus"
                    style={styles.icon2}></EntypoIcon>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect10}>
              <View style={styles.iconRow}>
                <TouchableOpacity
                  onPress={() => {
                    if (maxTime != 0) {
                      setMaxTime(maxTime - 1);
                    }
                  }}>
                  <EntypoIcon
                    name="circle-with-minus"
                    style={styles.icon}></EntypoIcon>
                </TouchableOpacity>
                <Text style={styles.loremIpsum11}>
                  {maxTime} {maxTime <= 1 ? 'Day' : 'Days'} Maximum
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    if (maxTime != 30) {
                      setMaxTime(maxTime + 1);
                    }
                  }}>
                  <EntypoIcon
                    name="circle-with-plus"
                    style={styles.icon2}></EntypoIcon>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>
              Tip : At least 2 days&#39; notice can help you plan for a
              guest&#39;s arrival, but you might miss out last minute trips.
            </Text>
          </>
        )}

        {activeIndex == 6 && (
          <>
            <Text style={styles.heading}>
              Which booking process do you prefer?
            </Text>
            <RadioListItem
              label="Instant Booking"
              checked={instantBooking}
              onPress={() => setInstantBooking(true)}
            />
            <RadioListItem
              label="Approval is required"
              checked={!instantBooking}
              onPress={() => setInstantBooking(false)}
            />
          </>
        )}
        {/* <View style={styles.btnRow}>
        {activeIndex != 1 && (
          <TouchableOpacity onPress={backButtonHandler}>
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        )}
        <MaterialButtonPrimary
          onPress={onSubmitHandler}
          caption="NEXT"
          style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
      </View> */}
      </ScrollView>
      <NextButton onPress={onSubmitHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    minHeight: Dimensions.get('window').height,
    paddingTop: 50,
    paddingBottom: 80,
  },
  spaceAvailable: {
    // fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
  heading: {
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30,
    marginVertical: 20,
  },
  subHeading: {
    color: 'rgba(11,64,148,1)',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
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
    width: '50%',
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
    width: '50%',
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
    // marginLeft: 25,
    marginRight: 28,
    marginBottom: 30,
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
    // marginLeft: 27,
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
    marginTop: 30,
  },
  button: {
    width: '100%',
    // height: 46,
    // borderBottomWidth: 1,
    // borderColor: 'rgba(214,214,214,1)',
    marginTop: 17,
  },
  hour: {
    // fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    fontSize: 16,
    marginTop: 15,
    // marginLeft: 13,
  },
  description: {
    // fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    lineHeight: 20,
    marginTop: 40,
    fontSize: 16,
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
    // marginLeft: 25,
  },
  icon: {
    color: 'rgba(39,170,225,1)',
    fontSize: 30,
    // height: 34,
    // width: 34,
  },
  loremIpsum11: {
    // fontFamily: 'roboto-regular',
    width: 180,
    color: '#121212',
    marginLeft: 20,
    // marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
  },
  icon2: {
    color: 'rgba(11,64,148,1)',
    fontSize: 30,
    // height: 24,
    // width: 22,
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
    // marginLeft: 25,
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
    color: '#0b4094',
    marginLeft: 12,
  },
  icon6Row: {
    height: 22,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 28,
    marginRight: 195,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtnText: {
    fontSize: 16,
    textDecorationLine: 'underline',
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
