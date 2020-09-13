import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Switch, ScrollView, TouchableOpacity } from 'react-native';
import MaterialButtonPrimary from '../../components/MaterialButtonPrimary';
import TipsSettingRatesModal from '../../components/SpaceOwner/TipsSettingRatesModal';
import VariableVsFlatModal from '../../components/SpaceOwner/VariableVsFlatModal';

function VariableBillingType({ navigation }) {

  const [perHourRate, setPerHourRate] = useState('$ 1.80');
  const [perDayRate, setPerDayRate] = useState('$ 13.00');
  const [perWeekRate, setPerWeekRate] = useState('$ 60.00');
  const [perMonthRate, setPerMonthRate] = useState('$ 200.00');
  const [perWeek, setPerWeek] = useState(false);
  const [perMonth, setPerMonth] = useState(true);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);


  const onSubmitHandler = () => {
    setVisible2(true);
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.setPricing1}>Set Pricing</Text>
      <Text style={styles.loremIpsum}>Set your desired rates</Text>
      <Text style={styles.flatBillingType}>Variable Billing Type</Text>
      <Text style={styles.dailyMaximum}>Per Hour</Text>
      <TextInput
        placeholder="placeholder"
        value={perHourRate}
        onChangeText={(input) => setPerHourRate(input)}
        style={styles.placeholder}></TextInput>

      <Text style={styles.dailyMaximum}>Per Day</Text>
      <TextInput
        placeholder="placeholder"
        value={perDayRate}
        onChangeText={(input) => setPerDayRate(input)}
        style={styles.placeholder}></TextInput>

      <Text style={styles.dailyMaximum}>Per Week</Text>
      <View styles={styles.perWeek}>
        <TextInput
          placeholder="placeholder"
          value={perWeekRate}
          onChangeText={(input) => setPerWeekRate(input)}
          style={styles.placeholder}></TextInput>
        <Switch
          value={perWeek}
          trackColor={{
            true: 'rgba(230, 230, 230,1)',
            false: 'rgba(155,155,155,1)',
          }}
          disabled={false}
          style={styles.switch}></Switch>
      </View>

      <Text style={styles.dailyMaximum}>Per Month</Text>
      <View styles={styles.perWeek}>
        <TextInput
          placeholder="placeholder"
          value={perMonthRate}
          onChangeText={(input) => setPerMonthRate(input)}
          style={styles.placeholder}></TextInput>
        <Switch
          value={perMonth}
          trackColor={{
            true: 'rgba(230, 230, 230,1)',
            false: 'rgba(155,155,155,1)',
          }}
          disabled={false}
          style={styles.switch}></Switch>
      </View>
      <TouchableOpacity onPress={() => setVisible1(true)}><Text style={styles.loremIpsum2}>Tips for setting appropriate rates</Text></TouchableOpacity>
      <MaterialButtonPrimary
        onPress={onSubmitHandler}
        caption="NEXT"
        style={styles.materialButtonPrimary1}></MaterialButtonPrimary>
      <TipsSettingRatesModal visible={visible1} onPress={() => setVisible1(false)} />
      <VariableVsFlatModal visible={visible2} onPress={() => { setVisible2(false); navigation.navigate('SaveSpaceDetails') }} />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 1

  },
  setPricing1: {
    fontFamily: 'roboto-500',
    color: 'rgba(11,64,148,1)',
    fontSize: 24,
  },
  loremIpsum: {
    fontFamily: 'roboto-300',
    color: 'rgba(11,64,148,1)',
    fontSize: 16,
    marginTop: 13,
  },
  flatBillingType: {
    fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 17,
    marginTop: 45,
    fontWeight: '700'
  },
  dailyMaximum: {
    fontFamily: 'roboto-regular',
    color: '#b6b6b6',
    fontSize: 16,
    marginTop: 22,
  },
  perWeek: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  switch: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 40,
    width: '100%',
    fontSize: 18,
    marginTop: 10,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(39,170,225,1)',
    textDecorationLine: 'underline',
    marginTop: 37,
  },
  materialButtonPrimary1: {
    width: 100,
    height: 36,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 10,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    marginTop: 136,
    alignSelf: 'center',
    backgroundColor: '#27aae1'
  },
});

export default VariableBillingType;
