import { StyleSheet } from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({

    submit:{
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:'#4dd0e1',
      borderRadius:50,
      borderWidth: 1,
      borderColor: '#fff',
      overflow: "hidden",
    },
    submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 30,
  },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
      marginLeft: 50,
      marginTop: 250,
    },
    question: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 50,
        marginTop: 30,
      },
    answers: {
        marginTop: 28,
        marginRight:40,
      marginLeft:40,
      paddingTop:20,
      paddingBottom:20,
      borderRadius:50,
      borderWidth: 1,
      borderColor: 'pink',
      overflow: "hidden",

      },
      answersText: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.dark,
        textAlign: "center",
        
      },
      next: {
          marginTop: 50,
          color: Colors.dark,
          marginRight:40,
      marginLeft:300,
      paddingTop:20,
      paddingBottom:20,
      borderRadius:50,
      },
    quizTop: {
        flexDirection: 'row',
        marginTop: '10%',

      },
      quizTopText: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
      }
  });
  
  