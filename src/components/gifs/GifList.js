import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Gif from './Gif';

/**
 * Step 3:
 * - Setup contructor
 * - Create ScrollView to get the gifs
 * - Call getgifs component method inside of ScrollView component
 * - Add getGifs component method
 * - Map over gifs object and pass gifUri to Gif
 * - Set bind(this) to getGifs
 */



class GifList extends Component{

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
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 40
  }
})

GifList.propTypes = {
  gifs: PropTypes.object.isRequired,
}

export default GifList;
