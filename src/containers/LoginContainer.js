import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

import LoginForm from '../components/user/LoginForm';

/**
 * Step 3:
 * - Create LoginContainer component
 * - Setup constructor
 * - Create View for component
 * - LoginForm
 * - Add onSubmit event handler and pass handleSubmit component method
 * - Add handleSubmit component method with navigation
 * - Set bind(this) to handleSubmit
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
