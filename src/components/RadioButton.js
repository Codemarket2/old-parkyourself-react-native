import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default function RadioButton({checked = false, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <IoniconsIcon
        name={checked ? 'radio-button-on' : 'radio-button-off'}
        color="black"
        size={22}
      />
    </TouchableOpacity>
  );
}
