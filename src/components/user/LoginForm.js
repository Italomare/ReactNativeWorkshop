import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Colors from '../../styles/colors';

class LoginForm extends Component{

  constructor(props) {
    super(props);

    this.state = {username: ''};

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render(){

    return(
      <View style={styles.container}>
        <Text style={styles.text}>Lossless</Text>
        <TextInput 
          placeholder="username"
          style={styles.textInput}
          onChangeText={(text) => {this.setState({username: text})}} 
        /> 
        <Button onPress={this.handleSubmit} style={styles.button}>Login</Button>
      </View>
    )

  }

  handleSubmit() {
    this.props.onSubmit(this.state.username);
  }

}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color: Colors.black
  },
  textInput: {
    height: 50,
    margin: 20,
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.grey,
  },
  button: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    color: Colors.yellow,
  }
})

export default LoginForm;
