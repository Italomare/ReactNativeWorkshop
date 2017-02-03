import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions as RouteActions } from 'react-native-router-flux';
import Colors from '../../styles/colors';

/**
 * TODO Step 3:
 *
 * 1. Create LoginForm component 
 * 2. Add Image, TextInput, and Button along with view containers to component render method
 * 3. Setup component class constructor
 * 4. Inside of the constructor set the default state of username, 
 *    i.e. this.state = {username: ''}
 * 5. Add onChangeText event handler on TextInput and use this.setState to 
 *    update the username in the component state
 * 6. Add handleSubmit component method
 * 7. Bind the handleSubmit component method inside of the constuctor, 
 *    i.e this.handleSubmit = this.handleSubmit.bind(this)
 * 8. Add the onPress property to the Button component and pass handleSubmit to it.*
 * 9. Setup propTypes for LoginForm component and add onSubmit to the propTypes.
 * 10. Export LoginForm component
 */

/*1.2.3.5.
class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    //4. this.state = {username: ''};
    //7. this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="username"
            style={styles.textInput}
            onChangeText={(text) => {this.setState({'username': text})}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.handleSubmit} style={styles.button}>Login</Button>
        </View>
      </View>
    );
  }

  //6.
  handleSubmit() {
    this.props.onSubmit(this.state.username);
  }

}
*/

/*9.
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
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

/*.10
export default LoginForm;
*/
