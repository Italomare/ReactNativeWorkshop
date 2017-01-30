import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Colors from '../../styles/colors';

/**
 * Step 3:
 * - Create LoginForm component
 * - Setup constructor
 * - Set initial state of username
 * - Setup render and return
 * - Create View for component
 * - Create [View for logoContainer, Image, View for text, TextInput, View for button, button]
 * - Add onChangeText event handler on textInput and pass handleSubmit compoent method to it
 * - Add handleSubmit component method
 * - bind(this) to handleSubmit
 * - Setup propTypes for LoginForm
 * - Go over styles 
 */
 const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: Colors.black
   },
   logoContainer:{
     flex:2,
     marginTop:150
   },
   logo:{
     alignSelf:'center'
   },
   text:{
     color: Colors.grey,
     fontSize:17,
     letterSpacing:3
   },
   textInputContainer:{
     flex:1
   },
   textInput: {
     width:300,
     height: 50,
     margin: 20,
     borderColor: Colors.grey,
     borderWidth: 1,
     color: Colors.grey,
   },
   buttonContainer:{
     flex:4
   },
   button: {
     alignSelf:'center',
     color:Colors.black,
     backgroundColor: Colors.yellow,
     paddingTop:15,
     paddingBottom:15,
     paddingLeft:70,
     paddingRight:70,
     marginTop:60,
     fontSize:17,
     letterSpacing:3
   }
 })
export default LoginForm;
