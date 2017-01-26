import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/user/LoginForm';

class LoginContainer extends Component{

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
    return(
      <View style={styles.container}>
        <LoginForm onSubmit={this.handleSubmit} />
      </View>
    )
  }

  handleSubmit(username) {

    console.log('Submitted username: ', username);

    //Navigate to tabbar key
    Actions.tabbar();

  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginContainer);
