import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/styles";

const GoalItem = (props) => (
  <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

export default GoalItem;
