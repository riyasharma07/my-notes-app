import React from 'react'
import {View, StyleSheet , Text,TouchableOpacity} from 'react-native'

export default class MyNotes extends React.Component{
  render()
  { 
    return(
    <View styles={styles.mynote} >
    <Text styles={styles.myText}></Text>
    <Text styles={styles.myText}></Text>
    <TouchableOpacity style={styles.noteDelete}
      onPress = {this.props.markDone}
      >
      <Text style={{color:'white'}}>Done</Text>
      </TouchableOpacity>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  mynote:{
    position:'relative',
    padding:20,
    borderBottomColor:'grey',
    borderBottomWidth:2,
    paddingRight:200

  },
  myText:{
    paddingLeft:20,
    borderLeftColor:'grey',
    borderLeftWidth:10

  },
  noteDelete:{
    position:"absolute",
    right:10, bottom:10, top:10,
    padding:10, 
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center',
     borderRadius:10
  }
});