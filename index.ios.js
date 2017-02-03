import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
 * TODO Step 2:
 *
 * 1. Import App.js file above using: import App.js from './src/App.js'
 * 2. Delete ReactNativeWorkshop Component
 * 3. Delete styles object
 * 4. Delete ReactNativeWorkshop Component from registerComponent and add the imported 
 * App Component into the registerComponent 
 */

/*1.
import App from './src/App';
*/

//2. Delete Me
export default class ReactNativeWorkshop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Workshop!
        </Text>
        <Text style={styles.instructions}>
          Presented by Brandy Bergh and Josh Pagley
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

//3. Delete Me
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//4. Delete Me
AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);

/*4.
AppRegistry.registerComponent('ReactNativeWorkshop', () => App);
*/
