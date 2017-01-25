import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import LoginContainer from '../containers/LoginContainer';

/**
 * Step 3:
 * - Delete Text and Button component along with their styles
 * - Pass LoginContainer to view
 */

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
