import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Colors from '../styles/colors';

class WelcomeScene extends Component{

  render(){
    return(
      <Image style = { styles.image } source={require('../assets/intro-background.png')}>
        <View style={styles.container}>
          <View style = { styles.logoContainer}>
            <Image style = { styles.logo } source={require('../assets/logo.png')} />
          </View>
          <View style = { styles.textContainer}>
            <Text style={styles.text}>Welcome to Lossless</Text>
            <Text style={styles.introText}>Never lose your favorite gifs again.</Text>
            <Text style={styles.underline}>______</Text>
          </View>
          <View style= { styles.buttonContainer }>
            <Button onPress={Actions.login} style={styles.button}>get started</Button>
          </View>
        </View>
      </Image>
    );
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
});

export default WelcomeScene;
