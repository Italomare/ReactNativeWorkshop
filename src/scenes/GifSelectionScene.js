import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class GifSelectionScene extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Gif Selection Scene</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#F0F3BD'
  },
  text:{
    color:'#05668D'
  }
})

export default GifSelectionScene;
