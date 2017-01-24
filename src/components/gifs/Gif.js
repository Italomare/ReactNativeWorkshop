import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

/**
 * Step 3:
 * - Get gif uri on props
 * - Create Image with the gif uri
 * - Style gif
 */

class Gif extends Component{

  render(){


    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },

})

Gif.propTypes = {
  gifUri: PropTypes.string.isRequired
}

export default Gif;
