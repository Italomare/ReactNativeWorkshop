import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeWorkshop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {/*Change text below*/}
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

/**
 * Step 2:
 * - Remove component and styles above
 * - Import App file
 * - Add App to AppRegister
 */
AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
