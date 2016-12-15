import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class Setup extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> SETUP </Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#36558F'
  },
  text:{
    color:'#D4E4BC'
  }

})
