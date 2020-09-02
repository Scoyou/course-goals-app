import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/styles';

const GoalItem = (props) => (
    <View style={styles.listItem}>
    <Text>{props.children}</Text>
    </View>
)

export default GoalItem;