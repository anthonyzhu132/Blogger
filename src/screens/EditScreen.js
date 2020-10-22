import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Edit Screen - {navigation.getParam('id')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default EditScreen;