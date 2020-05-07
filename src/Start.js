import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Question from './Question'
export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinaiton: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.button} 
        onPress={}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
});
