import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import Colors from '../../styles/colors';

import Gif from './Gif';

class SelectionCarousel extends Component{

  render(){

    let { gif, onLike, onDislike } = this.props; 

    return(
      <View style={styles.container}>
        <View style={styles.gifContainer}>
          <Gif gifUri={gif.uri}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => onLike(gif.id)} style={styles.dislikeButton}>
            Dislike 
          </Button>
          <Button onPress={() => onDislike(gif.id)} style={styles.likeButton}>
            Like 
          </Button>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  gifContainer:{
    flex: .8,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dislikeButton: {
    borderColor: Colors.grey,
    borderWidth: 1,
    color: Colors.grey
  },
  likeButton: {
    borderColor: Colors.yellow,
    borderWidth: 1,
    color: Colors.yellow
  }
})

SelectionCarousel.propTypes = {
  gif: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired
}

export default SelectionCarousel;
