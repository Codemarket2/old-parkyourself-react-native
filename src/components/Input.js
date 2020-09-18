import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function Input({...rest}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput {...rest} style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    maxWidth: '100%',
  },
  textInput: {
    fontSize: 18,
  },
});
