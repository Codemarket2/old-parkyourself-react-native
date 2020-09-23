import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const AddListingHeader = ({
  onPress,
  width = '100%',
  icon = 'arrowleft',
  onPressSaveAndExit,
}) => {
  const onSaveAndExit = () => {
    Alert.alert(
      'Do you really want to exit?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: onPressSaveAndExit,
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressIndicator}>
        <View style={{...styles.progress, width: width}}></View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={onPress} style={styles.backBtn}>
          <AntDesignIcon name={icon} size={28} color="#666"></AntDesignIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSaveAndExit} style={styles.saveBtn}>
          <Text style={styles.save}>Save & Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    marginBottom: 20,
    paddingBottom: 10,
    zIndex: 1000000,
  },
  progressIndicator: {
    width: '100%',
    height: 10,
  },
  progress: {
    height: 10,
    backgroundColor: '#27aae1',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtn: {},
  save: {
    fontWeight: '700',
    fontSize: 16,
    color: '#666',
  },
});

export default AddListingHeader;
