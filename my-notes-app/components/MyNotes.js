import * as React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
export default class Mynotes extends React.Component{
  render(){
    return(
      <View style={styles.note}key={this.props.task}>
      <Text style={styles.mytext}>{this.props.task.note}</Text>
        <Text style={styles.mytext}>{this.props.task.date}</Text>
        <TouchableOpacity
          style={styles.deletebtn}
          onPress={this.props.markDone}>
          <Text style={{color:'white'}}> ✔ </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  note:{
    position: 'relative',
    padding: 20,
    paddingRight: 200,
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
  },
  mytext:{
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#ededed',
  },
  deletebtn:{
    position:'absolute',
    top:10, right:10, padding:10, 
    backgroundColor:'#FF6263', bottom:10,
    justifyContent:'center',alignItems:'center',
    borderRadius:10
  }
})