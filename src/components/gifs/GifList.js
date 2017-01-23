import React, {Component, PropTypes} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Gif from './Gif';

class GifList extends Component{

  render(){

    // 4. Setup contructor
    // 5. Set bind(this) to getGifs

    return(
      <View style={styles.container}>
        {/*
          1. Create ScrollView
          2. Call getGifs component method inside of ScrollView component
           */}
      </View>
    )
  }
  // 3. Add getGifs component method
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
