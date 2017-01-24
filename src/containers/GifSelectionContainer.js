import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SelectionCarousel from '../components/gifs/SelectionCarousel';

/**
 * Step 3:
 * - Use SelectionCarousel for displaying gifs and buttons
 * - Pass gif into SelectionCarousel to get the active gif
 * - Pass onLike with handleLike component method
 * - Pass onDisLike with handleLike component method
 * - Add handleLike component method and use state to set which one is active
 * - Add handleDislike component method and use state to set which one is active
 * - Bind(this)to handleLike
 * - Bind(this)to handleDislike
 */

class GifSelectionContainer extends Component{

  constructor(props) {
    super(props);

    this.state = {
      active: 1,
      gifs: {
        1: {id: 1, uri: 'https://i.giphy.com/xThuWg7lusylvpAVu8.gif'},
        2: {id: 2, uri: 'https://i.giphy.com/l2YWeYNrD6P5nCiCA.gif'},
        3: {id: 3, uri: 'https://i.giphy.com/xTk9ZZCndSIbxjRO8w.gif'},
        4: {id: 4, uri: 'https://media.giphy.com/media/26FLeFK9dfmg6xq12/source.gif'},
        5: {id: 5, uri: 'https://i.giphy.com/3ohfFn9vOub5BsZZ0k.gif'}
      }
    };

  }

  render(){

    let { gifs, active } = this.state;

    return(
      <View style={styles.container}>
        <SelectionCarousel
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  text:{
    color:'#05668D'
  }
})

export default GifSelectionContainer;
