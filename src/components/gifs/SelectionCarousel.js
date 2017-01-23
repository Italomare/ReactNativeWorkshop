import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import Colors from '../../styles/colors';

import Gif from './Gif';

class SelectionCarousel extends Component{

  render(){

    return(
      <View style={styles.container}>
        { /*
        1. Create gifContainer with gif(props)
        2. Create buttons with event handlers for likes and dislikes
         */ }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:Colors.black
  },
  gifContainer:{
    flex: 8,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dislikeButton: {
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.grey,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:30,
    paddingRight:30,
    marginTop:60,
    fontSize:17,
    letterSpacing:3
  },
  likeButton: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    color: Colors.yellow,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:45,
    paddingRight:45,
    marginTop:60,
    fontSize:17,
    letterSpacing:3
  }
})

SelectionCarousel.propTypes = {
  gif: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired
}

export default SelectionCarousel;
