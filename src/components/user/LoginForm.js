import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions as RouteActions } from 'react-native-router-flux';
import Colors from '../../styles/colors';

/**
 * TODO Step 3:
 *
 * 1. Create LoginForm component
 * 2. Setup component class constructor
 * 3. Inside of the constructor set the default state of username, 
 *    i.e. this.state = {username: ''}
 * 7. Add onChangeText event handler on TextInput and pass handleSubmit 
 *    component method to it
 * 8. Add handleSubmit component method
 * 9. Bind the handleSubmit component method inside of the constuctor, 
 *    i.e this.handleSubmit = this.handleSubmit.bind(this)
 * 10. Setup propTypes for LoginForm component and add onSubmit to the propTypes.
 * 11. Export LoginForm component
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

