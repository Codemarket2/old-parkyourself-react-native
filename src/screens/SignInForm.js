import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import AppLogo from '../components/AppLogo';

const EMAIL = 'johndoe@gmail.com';
const PASSWORD = '12345678';

function SignInForm({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = () => {
    if (email && password) {
      if (email == EMAIL && password == PASSWORD) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid Credentials', 'Invalid username or password');
      }
    } else {
      Alert.alert('Missing Inputs', 'Please fill all the inputs');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <AppLogo />
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>Sign-in to your Account</Text>
        <View style={styles.ellipseStackRow}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 49.3 49.3" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(27,27,112,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}></Ellipse>
            </Svg>
            <IoniconsIcon
              name="md-mail-open"
              style={styles.icon}></IoniconsIcon>
          </View>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            placeholderTextColor="rgba(230, 230, 230,1)"
            style={styles.exampleGmailCom}
            value={email}
            onChangeText={(input) => setEmail(input)}></TextInput>
        </View>
        <View style={styles.ellipse1StackRow}>
          <View style={styles.ellipse1Stack}>
            <Svg viewBox="0 0 49.3 49.3" style={styles.ellipse1}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(27,27,112,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}></Ellipse>
            </Svg>
            <IoniconsIcon name="ios-lock" style={styles.icon2}></IoniconsIcon>
          </View>
          <TextInput
            placeholder="xxxxxxxxxxxxxxxxxx"
            placeholderTextColor="rgba(215,210,210,1)"
            style={styles.xxxxxxxxxxxxxxxxxx}
            value={password}
            secureTextEntry={true}
            onChangeText={(input) => setPassword(input)}></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={signInHandler}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.loremIpsum2}>
          By creating or using an Account you agree to the {'\n'}ParkYourself
          Terms &amp; Conditions and Privacy Policy
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  rect: {
    width: '100%',
    height: 480,
    backgroundColor: 'rgba(39,170,225,1)',
    marginTop: 32,
    alignItems: 'center',
  },
  loremIpsum: {
    //fontFamily: 'roboto-500',
    color: 'rgba(252,248,248,1)',
    fontSize: 26,
    marginTop: 22,
    // marginLeft: 57,
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 33,
    height: 31,
    position: 'absolute',
  },
  icon: {
    top: 1,
    left: 6,
    position: 'absolute',
    color: 'rgba(245,243,243,1)',
    fontSize: 25,
    height: 27,
    width: 22,
  },
  ellipseStack: {
    width: 33,
    height: 31,
    marginTop: 6,
  },
  exampleGmailCom: {
    //fontFamily: 'roboto-regular',
    color: 'rgba(246,246,246,1)',
    height: 49,
    width: 240,
    fontSize: 22,
    marginLeft: 23,
  },
  ellipseStackRow: {
    height: 49,
    flexDirection: 'row',
    marginTop: 44,
    marginLeft: 38,
    marginRight: 41,
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 33,
    height: 33,
    position: 'absolute',
  },
  icon2: {
    top: 1,
    left: 8,
    position: 'absolute',
    color: 'rgba(247,244,244,1)',
    fontSize: 27,
    height: 29,
    width: 17,
  },
  ellipse1Stack: {
    width: 33,
    height: 33,
    marginTop: 5,
  },
  xxxxxxxxxxxxxxxxxx: {
    //fontFamily: 'roboto-regular',
    color: 'rgba(246,246,246,1)',
    height: 42,
    width: 240,
    fontSize: 22,
    marginLeft: 21,
  },
  ellipse1StackRow: {
    height: 42,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 40,
    marginRight: 41,
  },
  button: {
    width: 314,
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
    marginTop: 41,
    // marginLeft: 30,
  },
  login: {
    //fontFamily: 'roboto-500',
    color: 'rgba(39,170,225,1)',
    fontSize: 22,
    marginTop: 15,
    marginLeft: 129,
  },
  forgotPassword: {
    //fontFamily: 'roboto-regular',
    color: 'rgba(227,221,221,1)',
    fontSize: 14,
    marginTop: 13,
    marginLeft: 200,
  },
  loremIpsum2: {
    //fontFamily: 'roboto-regular',
    color: 'rgba(245,245,245,1)',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 30,
    // marginLeft: 25,
  },
});

export default SignInForm;
