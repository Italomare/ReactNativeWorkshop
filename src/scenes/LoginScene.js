import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

class LoginScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Login Scene</Text>
        <Button onPress={Actions.tabbar} style={styles.button}>Login</Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  text:{
    color:'#05668D'
  },
  button: {
    color:'#05668D',
  }
})



export default LoginScene;
