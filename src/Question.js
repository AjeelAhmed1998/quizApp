import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 

export default class Question extends React.Component{


    render(){
        return(
            <View>
                <Text>yeah just showing you this </Text>
            </View>
        ); 
    }
}


const style = StyleSheet.create({
    text: {
        flex: 1, 
        alignContent: "center"
    }
})