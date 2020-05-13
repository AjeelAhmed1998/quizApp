import React from 'react';
import {
  Text,
  Button,
  TouchableHighlight,
  View,
} from 'react-native';

import styles from './styles'


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight,faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

let tempArr = []
const bgColor = ['#b2ebf2','#b2ebf2','#b2ebf2','#b2ebf2']
const questions = [
  {
      question: "The term ‘Computer’ is derived from?",
      correct: 0,
      answers: [
          { 0: 'Latin' },
          { 1: 'German' },
          { 2: 'French' },
          { 3: 'Arabic' },
      ]
  },
  {
      question: "The basic operations performed by a computer are?",
      correct: 3,
      answers: [
          { 0: 'Arithmetic Operation' },
          { 1: 'Logical Operation' },
          { 2: 'Storage and relative' },
          { 3: 'All of the Above' },
      ]
  },
  {
      question: "What visual representation does Resource Monitor use when information is filtered?",
      correct: 3,
      answers: [
          { 0: 'A red filter label' },
          { 1: 'A green highlight' },
          { 2: 'An exclamation point' },
          { 3: 'An Orange Bar' },
      ]
  },
  {
      question: "After you install the NLB feature, what management tool is available from Server Manager?",
      correct: 0,
      answers: [
          { 0: 'NLB Manager' },
          { 1: 'Windows Update' },
          { 2: 'Storage Manager' },
          { 3: 'Cluster Manager' },
      ]
  },
  {
      question: "What is the footprint of the VHD for Nano Server Datacenter Edition?",
      correct: 3,
      answers: [
          { 0: '1 GB' },
          { 1: '2.4 GB' },
          { 2: '4.6 GB' },
          { 3: '509 MB' },
      ]
  },
  {
      question: "How much space does a VHDX support?",
      correct: 1,
      answers: [
          { 0: '8 TB' },
          { 1: '64 TB' },
          { 2: '2 TB' },
          { 3: '1 TB' },
      ]
  },
  {
      question: "What PowerShell command deletes a container?",
      correct: 1,
      answers: [
          { 0: 'Delete-Container' },
          { 1: 'Remove-Container' },
          { 2: 'Erase-Container' },
          { 3: 'Scrub-Container' },
      ]
  },
  {
      question: "Which virtual switch type permits communication between the VMs on the host and between the VMs and the host itself?",
      correct: 0,
      answers: [
          { 0: 'Internal' },
          { 1: 'Private' },
          { 2: 'Shielded' },
          { 3: 'Firewall' },
      ]
  },
  {
      question: "Which command is used to set terminal IO characteristic?",
      correct: 3,
      answers: [
          { 0: 'tty' },
          { 1: 'ctty' },
          { 2: 'ptty' },
          { 3: 'stty' },
      ]
  },
  {
      question: "Which command is used to record a user login session in a file",
      correct: 2,
      answers: [
          { 0: 'macro' },
          { 1: 'read' },
          { 2: 'script' },
          { 3: 'none' },
      ]
  },
  {
      question: "Which command is used to display the operating system name",
      correct: 3,
      answers: [
          { 0: 'os' },
          { 1: 'kernel' },
          { 2: 'unix' },
          { 3: 'uname' },
      ]
  },
  {
      question: "Which command is used to display the unix version",
      correct: 0,
      answers: [
          { 0: 'uname -r' },
          { 1: 'uname -n' },
          { 2: 'uname -t' },
          { 3: 'kernel' },
      ]
  },
  {
      question: "Which command is used to print a file",
      correct: 2,
      answers: [
          { 0: 'print' },
          { 1: 'ptr' },
          { 2: 'lpr' },
          { 3: 'none' },
      ]
  },
  {
      question: "Using which command you find resource limits to the session?",
      correct: 1,
      answers: [
          { 0: 'rlimit' },
          { 1: 'ulimit' },
          { 2: 'setrlimit' },
          { 3: 'getrlimit' },
      ]
  },
  {
      question: "Which option of ls command used to view file inode number",
      correct: 2,
      answers: [
          { 0: '-l' },
          { 1: '-o' },
          { 2: '-i' },
          { 3: '-p' },
      ]
  },
]




class QuizComponent extends React.Component{

  constructor(props){
    super(props)
    this.qno = 0;
    this.score=0;
    tempArr = Object.keys(questions).map(function(k){return questions[k]})

    let randomQuestion = tempArr.sort(() => .5 - Math.random()).slice();
    
    
    
//passengers.sort((a, b) => a.person.last_name.localeCompare(b.person.last_name));

 this.state = {
   question: tempArr[this.qno].question,
   answers: tempArr[this.qno].answers,
   correct: tempArr[this.qno].correct,
   bgColor,
   countCheck: 0,
   disabled: false,
   selected: false,
   finish: false,
   current: 'Quiz',
   icon: ['','','',''],
   
 }

 this.answer = this.answer.bind(this);
 this.next = this.next.bind(this);
 this.finish = this.finish.bind(this);
}




next(){
  
  if(this.qno < 4){
  for(let i=0;i<4;i++){
    this.state.bgColor[i]='#b2ebf2'
    this.state.icon[i]=''
  }
  this.setState({disabled: false,selected: false})
  if(this.qno < tempArr.length-1){
    this.qno++
    this.setState({ countCheck: 0, question: tempArr[this.qno].question, answers: tempArr[this.qno].answers, correct : tempArr[this.qno].correct})
  }else{
    this.setState({disabled: true})
  }
   }
}



answer(ans){
  if(this.qno==4 ){
    this.setState({finish: true})
  }
  const count = this.state.countCheck;
  this.setState({disabled: true,selected: true})
  for (let index = 0; index < 4; index++) {
    if(index != ans && index != this.state.correct){
      this.state.bgColor[index]='#607D8B'
    }
    
  }
  if(ans == this.state.correct){
    
       count + 1;
      this.setState({ countCheck: count })
      this.state.bgColor[ans]='#1de9b6'
      if( count < 6){
        this.score += 1
      }
    }
    else{
      this.setState({ countCheck: count })
      this.state.bgColor[ans]='#f44336'
      this.state.bgColor[this.state.correct]='#1de9b6'
     
    }


    
}

finish(){
  this.setState({current:"Home"})
  for(let i=0;i<4;i++){
    this.state.bgColor[i]='#b2ebf2'
  }
}



Icon(k){
  if(this.state.bgColor[k]=="#1de9b6"){
    return(
      <View style={{width:0,height:26}}>
    <FontAwesomeIcon size={30}  icon={this.state.icon[k]=faCheckCircle}/> 
    </View>
    )
  }
  else if(this.state.bgColor[k]=="#f44336"){
    return(
      <View style={{flex:1,width:0,height:26}}>
      <FontAwesomeIcon size={30}  icon={this.state.icon[k]=faTimesCircle}/> 
      </View>
      )
  }
}

render(){  
  
  const currentOptions = this.state.answers
  let _this = this
  var Next = '';


  if(!this.state.finish && this.qno !=4){
  Next =(
    <>
    <TouchableHighlight 
      style={[styles.next,{backgroundColor: this.state.selected ? 'orange': '#607D8B' }]} 
      activeOpacity = { .5 }
      onPress={_this.next}
      disabled={!this.state.selected}
      
      >
        
      <Text style={styles.answersText}> Next 
      <View style={{flex:1,width:20,height:22}}>
      <FontAwesomeIcon size={30} icon={ faArrowRight } />
      </View>
      </Text>
      
      </TouchableHighlight>
    </>
  )
  }else {
    Next=(
      <>
      <TouchableHighlight 
        style={[styles.answers,{backgroundColor: this.state.finish ? '#dce775': '#607D8B'}]} 
        onPress={_this.finish}
        disabled={!this.state.finish}
        
        >
        <Text style={styles.answersText}> Finish
        
        </Text>
        
        </TouchableHighlight>
      </>
    )


    
  }

  


  const renderedButtons = Object.keys(currentOptions)
  .map(
    function(k){
    return(
      <TouchableHighlight 
      style={[styles.answers,{backgroundColor:  _this.state.bgColor[k]}]} 
      onPress={() => _this.answer(k)}
      disabled={_this.state.disabled}
      >
      <Text style={styles.answersText}> {currentOptions[k][k]}  {_this.Icon(k)}  </Text>
      </TouchableHighlight>
    )
  })

var view = (
  <>
          <View style={styles.quizTop}>
        <Text style={[styles.quizTopText,{marginLeft: '5%'}]} >Score: {this.score}</Text>
        <Text style={[styles.quizTopText,{marginLeft:'25%'}]}>Question: {this.qno+1}/5</Text>
        </View>

<Text style={styles.question}>{this.state.question}</Text>

{renderedButtons}
{Next}
</>
)

if(this.state.current!="Quiz"){
  view =(
    <>
    <App></App>
    </>
  )
}
return (
  <>
         {view} 
         </>
        )
}
      
}

export default QuizComponent;