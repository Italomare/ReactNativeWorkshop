import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Gif extends Component{

  render(){

    // 1. Get gif uri on props

    return(
      <View style={styles.container}>
        {/*
          2. Create Image with gif uri
          */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },

  // 3. style gif
})

Gif.propTypes = {
  gifUri: PropTypes.string.isRequired
}

export default Gif;
