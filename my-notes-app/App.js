import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Mynotes from './components/Mynotes';

// or any pure javascript modules available in npm


export default class App extends React.Component{
  constructor(){
  super();
  this.state={
    noteArr:[],
    noteText:''
  }
  }
  markDone = (item) =>{
    this.state.noteArr.splice(item, 1);
    this.setState({noteArr:this.state.noteArr})
}


  addTask=()=>{
    var d= new Date()
    const monthsname=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    if(this.state.noteText){
    this.state.noteArr.push({
    note:this.state.noteText,
    date: d.getDate()+"-"+monthsname[d.getMonth()]+"-"+d.getFullYear()
    
    })
    this.setState({noteArr:this.state.noteArr})
    this.setState({noteText:''})
  console.log(this.state.noteArr)
    }
}

render() {
  var notes = this.state.noteArr.map((index, items) => {
    return (
      <Mynotes
        task={index}
        markDone={() => {
          this.markDone(items);
        }}
      />
    );
  });

    return <View style={styles.container}>
    <View style={styles.header}>
    <Text style={{color:'white',fontSize:20}}>Notes</Text>
    </View>
    <Text>
   {notes}
    </Text>
    <View style={styles.bottom}>
    <TextInput placeholder="Add a note" style={styles.input}
    onChangeText={(text)=>this.setState({noteText:text})}
    value={this.state.noteText}
    />
    <TouchableOpacity  style={styles.button}
    onPress={this.addTask}>
    <Text style={{fontSize:24}}>+</Text>
    
    </TouchableOpacity>
    
    </View>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    
  },
  header:{
    backgroundColor:'#FF6263',
    height: 70,
    color:'white',
    justifyContent:'center',
    
    alignItems:'center',
    
    borderBottomWidth:3,
    borderBottomColor:'grey',
    
  },
  bottom:{
    position:'absolute',
    bottom:0,right:0,left:0,
    borderTopWidth:2,
    bordertopColor:'grey'

  },
  input:{
    padding:20,
    outline:'none'
    
  },
  button:{
    position:'absolute',
    bottom:0, right:9,
    height:40, width:40,backgroundColor:'#FF6263',
    borderRadius:20,
    justifyContent:"center",alignItems:'center', marginBottom:8

  }
  
});
