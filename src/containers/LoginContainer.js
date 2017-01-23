import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

import LoginForm from '../components/user/LoginForm';

class LoginContainer extends Component{

  constructor(props) {
    super(props);

    // 4. Set bind(this) to handleSubmit

  }

  render(){
    return(
      <View style={styles.container}>
        {/*
          1. LoginForm
          2. Add onSubmit event handler and pass handleSubmit component method
           */}
      </View>
    )
  }

  // 3. Add handleSubmit component method

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default LoginContainer;
