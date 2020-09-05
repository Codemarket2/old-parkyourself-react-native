import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AppLogo from '../components/AppLogo';

function SignUpForm({navigation}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const signUpHandler = () => {
    if (firstname && lastname && phone && email && password && password2) {
      if (password != password2) {
        Alert.alert('Password Mismatch', 'Both passwords should match');
      } else {
        navigation.navigate('Tabs');
      }
    } else {
      Alert.alert('Missing Inputs', 'Please fill all the inputs');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AppLogo />
      <View style={styles.scrollArea}>
        {/* <View style={styles.scrollArea_contentContainerStyle}> */}
        <Text style={styles.signUp}>Sign Up</Text>
        <View style={styles.inputList}>
          <Input
            icon={() => <EntypoIcon name="user" style={styles.icon} />}
            placeholder="Enter First name"
            value={firstname}
            onChangeText={(input) => setFirstname(input)}
          />
          <Input
            icon={() => <EntypoIcon name="user" style={styles.icon} />}
            placeholder="Enter Last name"
            value={lastname}
            onChangeText={(input) => setLastname(input)}
          />
          <Input
            icon={() => (
              <MaterialCommunityIconsIcon
                name="cellphone-android"
                style={styles.icon}
              />
            )}
            placeholder="Enter Phone number"
            keyboardType="numeric"
            value={phone}
            onChangeText={(input) => setPhone(input)}
          />
          <Input
            icon={() => (
              <IoniconsIcon name="md-mail-open" style={styles.icon} />
            )}
            placeholder="Enter Email address"
            value={email}
            onChangeText={(input) => setEmail(input)}
          />
          <Input
            icon={() => <IoniconsIcon name="ios-lock" style={styles.icon} />}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(input) => setPassword(input)}
          />
          <Input
            icon={() => <IoniconsIcon name="ios-lock" style={styles.icon} />}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={password2}
            onChangeText={(input) => setPassword2(input)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={signUpHandler}>
          <Text style={styles.createAccount}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.loremIpsum2}>
          By creating or using an Account you agree to the {'\n'}ParkYourself
          <Text style={{textDecorationLine: 'underline'}}>
            Terms &amp; Conditions
          </Text>{' '}
          and{' '}
          <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const Input = ({icon: Icon, placeholder, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(217,217,217,1)"
        style={styles.textInput}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollArea: {
    width: '100%',
    height: 670,
    backgroundColor: 'rgba(39,170,225,1)',
    marginTop: 17,
    // display: 'flex',
    alignItems: 'center',
    // flexDirection: 'column',
  },
  signUp: {
    //fontFamily: 'roboto-500',
    color: 'rgba(252,250,250,1)',
    fontSize: 26,
    marginVertical: 23,
    // marginLeft: 137,
  },
  inputList: {
    display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    width: '80%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderBottomColor: 'rgba(217,217,217,1)',
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b4094',
    borderRadius: 50,
    marginRight: 15,
    width: 36,
    height: 36,
  },
  icon: {
    fontSize: 25,
    color: '#fff',
  },
  textInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    color: '#fff',
  },
  button: {
    width: '80%',
    height: 56,
    backgroundColor: 'rgba(249,249,249,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 150,
    shadowOpacity: 0.33,
    shadowRadius: 50,
    marginTop: 22,
    // marginLeft: 30,
  },
  createAccount: {
    //fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 15,
    marginTop: 19,
    marginLeft: 100,
  },
  loremIpsum2: {
    //fontFamily: 'roboto-regular',
    color: 'rgba(245,245,245,1)',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 22,
    // marginLeft: 14,
  },
});

export default SignUpForm;
