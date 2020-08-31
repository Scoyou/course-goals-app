import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.textInput}/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}


