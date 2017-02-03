import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';

//Actions is provided by the router for dynamic routing
import { Actions as RouteActions} from 'react-native-router-flux';

 class WelcomeScene extends Component{

   render(){
     return(
       <View style={styles.container}>
         <Text style={styles.text}>Welcome Scene</Text>
         <Button onPress={RouteActions.login} style={styles.button}>get started</Button>
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



 export default WelcomeScene;
