import React from 'react';
import { onPress, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

function AppButton(props) {
  return (
    <TouchableOpacity style={[styles.customButton, {backgroundColor:props.color}]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    borderRadius: 24,
    marginVertical: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})

export default AppButton;