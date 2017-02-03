import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';
import Button from 'react-native-button'

//Uncomment LoginContainer Below :)
//1. import LoginContainer from '../containers/LoginContainer';

/**
 * TODO Step 3:
 *
 * 1. Uncomment imported LoginContainer at the top of the file
 * 2. Delete Text and Button components from the component render method.
 * 3. Add LoginContainer inside of the render component method where
 *    Text and Button use to be.
 * 4. Delete justifyContent from container styles
 * 5. Delete all of text and button from styles object 
 */

class LoginScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        {/*3. <LoginContainer/>*/}
        <Text style={styles.text}>Login Scene</Text>
        <Button onPress={RouteActions.tabbar} style={styles.button}>Login</Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //4. Delete justifyContent below
    justifyContent: 'center',
  },
  //5. Delete text and button. Dont forget to remove any extra commas 
  //especially after the container style object
  text:{
    color:'#05668D'
  },
  button: {
    color:'#05668D',
  } 
})

export default LoginScene;
