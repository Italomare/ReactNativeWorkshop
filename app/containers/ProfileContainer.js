import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Profile extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> PROFILE </Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#00A896'
  },
  text:{
    color:'#F0F3BD'
  }
})
