import React, { useState } from "react";
import { TextInput, View, Button } from "react-native";

import styles from "../styles/styles";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
  
    const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText);
    };
  
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* this would also work here: onPress={ () => props.onAddGoal(enteredGoal) } */}
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    );
  };

export default GoalInput;
