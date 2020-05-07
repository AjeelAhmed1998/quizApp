import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/Start';
import { render } from 'react-dom';


export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Start/>
    ); 
  }




}
