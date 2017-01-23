import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Colors from '../../styles/colors';

class LoginForm extends Component{

  constructor(props) {
    super(props);

    // 1. Set intital state of username

    // 4. bind(this) to handleSubmit

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render(){

    return(
      <View style={styles.container}>
        <View style = { styles.logoContainer}>
          <Image style = { styles.logo } source={require('../../assets/logo.png')} />
        </View>
        <View style = { styles.textInputContainer} >
          <TextInput
            {/*
              2. Setup username input
              3. Add onChangeText event handler for setting username
              */}
          />
        </View>
        <View style = { styles.buttonContainer} >
          <Button onPress={this.handleSubmit} style={styles.button}>Login</Button>
        </View>
      </View>
    )

  }

  // 3. Add handleSubmit component method

}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

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
