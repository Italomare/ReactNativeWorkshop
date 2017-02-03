import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';

//Uncomment LoginForm Below :)
//import LoginForm from '../components/user/LoginForm';

/**
 * TODO Step 3:
 *
 * 1. Create LoginContainer component
 * 2. Setup component class constructor
 * 4. Uncomment imported LoginForm at the top of the file 
 * 5. Add LoginForm component to LoginContainer render method.
 * 6. Add onSubmit event handler to LoginForm and pass handleSubmit 
 *    component method to it
 * 7. Add handleSubmit component method with dynamic routing using RouteActions.tabbar()
 * 8. Bind the handleSubmit component method inside of the constuctor, 
 *    i.e this.handleSubmit = this.handleSubmit.bind(this)
 * 9. Export LoginContainer component
 */

/*1.2.5.6.
class LoginContainer extends Component {

  constructor(props) {
    super(props);
    //8. this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginForm onSubmit={this.handleSubmit} />
      </View>
    );
  }

  //7.
  handleSubmit(username) {
    RouteActions.tabbar();
  }

}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

/*9.
export default LoginContainer;
*/
