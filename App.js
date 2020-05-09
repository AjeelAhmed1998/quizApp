import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { render } from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.startContainer}>


          <Text>
            Start
          </Text>

        </TouchableOpacity>
        
        
        
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {

    flex: 1, 
    alignItems:"center",
    backgroundColor: "red"

  },
  startContainer:{
    flex: 1, 
    alignItems: "center"
  }, 
  Header:{}
});