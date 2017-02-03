import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Actions as RouteActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actions';

import LoginForm from '../components/user/LoginForm';

/**
 * TODO Step 4:
 *
 * 1. Uncomment mapDispatch to props and connect export
 * 2. Delete old export
 * 3. Add login action from redux Actions inside the handleSubmit component method.
 *    i.e. this.props.Actions.login(username)
 */

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

    //3. this.props.Actions.login(username);
    RouteActions.tabbar();

  }

}

/* 1.
 *
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
*/

//2. Delete export below
export default LoginContainer;
export default LoginContainer;
